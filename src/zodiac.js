import { getDateString } from "./tools";

/**
 * @description: 星座说明
 * 水瓶（1月20日-2月18日）   双鱼（2月19日-3月20日）   白羊（3月21日-4月19日）
 * 金牛（4月20日-5月20日）   双子（5月21日-6月21日）   巨蟹（6月22日-7月22日）
 * 狮子（7月23日-8月22日）   处女（8月23日-9月22日）   天秤（9月23日-10月23日）
 * 天蝎（10月24日-11月21日） 射手（11月22日-12月21日） 摩羯（12月22日-1月19日）
*/

/**
 * @description 星座速查表（unicode编码）
 * @trans ["水瓶", "双鱼", "白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯"]
*/
const zodiacMap = ["\u6c34\u74f6", "\u53cc\u9c7c", "\u767d\u7f8a", "\u91d1\u725b", "\u53cc\u5b50", "\u5de8\u87f9", "\u72ee\u5b50", "\u5904\u5973", "\u5929\u79e4", "\u5929\u874e", "\u5c04\u624b", "\u6469\u7faf"];
const zodiacDate = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];

/**
 * @description: 公历获取m月d日的星座
 * @param {number} sMonth
 * @param {number} sDay
 * @return {string}
 */
export const getZodiac = (sMonth, sDay) => {
  let zoIndex = 11;
  const zuo = "\u5ea7" // 座 (Unicode编码)
  zodiacDate.forEach((day, index) => {
    let month = index + 1;
    if (getDateString(sMonth, sDay) >= getDateString(month, day)) {
      zoIndex = index % 12;
    }
  });
  return `${zodiacMap[zoIndex]}${zuo}`;
  
}

