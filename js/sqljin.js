var bar7 = new ProgressBar.Circle('#sqljin', {
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
  from: { color: '#f4d000', width: 1 },
  to: { color: '#7135ba', width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '% \n SQL');
    }

  }
});
bar7.text.style.fontSize = '0.9rem';

$('#sqljin').waypoint(function() {
    bar7.animate(0.9);
}, {offset: '90%'});
