var bar8 = new ProgressBar.Circle('#rjin', {
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
  from: { color: '#e86c2e', width: 1 },
  to: { color: '#3474db', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '% R/Matlab');
    }

  }
});
bar8.text.style.fontSize = '0.9rem';

$('#rjin').waypoint(function() {
    bar8.animate(0.9);
}, {offset: '90%'});
