import { MIN_YEAR, MIN_MONTH, MIN_DAY, MAX_YEAR, MAX_MONTH } from "./config";

/**
 * @description 农历1900-2100年的闰月大小信息表
 */                
const lunarMonthMap = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
  0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
  0x0d520 // 2100
];

// 月份
const monthMap = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];

// 十位
const dayMap = ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];

// 参考时间点(1900年农历正月一日的公历时间为1900年1月30日0时0分0秒)
const startTime = Date.UTC(MIN_YEAR, MIN_MONTH - 1, MIN_DAY, 0, 0, 0);

/**
 * @description 获取农历y年闰月月份，若无闰月则返回0
 */
export const getLeapMonth = (lYear) => {
  let data = lunarMonthMap[lYear - MIN_YEAR];
  return data & 0xf;
}

/**
 * @description 获取农历y年闰月的天数，若无闰月则返回0
 */
export const getLeapDays = (lYear) => {
  if (lYear > MAX_YEAR || lYear < MIN_YEAR) {
    console.log(`不在规定年限范围${MIN_YEAR}~${MAX_YEAR}内, 请重新输入`);
    return -1;
  }
  if (getLeapMonth(lYear)) {
    return ((lunarMonthMap)[lYear - MIN_YEAR] & 0x10000) ? 30 : 29;
  }
  return 0;
}

/**
 * @description 获取农历y年m月（非闰月）的天数
 */
export const getNonLeapMonthDays = (lYear, lMonth) => {
  if (lMonth > MAX_MONTH || lMonth < MIN_MONTH) {
    console.log(`输入月份有误，月份应在${MIN_MONTH}~${MAX_MONTH}内`)
    return -1;
  }
  return ((lunarMonthMap[lYear - MIN_YEAR] & (0x10000 >> lMonth)) ? 30 : 29);
}

/**
 * @description 获取农历y年各月天数
 */
export const getlunarEachMonthDays = (lYear) => {
  if (lYear > MAX_YEAR || lYear < MIN_YEAR) {
    console.log(`输入有误，年份应在${MIN_YEAR}~${MAX_YEAR}内`)
    return [];
  }
  let lunarYear = lunarMonthMap[lYear - MIN_YEAR];
  let monthDays = [];
  for(let i = 4; i < 16; i++) {
    let monthDay = (lunarYear >> i & 0x1) ? 30 : 29;
    monthDays.push(monthDay);
  }
  monthDays.reverse();
  // 添加闰月
  let leapM = getLeapMonth(lYear);
  if(leapM) monthDays.splice(leapM, 0 , getLeapDays(lYear));
  return monthDays;
}

/**
 * @description 获取农历y年总天数
 */
export const getLunarYearDays = (lYear) => {
  let i, total = 348;
  for (i = 0x8000; i > 0x8; i >>= 1) {
    total += (lunarMonthMap[lYear - MIN_YEAR] & i) ? 1 : 0;
  }
  return (total + getLeapDays(lYear));
}

/**
 * @description 获得农历y年m月的天数
*/
export const getLunarMonthDays = (lYear, lMonth, isLeap = false) => {
  if (lMonth > MAX_MONTH || lMonth < MIN_MONTH) {
    console.log(`输入月数应在${MIN_MONTH}~${MAX_MONTH}`)
    return -1;
  }
  let days = (lunarMonthMap[lYear - MIN_YEAR] & (0x10000 >> lMonth)) ? 30 : 29;
  let leapMonth = getLeapMonth(lYear);
  if (isLeap && lMonth == leapMonth) {
    days = getLeapDays(lYear);
  }
  return days;
}

/**
 * @description 农历日期转时间戳
*/
export const getTimestampByLunar = (lYear, lMonth, lDay, isLeap = boolean) => {
  // debugger
  isLeap = !!isLeap;
  // 有效性验证
  if (lYear < MIN_YEAR || lYear > MAX_YEAR) {
    return null;
  }
  if (lMonth < 1 || lMonth > 12) {
    return null;
  }
  // 农历闰月
  let leapMonth = getLeapMonth(lYear);
  if (isLeap && leapMonth != lMonth) {
    return null;
  }
  // 农历lYear年lMonth月的天数
  let days = getLunarMonthDays(lYear, lMonth);
  if (lDay > days) {
    return null;
  }

  // 从1900年开始计算偏移天数
  let offsetDay = 0;

  for (let year = MIN_YEAR; year < lYear; year++) {
    offsetDay += getLunarYearDays(year);
  }
  for (let month = 1; month < lMonth || isLeap && month === lMonth; month++) {
    offsetDay += getLunarMonthDays(lYear, month, false)
  }
  if (leapMonth && leapMonth < lMonth) {
    offsetDay += getLunarMonthDays(lYear, leapMonth, true);
  }
  
  offsetDay += lDay;
  // 24 * 60 * 60 * 1000 = 86400000
  // 一天的毫秒数
  const daySecond = 24 * 60 * 60 * 1000
  return startTime + offsetDay * daySecond;
}

