

// 入口函数的作用不一定是document.ready，更重要的是有单独作用域，避免污染全局

$(function() {
  // 思路：1.获得屏幕的宽，如果大于750，就显示大图，小于就显示小图
  // 2.大图靠背景图片来实现居中，
  // 3.小图的大小跟着屏幕的变化会变化
  // 4.怎么样得到大小图片？靠自定义属性
  // 5.如果是小图靠创建dom元素向元素中添加对象
  $(window).on('resize',resize).trigger('resize');
  function resize(){
 var screenWidth = $(window).width();
  var isSmallScreen = screenWidth < 768;
  var $slideItems = $('#ad_carousel .item');
  // console.log(slideTtems);
  $slideItems.each(function(i,item) {
    // 1.如果打印出来是一个数组，则说明是一个jquery对象
    // 2.如果打印出来是标签的话，则说明是一个dom对象,是dom对象则要转换成jquery对象
  // console.log(item);
    var $item = $(item);
    // 通过自定义属性后，大图和小图都记录在item标签上
    // 三元表达式
    var attr = isSmallScreen? "smImage" :"lgImage";
    var val = $item.data(attr)
    var url= 'url("'+val+'")';
    // console.log(url);
    $item.css('backgroundImage',url);
    // if(isSmallScreen) {
    //   $item.css('backgroundImage',$item.data('smImage'))
    // }else {
    //   $item.css('backgroundImage',$item.data('lgImage'))
    // }
    if(isSmallScreen) {
      var $img = $('<img src="'+val+'" />')
      $item.append($img);
      $item.empty().append($img);
    } else {
      $item.empty();
    };
  });
  };

//ul的滚动条
function ulContainerWidth () {
  // 1.获取ul元素
 var $ulElement = $("#products .nav-tabs");
// 2.获得ul的所有li
// $( selector, context ) context 指的是在哪个里面找
var $lisElement = $('li[role="presentation"]',$ulElement)
// 遍历分别获得每个li的宽度
var width = 0;
$lisElement.each(function(i,liElement) {
  width +=$(liElement).width();
});
// console.log(width);
// 4.判断li的内容有没有溢出  获取容器的宽度
 var containerWidth = $
// 5.将结果设置到ul的宽度上

$ulElement.width(width);
}




// tooltip必须通过JS手动初始化
  $('[data-toggle="tooltip"]').tooltip();


});