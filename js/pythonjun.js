var bar4 = new ProgressBar.Circle('#pythonjavajun', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#01d2ea', width: 1 },
  to: { color: '#eac002', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '% \n Python / Java');
    }

  }
});
bar4.text.style.fontSize = '0.9rem';

$('#pythonjavajun').waypoint(function() {
    bar4.animate(0.92);
}, {offset: '90%'});
