import getTime from './getTime'

// 默认 格式化
function format(format, timestamp) {
    const time = getTime(timestamp);
    let month = time.getMonth() + 1;
    let day = time.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return `${time.getFullYear()}${format}${month}${format}${day}`;
}

// 格式化 年月日
function formatChinese(timestamp) {
    const time = getTime(timestamp);
    let month = time.getMonth() + 1;
    let day = time.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return `${time.getFullYear()}年${month}月${day}日`;
}

format.chinese = formatChinese;

format.version = '1.0.0'

export default format