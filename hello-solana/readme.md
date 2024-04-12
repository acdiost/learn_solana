# hello solana

- 创建 hello-solana 目录
- 新建 package.json 文件并写入 `{}`
- 新建 src 目录

创建 program

```bash
cd hello-solana/src
cargo new --lib program
```

初始化 Cargo.toml

编写 lib.rs

构建
```bash
cd src/program
cargo build-bpf

# error: package `toml_edit v0.21.1` cannot be built because it requires rustc 1.69 or newer, while the currently active rustc version is 1.68.0-dev

# fix it
solana-install init 1.18.9
```

部署
```bash
solana program deploy ./target/deploy/hello_solana.so
```

生成的程序 id： `6dhqPrxLjii5tidFvuYd5J7cuxWTTGyeARabgLQQKxTM`

查看部署的程序 id

```bash
solana program show --programs
```

## 编写前端

安装依赖

```bash
yarn add @solana/web3.js
# or
npm install @solana/web3.js
```

补全 `package.json`

在 src 目录下新建 client 文件夹，并创建 main.ts 文件

构建 npm

```bash
npm run build:program
# 部署
solana program deploy ./dist/program/hello_solana.so
```

生成的程序 id： `ZasxSwYqYEjniG1BSqLKosPQvrGXGPYVFJ6B1CtVUKx`

运行 npm

```bash
npm run start
```

查看 日志：
```bash
solana logs | grep 'id invoke' -A 3
solana logs | grep "ZasxSwYqYEjniG1BSqLKosPQvrGXGPYVFJ6B1CtVUKx invoke" -A 3
```
