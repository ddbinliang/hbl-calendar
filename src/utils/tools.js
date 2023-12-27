/**
 * @description 根据传入的参数数字集合转换为带"-"的字符串格式
 * 
*/
export const getDateString = (...param) => {
  return param.map((val) => `${val}`.padStart(2, "0")).join("-");
}

/**
 * @description 是否闰年
*/
export const isLeapYear = (year) => {
  return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
}

/**
 * @description 获取year年month月的天数, 并返回年、月、天数等信息
 * 
*/
export const getDaysInMonth = (year, month) => {
  return {
    year,
    month,
    days: new Date(year, month, 0).getDate(),
  };
}

/**
 * @description 获取y年m月的第一天是星期几
*/
export const getWeekInDate = (y, m) => {
  return new Date(`${y}, ${m}, 1`).getDay();
}
