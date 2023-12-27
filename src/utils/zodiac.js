import { getDateString } from "./tools";

/**
 * @description 星座速查表（unicode编码）
 * @trans ["水瓶", "双鱼", "白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯"]
*/
const zodiacMap = ["水瓶", "双鱼", "白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯"];
const zodiacDate = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];

/**
 * @description: 公历获取m月d日的星座
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

