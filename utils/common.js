/**
 * @description 模拟阻塞
 * @param {number} time 阻塞时间
 * @returns null
 */
 const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

module.exports = {
    sleep,
};
