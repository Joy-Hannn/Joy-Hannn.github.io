var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '~🌸可以播放音乐哦🌸~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '~🌸欢迎回来🌸~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });