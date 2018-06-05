
$(function () {
  var $filterLayer = $('.filter-layer');
  var $filterBody = $('.filter-body');
  var $filterList = $('.filter-list');
  var $overlay = $('#overlay');


  //阻止首页滚动条事件
  function stopScroll() {
    $('body').css({
      position: 'fixed',
      top: -document.body.scrollTop + 'px'
    });
  }

  /* 显示筛选层   */
  function showFilterLayer(index) {
    $overlay.show();
    $filterLayer.slideDown(200);
    $filterList.hide().eq(index).show();
  };

  /* 隐藏筛选层   */
  function hideFilterLayer() {
    $('body,html').css({ 'overflow': 'visible' });
    $filterLayer.hide();
    $filterList.hide();
    $overlay.hide();
  };



  /* 阻止滚动条事件  */
  $overlay.on('touchmove.filter', function (e) {
    e.stopPropagation();
    e.preventDefault();

  });

  //   /* 阻止滚动条事件  */
  //   $filterLayer.on('touchmove.filter', function (e) {
  //     e.preventDefault();
  //     e.stopPropagation();

  //   });
  var flag = 1000;

  /* 切换筛选项   */
  $filterBody.on('click', '.items', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($filterLayer.css('display') !== 'none' && flag === $(this).index()) {
      hideFilterLayer();
    } else {
      // debugger
      showFilterLayer($(this).index());
      flag = $(this).index();
    }
  });

  /* 单选事件 */
  $filterList.on('click', '.items', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('current').siblings().removeClass('current');
    $(this).siblings().find('.icon').removeClass('current');
    $(this).find('.icon').addClass('current');
  });

  /* 位置筛选层的切换事件 */
  $filterLayer.find('.one-row').on('click', '.items', function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('zmise')
    $(this).addClass('current').siblings().removeClass('current');
    $('.two-row').css('display', 'none').eq($(this).index()).css('display', 'block');
  });

  $overlay.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    hideFilterLayer();

  });






});
