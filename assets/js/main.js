$(function() {
  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 10,
    lineCap: 'butt',
    barColor: '#C7C2CC',
    trackColor:	"#eeecef",
    size: 160,
    animate: 2000
  });
});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
    items : 4,
    lazyLoad : true,
    navigation : true
  }); 
 
});