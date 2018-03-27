let picker = function() {
  let oDate = document.querySelectorAll('td'),
    hover = null,
    tmp = '';
  oDate.addEventListener('mouseenter', e => {
    if (hover) {
      hover.className = hover.className.replace('active', '');
      hover = e.target;
      hover.className += 'active';
    } else {
      hover = e.target;
      hover.className += 'active';
    }
  });
};
