/**
 * @description 根据传入的参数数字集合转换为带"-"的字符串格式
 * 如 getDateString(1986, 1, 2) => "1986-01-02"
 * 如 getDateString(1986, 1) => "1986-01-02"
 * @param { number[] } param 参数为
 * @returns { string }
 * 
*/
export const getDateString = (...param) => {
  return param.map((val) => `${val}`.padStart(2, "0")).join("-");
}

/**
 * @description 是否闰年
 * 判断规则： 
 *  1. 年份不是整百年，用年份除以4，如果可以整除就是闰年，有余数就是平年
 *  2. 年份是整百年，年份除以400，可以整除的是闰年，不能整除的是平年
 * @param {number} year 年份
 * @returns {boolean}
*/
export const isLeapYear = (year) => {
  // if (year % 100 === 0) {
  //   return year % 400 === 0;
  // } else {
  //   return year % 4 === 0
  // }
  return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
}

/**
 * @description 获取year年month月的天数, 并返回年、月、天数等信息
 * @param {number} year 年份
 * @param {number} month 月份
 * 一年中大月(31天)月份： 1、3、5、7、8、10、12
 * 一年中小月(30天)月份： 4、6、9、11
 * 特殊月份2月天数：闰年(29天) 平年(28天)
 * @returns {IDaysInfo}
 * 
*/
export const getDaysInMonth = (year, month) => {
  return {
    year,
    month,
    days: new Date(year, month, 0).getDate(),
  };
  // const febDays = isLeap(y) ? 29 : 28;
  // if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
  //   return 31;
  // } else if (m === 2) {
  //   return febDays
  // }
  // return 30;
}

/**
 * @description 获取y年m月的第一天是星期几
 * @param { number } y 年份
 * @param { number } m 月份
 * @returns { number } 返回0-6整数 0->星期天
*/
export const getWeekInDate = (y, m) => {
  return new Date(`${y}, ${m}, 1`).getDay();
}
