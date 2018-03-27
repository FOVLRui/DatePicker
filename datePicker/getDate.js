let getDate = function(
  startDay = 1,
  y = new Date().getFullYear(),
  m = new Date().getMonth()
) {
  let arrDate = [],
    lastDate = new Date(y, m + 1, 0).getDate(),
    firstDay = new Date(y, m, 1).getDay(),
    lastDayOfLastMonth = new Date(y, m, 0).getDate();
  let pushDate = function(firstDay, startDay, lastDayOfLastMonth, m, lastDate) {
    let offsetDays = firstDay - startDay,
      arrDate = [],
      date,
      month,
      count = 0;
    if (offsetDays < 0) {
      offsetDays += 7;
    }
    while (offsetDays !== 0) {
      date = -offsetDays + lastDayOfLastMonth + 1;
      month = m - 1;
      arrDate.push({
        date,
        month
      });
      offsetDays--;
      count++;
    }
    for (let i = 0; i < lastDate; i++) {
      arrDate.push({
        date: i + 1,
        month: m
      });
      count++;
    }
    for (let i = 0; count < 42; i++) {
      arrDate.push({
        date: i + 1,
        month: m + 1
      });
      count++;
    }
    return arrDate;
  };
  arrDate = pushDate(firstDay, startDay, lastDayOfLastMonth, m, lastDate);
  console.log(arrDate);
  render(arrDate, startDay);
};