/**
 * @description 时间戳转农历日期
*/
export const getLunarByTimestamp = (timestamp, isSolarTime = false) => {
  const timezoneOffsetTime = new Date().getTimezoneOffset() * 60 * 1000;
  const timeOffset = isSolarTime ? timezoneOffsetTime : 0;
  let offset = Math.floor((timestamp - startTime - timeOffset) / 86400000);

  let lYear = 0, lMonth = 0, lDay = 0, isLeap = false;
  let days;
  if (offset <= 0) {
    return null;
  }
  let count = 0;
  for (lYear = MIN_YEAR; lYear <= MAX_YEAR; lYear++) {
    days = getLunarYearDays(lYear);
    if (count + days >= offset) {
      break;
    }
    count += days;
  }

  // 获取闰月月份
  let leapMonth = getLeapMonth(lYear);
  offset -= count;
  count = 0;
  for (lMonth = 1; lMonth <= 12; lMonth++) {
    // 获取每月的天数
    days = getLunarMonthDays(lYear, lMonth)
    if (count + days >= offset) {
      break;
    }
    count += days;
    // 闰月
    if (leapMonth && lMonth == leapMonth) {
      days = getLunarMonthDays(lYear, lMonth, true)
      if (count + days >= offset) {
        isLeap = true;
        break;
      }
      count += days;
    }
  }
  lDay = offset - count;
  return {
    lYear: lYear,
    lMonth: lMonth,
    lDay: lDay,
    isLeap: isLeap,
    lMonthZH: (isLeap ? "闰" : "") + monthMap[lMonth - 1] + "月",
    lDayZH: dayMap[lDay - 1]
  };
}

/**
 * @description 根据农历年月日获取详细的公历信息
 * 
*/
export const lunar2Solar = (lYear, lMonth, lDay, isLeapMonth) => {
  isLeapMonth = !!isLeapMonth;
  const leapMonth = getLeapMonth(lYear); // 获取lYear年闰月月份
  const leapDay = getLeapDays(lYear); // 获取lYear年闰月天数

  // 参数合法性校验
  if (lYear > MAX_YEAR || lYear < MIN_YEAR) {
    console.log(`超出年份范围${MIN_YEAR}~${MAX_YEAR}`);
    return -1;
  }
  if (lMonth > MAX_MONTH || lMonth < MIN_MONTH) {
    console.log(`超出月份范围${MIN_MONTH}~${MAX_MONTH}`);
    return -1;
  }
  if (isLeapMonth && leapMonth !== lMonth) {
    console.log(`输入有误, 农历${lYear}年${lMonth}月不是闰月`)
    return -1;
  }
  // 获取lYear年lMonth月非闰月天数
  let days = getNonLeapMonthDays(lYear, lMonth);
  let _days = days;
  if (isLeapMonth) {
    _days = leapDay;
  }
  if (lDay > _days) {
    console.log(`输入有误, 农历${lYear}年${isLeapMonth ? "闰" : ""}${lMonth}月只有${_days}天`)
    return -1;
  }

  // 计算农历的时间差
  let offset = 0;
  for(let y = MIN_YEAR; y < lYear; y++) {
    let tempDays = getLunarYearDays(y);
    offset += tempDays;
    // console.log("offset%s", y, tempDays, offset)
  }

  for (let m = 1; m < lMonth; m++) {
    // 处理闰月
    if (m === leapMonth) {
      offset += leapDay;
    }
    offset += getNonLeapMonthDays(lYear, m)
  }
  // 转换闰月农历 需补充该年闰月的前一个月的时差
  if (isLeapMonth) {
    offset += days;
  }

  const tempDateObj = new Date((offset + lDay) * 86400000 + startTime);
  const sYear = tempDateObj.getFullYear(),
        sMonth = tempDateObj.getMonth() + 1,
        sDay = tempDateObj.getDate();
  return `${sYear}-${sMonth}-${sDay}`
}
