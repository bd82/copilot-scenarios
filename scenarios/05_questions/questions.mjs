// Q: what does this function do?
function computeX(values) {
  if (values.length === 0) {
    throw new Error("Input array is empty");
  }

  // Q: why are we using another variable here?
  const sortedValues = [...values].sort((a, b) => a - b);

  const half = Math.floor(sortedValues.length / 2);

  return sortedValues.length % 2
    ? sortedValues[half]
    : (sortedValues[half - 1] + sortedValues[half]) / 2;
}

// Q: who is the head of state of Israel?

//הפונקציה הזאת מחשבת את הממוצע של מערך של מספרים ובודקת שהמערך אינו ריק
// Q: translate the above comment to English
function computeAverage(values) {
  if (values.length === 0) {
    throw new Error("Input array is empty");
  }

  let sum = 0;
  for (const value of values) {
    sum += value;
  }

  return sum / values.length;
}
