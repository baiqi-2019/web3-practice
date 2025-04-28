# 迷你区块链项目

这是一个使用JavaScript实现的简单区块链系统，具有工作量证明机制、交易处理、区块链接和节点同步功能。

## 功能特点

- 工作量证明挖矿（难度为4个0开头）
- 交易打包进区块
- 通过previous_hash链接区块
- 节点间区块同步
- 共识机制（最长链原则）

## 项目结构

项目包含以下主要组件：

- `Transaction` 类：处理交易信息
- `Block` 类：区块结构和挖矿功能
- `Blockchain` 类：管理区块链和交易

## 运行说明

### 环境要求

- Node.js (v12.0.0或更高版本)

### 安装步骤

1. 确保已安装Node.js
2. 克隆或下载项目代码
3. 无需安装额外依赖，项目仅使用Node.js内置的crypto模块

### 运行方法

在项目目录下执行以下命令：

```bash
node day1_mini_blcok_chain.js
```
### 运行结果：

创建区块链...
创建交易...
开始挖矿...
开始挖矿...
区块已挖出! 哈希值: 0000498596da2c50806478056642ecd9a6aa439f181ff182d6e9fe0f87524b45
区块成功挖出!
向所有节点广播新区块
矿工余额: 0
再次挖矿...
开始挖矿...
区块已挖出! 哈希值: 00003f799d6ca9bb0c1aa5c2a4edca7d19c5b3c7cf70371515f475886ae9fa66
区块成功挖出!
向所有节点广播新区块
矿工余额: 100
区块链是否有效: true
{
    "chain": [
        {
            "timestamp": 1745830649951,
            "transactions": [],
            "previousHash": "0",
            "hash": "a6c2ff9236cce8bf5ef969133d027356232e9213fbdd6baf5503534c11abfea9",
            "nonce": 0
        },
        {
            "timestamp": 1745830649964,
            "transactions": [
                {
                    "fromAddress": "address1",
                    "toAddress": "address2",
                    "amount": 100,
                    "timestamp": 1745830649964
                },
                {
                    "fromAddress": "address2",
                    "toAddress": "address1",
                    "amount": 50,
                    "timestamp": 1745830649964
                }
            ],
            "previousHash": "a6c2ff9236cce8bf5ef969133d027356232e9213fbdd6baf5503534c11abfea9",
            "hash": "0000498596da2c50806478056642ecd9a6aa439f181ff182d6e9fe0f87524b45",
            "nonce": 144299
        },
        {
            "timestamp": 1745830650165,
            "transactions": [
                {
                    "fromAddress": null,
                    "toAddress": "miner-address",
                    "amount": 100,
                    "timestamp": 1745830650165
                },
                {
                    "fromAddress": "address1",
                    "toAddress": "address2",
                    "amount": 200,
                    "timestamp": 1745830650165
                },
                {
                    "fromAddress": "address2",
                    "toAddress": "address1",
                    "amount": 100,
                    "timestamp": 1745830650165
                }
            ],
            "previousHash": "0000498596da2c50806478056642ecd9a6aa439f181ff182d6e9fe0f87524b45",
            "hash": "00003f799d6ca9bb0c1aa5c2a4edca7d19c5b3c7cf70371515f475886ae9fa66",
            "nonce": 95893
        }
    ],
    "difficulty": 4,
    "pendingTransactions": [
        {
            "fromAddress": null,
            "toAddress": "miner-address",
            "amount": 100,
            "timestamp": 1745830650303
        }
    ],
    "miningReward": 100,
    "nodes": {}
}