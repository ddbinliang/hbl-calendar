// 12生肖速查表 unicode编码
// "鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
const animals = [
  "\u9f20",
  "\u725b",
  "\u864e",
  "\u5154",
  "\u9f99",
  "\u86c7",
  "\u9a6c",
  "\u7f8a",
  "\u7334",
  "\u9e21",
  "\u72d7",
  "\u732a"
];

/**
 * @description 年份转生肖(获取年份对应的生肖)
 * 1984年为鼠年
 * @param {number} y 年份
 * @returns {string}
*/
export const getAnimalByYear = (y) => {
  const diff = y - 1984;
  const remain = diff % 12;
  const animalIdx = remain > -1 ? remain : remain + 12;
  return animals[animalIdx];
}