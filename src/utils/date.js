import { getAnimalByYear } from "./animal";
import { getFestivalsByLunar, getFestivalsBySolar, getTermFestivalsBySolar } from "./festival";
import { getGanZhiDay, getGanZhiMonth, getGanZhiYear } from "./ganzhi";
import { getLunarByTimestamp } from "./lunar";
import { getSolarByTimestamp } from "./solar";
import { getTerm } from "./term";
import { getZodiac } from "./zodiac";

/**
 * @description 根据时间戳获取日期的农历、节日、干支等信息
*/

export const getDateInfo = (timestamp) => {
  // 获取公历信息
  let solarInfo = getSolarByTimestamp(timestamp);
  // 获取星座
  const zodiac = getZodiac(solarInfo.year, solarInfo.month);
  let dateInfo = Object.assign({}, solarInfo, { zodiac });
  let festivals = [];
  // 获取农历信息
  let lunarInfo = getLunarByTimestamp(timestamp);
  if (lunarInfo) {
    Object.assign(dateInfo, lunarInfo);
    dateInfo["gzYearZH"] = getGanZhiYear(lunarInfo.lYear);
    dateInfo["gzMonthZH"] = getGanZhiMonth(solarInfo.year, solarInfo.month, solarInfo.day);
    dateInfo["gzDayZH"] = getGanZhiDay(solarInfo.year, solarInfo.month, solarInfo.day);
    dateInfo["animal"] = getAnimalByYear(lunarInfo.lYear);
    dateInfo["term"] = getTerm(solarInfo.year, solarInfo.month, solarInfo.day);
    festivals = festivals.concat(getTermFestivalsBySolar(solarInfo.year, solarInfo.month, solarInfo.day));
    festivals = festivals.concat(getFestivalsByLunar(lunarInfo.lYear, lunarInfo.lMonth, lunarInfo.lDay));
  } else {
    Object.assign(dateInfo, {
      lYear: null,
      lMonth: null,
      lDay: null,
      isLeap: false,
      lMonthZH: "",
      lDayZH: "",
      gzYearZH: "",
      gzMonthZH: "",
      gzDayZH: "",
      animal: "",
      term: ""
    });
  }
  festivals = festivals.concat(getFestivalsBySolar(solarInfo.year, solarInfo.month, solarInfo.day));
  dateInfo["festival"] = festivals.join(" ");
  return dateInfo;
}