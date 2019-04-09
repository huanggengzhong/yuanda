// 轮播图
var yuanDa = function() {}
yuanDa.prototype = {
  slide: function() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      speed: 300,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 1000,
        stopOnLastSlide: true,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination'
      },
      freeMode: false
    })
  }
}
window.addEventListener('load', function() {
  var yd = new yuanDa()

  yd.slide()
})
//点击提交的时候 需要alert出来所选的内容
function show() {
  obj = document.getElementsByName('test')
  check_val = []
  for (k in obj) {
    if (obj[k].checked) check_val.push(obj[k].value)
  }
    alert('您选择的内容是:' + check_val) 
}
