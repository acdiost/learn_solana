FROM frolvlad/alpine-glibc

RUN apk update && apk upgrade -a \
  && apk add --update bash build-base wget curl nodejs npm eudev-dev \
  && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y -q \
  && mv root/.cargo $PWD/.cargo \
  && wget -o solana-release.tar.bz2 https://github.com/solana-labs/solana/releases/download/xxx \
  && tar jxf solana-release-xxx-gnu.tar.gz2

ENV PATH=$PWD/.cargo/bin:$PWD/solana-release/bin:$PATH
