$(function () {


  var $filterLayer = $('.filter-layer');
  var $filterBody = $('.filter-body');
  var $filterList = $('.filter-list');
  var $overlay = $('#overlay');
  /* 隐藏筛选层   */
  function hideFilterLayer() {
    $('body,html').css({ 'overflow': 'visible' });
    $filterLayer.hide();
    $filterList.hide();
    $overlay.hide();
  };
  $('.line1').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if ($(this).parent().hasClass('current1')) {
      $(this).parent().find('.line2').css('display', 'none');
      $(this).find('.icon2').removeClass('icon-xiangshang').addClass('icon-xiangxia');
    } else {
      $(this).parent().find('.line2').css('display', 'flex');
      $(this).find('.icon2').removeClass('icon-xiangxia').addClass('icon-xiangshang');
    }
    $(this).parent().toggleClass('current1');

  });
  $('.onelist').on('click', '.items', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.area').text($(this).text()).css('color', '#ff6600');
    hideFilterLayer()
  });
  $('.twolist').on('click', '.two-row .items', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.time').text($('.one-row .current').text() + $(this).text().replace(/\s+/g, "")).css('color', '#ff6600');
    hideFilterLayer();
  });

  $('.twolist .one-row .items:first-child').addClass('current');
  $('.twolist .two-row').eq(0).css('display', 'block');
});
