export const displayHours = (number: string) => {
  let num = number;
  if (num.length === 1) {
    num = `0${num}`;
    num += ':00';
    return num;
  }
  if (num.length === 2) {
    num += ':00';
    return num;
  }
  const splitNum = num.split(':');
  if (splitNum[0].length === 1) {
    splitNum[0] = `0${splitNum[0]}`;
  }
  if (splitNum[1].length === 1) {
    splitNum[1] = `0${splitNum[1]}`;
  }
  return splitNum.join(':');
};
