import { minYear, maxYear } from "./config";

// 24节气日期数据压缩：日期减去最小日期，差值视为4进制，再转32进制
const termData = [
  "4lkmd5j6l5", "55kql9lal9", "59lanalala", "5avbnatqla", "7akmd5j6l5", "55kql9lal9", "59lalalala", "5avbnatqla", "7akmd5j6l5", "55kql9lal9",
  "59lalalala", "5avbnatqla", "7akmd5j6l5", "4lkql9lal9", "55kqlalala", "5ananalqla", "5akmd5j5kl", "4lkqd9l6l5", "55kqlalal9", "5ananalqla",
  "5akmd5j5kl", "4lkmd9l6l5", "55kqlalal9", "59lanalqla", "5akmd5j5kl", "4lkmd9l6l5", "55kql9lal9", "59lanalala", "5akmclj5al", "4lkmd5j6l5",
  "55kql9lal9", "59lanalala", "5akmclj5al", "4lkmd5j6l5", "55kql9lal9", "59lalalala", "5akmclj5al", "4lkmd5j6l5", "55kql9lal9", "59lalalala",
  "5akmclj5al", "4lkmd5j6l5", "55kql9lal9", "59lalalala", "5aklclj5al", "4lkmd5j5kl", "4lkql9l6l9", "55kqlalala", "5aclclb5al", "2lkmd5j5kl",
  "4lkmd9l6l9", "55kqlalala", "5aclclb5al", "2lkmd5j5kl", "4lkmd9l6l5", "55kql9lal9", "5aalclb5al", "2lkmd5j5kl", "4lkmd5j6l5", "55kql9lal9",
  "59alclalal", "2lkmclj5al", "4lkmd5j6l5", "55kql9lal9", "59alclalal", "2lkmclj5al", "4lkmd5j6l5", "55kql9lal9", "59alalalal", "2lkmclj5al",
  "4lkmd5j6l5", "55kql9lal9", "59alalalal", "2lklclj5al", "4lkmd5j6l5", "55kql9l6l9", "59a5alalal", "2lklclb5al", "4lkmd5j5l5", "55kqd9l6l9",
  "59a5alalal", "2lklclb5al", "4lkmd5j5kl", "4lkmd9l6l9", "55a5akalal", "2lclclb5al", "2lkmd5j5kl", "4lkmd5l6l5", "55a5akalak", "2lalclalal",
  "2lkmclj5kl", "4lkmd5j6l5", "55a5akalak", "2kalclalal", "2lkmclj5al", "4lkmd5j6l5", "55a5akalak", "2kalalalal", "2lkmclj5al", "4lkmd5j6l5",
  "55a5akalak", "2kalalalal", "2lkmclj5al", "4lkmd5j6l5", "55a5akalak", "2kalalalal", "2lklclb5al", "4lkmd5j6l5", "55a5akahak", "2ka5alalal",
  "2lklclb5al", "4lkmd5j5l5", "55a52kahak", "2ka5akalal", "2lklclb5al", "4lkmd5j5kl", "4la12kahak", "2ga5akalal", "2lclclb5al", "2lkmclj5kl",
  "4la12g8hak", "2ga5akalak", "2lalclalal", "2lkmclj5kl", "4la12g8hag", "2ga5akalak", "2kalalalal", "2lkmclj5al", "4la12g8hag", "2ga5akalak",
  "2kalalalal", "2lkmclj5al", "4la12g8hag", "2ga5akalak", "2kalalalal", "2lklclb5al", "4la12g8hag", "2ga5akalak", "2kalalalal", "2lklclb5al",
  "4la12g8hag", "2ga52kahak", "2ka5alalal", "2lklclb5al", "4la12g8gag", "2ga12kahak", "2ka5akalal", "2lklclb5al", "4la1208ga0", "20a12g8hak",
  "2ga5akalal", "2lalclalal", "2la1208ga0", "20a12g8hak", "2ga5akalal", "2lalalalal", "2la1208ga0", "20a12g8hag", "2ga5akalak", "2lalalalal",
  "2la1208g00", "20a12g8hag", "2ga5akalak", "2kalalalal", "2la1208g00", "20a12g8hag", "2ga5akalak", "2kalalalal", "2la0200g00", "20a12g8hag",
  "2ga52kahak", "2kalalalal", "2la0200g00", "20a12g8gag", "2ga52kahak", "2ka5akalal", "2la0200g00", "20a12g8gag", "2ga12gahak", "2ka5akalal",
  "2la0200g00", "20a1208ga0", "2ga12g8hak", "2ga5akalal", "2l00200000", "a1208ga0", "20a12g8hak", "2ga5akalal", "2l00000000", "a1208ga0",
  "20a12g8hag", "2ga5akalak", "2l00000000", "a1208g00", "20a12g8hag", "2ga5akalak", "2k00000000", "a1200g00", "20a12g8hag", "2ga5akalak",
  "2kalalalal"
];

/**
 * @description 24节气时间
 * 立春( 2月3日-5日) 雨水( 2月18日-20日) 惊蛰( 3月5日-7日) 春分( 3月20日-22日) 清明( 4月4日-6日) 谷雨( 4月19日-21日)
 * 立夏( 5月5日-7日) 小满( 5月20日-22日) 芒种( 6月5日-7日) 夏至( 6月21日-22日) 小暑( 7月6日-8日) 大暑( 7月22日-24日)
 * 立秋( 8月7日-9日) 处暑( 8月22日-24日) 白露( 9月7日-9日) 秋分( 9月22日-24日) 寒露(10月8日-9日) 霜降(10月22日-24日)
 * 立冬(11月7日-8日) 小雪(11月22日-23日) 大雪(12月6日-8日) 冬至(12月21日-23日) 小寒( 1月5日-7日) 大寒( 1月20日-21日)
*/

// 24节气最小日期
const termMinDate = [4, 19, 3, 18, 4, 19, 4, 19, 4, 20, 4, 20, 6, 22, 6, 22, 6, 22, 7, 22, 6, 21, 6, 21];

// 24节气
const termMap = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];

/**
 * @description: 获取指定年份的24节气日期
 * @param { number } sYear 年份
 * @return { number[] }
 */
export function getTermDate(sYear) {
  if (sYear < minYear || sYear > maxYear) {
    return [];
  }
  let data = termData[sYear - minYear];
  let num4 = parseInt(data, 32).toString(4);
  if (num4.length != 24) {
    num4 = "0" + num4;
  }
  return num4.split("").map(function (value, index) {
    return +value + termMinDate[index];
  });
}

/**
 * @description: 获取y年m月d日的节气
 * @param {number} sYear 年
 * @param {number} sMonth 月
 * @param {number} sDay 日
 * @return {string}
 */
export function getTerm(sYear, sMonth, sDay) {
  let term = "";
  let termDate = getTermDate(sYear);
  termDate.push(31);
  termDate.forEach((day, index) => {
    let month = Math.floor(index / 2) + 1;
    if (sMonth == month && sDay == day) {
      term = termMap[index];
    }
  });
  return term;
}
