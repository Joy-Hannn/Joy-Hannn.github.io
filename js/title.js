// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.querySelector('[rel="icon"]').setAttribute('href', "/img/funny.ico");
        document.title = '404 Not Found';
        clearTimeout(titleTime);
    }
    else {
        document.querySelector('[rel="icon"]').setAttribute('href', "/img/favicon.ico");
        document.title = '(●\'◡\'●)骗你的 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

