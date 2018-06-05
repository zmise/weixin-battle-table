$(function () {

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

  $('#overlay .box .items').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if ($('#time').text() !== $(this).text()) {
      var items = $(this).text().split('-');
      $('#time').text($(this).text());
      $('#dateRange').text(items[0] + '.' + items[1] + '.01-' + $(this).text().split('-').join('.'));
      // onchange
    }
    $(this).siblings().removeClass('current').end().addClass('current');
    $('#overlay').addClass('dn').find('.box').addClass('dn');

  });
  $('#overlay .areaBox .items').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('#area').text($(this).text());
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

  var data = {
    secondHandNumber: '',
    secondHandIncome: '',
    oneHandNumber: '',
    oneHandIncome: '',
    rentListNumber: '',
    rentListIncome: '',
    oldSecondHandNumber: 0,
    oldSecondHandIncome: 10,
    oldOneHandNumber: 20,
    oldOneHandIncome: 30,
    oldRentListNumber: 40,
    oldRentListIncome: 50,

  }

  var vm = new Vue({
    el: '#vm',
    data: data,
    computed: {
      // 计算属性的 getter
      newSecondHandNumber: function () {
        return (this.secondHandNumber - 0 || 0) + this.oldSecondHandNumber - 0 || 0
      },
      newSecondHandIncome: function () {
        return (this.secondHandIncome - 0 || 0) + this.oldSecondHandIncome - 0 || 0
      },
      newOneHandNumber: function () {
        return (this.oneHandNumber - 0 || 0) + this.oldOneHandNumber - 0 || 0
      },
      newOneHandIncome: function () {
        return (this.oneHandIncome - 0 || 0) + this.oldOneHandIncome - 0 || 0
      },
      newRentListNumber: function () {
        return (this.rentListNumber - 0 || 0) + this.oldRentListNumber - 0 || 0
      },
      newRentListIncome: function () {
        return (this.rentListIncome - 0 || 0) + this.oldRentListIncome - 0 || 0
      },
      totleNumber: function () {
        return this.newSecondHandNumber + this.newOneHandNumber + this.newRentListNumber
      },
      totleIncome: function () {
        return this.newSecondHandIncome + this.newOneHandIncome + this.newRentListIncome
      }

    }
  });
})
