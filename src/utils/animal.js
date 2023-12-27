// 12生肖
const animals = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];

/**
 * @description 年份转生肖
*/
export const getAnimalByYear = (y) => {
  const diff = y - 1984;
  const remain = diff % 12;
  const animalIdx = remain > -1 ? remain : remain + 12;
  return animals[animalIdx];
}
