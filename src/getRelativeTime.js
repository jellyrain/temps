import getTimeStamp from "./getTimeStamp";

// 根据对应时间戳判断时间是多久以前  math.floor() 浮点数向下取整
function getRelativeTime(timestamp) {
    const currTimeStamp = getTimeStamp();
    const time = currTimeStamp - timestamp;

    // 少于一分钟
    const second = time / 1000;
    if (time < 60) {
        return "刚刚";
    }
    // 秒转分钟
    const minuies = second / 60;
    if (minuies < 60) {
        return Math.floor(minuies) + "分钟前";
    }
    // 秒转小时
    const hours = second / 3600;
    if (hours < 24) {
        return Math.floor(hours) + "小时前";
    }
    //秒转天数
    const days = second / 3600 / 24;
    if (days < 30) {
        return Math.floor(days) + "天前";
    }
    //秒转月
    const months = second / 3600 / 24 / 30;
    if (months < 12) {
        return Math.floor(months) + "月前";
    }
    //秒转年
    const years = second / 3600 / 24 / 30 / 12;
    return Math.floor(years) + "年前";
}

getRelativeTime.version = '1.0.0'

export default getRelativeTime