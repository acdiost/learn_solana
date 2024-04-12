# Solana learn

## Install Rust and Cargo

安装基础依赖

```bash
sudo apt-get install -y \
    build-essential \
    pkg-config \
    libudev-dev llvm libclang-dev \
    protobuf-compiler libssl-dev
```

安装 rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

source ~/.bashrc
```

## Solana and Anchor

```bash
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
```

安装 anchor

```bash
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force

avm install latest
avm use latest
anchor --version
```

npm 安装 anchor-cli

```bash
npm i -g @project-serum/anchor-cli
```
