import { getTimestampBySolar } from "./solar";
import { getTimestampByLunar } from "./lunar"
import { getDateInfo } from "./date";

export default {
  // 根据公历年月日获取日期信息
  getDateBySolar: (sYear, sMonth, sDay) => {
    let timestamp = getTimestampBySolar(sYear, sMonth, sDay);
    return timestamp ? getDateInfo(timestamp) : null;
  },
  // 根据农历年月日获取日期信息
  getDateByLunar: (lYear, lMonth, lDay, isLeapMonth) => {
    let timestamp = getTimestampByLunar(lYear, lMonth, lDay, isLeapMonth);
    return timestamp ? getDateInfo(timestamp) : null;
  },
  // 获取今天的日历信息
  getToday: () => {
    let timestamp = new Date().getTime();
    return getDateInfo(timestamp);
  }
}