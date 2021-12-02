// 获取 时间
function getTime(timestamp) {
    return timestamp != undefined ? new Date(timestamp) : new Date();
}

// 获取 年
function getYear(timestamp) {
    return getTime(timestamp).getFullYear();
}

// 获取 月
function getMonth(timestamp) {
    return getTime(timestamp).getMonth() + 1;
}

// 获取 季度
function getQuarter(timestamp) {
    let temp = getMonth(timestamp);
    if (1 <= temp <= 3) temp = 1;
    if (4 <= temp <= 6) temp = 2;
    if (7 <= temp <= 9) temp = 3;
    if (10 <= temp <= 12) temp = 4;
    return temp;
}

// 获取 星期
function getWeek(timestamp) {
    return getTime(timestamp).getDay();
}

// 获取 日
function getDay(timestamp) {
    return getTime(timestamp).getDate();
}

// 获取 时
function getHour(timestamp) {
    return getTime(timestamp).getHours();
}

// 获取 分
function getMinute(timestamp) {
    return getTime(timestamp).getMinutes();
}

// 获取 秒
function getSecond(timestamp) {
    return getTime(timestamp).getSeconds();
}

//获取 全部
function getTimeAll(timestamp) {
    const time = getTime(timestamp);
    const month = time.getMonth() + 1;
    let quarter = 0;
    if (1 <= month <= 3) quarter = 1;
    if (4 <= month <= 6) quarter = 2;
    if (7 <= month <= 9) quarter = 3;
    if (10 <= month <= 12) quarter = 4;
    return {
        year: time.getFullYear(),
        quarter,
        month,
        week: time.getDay(),
        day: time.getDate(),
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

getTime.year = getYear;
getTime.quarter = getQuarter;
getTime.month = getMonth;
getTime.week = getWeek;
getTime.day = getDay;
getTime.hour = getHour;
getTime.minute = getMinute;
getTime.second = getSecond;
getTime.all = getTimeAll;

getTime.version = '1.1.0'

export default getTime