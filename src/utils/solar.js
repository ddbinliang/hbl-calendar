import { getDateString } from "./tools";

/**
 * @description 星期(unicode编码)速查表
 */
const weekMap = ["日", "一", "二", "三", "四", "五", "六"];

const weekText = "星期";

/**
 * @description 年月日转时间戳
*/
export const getTimestampBySolar = (sYear, sMonth, sDay) => {
  return Date.UTC(sYear, sMonth - 1, sDay, 0, 0, 0);
};

/**
 * @description 时间戳转公历日期
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
 */
export const getSolarMonthDays = (sYear, sMonth) => {
  let day = new Date(sYear, sMonth, 0);
  return day.getDate();
}
