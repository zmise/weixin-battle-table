$(function () {
  $(function () {

    // 第一个表单
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
        title: '售业绩<s>(万)</s>',
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
        title: '租业绩<s>(万)</s>',
        name: 'houseRate',// 列的名字  下面数值要与之有 映射关系
        align: 'center',
        lockDisplay: true,
        width: 100,
        lockWidth: true,
        type: 'number'
      }, {
        title: '总业绩<s>(万)</s>',
        name: 'dealRate',// 列的名字  下面数值要与之有 映射关系
        align: 'center',
        width: 180,
        lockWidth: true,
        type: 'number'
      }, {
        title: '铺均业绩<s>(万)</s>',
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
      $(this).closest('.mmGrid').find('th:eq(0) .mmg-title').text('序号');
      $(this).find('tr:last-child td:first-child').text('');
      $(this).find('tr:last-child').find('span').css({ 'color': '#333', 'font-weight': '500' });
      $(this).find('tr:last-child td:eq(1)').find('span').css({ 'color': '#d2d3d4', 'font-weight': '300' });

      var $list = $(this).find('tr td span');
      for (var i = 0; i < $list.length; i++) {
        if ($list.eq(i).text() === '0') {
          $list.eq(i).css('color', '#ff0000');
        }
      }
    });
    // 第二个表单
    $('#list2').table({
      cols: [{
        title: '组织',
        name: 'itemName', // 第二列的名字  下面数值要与之有 映射关系
        align: 'center',
        width: 185,
        lockWidth: true
      }, {
        title: '售单量',
        name: 'wsHouseCount', // 列的名字  下面数值要与之有 映射关系
        align: 'center',
        width: 185,
        lockWidth: true
      }, {
        title: '营收<s>(万)</s>',
        name: 'wsTransferCount',// 列的名字  下面数值要与之有 映射关系
        align: 'center',
        width: 185,
        lockWidth: true
      }, {
        title: '项佣<s>(万)</s>',
        name: 'gtTransferCount',// 列的名字  下面数值要与之有 映射关系
        align: 'center',
        width: 185,
        lockWidth: true
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
          itemName: '<i>南山前海区</i>',// itemName 第二列 映射的值  i标签里面字体不一样
          wsHouseCount: 222, // 映射的值
          wsTransferCount: 3000.22, // 映射的值
          gtTransferCount: 222, // 映射的值
        },
        {
          itemId: 'zXy5MSbUTtOfXSXpao3fPLqHDS8=',
          itemName: '<i>南山前海区</i>',
          wsHouseCount: 222,
          wsTransferCount: 3000.22,
          gtTransferCount: 222,
        },

        // 合计总数
        {
          itemName: '合计:',
          wsHouseCount: 222,
          wsTransferCount: 3000.22,
          gtTransferCount: 222,
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
      $(this).closest('.mmGrid').find('th:eq(0) .mmg-title').text('序号');
      $(this).find('tr:last-child td:first-child').text('');
      $(this).find('tr:last-child').find('span').css({ 'color': '#333', 'font-weight': '500' });
      $(this).find('tr:last-child td:eq(1)').find('span').css({ 'color': '#d2d3d4', 'font-weight': '300' });

      var $list = $(this).find('tr td span');
      for (var i = 0; i < $list.length; i++) {
        if ($list.eq(i).text() === '0') {
          $list.eq(i).css('color', '#ff0000');
        }
      }
    });
    //   onSelect 某一项选中时
    $("#datepicker").datepicker({
      onSelect: function (formattedDate, date, inst) {
        console.log(formattedDate);
      }
    });
  })


})
