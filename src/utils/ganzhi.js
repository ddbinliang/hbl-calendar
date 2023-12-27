import { getDateString } from "./tools";
import { getTermDate } from "./term";
import { getTimestampBySolar } from "./solar";

// 天干速查表
const ganMap = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];

// 地支速查表
const zhiMap = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

/**
 * @description 获取干支年: 1984年为甲子年
*/
export const getGanZhiYear = (lYear) => {
  let yearDiff = lYear - 1984;
  const remain = yearDiff % 60;
  let gzIndex = remain > 0 ? remain : remain + 60;
  let gan = gzIndex % 10;
  let zhi = gzIndex % 12;
  return ganMap[gan] + zhiMap[zhi];
}

/**
 * @description 获取干支月
*/
export const getGanZhiMonth = (sYear, sMonth, sDay) => {
  let gzIndex = 0;
  let termDate = getTermDate(sYear);
  termDate.push(31);
  termDate.forEach((day, index) => {
    let month = Math.floor(index / 2) + 1;
    if (getDateString(month, day) >= getDateString(sMonth, sDay)) {
      if (!gzIndex) {
        gzIndex = month;
      }
    }
  });
  gzIndex += (sYear - 1984) * 12 - 1;
  gzIndex = gzIndex % 60 > 0 ? gzIndex % 60 : gzIndex % 60 + 60;
  let gan = gzIndex % 10;
  let zhi = gzIndex % 12;
  return ganMap[gan] + zhiMap[zhi];
}

/**
 * @description 获取干支日
*/
export const getGanZhiDay = (sYear, sMonth, sDay) => {
  let offset = Math.round((getTimestampBySolar(sYear, sMonth, sDay) - getTimestampBySolar(1900, 1, 30)) / 86400000);
  let gzIndex = offset + 39;
  gzIndex = gzIndex % 60 > 0 ? gzIndex % 60 : gzIndex % 60 + 60;
  let gan = gzIndex % 10;
  let zhi = gzIndex % 12;
  return ganMap[gan] + zhiMap[zhi];
}

