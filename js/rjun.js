var bar1 = new ProgressBar.Circle('#rjun', {
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
      circle.setText(value + '% \n R');
    }

  }
});
bar1.text.style.fontSize = '0.9rem';

$('#rjun').waypoint(function() {
    bar1.animate(0.95);
}, {offset: '90%'});
