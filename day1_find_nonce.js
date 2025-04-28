const crypto = require('crypto');

/**
 * 使用SHA-256挖矿，寻找满足指定前导零数量的哈希值
 * 
 * @param {string} prefix - 哈希前缀字符串
 * @param {number} targetZeros - 目标前导零的数量
 * @returns {Object} - 包含耗时、nonce值、哈希内容和哈希值的对象
 */
function mine(prefix, targetZeros) {
    const target = '0'.repeat(targetZeros);
    let nonce = 0;
    const startTime = Date.now();
    
    while (true) {
        const content = prefix + nonce;
        const hash = crypto.createHash('sha256').update(content).digest('hex');
        
        if (hash.startsWith(target)) {
            const endTime = Date.now();
            return {
                timeSpent: (endTime - startTime) / 1000, // 转换为秒
                nonce,
                content,
                hash
            };
        }
        
        nonce++;
    }
}

function main() {
    const prefix = "baiqiowo";
    
    // 寻找4个前导零的哈希值
    console.log("开始寻找满足4个前导零的哈希值...");
    const result4 = mine(prefix, 4);
    console.log(`找到满足4个前导零的哈希值：`);
    console.log(`花费时间: ${result4.timeSpent.toFixed(2)} 秒`);
    console.log(`Nonce值: ${result4.nonce}`);
    console.log(`哈希内容: ${result4.content}`);
    console.log(`哈希值: ${result4.hash}`);
    console.log("-".repeat(50));
    
    // 寻找5个前导零的哈希值
    console.log("开始寻找满足5个前导零的哈希值...");
    const result5 = mine(prefix, 5);
    console.log(`找到满足5个前导零的哈希值：`);
    console.log(`花费时间: ${result5.timeSpent.toFixed(2)} 秒`);
    console.log(`Nonce值: ${result5.nonce}`);
    console.log(`哈希内容: ${result5.content}`);
    console.log(`哈希值: ${result5.hash}`);
}

main();