let render = (() => {
  let render = function(date, start) {
    let setupWeekDays = [],
      htmlDay = '',
      htmlWeek = '',
      oWeek = document.querySelector('#week'),
      oDay = document.querySelector('#day');

    setupWeekDays = setWeek(start);
    setupWeekDays.forEach(item => {
      htmlWeek += '<th>' + item + '</th>';
    });
    date.forEach((item, index) => {
      if (index === 0) {
        htmlDay += '<tr class="day">';
      } else if (index % 7 === 0) {
        htmlDay += '</tr><tr class="day">';
      }
      htmlDay +=
        '<td class="day" data-day="' +
        item.date +
        '" data-month="' +
        item.month +
        '">' +
        item.date +
        '</td>';
    });

    htmlDay += '</tr>';
    oWeek.innerHTML = htmlWeek;
    oDay.innerHTML = htmlDay;
  };
  //根据参数设定日期顺序
  let setWeek = function(start) {
    let weekDays = ['日', '一', '二', '三', '四', '五', '六'],
      setupWeekDays = [],
      j = 0;

    for (let i = 0; i < 7; i++) {
      if (start + i <= 6) {
        setupWeekDays.push(weekDays[start + i]);
      } else {
        setupWeekDays.push(weekDays[j++]);
      }
    }
    return setupWeekDays;
  };
  return render;
})();
