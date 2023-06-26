function formatDuration(seconds) {
  const oneMinute = 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365;

  let remainingSeconds = seconds;
  let calculatedTimes = [];

  const _calculateResult = (value, type) => {
    return value === 0
      ? ""
      : value > 1
      ? `${value} ${type}s`
      : `${value} ${type}`;
  };

  if (remainingSeconds >= oneYear) {
    calculatedTimes.push(
      _calculateResult(parseInt(remainingSeconds / oneYear), "year")
    );
    remainingSeconds = remainingSeconds % oneYear;
  }
  if (remainingSeconds >= oneDay) {
    calculatedTimes.push(
      _calculateResult(parseInt(remainingSeconds / oneDay), "day")
    );
    remainingSeconds = remainingSeconds % oneDay;
  }
  if (remainingSeconds >= oneHour) {
    calculatedTimes.push(
      _calculateResult(parseInt(remainingSeconds / oneHour), "hour")
    );
    remainingSeconds = remainingSeconds % oneHour;
  }
  if (remainingSeconds >= oneMinute) {
    calculatedTimes.push(
      _calculateResult(parseInt(remainingSeconds / oneMinute), "minute")
    );
    remainingSeconds = remainingSeconds % oneMinute;
  }
  if (remainingSeconds > 0) {
    calculatedTimes.push(_calculateResult(remainingSeconds, "second"));
  }

  let result = "";

  calculatedTimes.map((item, index) => {
    if (index === 0) result = item;
    else if (index === calculatedTimes.length - 1)
      result = result + " and " + item;
    else result = result + ", " + item;
  });

  return calculatedTimes.length === 0 ? "now" : result;
}

console.log(formatDuration(50));
