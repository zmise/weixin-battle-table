

$(function () {
  //弹框
  function show(content, duration, isCenter, animateIn, animateOut) {
    var animateIn = animateIn || 'fadeIn';
    var animateOut = animateOut || 'fadeOut';
    if (!content.length) {
      return;
    }
    var duration = duration || 1000;
    var isCenter = isCenter || false;
    $('body').toast({
      position: 'absolute',
      animateIn: animateIn,
      animateOut: animateOut,
      content: content,
      duration: duration,
      isCenter: isCenter,
      padding: '0.2rem 0.5rem',
      background: 'rgba(181, 185, 190, 0.8)',
      borderRadius: '.31rem',
      fontSize: '.24rem',
      top: '0',        //bottom底部的位置    具体的数值 或者center  垂直居中
    });
  }


  function getDateStr(dayCount, symbol) {
    if (null == dayCount) {
      dayCount = 0;
    }
    var dd = new Date();
    dd.setDate(dd.getDate() + dayCount);//设置日期
    var y = dd.getFullYear() + symbol;
    var m = (dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1) + symbol;

    var d = dd.getDate();
    return y + m + d;
  }
  $('.today').text(getDateStr(0, '-'));
  $('.yesterday').text(getDateStr(-1, '-'));
  $('#dateRange').text(getDateStr(0, '.').substring(0, getDateStr(0, '.').length - 2) + '01-' + getDateStr(0, '.'));
  console.log(getDateStr(0))
  $('#timeBox').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('#overlay').removeClass('dn').find('.box').removeClass('dn');
  });

  $('#areaBox').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('#overlay').removeClass('dn').find('.areaBox').removeClass('dn');
  });
  // 战报时间切换
  $('#overlay .box .items').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    if ($('#time').text() !== $(this).text()) {
      var items = $(this).text().split('-');
      $('#time').text($(this).text());
      $('#dateRange').text(items[0] + '.' + items[1] + '.01-' + $(this).text().split('-').join('.'));
      // onchange
      vm.number = 555;
      vm.income = 9;
      vm.brokerageOne = 8;
      vm.brokerageTwo = 7;
      vm.oldNumber = 6;
      vm.oldIncome = 5;
      vm.oldBrokerage = 4;

      show('46546546546');
    }


    $(this).siblings().removeClass('current').end().addClass('current');
    $('#overlay').addClass('dn').find('.box').addClass('dn');

  });
  // 战报区域切换
  $('#overlay .areaBox .items').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if ($('#area').text() !== $(this).text()) {
      $('#area').text($(this).text());
      // onchange

      vm.number = 100000;
      vm.income = 9;
      vm.brokerageOne = 8;
      vm.brokerageTwo = 7;
      vm.oldNumber = 6;
      vm.oldIncome = 5;
      vm.oldBrokerage = 4;


    }

    $(this).siblings().removeClass('current').end().addClass('current');
    $('#overlay').addClass('dn').find('.areaBox').addClass('dn');

  });

  $('#overlay').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('#overlay').addClass('dn').find('.box').addClass('dn').end().find('.areaBox').addClass('dn').end().find('.save-box').addClass('dn');
  });

  $('#save').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('#overlay').removeClass('dn').find('.save-box').removeClass('dn');

  });

  $('body').on('focus', 'input', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).removeClass('null-input');

  });


  var data = {
    number: '',
    income: '',
    brokerageOne: '',
    brokerageTwo: '',
    oldNumber: 40,  // 售单
    oldIncome: 10,  // 应收
    oldBrokerage: 9, // 项佣
  }

  var vm = new Vue({
    el: '#vm',
    data: data,
    computed: {
      // 计算属性的 getter
      newNumber: function () {
        return (this.number - 0 || 0) + this.oldNumber - 0 || 0
      },
      newIncome: function () {
        return (this.income - 0 || 0) + this.oldIncome - 0 || 0
      },
      newBrokerage: function () {
        return (this.brokerageOne - 0 || 0) + (this.brokerageTwo - 0 || 0) + this.oldBrokerage - 0 || 0
      }
    }
  });

})
