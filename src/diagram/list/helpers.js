export const distributeByFlore = (accumulator, currentValue) => {
  if (accumulator[currentValue.floor]) {
    accumulator[currentValue.floor].push(currentValue);
  } else accumulator[currentValue.floor] = [currentValue];
  return accumulator;
};
