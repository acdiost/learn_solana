import {
    Keypair,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
} from '@solana/web3.js';
import fs from 'mz/fs';
import path from 'path';


/*
  获取 program 的私钥
*/
const PROGRAM_KEYPAIR_PATH = path.join(
    path.resolve(__dirname, '../../dist/program'),
    'hello_solana-keypair.json'
);


async function main() {

    console.log("Launching client...");

    /*
    连接到开发网络
    */
    let connection = new Connection('https://api.devnet.solana.com', 'confirmed');

    /*
    通过私钥获取程序公钥地址
    */
    const secretKeyString = await fs.readFile(PROGRAM_KEYPAIR_PATH, { encoding: 'utf8' });
    const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
    const programKeypair = Keypair.fromSecretKey(secretKey);
    console.log("programKeypair: " + programKeypair);
    let programId: PublicKey = programKeypair.publicKey;

    /*
    生成一个临时的交易账户钱包地址并获取空投
    */
    const triggerKeypair = Keypair.generate();
    console.log("triggerKeyPair pk: " + triggerKeypair.publicKey);
    console.log("triggerKeyPair sk: " + triggerKeypair.secretKey);
    // 获取空投
    const airdropRequest = await connection.requestAirdrop(
        triggerKeypair.publicKey,
        LAMPORTS_PER_SOL,
    );
    await connection.confirmTransaction(airdropRequest);

    /*
    Conduct a transaction with our program
    */
    console.log('--Pinging Program ', programId.toBase58());
    // 创建事务指令
    const instruction = new TransactionInstruction({
        keys: [{ pubkey: triggerKeypair.publicKey, isSigner: false, isWritable: true }],
        programId,
        // 交易数据
        data: Buffer.alloc(0),
    });
    // 发送确认事务指令
    await sendAndConfirmTransaction(
        connection,
        new Transaction().add(instruction),
        [triggerKeypair],
    );
}

// 程序主入口
main().then(
    () => process.exit(),
    err => {
        console.error(err);
        process.exit(-1);
    },
);