# Solana NFTs

date: 2024-04-10 21:06:21

## 创建 token

本地钱包支付费用创建 token

```bash
spl-token create-token
spl-token create-token --decimals 0
```

Creating token E7Ek8vEfBG87pos5yQVdJCnN5nTn8hV3BT6cDX6AMyU under program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

Address:  E7Ek8vEfBG87pos5yQVdJCnN5nTn8hV3BT6cDX6AMyU
Decimals:  9

Signature: 3swNk2oSvDma3rm5vJJERQoBMdVCERrWDJpaSGHbuAzx2qeo6wz2TPw79k1jNRvuvbLHc6WF3XzgMPYghs6RCwaa

创建此 token 的本地钱包持有账户

```bash
spl-token create-account E7Ek8vEfBG87pos5yQVdJCnN5nTn8hV3BT6cDX6AMyU
```

Creating account PSanrDNLuDotpxSv1qUwPYkDViriE964BVkbJiWcKja

Signature: 22z6ugMWf1VcaCyEyjBzDqwBiT1tMNgskfBxzCZVNTWwsdbH95eTgh2m5mWLD9Xk4mmgBL3JZbx4VeBSRs3HEV6m

铸币 tokens

```bash
spl-token mint E7Ek8vEfBG87pos5yQVdJCnN5nTn8hV3BT6cDX6AMyU 50
```

Minting 49 tokens
  Token: E7Ek8vEfBG87pos5yQVdJCnN5nTn8hV3BT6cDX6AMyU
  Recipient: PSanrDNLuDotpxSv1qUwPYkDViriE964BVkbJiWcKja

Signature: 2nDpDaFNQPmdvsAphCMKPowm2E4N61iLypHHSMeRUYrEc2NVTr8EzUtc6Jxhocj6QfgJUGbJisCEj4bhfQcGuYgm

禁用，不可再额外铸造

```bash
spl-token authorize E7Ek8vEfBG87pos5yQVdJCnN5nTn8hV3BT6cDX6AMyU mint --disable
```
