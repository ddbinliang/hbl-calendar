/*
 * @Descripttion: 公历相关函数
 */

import { getDateString } from "./tools";

// 星期(unicode编码)速查表
/**
 * @description 星期(unicode编码)速查表
 * 对应于 ["日", "一", "二", "三", "四", "五", "六"]
 */
const weekMap = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"];

// 星期 unicode编码
const weekText = "\u661f\u671f";

/**
 * @description 年月日转时间戳
 * @param { number } sYear 年
 * @param { number } sMonth 月
 * @param { number } sDay 日
 * @returns { number }
*/
export const getTimestampBySolar = (sYear, sMonth, sDay) => {
  return Date.UTC(sYear, sMonth - 1, sDay, 0, 0, 0);
};

/**
 * @description 时间戳转公历日期
 * @param { number } timestamp 时间戳
 * @returns { ISolarInfo }
*/
export const getSolarByTimestamp = (timestamp) => {
  const now = new Date(timestamp),
        year = now.getFullYear(),
        month = now.getMonth() + 1,
        day = now.getDate(),
        week = now.getDay();
  const date = getDateString(year, month, day);

  return {
    year,
    month,
    day,
    week,
    weekZH:  `${weekText}${weekMap[week]}`,
    date
  }
}

/**
 * @description 获取公历一个月天数
 * @param {number} sYear 年
 * @param {number} sMonth 月
 * @returns {number}
 */
export const getSolarMonthDays = (sYear, sMonth) => {
  let day = new Date(sYear, sMonth, 0);
  return day.getDate();
}
