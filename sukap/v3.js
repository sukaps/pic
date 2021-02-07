var windowWidth = $(window).width();
if (windowWidth < 767) {
    // do something
    $("#aplayer").remove();
}
var meting_api = 'https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id';
