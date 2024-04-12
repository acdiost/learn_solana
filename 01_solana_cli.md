# Solana 基础命令

## 配置 API 接口

开发网 https://api.devnet.solana.com
测试网 https://api.testnet.solana.com

```bash
solana config set --url localhost
```

生成钱包地址

```bash
solana-keygen new
```

By default, the solana-keygen command will create a new file system wallet located at ~/.config/solana/id.json. You can manually specify the output file location using the --outfile /path option.

配置钱包地址

```bash
solana config set -k ~/.config/solana/id.json
```

查看钱包地址

```bash
solana address
```

领取空投

```bash
solana airdrop 2
```

查询钱包余额

```bash
solana balance
```

查询链上日志

```bash
solana logs
```

查询链上的总供应量

```bash
solana supply
```

查询链上版本

```bash
solana cluster-version
```

部署程序

```bash
solana program deploy /path/to/xxx.so
```

查看部署的程序

```bash
solana program show --programs
```

删除程序

```bash
solana program close --bypass-warning id
```

查询账户信息

```bash
solana account 2CZfX9QVMK6uc2Sqi8hDZwjUnvfCqoS7rG3PPB2SPbdK
```
