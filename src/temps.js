; (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.temps = factory());
}(this, function () {
    'use strict';

    const version = '1.1.0';
    function temps() {
        return { version };
    }

    // 获取 时间
    function getTime(timestamp) {
        return timestamp != undefined ? new Date(timestamp) : new Date;
    }

    // 获取 时间戳
    function getTimeStamp() {
        return Date.now();
    }

    // 获取 年
    function getYear(timestamp) {
        return timestamp != undefined ? getTime(timestamp).getFullYear() : getTime().getFullYear();
    }

    // 获取 月
    function getMonth(timestamp) {
        return timestamp != undefined ? getTime(timestamp).getMonth() + 1 : getTime().getMonth() + 1;
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
        return timestamp != undefined ? getTime(timestamp).getDay() : getTime().getDay();
    }

    // 获取 日
    function getDay(timestamp) {
        return timestamp != undefined ? getTime(timestamp).getDate() : getTime().getDate();
    }

    // 获取 时
    function getHour(timestamp) {
        return timestamp != undefined ? getTime(timestamp).getHours() : getTime().getHours();
    }

    // 获取 分
    function getMinute(timestamp) {
        return timestamp != undefined ? getTime(timestamp).getMinutes() : getTime().getMinutes();
    }

    // 获取 秒
    function getSecond(timestamp) {
        return timestamp != undefined ? getTime(timestamp).getSeconds() : getTime().getSeconds();
    }

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

    temps.getTime = temps.prototype.getTime = getTime;
    // getTime下方法
    getTime.year = getYear;
    getTime.quarter = getQuarter;
    getTime.month = getMonth;
    getTime.week = getWeek;
    getTime.day = getDay;
    getTime.hour = getHour;
    getTime.minute = getMinute;
    getTime.second = getSecond;
    temps.getTimeStamp = temps.prototype.getTimeStamp = getTimeStamp;
    temps.format = temps.prototype.format = format;
    // format下方法
    format.chinese = formatChinese;
    temps.relativeTime = temps.prototype.relativeTime = getRelativeTime;
    temps.prototype.version = version;

    return temps;
}));

if (window.console && window.console.log) {
    console.log([
        "      __         __  __                      __        ",
        "     |__|.-----.|  ||  |.--.--..----..---.-.|__|.-----.",
        "     |  ||  -__||  ||  ||  |  ||   _||  _  ||  ||     |",
        "     |  ||_____||__||__||___  ||__|  |___._||__||__|__|",
        "    |___|               |_____|                        "
    ].join('\n'));
};