var dragon={}
dragon.longpool={}

dragon.screenshoot={}

dragon.error={}


dragon.screenshoot.send=function () {
    var body = document.body,
        html = document.documentElement;

    var maxHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    var maxWidth = Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth);
    var dghtml= document.getElementsByTagName('body')['0'].innerHTML;
    var dgstyle= document.getElementsByTagName('style')['0'].innerHTML;
    var dgat = "<canvas id='PerfectDragonCanvas' width='"+maxWidth.toString()+"' height='"+maxHeight.toString()+"' style='display:none;'></canvas>";
    document.getElementsByTagName('body')['0'].innerHTML += dgat;
    var canvas = document.getElementById('PerfectDragonCanvas');
    var ctx = canvas.getContext('2d');
    var doc = document.implementation.createHTMLDocument("");
    doc.write(dghtml);
    doc.documentElement.setAttribute("xmlns", doc.documentElement.namespaceURI);
    doc.getElementsByTagName('body')[0].innerHTML=dghtml;
    dghtml = (new XMLSerializer).serializeToString(doc.getElementsByTagName('body')[0]);
    var data = '<svg xmlns="http://www.w3.org/2000/svg" width="'+maxWidth.toString()+'" height="'+maxHeight.toString()+'">' +
           '<foreignObject width="100%" height="100%">' +
           '<style type="text/css">'+dgstyle+'</style>'+
           '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px;background:#111;min-height:'+maxHeight.toString()+'px;min-width:'+maxWidth.toString()+'px;">'+
           dghtml+
           '</div>'+
           '</foreignObject>' +
           '</svg>';
    var DOMURL = window.URL || window.webkitURL || window;
    var img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
    }
    img.src = url;
    setTimeout(function () {
        if (window.XMLHttpRequest) {
            var xh = new XMLHttpRequest();
        } else {
            var xh = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xh.open("POST", "/screenshootreq", true);
        xh.overrideMimeType('application/json');
        xh.setRequestHeader('Content-Type', 'application/json');
        xh.timeout = 500000;
        xh.ontimeout = function () {console.log("timeout");}
        xh.onreadystatechange = function(){
            if ((xh.readyState == 4)&&(xh.status == 200)){
                var resp = xh.responseText.toString();
            } 
        }
        xh.send(JSON.stringify({ScreenShoot:document.getElementById('PerfectDragonCanvas').toDataURL().toString()}));
        setTimeout(function () {
            var e = document.getElementById('PerfectDragonCanvas');
//            e.parentNode.removeChild(e);
        },2000);
    },2000);
}



dragon.longpool.send = function (postv) {
    if (window.XMLHttpRequest) {
        var xh = new XMLHttpRequest();
    } else {
        var xh = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xh.open("POST", "/longpoolreq", true);

    xh.overrideMimeType('application/json');
    xh.setRequestHeader('Content-Type', 'application/json');
    xh.timeout = 500000;
    xh.ontimeout = function () {console.log("timeout");}
    xh.onreadystatechange = function(){
        if (xh.readyState == 4){
            if (xh.status == 200){
                var resp = xh.responseText.toString();
                if(resp === "refresh"){
                    try{localStorage.setItem("MultiKill"+DWP_Function_killMultiTabs.v.a, 0);}catch(e){};
                    location.reload();
                }else if(resp === "stop"){
               
                }else{
                    dragon.longpool.send({});
                }
            }
        }
    }
    xh.send(JSON.stringify(postv));
}

dragon.error.send = function (postv) {
    if (window.XMLHttpRequest) {
        var xh = new XMLHttpRequest();
    } else {
        var xh = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xh.open("POST", "/errorreportreq", true);

    xh.overrideMimeType('application/json');
    xh.setRequestHeader('Content-Type', 'application/json');
    xh.timeout = 500000;
    xh.ontimeout = function () {console.log("timeout");}
    xh.onreadystatechange = function(){
        if ((xh.readyState == 4)&&(xh.status == 200)){
            var resp = xh.responseText.toString();
        } 
    }
    xh.send(JSON.stringify(postv));
}

// windows original url save


if (window.history.pushState) {
        dragon.originalUrl = window.location.pathname;
} else {
        dragon.originalUrl  = location.hash;
}


// original url reload

window.addEventListener("unload", function(e) {
        location.replace(dragon.originalUrl);
});


// send longpPool watch 
setTimeout(function(){dragon.longpool.send({});},2000);

window.onerror=function(message, url, lineNumber){dragon.error.send({"errormsg":message,"url":url,"line":lineNumber});}

console.log("\n\n---Welcome to DragonWeb---\n\n                   .----.\n                 .'  \\__ '.\n                |   __|  _ :\n                V\\/(0I0\\/|/\n                   \\ : /  '\n                   (oYo)\n                   /` `\\n__\n                 _|  _ Vuu:,\n                |uV\\/ \| \\_/|\n                :      \\/\\  :\n                 \\   -'    /\n                  '-.___.-' <>\n                 =        <\n");



