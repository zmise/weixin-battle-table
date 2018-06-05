$(function () {


  $('#list').table({
    cols: [{
      title: '组织',
      name: 'itemName', // 第二列的名字  下面数值要与之有 映射关系
      align: 'center',
      width: 240,
      lockWidth: true
    }, {
      title: '售单量',
      name: 'wsHouseCount', // 列的名字  下面数值要与之有 映射关系
      align: 'center',
      width: 100,
      lockWidth: true
    }, {
      title: '售业绩',
      name: 'wsTransferCount',// 列的名字  下面数值要与之有 映射关系
      align: 'center',
      width: 180,
      lockWidth: true
    }, {
      title: '租单量',
      name: 'gtTransferCount',// 列的名字  下面数值要与之有 映射关系
      align: 'center',
      width: 100,
      lockWidth: true
    }, {
      title: '租业绩',
      name: 'houseRate',// 列的名字  下面数值要与之有 映射关系
      align: 'center',
      lockDisplay: true,
      width: 100,
      lockWidth: true,
      type: 'number'
    }, {
      title: '总业绩',
      name: 'dealRate',// 列的名字  下面数值要与之有 映射关系
      align: 'center',
      width: 180,
      lockWidth: true,
      type: 'number'
    }, {
      title: '铺均业绩<i class="iconfont icon-"></i>',
      name: 'zmise',// 列的名字  下面数值要与之有 映射关系
      align: 'center',
      width: 180,
      lockWidth: true,
      // sortable: true,
      type: 'number'
    }],
    method: 'get',
    // url: 'http://172.16.72.97:8080/bi/marketing/statByBizArea.json?statMonth=2018-03&type=1&ids=1111&_=1527039632247',
    // params: function () {
    //   return {
    //     statMonth: '2018-03',
    //     type: 1,
    //     ids: 1111,
    //     parentId: '1527039632247'
    //   }
    // },

    items: [
      {
        itemId: 'BFrmwFoNQGW0CJmVNwbziLqHDS8=',
        itemName: '<i>南山前海区</i>曹风国',// itemName 第二列 映射的值  i标签里面字体不一样
        wsHouseCount: 222, // 映射的值
        gtHouseCount: 103,  // 映射的值
        houseRate: 200.00,  // 映射的值
        wsTransferCount: 3000.22, // 映射的值
        gtTransferCount: 222, // 映射的值
        dealRate: 3200.22, // 映射的值
        doubleDealRate: 9.71, // 映射的值
        doubleHouseRate: 46.6, // 映射的值
        zmise: '<i>132.00</i>', // 映射的值
      },
      {
        itemId: 'zXy5MSbUTtOfXSXpao3fPLqHDS8=',
        itemName: '<i>南山前海区</i>宝安',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>117.00</i>',
      },
      {
        itemId: 'RjmhRn/nQqGQS6+L+YwgxLqHDS8=',
        itemName: '<i>南山前海区</i>龙岗',
        wsHouseCount: 222,
        gtHouseCount: 0,
        houseRate: 200.00,
        wsTransferCount: 0,
        gtTransferCount: 0,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>110.51</i>',
      },
      {
        itemId: '',
        itemName: '<i>南山前海区</i>无归属区域',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>95.41</i>',
      },
      {
        itemId: 'Q6m5BHdETSmaJmoNH9amRbqHDS8=',
        itemName: '<i>南山前海区</i>福田',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>82.20</i>',
      },
      {
        itemId: 'YQouk23GSCG4dtlCIlxCk7qHDS8=',
        itemName: '<i>南山前海区</i>大鹏新区',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>60.51</i>',
      },
      {
        itemId: 'EYzGyuQnQXehj93Sr6bjWLqHDS8=',
        itemName: '<i>南山前海区</i>光明新区',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>48.00</i>',
      },
      {
        itemId: 'uAR2YRqaSu6AoFBvayswmbqHDS8=',
        itemName: '<i>南山前海区</i>罗湖',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>31.00</i>',
      },
      {
        itemId: 'Z+YG4VLZTYGUlJbsp/zeYLqHDS8=',
        itemName: '<i>南山前海区</i>坪山新区',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>30.00</i>',
      },
      {
        itemId: 'Nkt1OW7bQsy3dlS5z1LjcrqHDS8=',
        itemName: '<i>南山前海区</i>南山',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>25.00</i>',
      },
      {
        itemId: 'HHZlZRWQQrCR+Lozl2BiXrqHDS8=',
        itemName: '<i>南山前海区</i>龙华新区',
        wsHouseCount: 0,
        gtHouseCount: 0,
        houseRate: 0,
        wsTransferCount: 0,
        gtTransferCount: 0,
        dealRate: 0,
        doubleDealRate: 0,
        doubleHouseRate: 0,
        zmise: '<i>5.00</i>',
      },
      // 合计总数
      {
        itemName: '合计:',
        wsHouseCount: 222,
        gtHouseCount: 103,
        houseRate: 200.00,
        wsTransferCount: 3000.22,
        gtTransferCount: 222,
        dealRate: 3200.22,
        doubleDealRate: 9.71,
        doubleHouseRate: 46.6,
        zmise: '<i>5.00</i>',
      }

    ],
    height: 'auto',
    width: 'auto',
    indexCol: true,
    noDataText: '',
    indexColWidth: 60,
    // fullWidthRows: true,
    showBackboard: false,

  }).on('loadSuccess', function (e, data) {
    // $(this).parent().removeClass('table-no-data');
    $(this).closest('.mmGrid').find('th:eq(0) .mmg-title').text('排名');
    $(this).find('tr:last-child td:first-child').text('');
    $(this).find('tr:last-child td:eq(1)').css('font-size', '.28rem');
    $(this).find('tr:last-child').css('background', '#4f5357').find('span').css('color', '#d2d3d4').end().find('td:last-child i').css('color', '#fff');
    var $list = $(this).find('tr td span');
    for (var i = 0; i < $list.length; i++) {
      if ($list.eq(i).text() === '0') {
        $list.eq(i).css('color', '#ff0000');
      }
    }
  });
  //   onSelect 某一项选中时

  $('#datepicker').daterangepicker({
    locale: {
      direction: 'ltr',
      format: 'YYYY.MM.DD',
      separator: ' - ',
      applyLabel: '确定',
      cancelLabel: '取消',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: [
        '日',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六'
      ],
      monthNames: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月'
      ],
      firstDay: 1
    },
    startDate: '2018.06.01',
    endDate: '2018.06.02'
  }, function (start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
  });
})
