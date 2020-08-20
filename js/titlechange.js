(function() {
    var OriginTitile = document.title, titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '干什么去了呀🥺🥺';
            clearTimeout(titleTime);
        } else {
            document.title = '欢迎回家呀💖💖';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            },2000);
        }
    });
})();
