
// 入口函数
(function ()
{
    var Stage = Laya.Stage;
    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;

    //初始化引擎，设置游戏设计宽高，并且打开WebGL模式
    var w = Laya.Browser.clientWidth * Laya.Browser.window.devicePixelRatio;
    var h = Laya.Browser.clientHeight * Laya.Browser.window.devicePixelRatio;
    if (w < h)
    {
        h = Laya.Browser.clientWidth * Laya.Browser.window.devicePixelRatio;
        w = Laya.Browser.clientHeight * Laya.Browser.window.devicePixelRatio;
    }
    browser_width = Math.floor(w / (h / 600));
    browser_height = 600;
    Mapmodule = null;
    if (browser_width < 870) browser_width = 870;


    Laya.init(browser_width, browser_height, WebGL);

    if( Browser.window.conch ){
        console.log( "ydw:"  + Browser.window.conchConfig.pushAtlasLimitSize );
        Browser.window.conchConfig.pushAtlasLimitSize = 24;
        console.log( "ydw:"  + Browser.window.conchConfig.pushAtlasLimitSize );
        Browser.window.conchConfig.setDebugLevel(0);
    }



    Laya.stage.bgColor = "#000000";
    Laya.stage.screenMode = "horizontal";
    Laya.stage.alignH = "center";
    Laya.stage.scaleMode = "showall";
    Laya.MouseManager.multiTouchEnabled = true;
    Laya.alertGlobalError = true;
    var name = "gameres/png/login" + Math.floor(Math.random() * 3) + ".png";


    //优先加载登录资源
    var loginres = [];
    loginres.push({url:["gameres/png/main_load.png", "gameres/png/main_load$bar.png", name ],type:Laya.Loader.IMAGE});
    Laya.loader.load( loginres, Laya.Handler.create( this, function()
    {   
        var fileref = Laya.Browser.document.createElement("script");
        fileref.src = "js/gbk.js"
        Laya.Browser.document.getElementsByTagName("head")[0].appendChild( fileref );  

        var loginbj = new Laya.Image(name);
        Laya.stage.addChild(loginbj);
        loginbj.width = browser_width;
        loginbj.height = browser_height;

        var pb = new Laya.ProgressBar("gameres/png/main_load.png");
        loginbj.addChild( pb );
        pb.bottom = 120;
        pb.width = 790;
        pb.x = (browser_width - pb.width)/2;
        var pb_bg = new Laya.Image("gameres/png/main_load_bg.png");
        pb.addChild(pb_bg);
        pb_bg.pos(-63,-13);

        var pb_txt = new Laya.Text();
        pb_txt.color = "#ffffff";
        pb_txt.fontSize = 24;
        pb.addChild(pb_txt);
        pb_txt.size(67,27);
        pb_txt.x = (pb.width - 67)/2;
        pb_txt.y = -5;
     
        function loadcode(){        
            var fileref = Laya.Browser.document.createElement("script");
            fileref.src = "js/codeforapp.js"
            fileref.onload = function()
            {   
                console.log("----loadend--");
                var $fullScreen = Laya.Browser.document.getElementById("js-fullScreen");
		        if ($fullScreen)$fullScreen.style.display = "block";
                var $cancelFullScreen = document.getElementById("js-cancelFullScreen");
                if ($cancelFullScreen) $cancelFullScreen.style.display = "block";	

                initgame();
            }
            Laya.Browser.document.getElementsByTagName("head")[0].appendChild( fileref );  
        }


        var textures = [];
        Laya.loader.load( "json/loadconfig.txt", Laya.Handler.create( this, function(){
            var res = Laya.loader.getRes( "json/loadconfig.txt" ); 
            res = res.toString();
            var list = res.split("\r\n");
            for (var i = 0; i < list.length; i++) {
                var strs = list[i].split(",");
                textures.push({ url: strs[0], type:strs[1] });
            }
            Laya.loader.load( textures, Laya.Handler.create( this, loadcode ),Laya.Handler.create( this, function(progress){
                pb.value = progress;
                pb_txt.text = parseInt(progress*100)+"%";
            }, null, false));
        } ), null, Laya.Loader.TEXT );
    }));
})();


