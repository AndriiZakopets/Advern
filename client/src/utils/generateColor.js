const colors = [
  '#798700',
  '#AA47BC',
  '#778F9B',
  '#5C6BC0',
  '#C06B50',
  '#C2175B',
  '#7E57C2',
  '#5D4038',
  '#33691E',
  '#BF360C',
  '#8C6E63',
  '#7A1FA2',
  '#78909C',
  '#0098A6',
  '#00887A',
  '#0288D1',
  '#F5511E',
  '#512DA7',
  '#EC407A',
  '#465A65',
];

const getRandomNum = (string, range) => {
  const str = String(string);
  let num = 10;

  for (let i = 0; i < str.length; i++) {
    num += str.charCodeAt(i);
  }

  return num % range;
};

export default (name) => colors[getRandomNum(name, colors.length)];
