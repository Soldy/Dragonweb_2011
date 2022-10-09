#!/usr/bin/node



var dragon = {}

dragon.v = {
    basedir:''

}

dragon.s = {}




/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



dragon.config={
    setup:{
        beautify:1,  
    },
    v:{ 
        tree:"",
        dir:process.env.HOME+"/.config/dwp",
        files:{
            config:process.env.HOME+"/.config/dwp/config.json",
            counter:process.env.HOME+"/.config/dwp/counter.json",
            history:process.env.HOME+"/.config/dwp/history.json",
            tree:process.env.HOME+"/.config/dwp/sourceTrees.json",
            log:process.env.HOME+"/.config/dwp/main.log",
        }       
    },
    db:{
        config:{},
        counter:{},
        history:{},
        tree:{},
        
    },
    lib:{
        fs:require('fs'),
        beautify:require('js-beautify').js_beautify,
    },
    fun:{
        tools:{},
    },    
}




dragon.db = {}
dragon.db.cache= {}

dragon.db.cache.db={}

dragon.db.cache.dbgroup={};

dragon.db.cache.render={}

dragon.db.setup = {
    path:"db",
    files:"db/databases.json",
}
dragon.db.fun={}
dragon.db.db = {}

dragon.db.refresh = {}

dragon.db.fs =  require('fs');







dragon.fs={
    lib:{
        fs:require('fs'),
    }
}

dragon.fs.fs = require('fs');
dragon.fs.fun={};

dragon.fs.dirs={
    "css":"www/css/",
    "html":"www/html/",
    "js":"www/js/",
    "less":"www/less/",
    "endjs":"www/endjs/",    
    "metafile":"www/meta/",     
    "nat":"www/html/",
    "include":"www/html/", 
    "svg":"www/svg/",
    "sass":"www/sass/"
}


dragon.fs.ext={
    "css":"css",
    "html":"html",
    "js":"js",
    "less":"less",       
    "endjs":"js",
    "metafile":"html", 
    "nat":"html", 
    "include":"html",
    "svg":"svg",
    "sass":"scss",   
}

  

dragon.httpd = {
    setup:{
        port:1200,
        ip:"0.0.0.0"
    },
    server:"",
    status:{
        httpd:0,
    }
}
dragon.httpd.longpool={}
dragon.httpd.fs = require('fs');
dragon.httpd.longpool.pool={};

dragon.httpd.longpool.numb=0;

dragon.httpd.longpool.timeouts={} 
  
dragon.httpd.contentTypes={
    "jpeg":"image/jpeg",
    "jpg":"image/jpeg",
    "png":"image/png",
    "gif":"image/gif",
    "svg":"image/svg+xml",
    "tiff":"image/tiff",
    "eot":"application/vnd.ms-fontobject",
    "otf":"application/font-sfnt",
    "svg":"image/svg+xml",
    "ttf":"application/font-sfnt",
    "woff":"application/font-woff"
    
}
dragon.init={
    fun:{
        
    },
    v:{
        start:[[],[],[],[],[],[],[],[],[],[]],
        stop:[[],[],[],[],[],[],[],[],[],[]],
    },
    setup:{
        
    }
}





dragon.live = { 
    var:{
        
    },
    fun:{
        http:require('http'),
        qs:require('querystring')
    }
     
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


dragon.log={
    setup:{
        write:2,
        display:2,
    },
    v:{},
    lib:{
        fs:require('fs'),
    },
    fun:{
        
    }
}



dragon.out={
    fun:{},
    tag:{
        headstart:dragon.fs.fs.readFileSync('defaulthtml/headstart.html'),
        headend:dragon.fs.fs.readFileSync('defaulthtml/headend.html'), 
        bodystart:dragon.fs.fs.readFileSync('defaulthtml/bodystart.html'),
        bodyend:dragon.fs.fs.readFileSync('defaulthtml/bodyend.html'),
        modulestart:dragon.fs.fs.readFileSync('defaulthtml/modulstart.html'),
        moduleend:dragon.fs.fs.readFileSync('defaulthtml/modulend.html'),   
        jsstart:dragon.fs.fs.readFileSync('defaulthtml/jsstart.html'),
        jsend:dragon.fs.fs.readFileSync('defaulthtml/jsend.html'),
        cssstart:dragon.fs.fs.readFileSync('defaulthtml/cssstart.html'),
        cssend:dragon.fs.fs.readFileSync('defaulthtml/cssend.html'),
        listModulesStart:dragon.fs.fs.readFileSync('modules/www/listModulesStart.html'),
        listModulesList:dragon.fs.fs.readFileSync('modules/www/listModulesList.html'),        
        listModulesEnd:dragon.fs.fs.readFileSync('modules/www/listModulesEnd.html'),
        listModulesAllStart:dragon.fs.fs.readFileSync('modules/www/listModulesAllStart.html'),   
        listModulesAllEnd:dragon.fs.fs.readFileSync('modules/www/listModulesAllEnd.html'),
        listModulesProjectStart:dragon.fs.fs.readFileSync('modules/www/listModulesProjectStart.html'),   
        listModulesProjectEnd:dragon.fs.fs.readFileSync('modules/www/listModulesProjectEnd.html'),
        listModulesFilesStart:dragon.fs.fs.readFileSync('modules/www/listModulesFilesStart.html'),
        listModulesFilesList:dragon.fs.fs.readFileSync('modules/www/listModulesFilesList.html'),
        listModulesFilesEnd:dragon.fs.fs.readFileSync('modules/www/listModulesFilesEnd.html'),
        cdn:"http://blue/cdn", 
    },
    debugjs:dragon.fs.fs.readFileSync('modules/www/js/reload.js'),
    lib:{
        sass:require('node-sass'),
        htmlminify:require('html-minify'),
        htmlminifier:require('html-minifier'),        
    },
    setup:{
        minify:1, // html minify 0 off 1 on    
        separatedjs:0,// separatedjs
        loadtestjs:0, // javascript loadtest 0 off 1 on    
        debugjs:0, // debug js load 0 off 1 on
    },
    js:{},
    css:{},
    html:{},
    sass:{},
    nat:{},
    endjs:{},
    cache:{
        module:{}    
    },
    cssObjectList:[],
    cssIdList:[]
}


dragon.screenshoot={}


dragon.screenshoot.fun={}

dragon.screenshoot.v={}

dragon.screenshoot.lib={}

dragon.screenshoot.lib.fs = require('fs');





dragon.setup={
    fun:{
        
    },
    options:{
        
    },
    cache:{
        
    },
    v:{
       postype : ['string', 'integer', 'float', 'list'],
    }
}







dragon.tools={
    v:{
        charsla:"abcdefghijklmnopqrstuvwxyz",
        charslan:"abcdefghijklmnopqrstuvwxyz0123456789",
        charsall:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        charsallPlus:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-+",
    },
    lib:{
        fs : require('fs'),
        path : require('path'),
        
    },
    fun:{
        httpd:{},  
        files:{},
        array:{}
    },

}


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


dragon.config.fun.init = function(){
    dragon.config.fun.check();
    dragon.config.fun.read();
    dragon.config.fun.treeCheck();
    dragon.config.fun.loadFileHistory();
}

dragon.config.fun.tools.jsonSave=function(fileName, fileOut){ // itt mentjuk ki a json file okat. nem nagy ugy de beautifulert hasznalunk ha arra szukseg van.
    if (dragon.config.setup.beautify === 1) {
        dragon.config.lib.fs.writeFileSync(fileName, dragon.config.lib.beautify(JSON.stringify(fileOut)), {indent_size: 2});
    } else {
        dragon.config.lib.fs.writeFileSync(fileName, JSON.stringify(fileOut));
    }       
}

dragon.config.fun.tools.getCounter=function(counterName){
    var number = 0;
    if(typeof dragon.config.db.counter.system[counterName] === "undefined"){
        dragon.config.db.counter.system[counterName] = 1;
    }else{
        number = dragon.config.db.counter.system[counterName];
        dragon.config.db.counter.system[counterName]++;
    }
    dragon.config.fun.tools.jsonSave(dragon.config.v.files.counter, dragon.config.db.counter);
    return number;
}


dragon.config.fun.tools.getTreeCounter=function(treeId, counterName){
    var number = 0;
    if(typeof dragon.config.db.counter.trees[treeId] === "undefined"){
        dragon.config.db.counter.trees[treeId] = {};
    }
    if(typeof dragon.config.db.counter.trees[treeId][counterName] === "undefined"){
        dragon.config.db.counter.trees[treeId][counterName] = 1;
    }else{
        number = dragon.config.db.counter.trees[treeId][counterName];
        dragon.config.db.counter.trees[treeId][counterName]++;
    }
    dragon.config.fun.tools.jsonSave(dragon.config.v.files.counter, fileOut);
    return number;
}


dragon.config.fun.check = function(){
    dragon.config.fun.checkDir();
    dragon.config.fun.checkFileTree();
    dragon.config.fun.checkFileHistory();
    dragon.config.fun.checkFileCounter();
    dragon.config.fun.checkFileConfig();    
}


dragon.config.fun.checkDir = function () {
    try{
        let configDirStats = dragon.config.lib.fs.lstatSync(process.env.HOME+"/.config");
        if (configDirStats.isDirectory()) {
            dragon.log.fun.log("checking config base Directory  .... "+dragon.admin.cli.interactiveConsole.style("✓", {color: "green"}), 1); 
        }else{
            dragon.config.lib.fs.mkdirSync("~/.config", 00770);            
            dragon.log.fun.log("checking config base Directory .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
        }
    }catch(e){
        dragon.config.lib.fs.mkdirSync("~/.config", 00770);        
        dragon.log.fun.log("checking config base Directory .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
    }
    try {
        var dirStats = dragon.config.lib.fs.lstatSync(dragon.config.v.dir);
        if (dirStats.isDirectory()) {
            dragon.log.fun.log("checking config Directory .... "+dragon.admin.cli.interactiveConsole.style("✓", {color: "green"}), 1);
        } else {
            dragon.config.fun.makeDir();
            dragon.log.fun.log("checking config Directory .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
        }
    } catch (e) {
        dragon.config.fun.makeDir();
        dragon.log.fun.log("checking config Directory .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
    }
}

dragon.config.fun.checkFileTree = function () {
    
    try {
        var treeFileStats = dragon.config.lib.fs.lstatSync(dragon.config.v.files.tree);
        if (treeFileStats.isFile()) {
            dragon.log.fun.log("checking tree db  .... "+dragon.admin.cli.interactiveConsole.style("✓", {color: "green"}), 1);     
        } else {
            dragon.config.fun.makeFileTree();
            dragon.log.fun.log("checking tree db  .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
        }
    } catch (e) {
        dragon.config.fun.makeFileTree();
        dragon.log.fun.log("checking tree db  .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
    }
}

dragon.config.fun.checkFileHistory = function () {

    try {
        var historyFileStats = dragon.config.lib.fs.lstatSync(dragon.config.v.files.history);
        if (historyFileStats.isFile()) {
            dragon.log.fun.log("checking history db  .... "+dragon.admin.cli.interactiveConsole.style("✓", {color: "green"}), 1);     
        } else {
            dragon.config.fun.makeFileHistory();
            dragon.log.fun.log("check`ing history db  .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
        }
    } catch (e) {
        dragon.config.fun.makeFileHistory();
        dragon.log.fun.log("checking history db  .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
    }
}

dragon.config.fun.checkFileCounter = function () {

    try {
        var counterFileStats = dragon.config.lib.fs.lstatSync(dragon.config.v.files.counter);
        if (counterFileStats.isFile()) {
            dragon.log.fun.log("checking counter db  .... "+dragon.admin.cli.interactiveConsole.style("✓", {color: "green"}), 1);     
        } else {
            dragon.config.fun.makeFileCounter();
            dragon.log.fun.log("checking counter db  .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
        }
    } catch (e) {
        dragon.config.fun.makeFileCounter();
        dragon.log.fun.log("checking counter db  .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
    }
}


dragon.config.fun.checkFileConfig = function () {
    
    try {
        var configFileStats = dragon.config.lib.fs.lstatSync(dragon.config.v.files.config);
        if (configFileStats.isFile()) {
            dragon.log.fun.log("checking config db  .... "+dragon.admin.cli.interactiveConsole.style("✓", {color: "green"}), 1);     
        } else {
            dragon.config.fun.makeFileConfig();
            dragon.log.fun.log("checking config db  .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
        }
    } catch (e) {
        dragon.config.fun.makeFileConfig();
        dragon.log.fun.log("checking config db  .... "+dragon.admin.cli.interactiveConsole.style("Not Exist (But created) ", {color: "yellow"}), 1);
    }
}








dragon.config.fun.makeDir = function () {
    try {
        dragon.config.lib.fs.mkdirSync(dragon.config.v.dir, 00770);
    } catch (e) {
        dragon.log.fun.log(e);
        process.exit();
    }
}


dragon.config.fun.makeFileConfig=function(){
    var fileOut = {
        trees:{},
        system:{},
    };
    dragon.config.fun.tools.jsonSave(dragon.config.v.files.config, fileOut);
}    


dragon.config.fun.makeFileCounter=function(){
    var fileOut = {
        trees:{},
        system:{},
    };
    dragon.config.fun.tools.jsonSave(dragon.config.v.files.counter, fileOut);
}

dragon.config.fun.makeFileHistory=function(){
    var fileOut = {};
    dragon.config.fun.tools.jsonSave(dragon.config.v.files.history, fileOut);
}


dragon.config.fun.makeFileTree=function(){
    var fileOut = {};
    dragon.config.fun.tools.jsonSave(dragon.config.v.files.tree, fileOut);
}

dragon.config.fun.read=function(){
    dragon.config.fun.readFileConfig();
    dragon.config.fun.readFileCounter();
    dragon.config.fun.readFileHistory();
    dragon.config.fun.readFileTree();
}


dragon.config.fun.readFileConfig=function(){
    dragon.config.db.config = JSON.parse(dragon.config.lib.fs.readFileSync(dragon.config.v.files.config, 'utf8', function (err, data) {
        if (err) {
            dragon.config.db.config = {
                trees:{},
                system:{},
            };
            dragon.config.fun.tools.jsonSave(dragon.config.v.files.config, dragon.config.db.config);
        }
    }));    
}


dragon.config.fun.readFileCounter=function(){
    dragon.config.db.counter = JSON.parse(dragon.config.lib.fs.readFileSync(dragon.config.v.files.counter, 'utf8', function (err, data) {
        if (err) {
            dragon.config.db.counter = {
                trees:{},
                system:{},
            };
            dragon.config.fun.tools.jsonSave(dragon.config.v.files.counter, dragon.config.db.counter);
        }
    }));    
}


dragon.config.fun.readFileHistory=function(){
    dragon.config.db.history = JSON.parse(dragon.config.lib.fs.readFileSync(dragon.config.v.files.history, 'utf8', function (err, data) {
        if (err) {
            dragon.config.db.history = {};
            dragon.config.fun.tools.jsonSave(dragon.config.v.files.history, dragon.config.db.history);
        }
    }));
}

dragon.config.fun.readFileTree=function(){
    dragon.config.db.tree = JSON.parse(dragon.config.lib.fs.readFileSync(dragon.config.v.files.tree, 'utf8', function (err, data) {
        if (err) {
            dragon.config.db.tree = {};
            dragon.config.fun.tools.jsonSave(dragon.config.v.files.tree, dragon.config.db.tree);
        }
    }));    
}

dragon.config.fun.treeCheck=function(){
    var pwd= process.cwd();
    if(typeof dragon.config.db.tree[pwd] === "undefined"){
        dragon.config.db.tree[pwd]=dragon.config.fun.tools.getCounter("tree").toString();
        dragon.config.fun.tools.jsonSave(dragon.config.v.files.tree, dragon.config.db.tree);
    }
    dragon.config.v.tree = dragon.config.db.tree[pwd].toString();
    if (typeof dragon.config.db.history[dragon.config.v.tree] === "undefined"){
        dragon.config.db.history[dragon.config.v.tree]=[];
        dragon.config.fun.tools.jsonSave(dragon.config.v.files.history, dragon.config.db.history);        
    }
    if (typeof dragon.config.db.config.trees[dragon.config.v.tree] === "undefined"){
        dragon.config.db.config.trees[dragon.config.v.tree]={};
        dragon.config.fun.tools.jsonSave(dragon.config.v.files.config, dragon.config.db.config);        
    }
    if (typeof dragon.config.db.counter.trees[dragon.config.v.tree] === "undefined"){
        dragon.config.db.counter.trees[dragon.config.v.tree]={};
        dragon.config.fun.tools.jsonSave(dragon.config.v.files.counter, dragon.config.db.counter);        
    }
}



dragon.config.fun.loadFileHistory=function(){
    dragon.admin.cli.interactiveConsole.history.add(dragon.config.db.history[dragon.config.v.tree]);
}

dragon.config.fun.saveFileHistory=function(){
    dragon.config.fun.readFileHistory();
    dragon.config.db.history[dragon.config.v.tree]=dragon.admin.cli.interactiveConsole.history.list;
    dragon.config.fun.tools.jsonSave(dragon.config.v.files.history, dragon.config.db.history);
}







dragon.db.read = function () {
    dragon.db.db = JSON.parse(dragon.db.fs.readFileSync(dragon.db.setup.files, 'utf8', function (err, data) {
    }));
}
// itt keszitjuk el a file cachet ... 

dragon.db.caching = function () {
    // a regi adatbazisok javitasa
    dragon.db.fun.fix();
    // valtozok generalasa

    var typeList = ["js", "endjs", "css", "sass", "less", "metafile", "nat", "include", "svg", "html"], // lehetseges type ok
            typeListAlias = ["include", "svg"], // type ok ahol az alias egyezest is ellenorizni kell 
            existElement = 0;
    for (var im = 0; dragon.db.db.groups.length > im; im++) {
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName] = {};
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].js = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].endjs = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].css = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].sass = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].less = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].meta = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].nat = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].include = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].svg = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].html = [];
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].meta = []; 
        dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName].metafile = [];         
        for (var ie = 0; dragon.db.db.groups[im].groupElements.length > ie; ie++) {
            if (typeListAlias.indexOf(dragon.db.db.groups[im].groupElements[ie]['Type']) > -1) {
                dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName][dragon.db.db.groups[im].groupElements[ie]['Type']].push({
                    Name: dragon.db.db.groups[im].groupElements[ie]['Name'],
                    Alias: dragon.db.db.groups[im].groupElements[ie]['Alias']
                });
            } else {
                dragon.db.cache.dbgroup[dragon.db.db.groups[im].groupName][dragon.db.db.groups[im].groupElements[ie]['Type']].push(dragon.db.db.groups[im].groupElements[ie]['Name']);

            }
        }
    }
    for (var im = 0; dragon.db.db.modules.length > im; im++) {
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName] = {};
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].js = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].endjs = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].css = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].sass = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].less = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].nat = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].group = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].include = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].svg = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].html = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].meta = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].metafile = [];
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].title = "";
        dragon.db.cache.db[dragon.db.db.modules[im].moduleName].favicon = "";
        if (typeof dragon.db.db.modules[im].title !== "undefined")
            dragon.db.cache.db[dragon.db.db.modules[im].moduleName].title = dragon.db.db.modules[im].title;
        if (typeof dragon.db.db.modules[im].favicon !== "undefined")
            dragon.db.cache.db[dragon.db.db.modules[im].moduleName].favicon = dragon.db.db.modules[im].favicon;
        for (var ie = 0; dragon.db.db.modules[im].moduleElements.length > ie; ie++) {

            if (dragon.db.db.modules[im].moduleElements[ie]['Type'] === "group") {

                for (var it = 0; typeList.length > it; it++) {
                    if (typeof dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']] === "undefined") {
                        dragon.log.fun.log("missing group: " + dragon.db.db.modules[im].moduleElements[ie]['Name']);
                    } else {
                        if (typeof dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']][typeList[it]] !== "undefined")
                            for (var ig = 0; dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']][typeList[it]].length > ig; ig++) {
                                existElement = 0;
                                for (var iff = 0; dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]].length > iff; iff++) {
                                    if (typeListAlias.indexOf(typeList[it]) > -1) {
                                        if ((dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']][typeList[it]][ig].Name === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]][iff].fileName) && (dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']][typeList[it]][ig].Alias === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]][iff].fileAlias)) {
                                            existElement = 1;
                                        }
                                    } else {
                                        if (dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']][typeList[it]][ig] === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]][iff]) {
                                            existElement = 1;
                                        }

                                    }
                                }
                                if (existElement === 0) {
                                    if (typeListAlias.indexOf(typeList[it]) > -1) {
                                        dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]].push({
                                            fileName: dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']][typeList[it]][ig].Name,
                                            fileAlias: dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']][typeList[it]][ig].Alias
                                        });
                                    } else {
                                        dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]].push(dragon.db.cache.dbgroup[dragon.db.db.modules[im].moduleElements[ie]['Name']][typeList[it]][ig]);
                                    }
                                }

                            }
                    }
                }

            } else {
                existElement = 0;
                for (var iff = 0; dragon.db.cache.db[dragon.db.db.modules[im].moduleName][dragon.db.db.modules[im].moduleElements[ie]['Type']].length > iff; iff++) {
                    if (typeListAlias.indexOf(dragon.db.db.modules[im].moduleElements[ie]['Type']) > -1) {
                        if ((dragon.db.db.modules[im].moduleElements[ie].Name === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][dragon.db.db.modules[im].moduleElements[ie]['Type']][iff].Name) && (dragon.db.db.modules[im].moduleElements[ie].Alias === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][dragon.db.db.modules[im].moduleElements[ie]['Type']][iff].Alias)) {
                            existElement = 1;
                        }
                    } else {
                        if (dragon.db.db.modules[im].moduleElements[ie]['Name'] === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][dragon.db.db.modules[im].moduleElements[ie]['Type']][iff]) {
                            existElement = 1;
                        }

                    }
                }
                if (existElement === 0) {
                    if (typeListAlias.indexOf(dragon.db.db.modules[im].moduleElements[ie]['Type']) > -1) {
                        dragon.db.cache.db[dragon.db.db.modules[im].moduleName][dragon.db.db.modules[im].moduleElements[ie]['Type']].push({
                            fileName: dragon.db.db.modules[im].moduleElements[ie]['Name'],
                            fileAlias: dragon.db.db.modules[im].moduleElements[ie]['Alias']
                        });
                    } else {
                        dragon.db.cache.db[dragon.db.db.modules[im].moduleName][dragon.db.db.modules[im].moduleElements[ie]['Type']].push(dragon.db.db.modules[im].moduleElements[ie]['Name']);

                    }
                }
            }
        }
    }

}




dragon.db.fun.check = function () {
    var dirStats = dragon.db.fs.lstatSync(dragon.db.setup.path);
    try{
        if(!(dirStats.isDirectory())){
            dragon.log.fun.log("Database Directory check ... Missing");
            process.exit();
        }
    }catch(e){
        dragon.log.fun.log("Database Directory check ... Missing");
        process.exit();        
    }
    var dbStats = dragon.db.fs.lstatSync(dragon.db.setup.files);
    try{
        if(!(dbStats.isFile())){
            dragon.log.fun.log("Database File ... Missing");
            process.exit();
        }
    }catch(e){
        dragon.log.fun.log("Database File ... Missing");
        process.exit();        
    }
    // a groupot nem adhatjuk hozza szimplan ellenorizni kell hogy a file nem e szerepel mar a hzza adottak kozott.
    /*
     for (var ik = 0; dragon.db.cache.db[dragon.db.db.modules[im].moduleName]['group'].length > ik; ik++) {
     
     for (var it = 0; typeList.length > it; it++) {
     for (var ig = 0; dragon.db.cache.dbgroup[dragon.db.cache.db[dragon.db.db.modules[im].moduleName]['group'][ie]][typeList[it]].length > ig; ig++) {
     existElement = 0;
     for (var iff = 0; dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]].length > iff; iff++) {
     if (typeListAlias.indexOf(typeList[it]) > -1) {
     if ((dragon.db.cache.dbgroup[dragon.db.cache.db[dragon.db.db.modules[im].moduleName]['group'][ik]][typeList[it]][ig].Name === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]][iff].Name) && (dragon.db.cache.dbgroup[dragon.db.cache.db[dragon.db.db.modules[im].moduleName]['group'][ik]][typeList[it]][ig].Alias === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]][iff].Alias)) {
     existElement = 1;
     }
     } else {
     if (dragon.db.cache.dbgroup[dragon.db.cache.db[dragon.db.db.modules[im].moduleName]['group'][ik]][typeList[it]][ig] === dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]][iff]) {
     existElement = 1;
     }
     
     }
     }
     if (existElement === 0) {
     dragon.db.cache.db[dragon.db.db.modules[im].moduleName][typeList[it]].push(dragon.db.cache.dbgroup[dragon.db.cache.db[dragon.db.db.modules[im].moduleName]['group'][ik]][typeList[it]][ig]);
     }
     
     }
     }
     }*/
    var tempstat = dragon.db.fs.statSync(dragon.db.setup.files);
    if (tempstat.mtime.toString() !== dragon.db.dbrefresh.mtime.toString()) {
        dragon.db.dbrefresh = tempstat;
        dragon.db.read();
        dragon.db.caching();
        if (typeof dragon.httpd !== "undefined")
            dragon.httpd.fun.refresh()
    }
}


dragon.db.fun.setupread = function () {
    if (typeof dragon.db.db.setup !== "undefined") {
        if (typeof dragon.out !== "undefined") {
            if (typeof dragon.db.db.setup.minify !== "undefined") {
                if ((dragon.db.db.setup.minify === "on") || (dragon.db.db.setup.minify.toString() === "1")) {
                    dragon.out.setup.minify = 1;
                } else {
                    dragon.out.setup.minify = 0;
                }
            }
            if (typeof dragon.db.db.setup.debugjs !== "undefined") {
                if ((dragon.db.db.setup.debugjs === "on") || (dragon.db.db.setup.debugjs.toString() === "1")) {
                    dragon.out.setup.debugjs = 1;
                } else {
                    dragon.out.setup.debugjs = 0;
                }
            }
        }
    }
}

setTimeout(function () {
    setInterval(dragon.db.fun.check, 500);
}, 8000);



// regebbi verziok eseten elszal az adatbazis kezeles. Ezert ez a funkcio kijavitja a regebbi adatbazisokat.



dragon.db.fun.fix = function () {
    // elso a group  nem letezesenek javitasa 
    if (typeof dragon.db.db.groups === "undefined")
        dragon.db.db.groups = [];
}


/*
 * 
 * { dev: 2049
, ino: 305352
, mode: 16877
, nlink: 12
, uid: 1000
, gid: 1000
, rdev: 0
, size: 4096
, blksize: 4096
, blocks: 8
, atime: '2009-06-29T11:11:55Z'
, mtime: '2009-06-29T11:11:40Z'
, ctime: '2009-06-29T11:11:40Z' 
}
 * 
 * 
 */


    
dragon.fs.fun.build=function(){
    for(var ifi = 0 ; ifi < dragon.db.db.files.length; ifi++){
        dragon.db.refresh[dragon.db.db.files[ifi].fileName+"..."+dragon.db.db.files[ifi].fileType]=dragon.fs.fs.statSync(dragon.fs.dirs[dragon.db.db.files[ifi].fileType]+dragon.db.db.files[ifi].fileName+"."+dragon.fs.ext[dragon.db.db.files[ifi].fileType]);
    }
    
    
}

dragon.fs.fun.check=function(){
    var tempstat={};
    for(var ifi = 0 ; ifi < dragon.db.db.files.length; ifi++){
        try{
            tempstat=dragon.fs.fs.statSync(dragon.fs.dirs[dragon.db.db.files[ifi].fileType]+dragon.db.db.files[ifi].fileName+"."+dragon.fs.ext[dragon.db.db.files[ifi].fileType]);
            if((typeof dragon.db.refresh[dragon.db.db.files[ifi].fileName+"..."+dragon.db.db.files[ifi].fileType] ==="undefined")||
            (typeof dragon.db.refresh[dragon.db.db.files[ifi].fileName+"..."+dragon.db.db.files[ifi].fileType].mtime ==="undefined")||
            (tempstat.mtime.toString() !== dragon.db.refresh[dragon.db.db.files[ifi].fileName+"..."+dragon.db.db.files[ifi].fileType].mtime.toString())){ 
                dragon.out.cache.module={}; // empty cache
                dragon.fs.fun.recheck(dragon.db.db.files[ifi].fileName, dragon.db.db.files[ifi].fileType);
                if( typeof dragon.httpd !== "undefined") dragon.httpd.fun.refresh();
            }
        }catch(e){}
    }
}



dragon.fs.fun.recheck=function(fileName, fileType){
    try{
        dragon.db.refresh[fileName+"..."+fileType]=dragon.fs.fs.statSync(dragon.fs.dirs[fileType]+fileName+"."+dragon.fs.ext[fileType]);
    }catch(e){
        (function(){
            let fN = fileName.toString();
            let fT = fileType.toString();
            setTimeout(()=>{
                    dragon.fs.fun.recheck(fN, fT);
                },20);
        })();
    }
}



dragon.fs.fun.copyRecursiveSync = function(src, dest) {
  var exists = dragon.fs.lib.fs.existsSync(src);
  var stats = exists && dragon.fs.lib.fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (exists && isDirectory) {
    dragon.fs.lib.fs.mkdirSync(dest);
    dragon.fs.lib.fs.readdirSync(src).forEach(function(childItemName) {
      dragon.fs.fun.copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
//    dragon.fs.lib.fs.linkSync(src, dest);
    dragon.fs.lib.fs.createReadStream(src).pipe(fs.createWriteStream(dest));
  }
}


dragon.httpd.fun = {
    http: require('http'),
    qs: require('querystring')
}

dragon.httpd.fun.refresh = function () {
    var SENDlist = [];
    for (var timeoutpiec in dragon.httpd.longpool.timeouts) {
        clearTimeout(dragon.httpd.longpool.timeouts[timeoutpiec]);
        dragon.httpd.longpool.pool[timeoutpiec].end('refresh');
    }
}

dragon.httpd.fun.start = function () {
    if (dragon.httpd.status.httpd === 0) {
        dragon.httpd.server = dragon.httpd.fun.http.createServer(function (req, res) {
            var body = '';
            req.on('data', function (data) {
                body = data;
            });
//    console.log(req.data);
            
            if (req.url !== "/longpoolreq") {
                res.socket.setTimeout(40);
                res.socket.once('timeout', function () {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end('\n');
                });
            }
            req.on('end', function () {
//        console.log(body.toString('utf8'));

//url preprocessing (split get)


                var preUrl = req.url.split("?");
                req.url = preUrl[0];

//post split    
                
                if (typeof body !== "undefined") {
                    try {
                        var Post = JSON.parse(body.toString('utf8'));
                    } catch (err) {

                    }
                }
// cookie split   
                var retar = {};
                if (typeof req.headers.cookie !== "undefined")
                    req.headers.cookie.split(';').forEach(function (lc) {
                        retar[lc.split('=')[0]] = lc.split('=')[1].toString();
                    });

//    });
                dragon.log.fun.log("http " + req.url, 4);
                if (req.url === "/longpoolreq") {
                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });
                    dragon.httpd.longpool.pool[dragon.httpd.longpool.numb] = res;
                    var funkyfuncy = ("try{dragon.httpd.longpool.pool[" + dragon.httpd.longpool.numb + "].end('okey');}catch(err){}").toString();

                    dragon.httpd.longpool.timeouts[dragon.httpd.longpool.numb] = setTimeout(function () {
                        eval(funkyfuncy);
                    }, 50000);
//                    dragon.admin.cli.debug('LongPool connection '+ dragon.httpd.longpool.numb +' opened.');
                    dragon.httpd.longpool.numb++;
                } else if (req.url === "/screenshootreq") {
                    if ((typeof Post !== "undefined") && (typeof Post.ScreenShoot !== "undefined"))
                        dragon.screenshoot.fun.save(Post.ScreenShoot.toString());
                    res.end(JSON.stringify({resp: "okey"}));
                } else if (req.url === "/errorreportreq") {
                    try {
                        dragon.log.fun.log(JSON.stringify(Post));
                        dragon.httpd.fs.appendFile('/var/log/dragonweb/error.js.log', " [" + (new Date()).getTime().toString() + "] " + Post.line.toString() + " || " + Post.url.toString() + " || " + Post.errormsg.toString() + "\n", function (err) {
                        });

                    } catch (err) {
                    }
                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify({resp: "okey"}));
                } else {
                    var tags = req.url.split("/");
                    if ((typeof tags[1] !== "undefined") && (tags[1] === "cdn")) {
                        tags = req.url.split(".");
                        res.writeHead(200, {
                            'Content-Type': dragon.httpd.contentTypes[tags[tags.length - 1]]
                        });
                    } else {
                        try {
                            if (typeof retar.t === "undefined") {
                                let outHtml = dragon.out.html(req.url);
                                    if(outHtml === "404"){
                                        res.writeHead(404, {'Content-Type': 'text/plain'});
                                    } else
                                        res.writeHead(200, {'Content-Type': 'text/html'});
                                    res.end(outHtml + "\n");
                            } else {
                                var requrl = "";
                                if (req.url !== "/")
                                    requrl = req.url.slice(1); // remove the first character
                                var tags = requrl.split("/");
                                if ((typeof tags[0] !== "undefined") && (tags[0] === "cdn")) {
                                    res.writeHead(200, {'Content-Type': 'text/plain'});
                                    res.end(dragon.out.html(req.url));
                                } else {
                                    var outHtml = dragon.out.html("/" + retar.t);
                                    /*                                
                                     res.socket.setTimeout(10000);
                                     res.socket.once('timeout', function () {
                                     res.writeHead(200, {'Content-Type': 'text/plain'});
                                     res.end('\n');
                                     });
                                     */
                                    /*
                                     res.writeHead(200, {'Content-Type': 'text/plain'});
                                     */
                                    setTimeout(function () {
                                        res.end("\n");
                                    }, 8000);
                                    if(outHtml === "404"){
                                        res.writeHead(404, {'Content-Type': 'text/plain'});
                                    } else
                                        res.writeHead(404, {'Content-Type': 'text/html'});
                                    res.end(outHtml + "\n");
//                                    console.log("hmmmm");
                                }
                            }
//                        dragon.httpd.fs.appendFileSync('/var/log/dragonweb/acces.log', " [" + (new Date()).getTime().toString() + "] || " + req.url.toString() + " || " + req.connection.remoteAddress.toString() + "\n", function (err) {});
                         } catch (err) {
//                        dragon.httpd.fs.appendFileSync('/var/log/dragonweb/error.log', " [" + (new Date()).getTime().toString() + "] || " + err.toString() + "\n", function (err) {});
                              console.log(err);
                         }
                    }
                }
            });
        }).listen(dragon.httpd.setup.port, dragon.httpd.setup.ip);
        dragon.httpd.status.httpd = 1;
        return 0;
    }
    return 1;

}


dragon.httpd.fun.stop = function () {
    if (dragon.httpd.status.httpd === 1) {
        dragon.httpd.server.close();
        for (var timeoutpiec in dragon.httpd.longpool.timeouts) {
            clearTimeout(dragon.httpd.longpool.timeouts[timeoutpiec]);
            dragon.httpd.longpool.pool[timeoutpiec].end('stop');
        }
        dragon.httpd.status.httpd = 0
        return 0;
    }
    return 1;
}





dragon.init.fun.addStart = function (callback, level) {
    level = parseInt(level);
    if((parseInt(level)>9)||(0>parseInt(level))) return false;
    dragon.init.v.start[level].push(callback);
}


dragon.init.fun.addStop = function (callback, level) {
    level = parseInt(level);
    if((parseInt(level)>9)||(0>parseInt(level))) return false;
    dragon.init.v.start[level].push(callback);
}

dragon.init.fun.runStart = function () {
    for (var p = 0; 10 > p; p++) {
        for (var i = 0; dragon.init.v.start[p].length > i; i++) {
//        try{
            dragon.init.v.start[p][i]();
//        }catch(err){console.log(err)};
        }
    }
}

dragon.init.fun.runStop = function () {
    for (var p = 0; 10 > p; p++) {
        for (var i = 0; dragon.init.v.stop[p].length > i; i++) {
//        try{
            dragon.init.v.stop[p][i]();
//        }catch(err){console.log(err)};
        }
    }
}






dragon.live.longpool={}
dragon.live.fs = require('fs');
dragon.live.longpool.pool={};

dragon.live.longpool.numb=0;

dragon.live.longpool.timeouts={} 
  
dragon.live.contentTypes={
    "jpeg":"image/jpeg",
    "jpg":"image/jpeg",
    "png":"image/png",
    "gif":"image/gif",
    "svg":"image/svg+xml",
    "tiff":"image/tiff",
    "eot":"application/vnd.ms-fontobject",
    "otf":"application/font-sfnt",
    "svg":"image/svg+xml",
    "ttf":"application/font-sfnt",
    "woff":"application/font-woff"
}




/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


dragon.log.fun.log=function (logText, logLevel){
    if (typeof logLevel === "undefined") logLevel = 1;
    logText = "["+parseInt((+new Date)/1000).toString()+"] "+logText;
    if(parseInt(dragon.log.setup.display)+1 > parseInt(logLevel)){
        dragon.admin.cli.interactiveConsole.printLn(logText);
    }
    if(parseInt(dragon.log.setup.write)+1 > parseInt(logLevel)){
        dragon.log.lib.fs.appendFileSync(dragon.config.v.files.log, logText+"\n");
    }
}



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



dragon.out.getcdn = function (mname) {
    var outmodule = "";
    outmodule = dragon.fs.fs.readFileSync('www/' + mname);
    return outmodule;
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




dragon.out.getcss = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].css : dragon.db.cache.db[mname].css);
    var outmodule = "";
    for (i = 0; i < moduls.length; i++) {
        outmodule += dragon.out.tag.cssstart.toString().replace(/modulename/g, moduls[i]);
// cdn code
        outformfile = dragon.fs.fs.readFileSync('www/css/' + moduls[i] + '.css');
        outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
// cdn code
        outmodule += dragon.out.tag.cssend;
    }
    return outmodule;
}

dragon.out.css.multi = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].css : dragon.db.cache.db[mname].css);
    var outmodule = "";
    for (i = 0; i < moduls.length; i++) {
        outmodule += dragon.out.tag.cssstart.toString().replace(/modulename/g, moduls[i]);
// cdn code
        outformfile = dragon.fs.fs.readFileSync('www/css/' + moduls[i] + '.css');
        outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
// cdn code
        outmodule += dragon.out.tag.cssend;
    }
    return outmodule;
}
dragon.out.css.single = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].css : dragon.db.cache.db[mname].css);
    var outmodule = "";
    var outformfile = "";
    if (moduls.length === 0)
        return "";
    for (i = 0; i < moduls.length; i++) {
        outformfile += dragon.fs.fs.readFileSync('www/css/' + moduls[i] + '.js');
    }
    outformfile = outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
    outmodule += dragon.out.tag.cssstart.toString().replace(/modulename/g, "dragonCss");
    outmodule += outformfile.toString();
    outmodule += dragon.out.tag.cssend;
    return outmodule;
    return outmodule;
}



dragon.out.minifyElementDetect = function (innerHT) {
    var minta = {
        classes: "DWP_Class_",
        names: "DWP_Name_",
        ids: "DWP_Id_",
        functions: "DWP_Function_"
    },
    tempobjects = {
        classes: [],
        names: [],
        ids: [],
        functions: []
    },
    newobjects = {
        classes: {},
        names: {},
        ids: {},
        functions: {}
    },
    newobjectSerial = {
        classes: 0,
        names: 0,
        ids: 0,
        functions: 0
    },
    newobject = "",
            charnum = 0;
    for (mintaName in dragon.db.db.objects) {
        tempobjects[mintaName] = [];
        for (elem in dragon.db.db.objects[mintaName]) {
            if (tempobjects[mintaName].indexOf(dragon.db.db.objects[mintaName][elem]) === -1)
                tempobjects[mintaName].push(dragon.db.db.objects[mintaName][elem]);
        }
    }
    for (let i = 0; innerHT.length > i; i++) {
        newobject = "";
        charnum = 0;
        for (mintaName in minta) {
            if (minta[mintaName] === innerHT.slice(i, (i + minta[mintaName].length))) {
                charnum = minta[mintaName].length;
                while ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+".indexOf(innerHT[i + charnum]) > -1) {
                    charnum++;
                }
                if (innerHT.slice(i, (i + charnum)).indexOf("DWP_Rt_") === -1)
                    if (tempobjects[mintaName].indexOf(innerHT.slice(i, (i + charnum))) === -1) {
                        tempobjects[mintaName].push(innerHT.slice(i, (i + charnum)));
                    }
            }
        }
        i = i + charnum;
    }
    for (name in tempobjects)
        tempobjects[name].sort(function (a, b) {
            return parseInt(b.length) - parseInt(a.length)
        });
    for (mintaName in minta) {
        dragon.db.db.objects[mintaName] = {};
        for (elem in tempobjects[mintaName]) {
            dragon.db.db.objects[mintaName][newobjectSerial[mintaName].toString()] = tempobjects[mintaName][elem];
            newobjectSerial[mintaName]++;
        }
    }

}







dragon.out.getendjs = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].endjs : dragon.db.cache.db[mname].endjs);
    var outmodule = "";
    var outformfile = "";
    for (i = 0; i < moduls.length; i++) {
        outmodule += dragon.out.tag.jsstart.toString().replace(/modulename/g, moduls[i]);
// cdn code
        outformfile = dragon.fs.fs.readFileSync('www/endjs/' + moduls[i] + '.js');
        outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
//cdn code
        outmodule += dragon.out.tag.jsend;
    }
    return outmodule;
}

dragon.out.endjs.multi = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].endjs : dragon.db.cache.db[mname].endjs);
    var outmodule = "";
    var outformfile = "";
    for (i = 0; i < moduls.length; i++) {
        outmodule += dragon.out.tag.jsstart.toString().replace(/modulename/g, moduls[i]);
// cdn code
        outformfile = dragon.fs.fs.readFileSync('www/endjs/' + moduls[i] + '.js');
        outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
//cdn code
        outmodule += dragon.out.tag.jsend;
    }
    return outmodule;
}
dragon.out.endjs.single = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].endjs : dragon.db.cache.db[mname].endjs);
    var outmodule = "";
    var outformfile = "";
    if (moduls.length === 0)
        return "";
    for (i = 0; i < moduls.length; i++) {
        outformfile += dragon.fs.fs.readFileSync('www/endjs/' + moduls[i] + '.js');
    }
    outformfile = outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
    outmodule += dragon.out.tag.jsstart.toString().replace(/modulename/g, "dragonEndjs");
    outmodule += outformfile.toString();
    outmodule += dragon.out.tag.jssend;
    return outmodule;
    return outmodule;
}







dragon.out.getInclude = function (mname, html) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].include : dragon.db.cache.db[mname].include);
    var outmodule = html;
    var outformfile = "",
    rtag = "",
    rexp = "",
    stag = ["<DWP_Include include='", '<DWP_Include include="', '<dwp_include include="', "<dwp_include include='", "<dwp_include include="],
    etag = ['" />', "' />", '" ></DWP_Include>', "' ></DWP_Include>", "></DWP_Include>", '" ></dwp_include>', "' ></dwp_include>", "></dwp_include>", '"></DWP_Include>', "'></DWP_Include>", '"></dwp_include>', "'></dwp_include>"],
    tag = ["DWP_Include_", 'dwp_include_'];
    for (var i = 0; i < moduls.length; i++) {
        outformfile = dragon.fs.fs.readFileSync('www/html/' + moduls[i].fileName + '.html');
        for (var ia = 0; ia < stag.length; ia++)
            for (var ib = 0; ib < etag.length; ib++) {
                rtag = stag[ia] + moduls[i].fileAlias + etag[ib];
                rexp = new RegExp(rtag, "g");
                outmodule = outmodule.toString().replace(rexp, outformfile);
            }
        for (var ia = 0; ia < tag.length; ia++) {
            rexp = new RegExp(stag[ia] + moduls[i].fileAlias, "g");
            outmodule = outmodule.toString().replace(rexp, outformfile);
        }
    }
    var ballasztmodel = ['toolsVideo', 'toolsPicture', 'toolsYoutube', 'toolsMemory'];
    for (var i = 0; i < ballasztmodel.length; i++) {
        for (var ia = 0; ia < stag.length; ia++)
            for (var ib = 0; ib < etag.length; ib++) {
                rtag = stag[ia] + ballasztmodel[i] + etag[ib];
                rexp = new RegExp(rtag, "g");
                outmodule = outmodule.toString().replace(rexp, "");
            }
        for (var ia = 0; ia < tag.length; ia++) {
            rexp = new RegExp(stag[ia] + ballasztmodel[i], "g");
            outmodule = outmodule.toString().replace(rexp, "");
        }       
    }    
    return outmodule;
    
}

dragon.out.getSvg = function (mname, html) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].svg : dragon.db.cache.db[mname].svg);
    var outmodule = html,
            outformfile = "",
            rtag = "".
            rexp = "",
            stag = ["<DWP_Svg svg='", '<DWP_Svg svg="', '<dwp_svg svg="', "<dwp_svg svg='", "<dwp_svg svg="],
            etag = ['" />', "' />", '" ></DWP_Svg>', "' ></DWP_Svg>", "></DWP_Svg>", '" ></dwp_svg>', "' ></dwp_svg>", "></dwp_svg>", '"></DWP_Svg>', "'></DWP_Svg>", '"></dwp_svg>', "'></dwp_svg>"],
            tag = ["DWP_Svg_", 'dwp_svg_'];
    for (var i = 0; i < moduls.length; i++) {
        outformfile = dragon.fs.fs.readFileSync('www/svg/' + moduls[i].fileName + '.svg');
        for (var ia = 0; ia < stag.length; ia++)
            for (var ib = 0; ib < etag.length; ib++) {
                rtag = stag[ia] + moduls[i].fileAlias + etag[ib];
                rexp = new RegExp(rtag, "g");
                outmodule = outmodule.toString().replace(rexp, outformfile);
            }
        for (var ia = 0; ia < tag.length; ia++) {
            rexp = new RegExp(stag[ia] + moduls[i].fileAlias, "g");
            outmodule = outmodule.toString().replace(rexp, outformfile);
        }
    }

    return outmodule;
}

dragon.out.getmeta = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].meta : dragon.db.cache.db[mname].meta);
    var outmodule = "";
    var outformfile = "";
    for (var i = 0; i < moduls.length; i++) {
// cdn code
        outformfile = dragon.fs.fs.readFileSync('www/meta/' + moduls[i] + '.html');
        outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
//cdn code
    }
    return outmodule;
}

dragon.out.getnat = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].nat : dragon.db.cache.db[mname].nat);
    var outmodule = "";
    var outformfile = "";
    for (var i = 0; i < moduls.length; i++) {
// cdn code
        outformfile = dragon.fs.fs.readFileSync('www/html/' + moduls[i] + '.html');
        outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
//cdn code
    }
    return outmodule;
}


dragon.out.getdebugjs = function (mname) {
    var outmodule = "";
    var outformfile = "";
    outmodule += dragon.out.tag.jsstart.toString().replace(/modulename/g, "dragonDebugRefresh");
// cdn code
//     outformfile = dragon.fs.fs.readFileSync('modules/www/js/reload.js');
//     outmodule += outformfile.toString().replace(/httpformcdnge/g,dragon.out.tag.cdn);
//      outmodule = dragon.fs.fs.readFileSync('modules/www/js/reload.js').toString();
//       console.log(dragon.fs.fs.readFileSync('modules/www/js/reload.js').toString());
    outmodule += dragon.out.debugjs;
//cdn code
    outmodule += dragon.out.tag.jsend;
    return outmodule;
}

dragon.out.sethead = function (requrl) {
    return dragon.out.tag.headstart.toString().replace("<title></title>", "<title>" + dragon.db.cache.db[requrl].title + "</title>");
}

dragon.out.setMeta = function (requrl) {
    return dragon.out.tag.headstart.toString().replace("<title></title>", "<title>" + dragon.db.cache.db[requrl].title + "</title>");
}

dragon.out.favicon = function (mname) {

    var favicon = (mname == "/" ? dragon.db.cache.db[mname].favicon : dragon.db.cache.db[mname].favicon),
            out = "";
    if ((typeof favicon !== "undefined") && (favicon !== ""))
        out = '<link rel="shortcut icon" type="image/png" href="' + favicon.toString() + '" />';
    return out;
}









dragon.out.gethtml = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].html : dragon.db.cache.db[mname].html);
    var outmodule = "";
    var outformfile = "";
    for (i = 0; i < moduls.length; i++) {
        outmodule += dragon.out.tag.modulestart.toString().replace(/modulename/g, "DragonWebPage" + moduls[i]);
//        dragon.out.cssObjectList.push("DragonWebPage" + moduls[i]);
// cdn code
        outformfile = dragon.fs.fs.readFileSync(dragon.fs.dirs.html + moduls[i] + "."+dragon.fs.ext.html);
        outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
//cdn code
//        console.log(moduls[i]);
        outmodule += dragon.out.tag.moduleend;
    }

    return dragon.out.getInclude(mname, outmodule);
}


dragon.out.htmlCat = function (requrl) {
    var outhtml = "";
    outhtml += dragon.out.sethead(requrl);
    outhtml += dragon.out.favicon(requrl);
    if (parseInt(dragon.out.setup.debugjs) === 1)
        outhtml += dragon.out.getdebugjs(requrl);
    try {
        outhtml += dragon.out.getMeta(requrl);
    } catch (err) {
        
        dragon.admin.cli.interactiveConsole.error(err);
    }
    try {
        outhtml += dragon.out.getcss(requrl);
    } catch (err) {
        
    }
    try {
        outhtml += dragon.out.getsass(requrl);
    } catch (err) {
    }
    try {
        outhtml += dragon.out.getjs(requrl);
    } catch (err) {
    }
    outhtml += dragon.out.tag.headend;
    outhtml += dragon.out.tag.bodystart;
    try {
        outhtml += dragon.out.getnat(requrl);
    } catch (err) {
    }
    try {
        outhtml += dragon.out.gethtml(requrl);
    } catch (err) {
    }
    try {
        outhtml += dragon.out.getendjs(requrl);
    } catch (err) {
    }
    if (dragon.out.setup.loadtestjs === 1){
        outhtml  += dragon.out.tag.jsstart;                
        outhtml  += "\n";
        outhtml  += "document.getElementsByTagName('body')[0].innerHTML=dwp_loadtest;";
        outhtml  += "\n";
        outhtml      += dragon.out.tag.jsend;
    }
    outhtml += dragon.out.tag.bodyend;
    outhtml = dragon.out.getInclude(requrl, outhtml);
    outhtml = outhtml.replace(/http:/g, "https:");
    return outhtml;
}


dragon.out.html = function (requrl) {

    if (typeof requrl === "undefined")
        return "404";
    if (requrl !== "/")
        requrl = requrl.slice(1); // remove the first character
    var tags = requrl.split("/");
    if ((typeof tags[0] !== "undefined") && (tags[0] === "cdn")) {
        return dragon.out.getcdn(requrl);
    } else {
        if ((requrl !== "/") && (typeof dragon.db.cache.db[requrl] === "undefined"))
            return "404";
        if (typeof dragon.db.cache.db[requrl] === "undefined")
            return dragon.out.fun.listModules();
        var outhtml = "";
        if (typeof dragon.out.cache.module[requrl] === "undefined") {
            outhtml = dragon.out.htmlCat(requrl);
            dragon.out.minifyElementDetect(outhtml);
            if (dragon.out.setup.minify === 1) {
                /*
                outhtml = dragon.out.lib.htmlminify.minify(outhtml, {
                    removeComments: true,
                    removeCommentsFromCDATA: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: false,
                    removeEmptyAttributes: true
                }).replace("<meta charset=utf-8/>", '<meta charset="utf-8"/>').replace(/\/>/g, '>');
               */
            }
            outhtml = dragon.out.getSvg(requrl, outhtml);
            if (dragon.out.setup.minify === 1){
                outhtml = dragon.out.minifyClass(outhtml);
//                outhtml = outhtml.replace(/\n/g,"");
            }
                dragon.out.cache.module[requrl] = outhtml;
                
        } else {
            outhtml = dragon.out.cache.module[requrl];
        }
        return outhtml;
    }
}





dragon.out.getjs = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].js : dragon.db.cache.db[mname].js);
    var outmodule = "";
    if (dragon.out.setup.separatedjs === 0) {
        outmodule += dragon.out.tag.jsstart;
        for (i = 0; i < moduls.length; i++) {
//        outmodule += dragon.out.tag.jsstart.toString().replace(/modulename/g, moduls[i]);
// cdn code 
            outformfile = dragon.fs.fs.readFileSync('www/js/' + moduls[i] + '.js');
            outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
// cdn code
//        outmodule += dragon.out.tag.jsend;
        }
        outmodule += dragon.out.tag.jsend;
    } else {
            if (dragon.out.setup.loadtestjs === 1){
                outmodule += dragon.out.tag.jsstart;                
                outmodule += "\n";
                outmodule += "var dwp_loadtest = '';";
                outmodule += "\n";
                outmodule += dragon.out.tag.jsend;
            }
        for (i = 0; i < moduls.length; i++) {
            outmodule += dragon.out.tag.jsstart;

//        outmodule += dragon.out.tag.jsstart.toString().replace(/modulename/g, moduls[i]);
// cdn code 
            outformfile = dragon.fs.fs.readFileSync('www/js/' + moduls[i] + '.js');
            outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
// cdn code
//        outmodule += dragon.out.tag.jsend;
            if (dragon.out.setup.loadtestjs === 1){
                outmodule += "\n";
                outmodule += "dwp_loadtest += '"+moduls[i]+" <br>';";
                outmodule += "\n";            
            }
            outmodule += dragon.out.tag.jsend;
            
        }
    }
    return outmodule;
}
dragon.out.js.multi = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].js : dragon.db.cache.db[mname].js);
    var outmodule = "";
    var outformfile = "";
    for (i = 0; i < moduls.length; i++) {
        outmodule += dragon.out.tag.jsstart.toString().replace(/modulename/g, moduls[i]);
// cdn code
        outformfile = dragon.fs.fs.readFileSync('www/js/' + moduls[i] + '.js');
        outmodule += outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
//cdn code
        outmodule += dragon.out.tag.jsend;
    }
    return outmodule;
}
dragon.out.js.single = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].js : dragon.db.cache.db[mname].js);
    var outmodule = "";
    var outformfile = "";
    if (moduls.length === 0)
        return "";
    for (i = 0; i < moduls.length; i++) {
        outformfile += dragon.fs.fs.readFileSync('www/js/' + moduls[i] + '.js');
    }
    outformfile = outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
    outmodule += dragon.out.tag.jsstart.toString().replace(/modulename/g, "dragonJs");
    outmodule += outformfile.toString();
    outmodule += dragon.out.tag.jsend;
    return outmodule;
    return outmodule;
}



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





dragon.out.fun.listModules=function(){
    let outhtml = "";
    let file = "";
    outhtml+=dragon.out.tag.listModulesStart.toString();
    outhtml+=dragon.out.tag.listModulesAllStart.toString();;
    for (var im = 0; dragon.db.db.modules.length > im; im++) {
        outhtml+=
            dragon.out.tag.listModulesList.toString().replace(/DWP_Rp_Module/g,dragon.db.db.modules[im].moduleName);
    }
    outhtml+=dragon.out.tag.listModulesAllEnd.toString();;
    outhtml+=dragon.out.tag.listModulesFilesStart.toString();;
    for (var im = 0; dragon.db.db.files.length > im; im++) {
        file=dragon.out.tag.listModulesFilesList.toString();
        file=file.replace(/DWP_Rp_FileType/g,dragon.db.db.files[im].fileType);
        file=file.replace(/DWP_Rp_FileName/g, dragon.db.db.files[im].fileName.toString());
        outhtml+=file;
    }
    outhtml+=dragon.out.tag.listModulesFilesEnd.toString();;
    outhtml+=dragon.out.tag.listModulesEnd.toString();;
    return outhtml;
}

// new 

dragon.out.fun.listModulesClass = function(){
    this.update = function(projects, modules, files){
        db={
             projects : projects,
             modules  : modules,
             files    : files
        }
        cache = "";
        cache += updateProjects();
        cache += updateModules();
        cache += updateFiles();
    }
    let updatePojects = function(){
        let out = dragon.out.tag.listModulesStart.toString(),
            tag = dragon.out.tag.listModulesProjectStart.toString(),
            mag = dragon.out.tag.listModulesList.toString();
        for (let ip = 0; db.projects.length > ip; ip++) {
            out+=
                tag.replace(
                    /DWP_Rp_ProjectName/g,
                    db.projects[ip].projectName
            );
            for (let im = 0; db.projects[ip].projectModules.length > im; im++) {
                out+=
                    mag.replace(
                        /DWP_Rp_Module/g,
                        db.projects[ip].projectModules[im]['Name']
                    );
            }
            out+=
                dragon.out.tag.listModulesProjectEnd.toString();
        }
        return out;
    }
    let updateModules = function(){
        let out = dragon.out.tag.listModulesAllStart.toString(),
            tag = dragon.out.tag.listModulesList.toString();
        for (let im = 0; db.modules.length > im; im++) 
             out+=
                 tag.replace(
                     /DWP_Rp_Module/g,
                     db.modules[im].moduleName
             );
        out+=dragon.out.tag.listModulesAllEnd.toString();;
        return out;
    }
    let updateFiles = function(){
        let out  = dragon.out.tag.listModulesFilesStart.toString(),
            file = "";
        for (let im = 0; db.files.length > im; im++) {
            file=dragon.out.tag.listModulesFilesList.toString();
            file=file.
                replace(
                    /DWP_Rp_FileType/g,
                    db.files[im].fileType.toString()
            );
            file=file.
                replace(
                    /DWP_Rp_FileName/g,
                    db.files[im].fileName.toString()
            );
            out+=file;
        }
        out+=dragon.out.tag.listModulesFilesEnd.toString();;
        return out;
    }
    let db = {
        projects: [],
        modules : [],
        files   : []
    }
    let updated = 0; // updated timestamp
    let out = "";
    let cache = "";
}
    





dragon.out.getMeta = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].metafile : dragon.db.cache.db[mname].metafile);
    var out = "";
    for (i = 0; i < moduls.length; i++) {
        out += dragon.fs.fs.readFileSync(dragon.fs.dirs.metafile + moduls[i] + "."+dragon.fs.ext.metafile);
    }

    return out;
}



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


dragon.out.minifyClass = function (inhtml) {
    dragon.admin.cli.debug(" Minify start -");    
    let tempobjects = {
        lang: [],
        classes: [],
        names: [],
        ids: [],
        functions: []
    },
    nameTag = {
        lang: "L",
        classes: "C",
        names: "N",
        ids: "I",
        functions: "F"
    },
    nameSer = {
        lang: 0,
        classes: 0,
        names: 0,
        ids: 0,
        functions: 0
    },
    rexp = "";
    
    for (let name in tempobjects)
        for (let i in dragon.db.db.objects[name]) {
            if (tempobjects[name].indexOf(dragon.db.db.objects[name][i]) === -1)
                tempobjects[name].push(dragon.db.db.objects[name][i]);
        }
    dragon.admin.cli.debug("Minify Temp Object finnished"); 
    dragon.out.cssObjectList.sort(function (a, b) {
        return parseInt(b.length) - parseInt(a.length)
    });
    for (name in tempobjects)
        tempobjects[name].sort(function (a, b) {
            return parseInt(b.length) - parseInt(a.length)
        });
    dragon.admin.cli.debug("Minify Temp Object sort finnished ");
    for (name in tempobjects){
        dragon.admin.cli.debug("Minify Regexp "+name);
        for (i in tempobjects[name]) {
            dragon.admin.cli.debug(" Minify Regexp "+name +" : "+tempobjects[name][i]);
            if (inhtml.indexOf(tempobjects[name][i]) > -1) {
                rexp = new RegExp(tempobjects[name][i], "g");
                inhtml = inhtml.replace(rexp, nameTag[name] + nameSer[name].toString(36));
                nameSer[name]++;
            }
        }
    }
    dragon.admin.cli.debug("Minify Regexp finnished ");
    var oldser = 0;
    for (i = 0; dragon.out.cssObjectList.length > i; i++) {
        if (inhtml.indexOf(dragon.out.cssObjectList[i]) > -1) {
            rexp = new RegExp(dragon.out.cssObjectList[i], "g");
            inhtml = inhtml.replace(rexp, "B" + oldser.toString(36));
            oldser++;
        }
    }
    dragon.admin.cli.debug("Minify Finnished");
    return inhtml;
}



dragon.out.minifyElementDetect = function (innerHT) {
    dragon.admin.cli.debug("Minify element detect start -");
    let debugOut = "\n \n \n";
    minta = {
        lang      : ["DWP_Lang_", 'DL_'],
        classes   : ["DWP_Class_", "DC_"],
        names     : ["DWP_Name_", 'DN_'],
        ids       : ["DWP_Id_", 'DI_'],
        functions : ["DWP_Function_", "DF_"]
    },
    tempobjects = {
        lang: [],
        classes: [],
        names: [],
        ids: [],
        functions: []
    },
    newobjects = {
        lang: {},
        classes: {},
        names: {},
        ids: {},
        functions: {}
    },
    newobjectSerial = {
        lang: 0,
        classes: 0,
        names: 0,
        ids: 0,
        functions: 0
    },
    newobject = "",
            charnum = 0;
    for (let mintaName in dragon.db.db.objects) {
        tempobjects[mintaName] = [];
        for (elem in dragon.db.db.objects[mintaName]) {
            if (tempobjects[mintaName].indexOf(dragon.db.db.objects[mintaName][elem]) === -1)
                tempobjects[mintaName].push(dragon.db.db.objects[mintaName][elem]);
        }
    }
    for (let i = 0; innerHT.length > i; i++) {
        newobject = "";
        charnum = 0;
        for (let mintaName in minta) 
            for (let s in minta[mintaName]) {
            if(minta[mintaName][s] === innerHT.slice(i, (i + minta[mintaName][s].length))) {
                charnum = minta[mintaName][s].length;
                while ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+/".indexOf(innerHT[i + charnum]) > -1) {
                    charnum++;
                }
                if (innerHT.slice(i, (i + charnum)).indexOf("DWP_Rt_") === -1)
                    if (tempobjects[mintaName].indexOf(innerHT.slice(i, (i + charnum))) === -1) {
                        tempobjects[mintaName].push(innerHT.slice(i, (i + charnum)));
                    }
            }
        }
        i = i + charnum;
    }
    for (let name in tempobjects)
        tempobjects[name].sort(function (a, b) {
            return parseInt(b.length) - parseInt(a.length)
        });
    for (let mintaName in minta) {
        dragon.db.db.objects[mintaName] = {};
        for (elem in tempobjects[mintaName]) {
            dragon.db.db.objects[mintaName][newobjectSerial[mintaName].toString()] = tempobjects[mintaName][elem];
            newobjectSerial[mintaName]++;
        }
        debugOut += mintaName.toString() + " : " + newobjectSerial[mintaName].toString() + " \n";
    }
    dragon.admin.cli.debug(debugOut+"\nMinify element detect finnished");
}






dragon.out.render = {}

dragon.out.render.simple = function (requrl) {
    if (typeof requrl === "undefined")
        return "404";
    if (requrl !== "/")
        requrl = requrl.slice(1); // remove the first character
    var tags = requrl.split("/");
    if ((typeof tags[0] !== "undefined") && (tags[0] === "cdn")) {
        return dragon.out.getcdn(requrl);
    } else {
        if ((requrl !== "/") && (typeof dragon.db.cache.db[requrl] === "undefined"))
            return "404";
        if (typeof dragon.db.cache.db[requrl] === "undefined")
            requrl = "main";
        var outhtml = "";
        outhtml = dragon.out.htmlCat(requrl);
        outhtml = dragon.out.getSvg(requrl, outhtml);

//        dragon.out.cache.module[requrl]=outhtml;
//        outhtml = dragon.out.getSvg(requrl, dragon.out.getInclude(requrl, outhtml));
        return outhtml;
    }
}



dragon.out.render.minify = function (requrl) {
    if (typeof requrl === "undefined")
        return "404";
    if (requrl !== "/")
        requrl = requrl.slice(1); // remove the first character
    var tags = requrl.split("/");
    if ((typeof tags[0] !== "undefined") && (tags[0] === "cdn")) {
        return dragon.out.getcdn(requrl);
    } else {
        if ((requrl !== "/") && (typeof dragon.db.cache.db[requrl] === "undefined"))
            return "404";
        if (typeof dragon.db.cache.db[requrl] === "undefined")
            requrl = "main";
        var outhtml = "";
        outhtml = dragon.out.htmlCat(requrl);
        dragon.out.minifyElementDetect(outhtml);
        outhtml = dragon.out.lib.htmlminify.minify(outhtml, {
            removeComments: true,
            removeCommentsFromCDATA: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }).replace("<meta charset=utf-8/>", '<meta charset="utf-8">').replace(/\/>/g, '>');
        outhtml = dragon.out.minifyClass(dragon.out.getInclude(requrl, outhtml));
        outhtml = dragon.out.getSvg(requrl, dragon.out.getInclude(requrl, outhtml));

        return outhtml;
    }
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



dragon.out.getsass = function (mname) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].sass : dragon.db.cache.db[mname].sass);
    var outmodule = "";
    var outformfile = "";
    if (moduls.length === 0)
        return "";
    for (i = 0; i < moduls.length; i++) {
        outformfile += dragon.fs.fs.readFileSync('www/sass/' + moduls[i] + '.'+dragon.fs.ext['sass']);
    }
    outformfile = outformfile.toString().replace(/httpformcdnge/g, dragon.out.tag.cdn);
    outmodule += dragon.out.tag.cssstart.toString().replace(/modulename/g, "dragonSass");
    try {
        var sassResult = dragon.out.lib.sass.renderSync({data: outformfile});
    } catch (e) {
        console.log(e);
    }
    outmodule += sassResult.css.toString('utf8');
    outmodule += dragon.out.tag.cssend;
    return outmodule;
}





/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


dragon.out.getSvg = function (mname, html) {
    var moduls = (mname == "/" ? dragon.db.cache.db[mname].svg : dragon.db.cache.db[mname].svg);
    var outmodule = html,
            outformfile = "",
            id = 0,
            rtag = "".
            rexp = "",
            stag = ["<DWP_Svg svg='", '<DWP_Svg svg="', '<dwp_svg svg="', "<dwp_svg svg='", "<dwp_svg svg="],
            etag = ['" ></DWP_Svg>', "' ></DWP_Svg>", "></DWP_Svg>", '" ></dwp_svg>', "' ></dwp_svg>", "></dwp_svg>", '"></DWP_Svg>', "'></DWP_Svg>", '"></dwp_svg>', "'></dwp_svg>"],
            tag = ["DWP_Svg_", 'dwp_svg_'];
    for (var i = 0; i < moduls.length; i++) {
        outformfile = dragon.fs.fs.readFileSync('www/svg/' + moduls[i].fileName + '.svg');
        for (var ia = 0; ia < stag.length; ia++)
            for (var ib = 0; ib < etag.length; ib++) {
                rtag = stag[ia] + moduls[i].fileAlias + etag[ib];
                rexp = new RegExp(rtag, "g");
                outmodule = outmodule.toString().replace(rexp, outformfile);
            }
        for (var ia = 0; ia < tag.length; ia++) {
            rexp = new RegExp(stag[ia] + moduls[i].fileAlias, "g");
            outmodule = outmodule.toString().replace(rexp, outformfile);
        }
    }

    return outmodule;
}




dragon.screenshoot.fun.save=function(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        response = {};
    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');
    dragon.screenshoot.lib.fs.writeFile('/var/log/dragonweb/screenshoot/'+new Date().getTime().toString()+'.jpg', response.data, function(err) {});
}






dragon.setup.fun.add = function (list, module) {
    var postype = ['string', 'integer', 'float', 'list'];
    var tempJson = {};
    /*
     * A lista egy array aminek minden eleme json
     * {variable,type,name,value,comment,limitation}
     * type :
     *    -string (minimumSize,maximumSize,charlist)
     *    -integer (minimum,maximum)
     *    -float (minimum,maximum)
     *    -list { value, comment }
     *            
     *    
     */
    if (typeof module === "undefined")
        return false;
    if (typeof dragon.setup.options[module] === "undefined")
        dragon.setup.options[module] = {};
    if (Array.isArray(list)) {
        for (var i = 0; list.length > i; i++) {
            dragon.setup.fun.addProcessing(list[i], module);
        }
    } else {
        dragon.setup.fun.addProcessing(list, module);
    }
}

dragon.setup.fun.addProcessing = function (list, module) {
    if ((typeof list.variable !== "undefined") && (typeof list.type !== "undefined") && (dragon.setup.v.postype.indexOf(list.type) > -1)) {
        dragon.setup.options[module][list.variable] = {};
        dragon.setup.options[module][list.variable].type = list.type;
        dragon.setup.options[module][list.variable].limitation = {}
        if (typeof list.name !== "undefined") {
            dragon.setup.options[module][list.variable].name = list.name;
        } else {
            dragon.setup.options[module][list.variable].name = list.variable;
        }
        if (typeof list.name !== "undefined") {
            dragon.setup.options[module][list.variable].comment = list.comment;
        } else {
            dragon.setup.options[module][list.variable].comment = "";
        }
        if (typeof list.value !== "undefined") {
            dragon.setup.options[module][list.variable].value = list.value;
        } else {
            dragon.setup.options[module][list.variable].value = eval(list.variable);
        }
        if (typeof list.type === 'string') {
            if (typeof list.limitation !== "undefined") {
                dragon.setup.options[module][list.variable].limitation = {}
                if (typeof list.max !== "undefined") {
                    if ((parseInt(list.max).toString() !== list.max.toString()) && (list.max > 0)) {
                        dragon.setup.options[module][list.variable].limitation.max = list.max;
                    }
                }
                if (typeof list.min !== "undefined") {
                    if (typeof list.max === "undefined")
                        list.max = 99999;
                    if ((parseInt(list.min).toString() !== list.min.toString()) && (list.min > 0) && (list.max > list.min)) {
                        dragon.setup.options[module][list.variable].limitation.min = list.min;
                    }
                }
            }
        } else if (typeof list.type === 'integer') {
            if (typeof list.limitation !== "undefined") {
                dragon.setup.cache[module][list.variable].limitation = {}
                if (typeof list.max !== "undefined") {
                    if ((parseInt(list.max).toString() !== list.max.toString()) && (list.max > 0)) {
                        dragon.setup.options[module][list.variable].limitation.max = list.max;
                    }
                }
                if (typeof list.min !== "undefined") {
                    if (typeof list.max === "undefined")
                        list.max = 99999;
                    if ((parseInt(list.min).toString() !== list.min.toString()) && (list.max > list.min)) {
                        dragon.setup.options[module][list.variable].limitation.min = list.min;
                    }
                }
            }
        } else if (typeof list.type === 'list') {
            if (typeof list.limitation !== "undefined") {
                dragon.setup.options[module][list.variable].limitation.list = [];
                if (typeof list.limitation.list !== "undefined")
                    for (var ia = 0; list.limitation.list.length > ia; ia++) {
                        tempJson = {};
                        if ((typeof list.limitation.list[ia] !== "undefined") && (typeof list.limitation.list[ia].value !== "undefined")) {
                            tempJson.value = list.limitation.list[ia].value;
                            if (typeof list.limitation.list[ia].comment !== "undefined") {
                                tempJson.comment = list.limitation.list[ia].comment;
                            }
                        }

                    }

            }
        }
    }
}


dragon.setup.fun.set = function (module, variable, value) {
    if (dragon.setup.fun.check(module, variable, value)) {
        dragon.setup.options[module][variable] = value;
    }
}

dragon.setup.fun.read = function () {
    if(typeof dragon.db.db.setup === "undefined") dragon.db.db.setup = {};
    dragon.setup.options = dragon.db.db.setup;
}

dragon.setup.fun.save = function () {
    dragon.db.db.setup = dragon.setup.options;
}

dragon.setup.fun.apply = function () {
    for (module in dragon.setup.options)
        for (variable in dragon.setup.options[module]) {
            if (typeof dragon.setup.options[module] !== "undefined")
                if (typeof dragon.setup.options[module][variable] !== "undefined") {
                    if (dragon.setup.options[module][variable].type === 'integer')
                        eval(variable.toString() + " = " + dragon.setup.options[module][variable].value.toString());
                    if (dragon.setup.options[module][variable].type === 'string')
                        eval(variable.toString() + ' = "' + dragon.setup.options[module][variable].value.toString() + '"');
                    if (dragon.setup.options[module][variable].type === 'list')
                        eval(variable.toString() + " = " + dragon.setup.options[module][variable].value.toString());
                }
        }
}


dragon.setup.fun.check = function (module, variable, value) {
    if (typeof module === "undefined")
        return false;
    if (typeof variable === "undefined")
        return false;
    if (typeof value === "undefined")
        return false;
    if (typeof dragon.setup.options[module] === "undefined")
        return false;
    if (typeof dragon.setup.options[module][variable] === "undefined")
        return false;
    if (typeof dragon.setup.options[module][variable].type === "undefined")
        return false;
    if (typeof dragon.setup.cache[module] === "undefined")
        dragon.setup.cache[module] = {};
    if (dragon.setup.options[module][variable].type === 'string') {
        if (typeof dragon.setup.options[module][variable].limitation === "undefined") {
            if (dragon.setup.fun.checkString(value) === false)
                return false;
        } else {
            if (dragon.setup.fun.checkString(value, dragon.setup.options[module][variable].limitation) === false)
                return false;
        }
    } else if (dragon.setup.options[module][variable].type === 'integer') {
        if (typeof dragon.setup.options[module][variable].limitation === "undefined") {
            if (dragon.setup.fun.checkInteger(value) === false)
                return false;
        } else {
            if (dragon.setup.fun.checkInteger(value, dragon.setup.options[module][variable].limitation) === false)
                return false;
        }
    } else if (dragon.setup.options[module][variable].type === 'list') {
        if (typeof dragon.setup.options[module][variable].limitation === "undefined") {
            if (dragon.setup.fun.checkList(value) === false)
                return false;
        } else {
            if (dragon.setup.fun.checkList(value, dragon.setup.options[module][variable].limitation) === false)
                return false;
        }
    } else {
        return false;
    }
    return true;

}

dragon.setup.fun.checkInteger = function (integer, limitation) {
    if (parseInt(integer).toString() !== integer.toString())
        return false;
    if (typeof limitation === "undefined")
        return true;
    if (typeof limitation.max !== "undefined") {
        if (parseInt(integer) > limitation.max)
            return false
    }
    if (typeof limitation.min !== "undefined") {
        if (limitation.min > parseInt(integer))
            return false
    }
    return true;
}

dragon.setup.fun.checkString = function (string, limitation) {
    if (typeof limitation === "undefined")
        return true;
    if (typeof limitation.max !== "undefined") {
        if (string.length > limitation.max)
            return false
    }
    if (typeof limitation.min !== "undefined") {
        if (limitation.min > string.length)
            return false
    }
    return true;
}

dragon.setup.fun.checkList = function (element, list) {
    if (typeof list === "undefined")
        return true;
    if (typeof list.indexOf(element) > -1)
        return true;
    return false;
}



dragon.setup.fun.init = function () {
        dragon.setup.fun.read();
        dragon.setup.fun.apply();
        dragon.setup.fun.save();
}






dragon.tools.fun.array.move = function (arrayArray, oldIndex, newIndex) {
    if ((0 > newIndex ) && (0>oldIndex) && (newIndex >= this.length) && (oldIndex >= this.length) )
        return arrayArray;
    arrayArray.splice(newIndex, 0, arrayArray.splice(oldIndex, 1)[0]);
    return arrayArray;
}





var fs = require('fs'),
    path = require('path');


//console.log(fs.readdirSync("."));



dragon.tools.fun.files.getDirectories = function (srcpath) {
  return dragon.tools.lib.fs.readdirSync(srcpath).filter(function(file) {
    return dragon.tools.lib.fs.statSync(dragon.tools.lib.path.join(srcpath, file)).isDirectory();
  });
}



dragon.tools.fun.files.getFiles = function (srcpath) {
  return dragon.tools.lib.fs.readdirSync(srcpath).filter(function(file) {
    return dragon.tools.lib.fs.statSync(dragon.tools.lib.path.join(srcpath, file)).isFile();
  });
}


dragon.tools.fun.files.getFilesJustExtension = function (srcpath,extension) {
    var out =[],
    fileList = dragon.tools.fun.files.getFiles(srcpath);
    for (var i = 0 ; fileList.length>i ; i ++){
         if (dragon.tools.fun.files.getExtension(fileList[i])===extension) out.push(fileList[i]);
    }
    return out;
}


dragon.tools.fun.files.getExtension=function(fileName){
  var fields = fileName.split(".");
  if(fields.length>1) return fields[(fields.length-1)];
  return ;
};


dragon.tools.fun.files.getFilesDir=function(srcpath) {
    var files=dragon.tools.fun.files.getFiles(srcpath) ;
    var deepCheck=function(srcpath){
        var dirList=dragon.tools.fun.files.getDirectories(srcpath),
        fileInDir = dragon.tools.fun.files.getFiles(srcpath),
        fileInDirPlus = [];
        for(var iD=0 ; dirList.length>iD ; iD ++ ){
            fileInDirPlus = deepCheck(srcpath+"/"+dirList[iD]);
            for (var iFID = 0 ; fileInDirPlus.length > iFID;iFID++){
                fileInDir.push(dirList[iD]+"/"+fileInDirPlus[iFID]);
            }
        }
        return fileInDir;
    }
    var plusFiles = deepCheck (srcpath,"");
    for (var iPF = 0 ; plusFiles.length > iPF;iPF++){
        files.push(plusFiles[iPF]);
    }
    return files;
}



dragon.tools.fun.files.getFilesDirJustExtension=function(srcpath,extension) {
    var files=dragon.tools.fun.files.getFilesJustExtension(srcpath,extension);
    var deepCheck=function(srcpath,extension){
        var dirList= dragon.tools.fun.files.getDirectories(srcpath),
        fileInDir = dragon.tools.fun.files.getFilesJustExtension(srcpath,extension),
        fileInDirPlus = [];
        for(var iD=0 ; dirList.length>iD ; iD ++ ){
            fileInDirPlus = deepCheck(srcpath+"/"+dirList[iD],extension);
            for (var iFID = 0 ; fileInDirPlus.length > iFID;iFID++){
                fileInDir.push(dirList[iD]+"/"+fileInDirPlus[iFID]);
            }
        }
        return fileInDir;
    }
    var plusFiles = deepCheck (srcpath,extension);
    for (var iPF = 0 ; plusFiles.length > iPF;iPF++){
        files.push(plusFiles[iPF]);
    }
    return files;
}








dragon.tools.fun.htmlCharEncode = function (intext) {
    return dragon.tools.fun.htmlCharEncodeNamebasic(intext);    
}

dragon.tools.fun.htmlCharEncodeNamebasic = function escapeHtml(intext) {
  var map = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&apos;"
  };
  return intext.toString().replace(/[&<>"']/g, function(m) { return map[m]; });
}

dragon.tools.fun.htmlCharEncodeCodeBasic = function (intext) {
    return intext
        .toString()
        .replace(/&/g, "&#38;")
        .replace(/</g, "&#60;")
        .replace(/>/g, "&#62;")
        .replace(/"/g, "&#34;")
        .replace(/'/g, "&#39;")
        .replace(/_/g, "&#95;");
}

dragon.tools.fun.getRandomChar=function (num, typec){ // give a random number
    var n = num !== undefined ? parseInt(num) : 1;
    var t = typec !== undefined ? num : "charsall";
    var p = s.tools.v[t];
    var o = "";
    for (var i = 0; i < n;i++) o+=p.charAt(Math.floor(Math.random()*p.length));
    return o;
}

dragon.tools.fun.intToBase36=function (num){
    return parseInt(num).toString(36);
}

dragon.tools.fun.base36ToInt=function (base36){
    return parseInt(base36.toString(),36);
}

dragon.tools.fun.dateFormat=function (i){
    var d = new Date(parseInt(i));
    return d.getFullYear().toString()+"-"+d.getMonth().toString()+"-"+d.getDate().toString();
}

dragon.tools.fun.dateFormatTime=function (i){
    var d = new Date(parseInt(i));
    return d.getFullYear().toString()+"-"+(parseInt(d.getMonth())+1).toString()+"-"+d.getDate().toString()+" "+d.getHours().toString()+":"+d.getMinutes().toString()+":"+d.getSeconds().toString()+"."+d.getMilliseconds().toString();
}



dragon.tools.fun.base62=function (number) {
    var base = 62;
    var symbols = 
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var decimal = number;
    var conversion = "";

    if (base > symbols.length || base <= 1) {
        return false;
    }

    while (decimal >= 1) {
        conversion = symbols[(decimal - (base * Math.floor(decimal / base)))] + 
                     conversion;
        decimal = Math.floor(decimal / base);
    }

    return (base < 11) ? parseInt(conversion) : conversion;
}

dragon.tools.fun.httpdGetRemote = function (req) {
    var remote = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress; 
    return remote;    
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


dragon.init.fun.addStart(dragon.config.fun.init, 7);

dragon.db.read();

dragon.db.caching();
dragon.db.dbrefresh = dragon.db.fs.statSync(dragon.db.setup.files);

setTimeout(function(){dragon.fs.fun.build()},200);

setTimeout(function(){setInterval(dragon.fs.fun.check,500);},8000);



dragon.init.fun.addStart(function () {
    dragon.httpd.fun.start(); 
}, 9);

dragon.setup.fun.add(
        [
            {
                variable: "dragon.httpd.setup.port",
                type: "integer",
                name: "debuger_http_port",
                comment: "A default debuger http listening port",
                limitation: {max: 200, min: 1}
            },
            {
                variable: "dragon.httpd.setup.ip",
                type: "string",
                name: "debuger_http_ip",
                comment: "A default debuger http listening ip",
                max: 5,
                min: 1
            },
        ],
        "dragon.httpd"
        );




/*

dragon.live.fun.http.createServer(function (req,res){
    var body='';
    req.on('data', function(data){
        body=data;
    });
//    console.log(req.data);
    req.on('end',function(){
//        console.log(body.toString('utf8'));
//post split
        if(typeof body !== "undefined"){
            try{
                var Post =JSON.parse(body.toString('utf8'));
            }catch (err) {
            
            }
        }
// cookie split   
       var retar = {};
       if(typeof req.headers.cookie !== "undefined") req.headers.cookie.split(';').forEach(function(lc){
           retar[lc.split('=')[0]]=lc.split('=')[1].toString();
       });

//    });
        if(-1===req.url.indexOf("cdn")) req.url="/main";
        var tags = req.url.split("/");
        if((typeof tags[1] !== "undefined")&&(tags[1] === "cdn")){
            tags = req.url.split(".");
  	        res.writeHead(200, {
                'Content-Type': dragon.live.contentTypes[tags[tags.length-1]]
            });
  	    }else{
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
  	    }
  	    try{
  	       if(typeof retar.t === "undefined"){
  	           res.end(dragon.out.html(req.url));
  	       }else{
  	            var requrl = "";
                if (req.url !== "/") requrl = req.url.slice(1); // remove the first character
  	            var tags = requrl.split("/");
                if ((typeof tags[0] !== "undefined")&&(tags[0] === "cdn")){ 
                   res.end(dragon.out.html(req.url));
     	       }else{
//                   res.end(dragon.out.html("/"+retar.t));   
                   res.end(dragon.out.html("/main"));  
               }
           }
//           dragon.live.fs.appendFile('/var/log/dragonweb/acces.log', " ["+(new Date()).getTime().toString()+"] || "+req.url.toString()+" || "+req.connection.remoteAddress.toString()+"\n", function (err) {});
        }catch(err){
//           dragon.live.fs.appendFile('/var/log/dragonweb/error.log', " ["+(new Date()).getTime().toString()+"] || "+err.toString()+"\n", function (err) {});
        
        }

});
}).listen(8880,'0.0.0.0');


*//* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
    setup:{
        minify:0, // html minify 0 off 1 on    
        separatedjs:0,// separatedjs
        loadtestjs:0, // javascript loadtest 0 off 1 on    
        debugjs:

*/

dragon.setup.fun.add(
        [
            {
                variable: "dragon.out.setup.minify",
                type: "integer",
                name: "out_minify",
                comment: "out file minify",
                max: 1,
                min: 0
            },
            {
                variable: "dragon.out.setup.debugjs",
                type: "integer",
                name: "out_debugjs",
                comment: " out debuger on/off ",
                max: 1,
                min: 0
            },
            {
                variable: "dragon.out.setup.separatedjs",
                type: "integer",
                name: "out_separatedjs",
                comment: " out  separate javascript on/off ",
                max: 1,
                min: 0
            },
            {
                variable: "dragon.out.setup.loadtestjs",
                type: "integer",
                name: "out_loadtestjs",
                comment: " out loadtest on/off ",
                max: 1,
                min: 0
            }
       ],
        "dragon.httpd"
        );



dragon.setup.fun.add(
        [
            {
                variable: "dragon.out.setup.minify",
                type: "integer",
                name: "out_minify",
                comment: "out file minify",
                max: 1,
                min: 0
            },
            {
                variable: "dragon.out.setup.debugjs",
                type: "integer",
                name: "out_debugjs",
                comment: " out debuger on/off ",
                max: 1,
                min: 0
            },
            {
                variable: "dragon.out.setup.separatedjs",
                type: "integer",
                name: "out_separatedjs",
                comment: " out  separate javascript on/off ",
                max: 1,
                min: 0
            },
            {
                variable: "dragon.out.setup.loadtestjs",
                type: "integer",
                name: "out_loadtestjs",
                comment: " out loadtest on/off ",
                max: 1,
                min: 0
            }
       ],
        "dragon.httpd"
        );


dragon.init.fun.addStart(function () {
   dragon.setup.fun.init(); 
},0);



var interactiveConsole = function () {
    this.howami = "interactiveConsole";
    this.libs = {
        console: require('console').Console,
        fs: require('fs'),
    }
    this.assert = this.libs.console.assert;
    this.count = this.libs.console.count;
    this.check = function () {
        try {
            var wo = require("wonderful-output");
            that.libs.wonderfulOutput = new wo.json();
            that.detected.wonderfulOutput = 1;
        } catch (e) {
            that.detected.wonderfulOutput = 0;
        }
    }
    this.beep = function () {
        process.stdout.write('\u0007');
    }
    this.debug = this.libs.console.debug;
    this.detected = {
        wonderfulOutput: 0
    };
    this.dir = this.libs.console.dir;
    this.dirxml = this.libs.console.dirxml;
    this.expection = this.libs.console.expection;
    this.group = this.libs.console.group;
    this.groupCollapsed = this.libs.console.groupCollapsed;
    this.groupEnd = this.libs.console.groupEnd;
    this.markTimeLine = this.libs.console.markTimeLine;
    this.profile = this.libs.console.profile;
    this.profileEnd = this.libs.console.profileEnd;
    this.timeStamp = this.libs.console.timeStamp;
    this.trace = this.libs.console.trace
    this.cacheCount = {};
    this.countNumber = 0;
    this.history = {
        list: [],
        position: 0,
        add: function (list) {

            if (Object.prototype.toString.call(list) === '[object Array]') {
                that.history.list = [];
                for (var i = 0; list.length > i; i++)
                    if ((that.history.list.length < 1) || (list[i] !== that.history.list[that.history.list.length - 1]))
                        that.history.list.push(list[i]);
            } else if (typeof list === "string") {
                if ((that.history.list.length < 1) || (list !== that.history.list[that.history.list.length - 1]))
                    that.history.list.push(list);
            }
            that.history.position = that.history.list.length;
            return true;
        }
    }
    this.icons = {
        log: "\u27e1",
        warn: "\u26a0",
        info: "\u2709",
        error: "\u26a1",
        time: "\u25f4"
    },
            this.writeStream = {
                write: function (haleluja) {
                    return false;
                }
            }
    this.writeInit = function () {
        this.writeStream = this.libs.fs.createWriteStream(this.config.log.directory + this.config.log.fileName, {'flags': 'a'});
        this.config.log.write = 1;
    };
    this.config = {
        icon: 0,
        beep: 1,
        color: 0,
        title: 1,
        titleColor: 1,
        timeStamp: 1,
        count: 0,
        date: 0,
        mode: "normal", // normal, password, hidden, yesNo
        dateFormat: "DMY", // DMY, MDY, YMD,
        format: "text", // text, json
        hostname: 0,
        host: "localhost",
        limitation: "none", // none, safe, number, calculator
        wonderfulOutput: 1,
        limits: {
            safe: "QWERTYUIOOOOPASDFGHJKL\ZXCVBNM qwertyuiopasdfghjklzxcvbnm`1234567890_-+={[}]:;@'~#!" + '"' + "£$%^&*()æßðđŋħĸµn¢»«|\\/?><,.€½³²¹½¾¢|«»nµłĸŋđðßæ@łe¶ŧ←↓→øþ·̣|¬*",
            number: "0123456789",
            calculator: "098764321=+-*/%"
        },
        log: {
            write: 0,
            fileName: "console.log",
            directory: ""
        },
        styles: {
            count: {color: "white", effect: "italic"},
            timeStamp: {color: "white", effect: "dim"},
            date: {color: "white", effect: "dim"},
            log: {color: "grey", effect: "bold"},
            warn: {color: "yellow", effect: "bold"},
            info: {color: "green", effect: "bold"},
            error: {color: "red", effect: "bold"},
            time: {color: "blue", effect: "bold"},
            logTitle: {color: "grey", effect: "bold"},
            warnTitle: {color: "yellow", effect: "bold"},
            infoTitle: {color: "green", effect: "bold"},
            errorTitle: {color: "red", effect: "bold"},
            timeTitle: {color: "blue", effect: "bold"},
            logIcon: {color: "grey", effect: "bold"},
            warnIcon: {color: "yellow"},
            infoIcon: {color: "green"},
            errorIcon: {color: "red"},
            timeIcon: {color: "blue"}
        }
    }
    this.styles = {
        color: {
            black: 30,
            red: 31,
            green: 32,
            yellow: 33,
            blue: 34,
            magenta: 35,
            cyan: 36,
            white: 37,
            gray: 90,
            grey: 90
        },
        background: {
            black: 40,
            red: 41,
            green: 42,
            yellow: 43,
            blue: 44,
            magenta: 45,
            cyan: 46,
            white: 47
        },
        effect: {
            bold: 1,
            dim: 2,
            italic: 3,
            underline: 4,
            blink: 5,
            inverse: 7,
            hidden: 8,
            strikethrough: 9,
        }
    }
    this.cache = [];
    this.cacheRewrite = function () {
        that.clear();
        for (var i = 0; that.cache.length > i; i++) {
            that.print(that.textMaker.re(that.cache[i].count,
                    that.cache[i].hostname,
                    that.cache[i].text,
                    that.cache[i].type,
                    that.cache[i].timeStamp) + "\n");
        }
        that.makePrompt();
    }
    this.cacheAdd = function (count, hostname, text, type, timeStamp) {
        that.cache.push({
            count: count,
            hostname: hostname,
            timeStamp: timeStamp,
            text: text,
            type: type
        });
    }
    this.style = function (text, styles) {
        var style = '\u001b[85';
        for (var i in styles)
            for (var s in styles[i])
                if ((typeof this.styles[s] !== "undefined") && (typeof this.styles[s][styles[i][s]] !== "undefined"))
                    style += ";" + this.styles[s][styles[i][s]].toString();
        for (var s in styles)
            if ((typeof this.styles[s] !== "undefined") && (typeof this.styles[s][styles[s]] !== "undefined"))
                style += ";" + this.styles[s][styles[s]].toString();
        var last = text.lastIndexOf("\u001b[0m");
        text = text.slice(0, last) + text.slice(last).replace("\u001b[0m", "\u001b[0m" + style + "m");
        return style + "m" + text + "\u001b[0m";
    }
    this.watchOn = 0;
    this.yes = function () {};
    this.no = function () {};
    this.clear = function () {
        process.stdout.write('\u001b[2J\u001b[0;0f');
    }
    this.print = function (incoming) {
        process.stdout.write(incoming.toString());
    }
    this.printLn = function (incoming) {
        process.stdout.cursorTo(0);
        process.stdout.clearLine();
        this.print(incoming.toString() + "\n");
        if (this.watchOn === 1)
            this.makePrompt();
    }
    this.titleText = {
        log: "log : ",
        warn: "warning : ",
        info: "info : ",
        error: "error : ",
        time: "time : "
    }
    this.textMaker = {
        timeStamp: function (stamp) {
            if (that.config.timeStamp === 1)
                return "[" + that.style((parseInt(stamp / 1000)).toString(), that.config.styles.timeStamp) + "]";
            return "";
        },
        date: function (stamp) {
            // DMY, MDY, YMD,
            var d = new Date(stamp);
            if (that.config.date === 1) {
                if (that.config.dateFormat === "YMD")
                    return"[" + that.style(d.getFullYear().toString() + "-" + (parseInt(d.getMonth()) + 1).toString() + "-" + d.getDate().toString() + " " + d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString() + "." + d.getMilliseconds().toString(), that.config.styles.date) + "]";
                if (that.config.dateFormat === "DMY")
                    return"[" + that.style(d.getDate().toString() + "-" + (parseInt(d.getMonth()) + 1).toString() + "-" + d.getFullYear().toString() + " " + d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString() + "." + d.getMilliseconds().toString(), that.config.styles.date) + "]";
                if (that.config.dateFormat === "MDY")
                    return"[" + that.style((parseInt(d.getMonth()) + 1).toString() + "-" + d.getDate().toString() + "-" + d.getFullYear().toString() + " " + d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString() + "." + d.getMilliseconds().toString(), that.config.styles.date) + "]";
            }
            return "";
        },
        /*
         *    type 
         */
        title: function (type) {
            var title;
            if (that.config.titleColor === 1)
                title = that.style(that.titleText[type], that.config.styles[type + "Title"]);
            if (that.config.title === 1)
                return title;
            return "";
        },
        icon: function (type) {
            if (that.config.icon === 1)
                return that.style(that.icons.log + " ", that.config.styles[type + "Icon"]);
            return "";
        },
        hostname: function (hostname) {
            if (that.config.hostname === 1)
                return that.style("=" + hostname + "= ", that.config.styles.hostname);
            return "";
        },
        json: function (text, type, stamp) {
            return {host: that.config.hostname, timeStamp: stamp, type: type, text: text}
        },
        count: function () {
            if (that.config.count === 1)
                return that.style(that.countNumber.toString() + ". ", that.config.styles.count);
            return "";
        },
        text: function (type, text) {
            if (that.config.count === 1)
                return that.style(text.toString(), that.config.styles[type]);
            return text.toString();
        },
        formater: function (text) {
            if ((that.detected.wonderfulOutput === 1) && (that.config.wonderfulOutput === 1)) {
                if (typeof text === "object")
                    return that.libs.wonderfulOutput.json(text);
                return text;
            } else {
                if (typeof text === "object")
                    return JSON.stringify(text);
                return text;
            }
        },
        add: function (text, type) {
            var stamp = +new Date;
            that.countNumber++;
            var out = text;
            if (that.config.format === "text") {
                out = that.textMaker.formater(out);
                out = that.textMaker.text(type, out);
                out = that.textMaker.title(type) + out;
                out = that.textMaker.icon(type) + out;
                out = that.textMaker.timeStamp(stamp) + out;
                out = that.textMaker.date(stamp) + out;
                out = that.textMaker.hostname(that.config.host) + out;
                out = that.textMaker.count() + out;
            } else if (that.config.format === "json") {
                that.textMaker.count();
                text = JSON.stringify({
                    count: that.countNumber.toString(),
                    hostname: that.config.host,
                    timeStamp: stamp,
                    type: type,
                    text: text
                });
            }
            that.textMaker.file(that.countNumber.toString(), that.config.host, stamp, type, text);
            that.cacheAdd(that.countNumber, that.config.host, text, type, stamp);
            return out;
        },
        file: function (count, host, stamp, type, text) {
            if (that.config.log.write === 1) {
                that.writeStream.write(JSON.stringify({
                    count: count,
                    hostname: host,
                    timeStamp: stamp,
                    type: type,
                    text: text
                }) + "\n");
            }
        },
        re: function (count, hostname, text, type, stamp) {
            if (that.config.format === "text") {
                text = that.textMaker.formater(text);
                text = that.textMaker.text(type, text);
                text = that.textMaker.title(type) + text;
                text = that.textMaker.icon(type) + text;
                text = that.textMaker.timeStamp(stamp) + text;
                text = that.textMaker.date(stamp) + text;
                text = that.textMaker.hostname(hostname) + text;
                text = that.textMaker.count(count) + text;
            } else if (that.config.format === "json") {
                that.textMaker.count();
                text = JSON.stringify({
                    count: count,
                    hostbane: hostname,
                    timeStamp: stamp,
                    type: type,
                    text: text
                });
            }
            return text;
        },
        incomming: function (hostname, text, type, stamp) {
            var stamp = +new Date;
            that.countNumber++;
            if (that.config.format === "text") {
                text = that.textMaker.formater(text);
                text = that.textMaker.text(type, text);
                text = that.textMaker.title(type) + text;
                text = that.textMaker.icon(type) + text;
                text = that.textMaker.timeStamp(stamp) + text;
                text = that.textMaker.date(stamp) + text;
                text = that.textMaker.hostname(hostname) + text;
                text = that.textMaker.count() + text;
            } else if (that.config.format === "json") {
                that.textMaker.count();
                text = JSON.stringify({
                    count: that.countNumber.toString(),
                    hostname: hostname,
                    timeStamp: stamp,
                    type: type,
                    text: text
                });
            }
            that.textMaker.file(that.countNumber.toString(), hostname, stamp, type, text);
            that.cacheAdd(that.countNumber, hostname, text, type, stamp);
            return text;
        }

    }
    this.log = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "log"));
    }
    this.error = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "error"));
    }
    this.info = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "info"));
    }
    this.timeText = "";
    this.timeStamp = 0;
    this.time = function (incoming) {
        this.timeText = incoming.toString();
        this.timeStamp = +new Date();
    }
    this.timeEnd = function () {
        this.printLn(this.textMaker.add(this.timeText + " " + (((+new Date())) - this.timeStamp).toString() + "ms", "time"));
    }
    this.warn = function (incoming) {
        this.printLn(this.textMaker.add(incoming, "warn"));
    }
    this.table = function (tableData) {
        var u = {
            a1: "\u250C",
            c1: "\u252c",
            b1: "\u2500",
            a2: "\u2510",
            a3: "\u2514",
            a4: "\u2518",
            c2: "\u253c",
            c3: "\u2534",
            c4: "\u251c",
            c5: "\u2524",
            b2: "\u2502"
        }

        function calculateTable(tableData) {
            var sizeCol = 0,
                    sizeDat = [],
                    colNum = 0;
            for (var i = 0; tableData.length > i; i++)
                if (tableData[i].length > colNum)
                    colNum = tableData[i].length;

            for (var ic = 0; colNum > ic; ic++) {
                sizeDat[ic] = 0;
                for (var il = 0; tableData.length > il; il++) {
                    if (typeof tableData[il][ic] !== "undefined")
                        if (tableData[il][ic].length > sizeDat[ic])
                            sizeDat[ic] = tableData[il][ic].length;
                }
            }
            return  sizeDat;
        }
        function tableTop(tableSize) {
            var out = "";
            out += u.a1;
            for (var ic = 0; tableSize.length > ic; ic++) {
                if (ic > 0)
                    out += u.c1;
                for (var il = 0; tableSize[ic] > il; il++)
                    out += u.b1;
            }
            out += u.a2;
            return out;
        }

        function tableCenter(tableSize) {
            var out = "";
            out += u.c4;
            for (var ic = 0; tableSize.length > ic; ic++) {
                if (ic > 0)
                    out += u.c2;
                for (var il = 0; tableSize[ic] > il; il++)
                    out += u.b1;
            }
            out += u.c5;
            return out;
        }

        function tableButton(tableSize) {
            var out = "";
            out += u.a3;
            for (var ic = 0; tableSize.length > ic; ic++) {
                if (ic > 0)
                    out += u.c3;
                for (var il = 0; tableSize[ic] > il; il++)
                    out += u.b1;
            }
            out += u.a4;
            return out;
        }

        function tableDataLine(tableData, tableSize) {
            var out = "",
                    before = 0;
            out += u.b2;
            for (var ic = 0; tableSize.length > ic; ic++) {
                if (ic > 0)
                    out += u.b2;
                if (typeof tableData[ic] !== "undefined") {
                    before = parseInt((tableSize[ic] - tableData[ic].length) / 2);
                    for (var ila = 0; before > ila; ila++)
                        out += " ";
                    out += tableData[ic];
                    for (var ilb = 0; (tableSize[ic] - (before + tableData[ic].length)) > ilb; ilb++)
                        out += " ";
                } else {
                    for (var il = 0; tableSize[ic] > il; il++)
                        out += " ";
                }
            }
            out += u.b2;
            return out;
        }

        function tableTitle(tableData, tableSize) {
            var out = "",
                    before = 0;
            out += u.b2;
            for (var ic = 0; tableSize.length > ic; ic++) {
                if (ic > 0)
                    out += u.b2;
                if (typeof tableData[ic] !== "undefined") {
                    before = parseInt((tableSize[ic] - tableData[ic].length) / 2);
                    for (var ila = 0; before > ila; ila++)
                        out += " ";
                    out += '\u001b[1m' + tableData[ic] + '\u001b[0m';
                    for (var ilb = 0; (tableSize[ic] - (before + tableData[ic].length)) > ilb; ilb++) {
                        out += " ";
                    }
                } else {
                    for (var il = 0; tableSize[ic] > il; il++) {
                        out += " ";
                    }
                }
            }
            out += u.b2;
            return out;
        }


        var tableSize = calculateTable(tableData),
                out = "";
        out += tableTop(tableSize) + "\n";
        for (var i = 0; tableData.length > i; i++) {
            if (i > 0) {
                out += tableCenter(tableSize) + "\n";
                out += tableDataLine(tableData[i], tableSize) + "\n";
            } else {
                out += tableTitle(tableData[i], tableSize) + "\n";
            }
        }
        out += tableButton(tableSize) + "\n";
        process.stdout.write(out);
    }
    /*  
     *
     *
     */
    this.graph = function (barData, startNumber) {
        startNumber = startNumber || 0;
        var bar = [
            " ",
            "\u2581",
            "\u2583",
            "\u2584",
            "\u2585",
            "\u2586",
            "\u2587",
            "\u2588",
        ],
                barb = [
                    " ",
                    "\u2581",
                    "\u2582",
                    "\u2583",
                    "\u2584",
                    "\u2585",
                    "\u2586",
                    "\u2587",
                    "\u2588",
                ],
                graph = "",
                minNumber = 0,
                maxNumber = 0,
                endNumber = 0,
                startNumber = 0,
                diffNumber = 0,
                outData = [],
                perNumber = 0,
                minus = 0;

        if (barData.length === 0)
            return [];

        if (startNumber > barData.length) {
            startNumber = 0;
        }
        if (60 > barData.length - 1) {
            startNumber = 0;
        }
        if (60 > ((barData.length - 1) - startNumber)) {
            startNumber = ((barData.length - 1) - 60);
            endNumber = barData.length;
        } else {
            endNumber = startNumber + 60;
        }
        if (0 > startNumber) {
            startNumber = 0;
        }
        maxNumber = parseInt(barData[0]);
        minNumber = parseInt(barData[0]);
        for (var i = startNumber; barData.length > i; i++) {
            if (parseFloat(barData[i]) > maxNumber)
                maxNumber = parseInt(barData[i]);
            if (minNumber > parseFloat(barData[i]))
                minNumber = parseInt(barData[i]);
        }
        minNumber--;
        diffNumber = maxNumber - minNumber;
        perNumber = diffNumber / 100;
        for (var i = startNumber; barData.length > i; i++) {
            outData.push((parseInt(barData[i]) - minNumber) / perNumber);
        }
        graph = "\n\u25B2 \n";
        for (var i = 0; 14 > i; i++) {
            graph += "\u2502";
            for (var iL = 0; 60 > iL; iL++) {
                minus = parseInt(outData[iL]) - ((14 - i) * 8)
                if (1 > minus)
                    minus = 0;
                if (minus > 7)
                    minus = 8;
                if (typeof outData[iL] === "undefined")
                    minus = 0;
                graph += barb[minus];

            }
            graph += "\n";
        }
        graph += "\u2514";
        for (var i = 0; 60 > i; i++) {
            graph += "\u2500";
        }

        graph += "\u25B6" + "\n";
        process.stdout.write(graph);
    }

    this.exit = function () {
        that.makePrompt();
        that.config.mode = "yesNo";
        process.stdout.write("\n");
        this.print(" Are you sure you want to exit? (y\\n)");
        process.stdout.write("\n");
        that.yes = function () {
            process.exit();
        };
    }
    this.cursorPosition = 0;
    this.cursorText = "nodeConsole_> ";

    this.on = function (incomming) {
        return false;
    }
    this.line = {
        last: "",
        text: "",
    }
    this.cursor = {
        up: function (line) {
            process.stdout.write("\u001b[" + line + "A");
        },
        down: function (line) {
            process.stdout.write("\u001b[" + line + "B");
        },
        left: function (left) {
            process.stdout.write("\u001b[" + left + "D");
        },
        right: function (right) {
            process.stdout.write("\u001b[" + right + "C");
        }
    }
    this.newLine = function () {
        process.stdout.write("\n");
        that.cursorPosition = 0;
        that.line.text = "";
    }
    this.makePrompt = function () {
        process.stdout.write("\n");
        process.stdout.clearLine();
        process.stdout.write(that.command.watch());
        that.cursor.up(1);
        process.stdout.cursorTo(0);
        process.stdout.clearLine();
        if (this.config.mode === "hidden") {
            process.stdout.write(that.cursorText);
            return true;
        } else if (this.config.mode === "password") {
            process.stdout.write(that.cursorText + (function () {
                var out = "";
                for (var ri = 0; that.line.text.length > ri; ri++)
                    out += "*";
                return out;
            })());
        } else {
            process.stdout.write(that.cursorText + this.line.text);
        }
        process.stdout.cursorTo(this.cursorPosition + this.cursorText.length);
    }
    this.password = {
        on: function (password) {
            return false;
        },
        last: "none",
        inAction: 0,
        action:function(fun, action) {
            if (typeof fun === "undefined")
                return false;
            if (typeof action === "undefined")
                action = 1;
            that.password.inAction = action;
            that.password.last = that.config.limitation;
            that.config.limitation = "password";
        },
        doAction: function () {
            that.password.on(that.line.text)
            that.password.inAction--;
            if (that.password.inAction === 0)
                that.config.limitation = that.password.last;
        }
    }
    this.number = {
        on: function (number) {
            return false;
        },
        last: "none",
        inAction: 0,
        action:function(fun, action) {
            if (typeof fun === "undefined")
                return false;
            if (typeof action === "undefined")
                action = 1;
            that.number.inAction = action;
            that.number.last = that.config.limitation;
            that.config.limitation = "number";
        },
        doAction: function () {
            that.number.on(that.line.text)
            that.number.inAction--;
            if (that.number.inAction === 0)
                that.config.limitation = that.number.last;
        }
    }
    this.calculator = {
        on: function (calculator) {
            return false;
        },
        last: "none",
        inAction: 0,
        action:function(fun, action) {
            if (typeof fun === "undefined")
                return false;
            if (typeof action === "undefined")
                action = 1;
            that.calculator.inAction = action;
            that.calculator.last = that.config.limitation;
            that.calculator.limitation = "calculator";
        },
        doAction: function () {
            that.calcularor.on(that.line.text)
            that.calculator.inAction--;
            if (that.calculator.inAction === 0)
                that.config.limitation = that.calculator.last;
        }
    }
    this.direct = {
        on: function (direct) {
            return false;
        },
        last: "none",
        inAction: 0,
        action:function(fun, action) {
            if (typeof fun === "undefined")
                return false;
            if (typeof action === "undefined")
                action = 1;
            that.direct.inAction = action;
            that.direct.last = that.config.limitation;
            that.direct.limitation = "direct";
        },
        doAction: function (key) {
            that.direct.on(key)
            that.direct.inAction--;
            if (that.direct.inAction === 0)
                that.config.limitation = that.direct.last;
        }
    },
    this.mouse = {
        click:function(input){
            input.splice(input.length-1, 1);
            input.splice(0, 2);
            var act = input.split(";");
            console.log("button "+act[0]+" row "+act[1]+" colum "+act[2]);
        }
    }
    this.command = {
        container: {
            helper: {},
            commands: {}
        },
        on: function (commandArray) {
            return false;
        },
        commander: function (command) {

            var commandArray = that.command.separator(command);
            for (var i = 0; commandArray.length > i; i++) {
                that.command.on(commandArray[i]);
                if (typeof that.command.container.commands[commandArray[i][0]] !== "undefined") {
                    that.printLn(that.command.container.commands[commandArray[i][0]](commandArray[i]));
                }
            }
        },
        separator: function (command) {
            command = command.toString().replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
            var commands = [];
            var commandi = 0;
            var commandit = 0;
            var mod = 0;
            var modSelector = "";
            for (var i = 0; command.length > i; i++) {
                if (typeof commands[commandi] === "undefined")
                    commands[commandi] = [];
                if (typeof commands[commandi][commandit] === "undefined")
                    commands[commandi][commandit] = "";
                if (mod === 0) {
                    if (command.charAt(i) === ";") {
                        commandi++;
                        commandit = 0;
                    } else if (command.charAt(i) === '\\') {
                        mod = 2;
                    } else if (command.charAt(i) === "'") {
                        mod = 1;
                        modSelector = "'";
                    } else if (command.charAt(i) === '"') {
                        mod = 1;
                        modSelector = '"';
                    } else if ((command.charAt(i) === ' ') || (command.charAt(i) === "\t")) {
                        if ((i > 0) && (command.charAt(i - 1) !== " ") && (command.charAt(i - 1) !== "\t") && (command.charAt(i - 1) !== ";") && (command.charAt(i - 1) !== "'") && (command.charAt(i - 1) !== '"'))
                            commandit++;
                    } else {
                        commands[commandi][commandit] += command.charAt(i);
                    }
                } else if (mod === 1) {
                    if (command.charAt(i) === modSelector) {
                        mod = 0;
                    } else {
                        commands[commandi][commandit] += command.charAt(i);
                    }
                } else if (mod === 2) {
                    commands[commandi][commandit] += command.charAt(i);
                    mod = 0;
                }
            }
            return commands;
        },
        looking: function (input) {
            var separated = that.command.separator(input),
                    tags = that.command.container.helper,
                    out = [];
            separated = separated[separated.length - 1];
            if (typeof separated === "undefined")
                return false;
            for (var i = 0; separated.length > i; i++) {
                if (i !== separated.length - 1) {
                    if (typeof tags[separated[i]] === "undefined")
                        return false;
                    tags = tags[separated[i]];
                } else {
                    out = that.command.filter(tags, separated[i]);
                }
            }
            return out;
        },
        filter: function (tags, separated) {
            var out = [];
            if (separated === "") {
                for (var I in tags)
                    out.push(I);
            } else {
                for (var I in tags)
                    if (I.indexOf(separated) == 0)
                        out.push(I);
            }
            return out;
        },
        add: function (command, functio, help) {


            if (Object.prototype.toString.call(command) === '[object Array]') {
                for (var i = 0; command.length > i; i++)
                    that.command.addOne(command[i], functio, help);
            } else if (typeof command === "string") {
                that.command.addOne(command, functio, help);
            }
        },
        addOne: function (command, functio, help) {
            if (typeof that.command.container.commands[command] !== "undefined")
                return false;
            that.command.container.commands[command] = functio;
            if (typeof help === "undefined")
                help = {};
            that.command.container.helper[command] = help;
        },
        make: function (input) {
            var out = "",
                    elementsNumber = 0;
            for (var i in input) {
                if (elementsNumber < 6)
                    out += input[i] + ' ';
            }
            return out;
        },
        watch: function () {
            if (that.line.text === "")
                return "";
            return that.command.make(that.command.looking(that.line.text));
        }
    }
    this.watch = function () {
        that.watchOn = 1;
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        that.makePrompt();
        process.stdin.on('data', function (key) {
            if (that.config.mode === "yesNo") {
                if ((key === 'y') || (key === 'j') || (key === 'i')) {
                    that.newLine();
                    that.yes();
                    that.yes = function () {};
                    that.config.mode = "normal";
                    that.makePrompt();
                } else {
                    that.newLine();
                    that.no();
                    that.no = function () {};
                    that.config.mode = "normal";
                    process.stdout.write("\n");
                    that.makePrompt();
                }
            } else {
                if (key === '\u0003') {
                    that.exit();
                } else if ((that.config.limitation === "direct")) {
                    if (that.direct.inAction === 0) {
                        that.on(key);
                    } else {
                        that.direct.doAction(key);
                    }
                } else if (key === '\u000D') {
                    if (that.line.text.length > 0) {
                        if (["q", "quit", "e", "exit"].indexOf(that.line.text) > -1) {
                            that.exit();
                        } else {
                            process.stdout.write("\n");
                            if ((that.config.limitation !== "password") || (that.config.limitation !== "calculator") || (that.config.limitation !== "number")) {
                                that.history.add(that.line.text);
                                that.on(that.line.text);
                                that.command.commander(that.line.text);
                            }
                            if ((that.config.limitation === "password") || (that.config.limitation === "calculator") || (that.config.limitation === "number")) {
                                if (that[that.config.limitation].inAction === 0) {
                                    that.on(that.line.text);
                                } else {
                                    that[that.config.limitation].doAction();
                                }
                            }
                            that.line.text = "";
                            that.line.last = "";
                            that.cursorPosition = 0;
                            that.makePrompt();
                        }
                    }
                    
                } else if ((key.charAt(0) === '[') && (key.charAt(1) === '<')){
                    that.mouse.click(key);
                } else if ((key === '\u0008') || (key.charCodeAt(0) === 127)) {
                    if (that.cursorPosition > 0) {
                        that.line.text = that.line.text.substr(0, parseInt(that.cursorPosition - 1)) + that.line.text.substr(parseInt(that.cursorPosition), that.line.text.length);
                        that.cursorPosition--;
                        that.makePrompt();
                    } else {
                        if ((that.config.beep === 1))
                            that.beep();
                    }
                } else if ((key === '\u001b[3~')) {
                    if (that.line.text.length > that.cursorPosition) {
                        that.line.text = that.line.text.substr(0, parseInt(that.cursorPosition)) + that.line.text.substr(parseInt(that.cursorPosition + 1), that.line.text.length);
                        that.makePrompt();
                    } else {
                        if ((that.config.beep === 1))
                            that.beep();
                    }
                } else if ((key === '\u001b[A') && ((that.config.limitation !== "password") || (that.config.limitation !== "calculator") || (that.config.limitation !== "number"))) {
                    if (that.history.position > 0) {
                        that.history.position--;
                        that.line.text = that.history.list[that.history.position];
                        that.cursorPosition = that.line.text.length;
                        that.makePrompt();
                    } else {
                        if ((that.config.beep === 1))
                            that.beep();
                    }
                } else if ((key === '\u001b[B') && ((that.config.limitation !== "password") || (that.config.limitation !== "calculator") || (that.config.limitation !== "number"))) {
                    if (that.history.list.length > that.history.position + 1) {
                        that.history.position++;
                        that.line.text = that.history.list[that.history.position];
                        that.cursorPosition = that.line.text.length;
                        that.makePrompt();
                    } else if (that.history.list.length === that.history.position + 1) {
                        that.history.position++;
                        that.line.text = that.line.last;
                        that.cursorPosition = that.line.text.length;
                        that.makePrompt();
                    }

                } else if (((key === '\u001b[C') || (key == '\u001B\u005B\u0043')) && (that.config.limitation !== "password")) {
                    if (that.line.text.length > that.cursorPosition) {
                        that.cursorPosition++;
                    } else {
                        if ((that.config.beep === 1))
                            that.beep();
                    }
                    that.makePrompt();
                } else if (((key === '\u001b[D') || (key == '\u001B\u005B\u0044')) && (that.config.limitation !== "password")) {
                    if (that.cursorPosition > 0) {
                        that.cursorPosition--;
                    } else {
                        if ((that.config.beep === 1))
                            that.beep();
                    }
                    that.makePrompt();
                } else {
                    if ((that.config.limitation === "none") ||
                            ((that.config.limitation === "safe") && (that.config.limits.safe.indexOf(key.toString()) > -1)) ||
                            ((that.config.limitation === "number") && (that.config.limits.number.indexOf(key.toString()) > -1)) ||
                            ((that.config.limitation === "calculator") && (that.config.limits.calculator.indexOf(key.toString()) > -1))
                            ) {
                        if (that.line.text.length > 0) {
                            that.line.text = that.line.text.substr(0, parseInt(that.cursorPosition)) + key.toString() + that.line.text.substr(parseInt(that.cursorPosition), that.line.text.length);
                        } else {
                            that.line.text = key.toString();
                        }
                        that.line.last = that.line.text;
                        that.cursorPosition++;
                        that.makePrompt();
                    }
                }
            }
        });
    }
    var that = this;
    this.check();
};





dragon.admin = {}







dragon.admin = {}



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * 
 *  sets = {
 *      name:"",
 *      variable:"",
 *      value:,
 *      collection:[]
 * 
 *  }
 * 
 */


dragon.admin.admin = {
    fun:{},
    vars:{
        sets:{
            minify:{
                variable:"dragon.out.setup.minify",
                value:dragon.out.setup.minify,
                collection:[0,1]
            },
            debugjs:{
                variable:"dragon.out.setup.debugjs",
                value:dragon.out.setup.debugjs,
                collection:[0,1]
            }                   
        }
    },
    setup:{}
}




dragon.admin.cli = {
    fun:{},
    historyCache:[],
    historyPosition:0,
    currentCache:[],
    chess:{},
    poker:{},
    tictactoe:{},
    globaltermonuklearwar:{},
    cursorPostion:8,
    commandP:"",
    yesNo:0,
    mod:{
        password:0,
        yesNo:0
    },
    
}




dragon.admin.db = {
    lib:{
        beautify:require('js-beautify').js_beautify,
    },
}


dragon.admin.db.setup = {
    path:"db/databases.json",
    beautify:1,
}
/*

 

default file reader

 

*/
dragon.admin.fileread={}

 
dragon.admin.fileread.fs = require('fs');

 
dragon.admin.fileread.v = {
    dirs:{
        css:dragon.v.basedir+'css/',
        js:dragon.v.basedir+'js/',
        html:dragon.v.basedir+'html/',
        nat:dragon.v.basedir+'html/',
        include:dragon.v.basedir+'html/',
        endjs:dragon.v.basedir+'endjs/',
        sass:dragon.v.basedir+'sass/',
    }   
};

/* html out generator */

 
dragon.admin.fileread.tag={}
dragon.admin.httpd = {
    fun: {
        http: require('http'),
        qs: require('querystring')
    },
    lib: {
        http: require('http'),
    },
    setup: {
        ip: "127.0.0.1",
        port: 9960
    }
}

dragon.admin.out={}
dragon.admin.render = {}

dragon.admin.render.lib = {
     fs: require('fs'),
}

dragon.admin.render.fun = {}



dragon.admin.screenshoot={}


dragon.admin.screenshoot.fun={}

dragon.admin.screenshoot.v={}

dragon.admin.screenshoot.lib={}







dragon.admin.admin.fun.set = function(set, value){
    if (typeof dragon.admin.admin.vars.sets[set] === "undefined") return 1;
    if (0 > dragon.admin.admin.vars.sets[set].collection.indexOf(value))
        if (0 > dragon.admin.admin.vars.sets[set].collection.indexOf(parseInt(value))){
            return 2;
        }else{
            value = parseInt(value);
        }
    dragon.admin.admin.vars.sets[set].value = value;
    eval(dragon.admin.admin.vars.sets[set].variable+" = dragon.admin.admin.vars.sets['"+set+"'].value");
    dragon.admin.admin.fun.cacheEmpty();
    dragon.out.cache.module={};
    return (set+" changed to "+value.toString());
}

dragon.admin.admin.fun.list = function(){
    var out = "";
    for ( var set in dragon.admin.admin.vars.sets ){
        out = set + "\n";
    }
    return out;
}


dragon.admin.admin.fun.get = function(){
    var out = "";
    for ( var set in dragon.admin.admin.vars.sets ){
        out = set + "\n";
    }
    return out;
}





dragon.admin.admin.fun.reload = function(){
    
}

dragon.admin.admin.fun.httpdStop = function(){
    
}

dragon.admin.admin.fun.cacheEmpty = function(){
    dragon.out.cache.module={};    
}









dragon.admin.cli.admin = function (command) {
    
    if (command.length < 2)
        return dragon.admin.cli.help.admin();
    switch (command[1]) {
        case 's':
        case 'setup':
            return dragon.admin.cli.adminSetup(command);
            break;
        default:
            return ('Unkown module command \n if you need module help try object help or m h\n');
    }
}

dragon.admin.cli.adminSetup = function(command){
    if (command.length < 3)
        return dragon.admin.cli.help.admin();
    switch (command[2]) {
        case 'l':
        case 'list':
            return dragon.admin.cli.adminSetupList(command);
            break;
        case 's':
        case 'set':
            return dragon.admin.cli.adminSetupSet(command);
            break;
        case 'g':
        case 'get':
            return dragon.admin.cli.adminSetupGet(command);
            break; 
        default:
            return ('Unkown module command \n if you need module help try object help or m h\n');
    }   
}




dragon.admin.cli.adminSetupList = function(command){
    return dragon.admin.admin.fun.list();
}

    
dragon.admin.cli.adminSetupSet = function(command){
    if (command.length < 5)
        return dragon.admin.cli.help.admin();
    return dragon.admin.admin.fun.set(command[3], command[4]);
}    




dragon.admin.cli.adminSetupGet = function(command){
    if (typeof command[3] === "undefined") return "Missing option name";
    var out = dragon.admin.admin.fun.get(command[3]);
    if (out === false) return 'Option "'+command[3]+'" not exist';
    return out;
}













dragon.admin.cli.admin = function (command) {
    
    if (command.length < 2)
        return dragon.admin.cli.help.admin();
    switch (command[1]) {
        case 's':
        case 'setup':
            return dragon.admin.cli.adminSetup(command);
            break;
        default:
            return ('Unkown module command \n if you need module help try object help or m h\n');
    }
}

dragon.admin.cli.adminSetup = function(command){
    if (command.length < 3)
        return dragon.admin.cli.help.admin();
    switch (command[2]) {
        case 'l':
        case 'list':
            return dragon.admin.cli.adminSetupList(command);
            break;
        case 's':
        case 'set':
            return dragon.admin.cli.adminSetupSet(command);
            break;
        case 'g':
        case 'get':
            return dragon.admin.cli.adminSetupGet(command);
            break; 
        default:
            return ('Unkown module command \n if you need module help try object help or m h\n');
    }   
}




dragon.admin.cli.adminSetupList = function(command){
    return dragon.admin.admin.fun.list();
}

    
dragon.admin.cli.adminSetupSet = function(command){
    if (command.length < 5)
        return dragon.admin.cli.help.admin();
    return dragon.admin.admin.fun.set(command[3], command[4]);
}    




dragon.admin.cli.adminSetupGet = function(command){
    if (typeof command[3] === "undefined") return "Missing option name";
    var out = dragon.admin.admin.fun.get(command[3]);
    if (out === false) return 'Option "'+command[3]+'" not exist';
    return out;
}



dragon.admin.cli.chess.show = function () {
    var out ="",
    u = {
        a1: "\u250C",
        c1: "\u252c",
        b1: "\u2500",
        a2: "\u2510",
        a3: "\u2514",
        a4: "\u2518",
        c2: "\u253c",
        c3: "\u2534",
        c4: "\u251c",
        c5: "\u2524",
        b2: "\u2502"
    },
    t = {
        "1": {
            "1": " ",
            "2": " ",
            "3": " ",
            "4": " ",
            "5": " ",
            "6": " ",
            "7": " ",
            "8": " ",
        },
        "2": {
            "1": " ",
            "2": " ",
            "3": " ",
            "4": " ",
            "5": " ",
            "6": " ",
            "7": " ",
            "8": " ",
        },
        "3": {
            "1": " ",
            "2": " ",
            "3": " ",
            "4": " ",
            "5": " ",
            "6": " ",
            "7": " ",
            "8": " ",
        },
        "4": {
            "1": " ",
            "2": " ",
            "3": " ",
            "4": " ",
            "5": " ",
            "6": " ",
            "7": " ",
            "8": " ",
        },
        "5": {
            "1": " ",
            "2": " ",
            "3": " ",
            "4": " ",
            "5": " ",
            "6": " ",
            "7": " ",
            "8": " ",
        },
        "6": {
            "1": " ",
            "2": " ",
            "3": " ",
            "4": " ",
            "5": " ",
            "6": " ",
            "7": " ",
            "8": " ",
        },
        "7": {
            "1": " ",
            "2": " ",
            "3": " ",
            "4": " ",
            "5": " ",
            "6": " ",
            "7": " ",
            "8": " ",
        },
        "8": {
            "1": " ",
            "2": " ",
            "3": " ",
            "4": " ",
            "5": " ",
            "6": " ",
            "7": " ",
            "8": " ",
        },
    },
            f = {
                w: {
                    k: "\u265b", // king
                    q: "\u265a", // queen
                    r: "\u265c", // rook / bastya
                    b: "\u265d", // bishop
                    n: "\u265e", // knight
                    p: "\u265f"  // pawn

                },
                b: {
                    k: "\u2655", // king
                    q: "\u2654", // queen
                    r: "\u2656", // rook / bastya
                    b: "\u2657", // bishop
                    n: "\u2658", // knight
                    p: "\u2659"  // pawn

                }
            }
    felso = " " + u.a1 + u.b1 + u.c1 + u.b1 + u.c1 + u.b1 + u.c1 + u.b1 + u.c1 + u.b1 + u.c1 + u.b1 + u.c1 + u.b1 + u.c1 + u.b1 + u.a2 + "\n",
            kozep = " " + u.c4 + u.b1 + u.c2 + u.b1 + u.c2 + u.b1 + u.c2 + u.b1 + u.c2 + u.b1 + u.c2 + u.b1 + u.c2 + u.b1 + u.c2 + u.b1 + u.c5 + "\n",
            also = " " + u.a3 + u.b1 + u.c3 + u.b1 + u.c3 + u.b1 + u.c3 + u.b1 + u.c3 + u.b1 + u.c3 + u.b1 + u.c3 + u.b1 + u.c3 + u.b1 + u.a4 + "\n";


    t["8"] = {
        "1": f.b.r,
        "2": f.b.n,
        "3": f.b.b,
        "4": f.b.q,
        "5": f.b.k,
        "6": f.b.b,
        "7": f.b.n,
        "8": f.b.r,
    },
            t["7"] = {
        "1": f.b.p,
        "2": f.b.p,
        "3": f.b.p,
        "4": f.b.p,
        "5": f.b.p,
        "6": f.b.p,
        "7": f.b.p,
        "8": f.b.p,
    },
            t["2"] = {
        "1": f.w.p,
        "2": f.w.p,
        "3": f.w.p,
        "4": f.w.p,
        "5": f.w.p,
        "6": f.w.p,
        "7": f.w.p,
        "8": f.w.p,
    },
            t["1"] = {
        "1": f.w.r,
        "2": f.w.n,
        "3": f.w.b,
        "4": f.w.k,
        "5": f.w.q,
        "6": f.w.b,
        "7": f.w.n,
        "8": f.w.r,
    },
    out +="  a b c d e f g h\n";
    out +=felso;
    var line = "";
    for (var il = 1; il < 9; il++) {
        if (il > 1)
            out +=kozep;
        line = il.toString() + u.b2;
        for (var ic = 1; ic < 9; ic++) {
            line += t[il.toString()][ic.toString()] + u.b2;
        }
        line += il.toString() + "\n";
        out +=line;
    }
    out +=also;
    out +="  a b c d e f g h\n";
    return out;
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

dragon.admin.cli.dragon={}

dragon.admin.cli.dragon.recv = function (command) {
    if (command.length < 3)
        return dragon.admin.cli.help.file();
    switch (command[1]) {
        case 'h':
        case 'httpd':
            return dragon.admin.cli.dragon.httpd(command[2]);
            break;
        default:
            return ('Unkown setup command \n if you need help try setup help or s h\n');
    }
}

dragon.admin.cli.dragon.httpd=function(controlCommand){
    if(controlCommand==="start"){
        return dragon.httpd.fun.start();
    }else if(controlCommand==="stop"){
        return dragon.httpd.fun.stop();
    }else{
        return 2;
    }
}
dragon.admin.cli.com = {// commands

    help: function () {// write the help
        console.log("");
    }
}

dragon.admin.cli.toArrayBuffer = function (buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return view;
}

dragon.admin.cli.debug = function (debugMessage) {
    dragon.admin.cli.interactiveConsole.printLn(debugMessage);
}

dragon.admin.cli.tools = {}

dragon.admin.cli.tools.output = {}

dragon.admin.cli.tools.output.listmaker = function (list) {
    var out="";
    for (var i = 0; list.length > i; i++) {
        out+=(i+1).toString();
        for (var element in list[i])
            out += "\t"+list[i][element];
        out += "\n";
    }
    return out;
}



dragon.admin.cli.setup = function (command) {
    if (command.length < 2) {
        return dragon.admin.cli.help.file();
    }
    switch (command[1]) {
        case 's':
        case 'set':
            if (command.length < 4) {
                return dragon.admin.cli.help.file();
            } else {
                return dragon.admin.db.utils.setup.set(command[2], command[3]);
            }
            break;
        case 'g':
        case 'get':
            if (command.length < 3) {
                return dragon.admin.cli.help.file();
            } else {
                return "\n" + dragon.admin.db.utils.setup.get(command[2]).toString() + "\n";
            }
            break;
        case 'l':
        case 'list':
            return "\n" + dragon.admin.db.utils.setup.list(command[2]).toString() + "\n";
            break;
        default:
            return ('Unkown setup command \n if you need help try setup help or s h\n');
            break;
    }
}


dragon.admin.cli.file = function (command) {
    if (command.length < 2)
        return dragon.admin.cli.help.file();
    switch (command[1]) {
        case 'a':
        case 'add':
            return dragon.admin.db.utils.files.add(command[2], command[3]);
            break;
        case 'l':
        case 'list':
            var ftype = command[2] || "all";
            var fntag = command[3] || "";
            return dragon.admin.cli.tools.output.listmaker(dragon.admin.db.utils.files.list(ftype, fntag));
            break;
        case 'd':
        case 'del':
            return dragon.admin.db.utils.files.del(command[2], command[3]);
            break;
        case 'c':
        case 'check':
            var ftype = command[2] || "all",
                    out = dragon.admin.db.utils.files.check(ftype),
                    outString = "";
            for (var i = 0; out.length > i; i++) {
                outString += out[i] + "\n"
            }
            return outString;
            break;
        case 'm':
        case 'make':
            outString = dragon.admin.db.utils.files.make(command[2], command[3]);
            return outString;
            break;            
        case 'g':
        case 'get':
            var ftype = command[2] || "all",
                    out = dragon.admin.db.utils.files.get(ftype),
                    outString = "";
            for (var i = 0; out.length > i; i++) {
                outString += i.toString() + "\t" + out[i] + "\n"
            }
            return outString;
            break;
        default:
            return ('Unkown setup command \n if you need help try file help or f h\n');
    }
}


dragon.admin.cli.object = function (command) {
    if (command.length < 2)
        return dragon.admin.cli.help.object();
    switch (command[1]) {
        case 'a':
        case 'add':
            return dragon.admin.db.utils.objects.add(command[2], command[3]);
            break;
        case 'l':
        case 'list':
            var ftype = command[2] || "all";
            var fntag = command[3] || "";
            return dragon.admin.db.utils.objects.list(ftype, fntag);
            break;
        case 'd':
        case 'del':
            return dragon.admin.db.utils.objects.del(command[2], command[3]);
            break;
        default:
            return ('Unkown setup command \n if you need help try object help or o h\n');
    }
}


dragon.admin.cli.option = function (command) {



}


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


console.log(Buffer.from("ICAgICAgICAgICAgICAgLF8gICAuICAuXy4gXy4gIC4NCiAgICAgICAgICAgLCBfLVwnLCd8flx+ICAgICAgfi8gICAgICA7LSdfICAgXy0nICAgICAsO187XywgICAgfn4tDQogIC9+fi1cXy8tJ34nLS0nIFx+fnwgJywgICAgLCcgICAgICAvICAvIH58LV9cXy9+L34gICAgICB+fi0tfn5+fictLV8NCiAgLyAgICAgICAgICAgICAgLC8nLS9+ICdcICwnIF8gICwgJ3wsJ3x+ICAgICAgICAgICAgICAgICAgIC5fLy0sIC9+DQogIH4vLSd+XF8sICAgICAgICctLHwgJ3wuICcgICB+ICAsXCAvJ34gICAgICAgICAgICAgICAgLyAgICAvXyAgL34NCi4tfiAgICAgICd8ICAgICAgICAnJyxcfnxcICAgICAgIF9cfiAgICAgLF8gICwgICAgICAgICAgICAgICAvfA0KICAgICAgICAgICdcICAgICAgICAvJ34gICAgICAgICAgfF8vflxcLC0sfiAgXCAiICAgICAgICAgLF8sLyB8DQogICAgICAgICAgIHwgICAgICAgLyAgICAgICAgICAgIC5fLX4nXF8gX358ICAgICAgICAgICAgICBcICkgLw0KICAgICAgICAgICAgXCAgIF9fLVwgICAgICAgICAgICcvICAgICAgfiB8XCAgXF8gICAgICAgICAgLyAgfg0KICAuLCAgICAgICAgICdcIHwsICB+LV8gICAgICAtIHwgICAgICAgICAgXFxfJyB+fCAgL1wgIFx+ICwNCiAgICAgICAgICAgICAgIH4tXycgIF87ICAgICAgICdcICAgICAgICAgICAnLSwgICBcLCcgL1wvICB8DQogICAgICAgICAgICAgICAgICdcXyx+J1xfICAgICAgIFxfIF8sICAgICAgIC8nICAgICcgIHwsIC98Jw0KICAgICAgICAgICAgICAgICAgIC8gICAgIFxfICAgICAgIH4gfCAgICAgIC8gICAgICAgICBcICB+JzsgLSxfLg0KICAgICAgICAgICAgICAgICAgIHwgICAgICAgflwgICAgICAgIHwgICAgfCAgLCAgICAgICAgJy1fLCAsOyB+IH5cDQogICAgICAgICAgICAgICAgICAgIFwsICAgICAgLyAgICAgICAgXCAgICAvIC98ICAgICAgICAgICAgLC0sICwgICAtLA0KICAgICAgICAgICAgICAgICAgICAgfCAgICAsLyAgICAgICAgICB8ICB8JyB8LyAgICAgICAgICAsLSAgIH4gXCAgICcuDQogICAgICAgICAgICAgICAgICAgICx8ICAgLC8gICAgICAgICAgIFwgLC8gICAgICAgICAgICAgIFwgICAgICAgfA0KICAgICAgICAgICAgICAgICAgICAvICAgIHwgICAgICAgICAgICAgfiAgICAgICAgICAgICAgICAgLX5+LSwgLyAgIF8NCiAgICAgICAgICAgICAgICAgICAgfCAgLC0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfiAgICAvDQogICAgICAgICAgICAgICAgICAgIC8gLCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH4NCiAgICAgICAgICAgICAgICAgICAgJyx8ICB+DQogICAgICAgICAgICAgICAgICAgICAgfic=",'base64'));



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

dragon.admin.cli.fun.graph = function (barData, startNumber) {
    startNumber = startNumber || 0;
    var bar = [
        " ",
        "\u2581",
        "\u2583",
        "\u2584",
        "\u2585",
        "\u2586",
        "\u2587",
        "\u2588",
    ],
    barb = [
        " ",
        "\u2581",
        "\u2582",
        "\u2583",
        "\u2584",
        "\u2585",
        "\u2586",
        "\u2587",
        "\u2588",
    ],
    graph = "",
    minNumber = 0,
    maxNumber = 0,
    endNumber = 0,
    startNumber = 0,
    diffNumber = 0,
    outData = [],
    perNumber = 0 ,
    minus=0;
    
        if (barData.length === 0)
            return [];

        if (startNumber > barData.length) {
            startNumber = 0;
        }
        if (60 > barData.length - 1) {
            startNumber = 0;
        }
        if (60 > ((barData.length - 1) - startNumber)) {
            startNumber = ((barData.length - 1) - 60);
            endNumber = barData.length;
        } else {
            endNumber = startNumber + 60;
        }
        if (0 > startNumber) {
            startNumber = 0;
        }
        maxNumber = parseInt(barData[0]);
        minNumber = parseInt(barData[0]);
        for (var i = startNumber; barData.length > i; i++) {
            if (parseFloat(barData[i]) > maxNumber)
                maxNumber = parseInt(barData[i]);
            if (minNumber > parseFloat(barData[i]))
                minNumber = parseInt(barData[i]);
        }
        diffNumber = maxNumber - minNumber;
        perNumber = diffNumber / 100;
        for (var i = startNumber; barData.length > i; i++) {
            outData.push((parseInt(barData[i]) - minNumber) / perNumber);
        }        
    graph = "\n\u25B2 \n";
        for (var i = 0; 14 > i; i++) {
            graph += "\u2502";
                for (var iL = 0; 60 > iL; iL++) {
                    minus = parseInt(outData[iL]) - ((14 - i) * 8)
                    if (1 > minus)
                        minus = 0;
                    if (minus > 7)
                        minus = 8;
                    if (typeof outData[iL] === "undefined")
                        minus = 0;
                    graph += barb[minus];
                
                }   
            graph += "\n";
        }
        graph += "\u2514";
        for (var i = 0; 60 > i; i++) {
            graph += "\u2500";
        }

        graph += "\u25B6" + "\n";
    return graph;
}








dragon.admin.cli.group = function (command) {
    if (command.length < 2)
        return dragon.admin.cli.help.file();
    switch (command[1]) {
        case 'a':
        case 'add':
            return dragon.admin.db.utils.groups.add(command[2]);
            break;
        case 'd':
        case 'del':
            return dragon.admin.db.utils.groups.del(command[2]);
            break;
        case 'c':
        case 'clone':
            return dragon.admin.db.utils.groups.clone(command[2], command[3]);
            break;
        case 'l':
        case 'list':
            var out = "\n";
            for (var i = 0; i < dragon.admin.db.db.groups.length; i++) {
                out += dragon.admin.db.db.groups[i].serial + "\t" + dragon.admin.db.db.groups[i].groupName + "\n";
            }
            return out;
            break;
        case 'e':
        case 'elem':
            return dragon.admin.cli.groupFiles(command);
            break;
        case 'g':
        case 'get':
            var outGet = dragon.admin.db.utils.groups.get(command[2]),
                out ="\n";
            for (var i = 0; i < outGet.length; i++) {
                out += i.toString() + "\t" + outGet[i] + "\n";
            }
            return out;
            break;
        default:
            return ('Unkown module command \n if you need module help try object help or m h\n');
    }
}

dragon.admin.cli.groupFiles = function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.file();
    switch (command[2]) {
        case 'l':
        case 'list':
            if (command.length < 5)
                command[4] = "all";
            return dragon.admin.cli.tools.output.listmaker(dragon.admin.db.utils.groups.files.list(command[3], command[4]));
            break;
        case 'a':
        case 'add':

            if (command.length < 6)
                return dragon.admin.cli.help.file();
            if (command.length > 6) { 
                return dragon.admin.db.utils.groups.include.add(command[3], command[4], command[5], command[6]);                
            }else{
                return dragon.admin.db.utils.groups.files.add(command[3], command[4], command[5]);
            }
            break;
        case 'd':
        case 'del':
            if (command.length < 6)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.groups.files.del(command[3], command[4], command[5]);
            break;
        case 'm':
        case 'move':
            if (command.length < 7)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.groups.files.move(command[3], command[4], command[5],command[6]);
            break;            
        default:
            return ('Unkown module file command \n if you need module file help try object help or m f h\n');
    }
}

dragon.admin.cli.help = {}

dragon.admin.cli.help.help = function () {
    return('posible commands: \n' +
            '     file /  f file management \n' +
            '     module / m  module management \n' +
            '     object / o  object management \n' +
            '     setup / s setup management \n'
            );

}


dragon.admin.cli.help.file = function () {
    return ('posible commands:\n' +
            '     add / a  add file  (file add file_type file_name)\n' +
            '     list / l  list files (file list) or (file list file_type)\n' +
            '     del / d  del file  (file add file_type file_name)\n'
            );
}

dragon.admin.cli.help.module = function () {
    return ('posible commands:\n' +
            '     add / a  add file  (module add module_type module_name)\n' +
            '     list / l  list files (module list) or (m l)\n' +
            '     del / d  del file  (module del module_name)\n' +
            '     elem / e  add file  (module add module_name)\n' +
            '     title / t  change module title\n' +
            '     favicon / f change module favicon \n' +
            '     meta / m  module meta management  \n' +
            '     render / r  module test render \n' +
            '     file  module render to file\n' +
            '     info / i modul informaciok kiirasa \n'
            );
}


dragon.admin.cli.help.project = function () {
    return ('posible commands:\n' +
            '     add / a  add file  (project add module_type module_name)\n' +
            '     list / l  list files (project list) or (m l)\n' +
            '     del / d  del file  (project del module_name)\n' +
            '     file / f  \n' +
            '     group / g  \n' +
            '     module / m  \n'
            );
}


dragon.admin.cli.help.object = function () {
    return ('object command help');
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




dragon.admin.cli.module = function (command) {
    if (command.length < 2)
        return dragon.admin.cli.help.file();
    switch (command[1]) {
        case 'a':
        case 'add':
            return dragon.admin.db.utils.modules.add(command[2]);
            break;
        case 'd':
        case 'del':
            return dragon.admin.db.utils.modules.del(command[2]);
            break;
        case 'c':
        case 'clone':
            return dragon.admin.db.utils.modules.clone(command[2], command[3]);
            break;
        case 'l':
        case 'list':
            var out = "\n";
            for (var i = 0; i < dragon.admin.db.db.modules.length; i++) {
                out += i.toString() + "\t" + dragon.admin.db.db.modules[i].serial + "\t" + dragon.admin.db.db.modules[i].moduleName + "\n";
            }
            return out;
            break;
        case 'e':
        case 'elem':
            return dragon.admin.cli.moduleFiles(command);
            break;
        case 't':
        case 'title':
            return dragon.admin.cli.moduleTitle(command);
            break;
        case 'f':
        case 'favicon':
            return dragon.admin.cli.moduleFavicon(command);
            break;
        case 'g':
        case 'group':
            return dragon.admin.cli.moduleGroups(command);
            break;
        case 'm':
        case 'meta':
            return dragon.admin.cli.moduleMeta(command);
            break;
        case 'r':
        case 'render':
            return dragon.admin.render.fun.moduletest(command[2]);
            break;
        case 'file':
            return dragon.admin.render.fun.fileall();
            break;
        case 'i':
        case 'info':
            return dragon.admin.cli.moduleinfo(command[2]);
            break;
        default:
            return ('Unkown module command \n if you need module help try object help or m h\n');
    }
}

dragon.admin.cli.moduleFiles = function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.file();
    switch (command[2]) {
        case 'l':
        case 'list':
            if (command.length < 5)
                command[4] = "all";
            return dragon.admin.cli.tools.output.listmaker(dragon.admin.db.utils.modules.files.list(command[3], command[4]));
            break;
        case 'a':
        case 'add':
            if (command.length < 6)
                return dragon.admin.cli.help.file();
            if (command.length > 6) { 
                return dragon.admin.db.utils.modules.include.add(command[3], command[4], command[5], command[6]);                
            }else{
                return dragon.admin.db.utils.modules.files.add(command[3], command[4], command[5]);
            }
            break;
        case 'd':
        case 'del':
            if (command.length < 6)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.files.del(command[3], command[4], command[5]);
            break;
        case 'm':
        case 'move':
            if (command.length < 7)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.files.move(command[3], command[4], command[5], command[6]);
            break;
        default:
            return ('Unkown module file command \n if you need module file help try object help or m f h\n');
    }
}


dragon.admin.cli.moduleGroups = function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.group();
    switch (command[2]) {
        case 'l':
        case 'list':
            return dragon.admin.cli.tools.output.listmaker(dragon.admin.db.utils.modules.groups.list(command[3]));
            break;
        case 'a':
        case 'add':

            if (command.length < 5){
                return dragon.admin.cli.help.group();               
            }else{
                return dragon.admin.db.utils.modules.groups.add(command[3], command[4]);
            }
            break;
        case 'd':
        case 'del':
            if (command.length < 5)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.groups.del(command[3], command[4]);
            break;
        case 'm':
        case 'move':
            if (command.length < 6)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.groups.move(command[3], command[4], command[5]);
            break;
        default:
            return ('Unkown module file command \n if you need module file help try object help or m f h\n');
    }
}


dragon.admin.cli.moduleTitle = function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.file();
    switch (command[2]) {
        case 's':
        case 'set':
            if (command.length < 5)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.title.set(command[3], command[4]);
            break;
        case 'g':
        case 'get':
            if (command.length < 4)
                return dragon.admin.cli.help.file();
            return "\n" + dragon.admin.db.utils.modules.title.get(command[3]).toString() + "\n";
            break;
        case 'del':
            if (command.length < 4)
                return dragon.admin.cli.help.file();
            dragon.out.getInclude
            return dragon.admin.db.utils.modules.title.del(command[3]);
            break;
            dragon.out.getInclude
        default:
            return ('Unkown module title command \n if you need help try module title help or o m t h\n');
    }
}

dragon.admin.cli.moduleFavicon = function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.file();
    switch (command[2]) {
        case 's':
        case 'set':
            if (command.length < 5)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.favicon.set(command[3], command[4]);
            break;
        case 'g':
        case 'get':
            if (command.length < 4)
                return dragon.admin.cli.help.file();
            return "\n" + dragon.admin.db.utils.modules.favicon.get(command[3]).toString() + "\n";
            break;
        case 'del':
            if (command.length < 4)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.favicon.del(command[3]);
            break;
        default:
            return ('Unkown module favicon command \n if you need help try module favicon help or o m f h\n');
    }
}


dragon.admin.cli.moduleMeta = function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.file();
    switch (command[2]) {
        case 'l':
            if (command.length < 5)
                command[4] = "all";
            return dragon.admin.cli.tools.output.listmaker(dragon.admin.db.utils.modules.meta.list(command[3]));
            break;
        case 'a':
        case 'add':
            if (command.length < 5)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.meta.add(command[3], command[4], command[5]);
            break;
        case 's':
        case 'set':
            if (command.length < 5)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.meta.set(command[3], command[4], command[5]);
            break;
        case 'g':
        case 'get':
            if (command.length < 4)
                return dragon.admin.cli.help.file();
            return "\n" + dragon.admin.db.utils.modules.meta.get(command[3], command[4]).toString() + "\n";
            break;
        case 'del':
            if (command.length < 4)
                return dragon.admin.cli.help.file();
            return dragon.admin.db.utils.modules.meta.del(command[3], command[4]);
            break;
        default:
            return ('Unkown module meta command \n if you need help try module meta help or o m m h\n');
    }
}

dragon.admin.cli.moduleinfo = function (moduleName) {
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 1;
    var out = "\n";
    out += dragon.admin.db.db.modules[moduleNumber].info.simpleSize + "\n";
    out += dragon.admin.db.db.modules[moduleNumber].info.simpleTime + "\n";
    out += dragon.admin.db.db.modules[moduleNumber].info.minifySize + "\n";
    out += dragon.admin.db.db.modules[moduleNumber].info.minifyTime + "\n";
    return out;
}





dragon.admin.cli.poker.poolCurrent = 0;
dragon.admin.cli.poker.pool = [];
dragon.admin.cli.poker.poolNew = function () {
    dragon.admin.cli.poker.pool.push(new dragon.admin.cli.poker.pool.full());
}

dragon.admin.cli.poker.pool.full = function () {
    this.players=4;
    this.type=0; // 0 = video poker, 1=5 page poker, 2=thx
    this.decks=[
        ["🂠","🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂬","🂭","🂮"],
        ["🂠","🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂼","🂽","🂾"],
        ["🂠","🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃌","🃍","🃎"],
        ["🂠","🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃜","🃝","🃞"],
        ["🃏","🃟"]
    ]
    this.deck = [];
    this.hands = [];
    this.shake = function () {
        var temp;
        var rand;
        var round = Math.floor((Math.random() * (this.deck.length * 2)) + this.length);
        for (var i = 0; round > i; i++) {
            rand = Math.floor(Math.random() * this.deck.length);
            temp = this.deck[rand];
            this.deck.splice(rand, 1);
            this.deck.push(temp);
        }
        return this;
    }
    
    for (var s = 1; s < 5; s++)
        for (var r = 1; r < 14; r++)
            this.deck.push({suit: s, rank: r});

}







dragon.admin.cli.project= function (command) {
    if (command.length < 2)
        return dragon.admin.cli.help.file();
    switch (command[1]) {
        case 'a':
        case 'add':
            return dragon.admin.db.utils.projects.add(command[2]);
            break;
        case 'd':
        case 'del':
            return dragon.admin.db.utils.projects.del(command[2]);
            break;
        case 'c':
        case 'clone':
            return dragon.admin.db.utils.projects.clone(command[2], command[3]);            
            break;
        case 'l':
        case 'list':
            return dragon.admin.cli.tools.output.listmaker(dragon.admin.db.utils.projects.list());
            break;
        case 'm':
        case 'module':
        case 'modules':            
            return dragon.admin.cli.projectModules(command);
            break;
        case 'f':
        case 'file':        
        case 'files':
            return dragon.admin.cli.projectFiles(command);
            break;            
        case 'g':
        case 'group':        
        case 'groups':
            return dragon.admin.cli.projectGroups(command);
            break;  
        default:
            return ('Unkown module command \n if you need module help try object help or m h\n');
    }
}


dragon.admin.cli.projectModules= function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.project();
    switch (command[2]) {
        case 'l':
        case 'list':
            return dragon.admin.cli.tools.output.listmaker(dragon.admin.db.utils.projects.modules.list(command[3]));
            out = "\n";
            for (var i = 0; i < inj.length; i++) {
                    out += i.toString()+"\t"+inj[i]['Name'] + "\n";                   
            }
            out += "\n";
            return out;
            break;
        case 'a':
        case 'add':

            if (command.length < 5){
                return dragon.admin.cli.help.project();               
            }else{
                return dragon.admin.db.utils.projects.modules.add(command[3], command[4]);
            }
            break;
        case 'd':
        case 'del':
            if (command.length < 5)
                return dragon.admin.cli.help.project();
            return dragon.admin.db.utils.projects.modules.del(command[3], command[4]);
            break;
        default:
            return ('Unkown module file command \n if you need module file help try object help or m f h\n');
    }    
    
}

dragon.admin.cli.projectGroups= function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.project();
    switch (command[2]) {
        case 'l':
        case 'list':
            return dragon.admin.cli.tools.output.listmaker(dragon.admin.db.utils.projects.groups.list(command[3]));
            break;
        case 'a':
        case 'add':

            if (command.length < 5){
                return dragon.admin.cli.help.project();               
            }else{
                return dragon.admin.db.utils.projects.groups.add(command[3], command[4]);
            }
            break;
        case 'd':
        case 'del':
            if (command.length < 5)
                return dragon.admin.cli.help.project();
            return dragon.admin.db.utils.projects.groups.del(command[3], command[4]);
            break;
        default:
            return ('Unkown module file command \n if you need module file help try object help or m f h\n');
    }    
    
}



dragon.admin.cli.projectFiles= function (command) {
    if (command.length < 4)
        return dragon.admin.cli.help.project();
    switch (command[2]) {
        case 'l':
        case 'list':
            return dragon.admin.db.utils.projects.files.list(command[3]);
            break;
        case 'a':
        case 'add':

            if (command.length < 5){
                return dragon.admin.cli.help.project();               
            }else{
                return dragon.admin.db.utils.projects.files.add(command[3], command[4], command[5]);
            }
            break;
        case 'd':
        case 'del':
            if (command.length < 5)
                return dragon.admin.cli.help.project();
            return dragon.admin.db.utils.projects.files.del(command[3], command[4], command[5]);
            break;
        default:
            return ('Unkown module file command \n if you need module file help try object help or m f h\n');
    }    
    
}


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


dragon.admin.cli.fun.table = function (tableData) {
    var u = {
        a1: "\u250C",
        c1: "\u252c",
        b1: "\u2500",
        a2: "\u2510",
        a3: "\u2514",
        a4: "\u2518",
        c2: "\u253c",
        c3: "\u2534",
        c4: "\u251c",
        c5: "\u2524",
        b2: "\u2502"
    }

    function calculateTable(tableData) {
        var sizeCol = 0,
                sizeDat = [],
                colNum = 0;
        for (var i = 0; tableData.length > i; i++)
            if (tableData[i].length > colNum)
                colNum = tableData[i].length;

        for (var ic = 0; colNum > ic; ic++) {
            sizeDat[ic] = 0;
            for (var il = 0; tableData.length > il; il++) {
                if (typeof tableData[il][ic] !== "undefined")
                    if (tableData[il][ic].length > sizeDat[ic])
                        sizeDat[ic] = tableData[il][ic].length;
            }
        }
        return  sizeDat;
    }
    function tableTop(tableSize) {
        var out = "";
        out += u.a1;
        for (var ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.c1;
            for (var il = 0; tableSize[ic] > il; il++)
                out += u.b1;
        }
        out += u.a2;
        return out;
    }

    function tableCenter(tableSize) {
        var out = "";
        out += u.c4;
        for (var ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.c2;
            for (var il = 0; tableSize[ic] > il; il++)
                out += u.b1;
        }
        out += u.c5;
        return out;
    }

    function tableButton(tableSize) {
        var out = "";
        out += u.a3;
        for (var ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.c3;
            for (var il = 0; tableSize[ic] > il; il++)
                out += u.b1;
        }
        out += u.a4;
        return out;
    }

    function tableDataLine(tableData, tableSize) {
        var out = "",
                before = 0;
        out += u.b2;
        for (var ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.b2;
            if (typeof tableData[ic] !== "undefined") {
                before = parseInt((tableSize[ic] - tableData[ic].length) / 2);
                for (var ila = 0; before > ila; ila++)
                    out += " ";
                out += tableData[ic];
                for (var ilb = 0; (tableSize[ic] - (before + tableData[ic].length)) > ilb; ilb++)
                    out += " ";
            } else {
                for (var il = 0; tableSize[ic] > il; il++)
                    out += " ";
            }
        }
        out += u.b2;
        return out;
    }

    function tableTitle(tableData, tableSize) {
        var out = "",
                before = 0;
        out += u.b2;
        for (var ic = 0; tableSize.length > ic; ic++) {
            if (ic > 0)
                out += u.b2;
            if (typeof tableData[ic] !== "undefined") {
                before = parseInt((tableSize[ic] - tableData[ic].length) / 2);
                for (var ila = 0; before > ila; ila++)
                    out += " ";
                out += "\033[1m" + tableData[ic] + "\033[0m";
                for (var ilb = 0; (tableSize[ic] - (before + tableData[ic].length)) > ilb; ilb++)
                    out += " ";
            } else {
                for (var il = 0; tableSize[ic] > il; il++)
                    out += " ";
            }
        }
        out += u.b2;
        return out;
    }


    var tableSize = calculateTable(tableData),
            out = "";
    out += tableTop(tableSize) + "\n";
    for (var i = 0; tableData.length > i; i++) {
        if (i > 0) {
            out += tableCenter(tableSize) + "\n";
            out += tableDataLine(tableData[i], tableSize) + "\n";
        } else {
            out += tableTitle(tableData[i], tableSize) + "\n";
        }
    }
    out += tableButton(tableSize) + "\n";
    return out;

}
dragon.admin.db.db = {}

dragon.admin.db.fs = require('fs');

dragon.admin.db.read = function () {
    dragon.admin.db.db = JSON.parse(dragon.admin.db.fs.readFileSync(dragon.admin.db.setup.path, 'utf8', function (err, data) {
        if (err) {
            dragon.admin.db.db = JSON.parse('{"files":[],"groups":[],"modules":[],"options":[],"numbers":{},"setup":{}}');
        }
    }));
    dragon.admin.db.utils.groups.checkAndFixAll();
    dragon.admin.db.utils.modules.checkAndFixAll();
    dragon.admin.db.utils.objects.checkAndFixAll();
    dragon.admin.db.utils.projects.checkAndFixAll();
}


dragon.admin.db.utils = {}


dragon.admin.db.utils.setup = {}

dragon.admin.db.utils.setup.set = function (optionName, optionValue) {
    //1: option not exist
    dragon.admin.db.db.setup[optionName] === optionValue;
    return 0;
}

dragon.admin.db.utils.setup.get = function (optionName) {
    //1: option not exist
    if (typeof dragon.admin.db.db.setup[optionName] === "undefined")
        return "N";
    return dragon.admin.db.db.setup[optionName];
}

dragon.admin.db.utils.setup.list = function () {
    var out = "\n";
    for (i in dragon.admin.db.db.setup)
        out += (i.toString() + "\n");
    return out;
}






dragon.admin.db.utils.objects = {}


dragon.admin.db.utils.objects.checkAndFixAll = function () {
    if (typeof dragon.admin.db.db.objects === "undefined") {

        dragon.admin.db.db.objects = {classes: [], names: [], ids: []};
    }
}



dragon.admin.db.utils.objects.types = ["class", "name", "id", "c", "i", "n"];

dragon.admin.db.utils.objects.dictonarys = {"class": "classes",
    "name": "names",
    "function": "functions",
    "replace": "replaces",
    "id": "ids",
    "c": "classes",
    "i": "ids",
    "f": "functions",
    "r": "replaces",
    "n": "names",
};

dragon.admin.db.utils.objects.add = function (objectType, objectName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: file still exist
    if (dragon.admin.db.utils.objects.types.indexOf(objectType) === -1)
        return 1;
    var serial = dragon.admin.db.utils.numbers.get('objectType');
    for (var i = 0; i < dragon.admin.db.db.objects[dragon.admin.db.utils.objects.dictonarys[objectType]].length; i++) {
        if (dragon.admin.db.db.objects[dragon.admin.db.utils.objects.dictonarys[objectType]][i] === objectName)
            return 2;
    }
    dragon.admin.db.db.objects[dragon.admin.db.utils.objects.dictonarys[objectType]].push(objectName);
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.objects.del = function (objectType, objectName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: file not exist
    if (dragon.admin.db.utils.objects.types.indexOf(objectType) === -1)
        return 1;
    var delNumber = -1;
    for (var i = 0; i < dragon.admin.db.db.objects[dragon.admin.db.utils.objects.dictonarys[objectType]].length; i++) {
        if (dragon.admin.db.db.objects[dragon.admin.db.utils.objects.dictonarys[objectType]][i] === objectName)
            delNumber = i;
    }
    if (delNumber === -1)
        return 2;
    dragon.admin.db.db.objects[dragon.admin.db.utils.objects.dictonarys[objectType]].splice(delNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.objects.list = function (otype, otag) {
    var out = "\n";
    for (var i = 0; i < dragon.admin.db.db.objects.classes.length; i++) {
        out += "class " + dragon.admin.db.db.objects.classes[i] + "\n";
    }
    for (var i = 0; i < dragon.admin.db.db.objects.ids.length; i++) {
        out += "id " + dragon.admin.db.db.objects.ids[i] + "\n";
    }
    for (var i = 0; i < dragon.admin.db.db.objects.names.length; i++) {
        out += "name " + dragon.admin.db.db.objects.names[i] + "\n";
    }
    return out;
}











dragon.admin.db.utils.files = {}

dragon.admin.db.utils.files.types = ["js", "css", "nat", "metafile", "html", "endjs", "sass", "less", "svg", "include"];

dragon.admin.db.utils.files.typesAuto = ["css", "sass", "less", "html", "js", "endjs"];

dragon.admin.db.utils.files.typesSass = ["s", "sass"];

dragon.admin.db.utils.files.typesLess = ["l", "less"];

dragon.admin.db.utils.files.typesInclude = ["i", "inc", "include"];

dragon.admin.db.utils.files.typesSvg = ["p", "sv", "svg"];

dragon.admin.db.utils.files.typesMeta = ["m", "meta", "metafile"];

dragon.admin.db.utils.files.typesEndjs = ["e", "endjs"];

dragon.admin.db.utils.files.typesHtml = ["h", "html"];

dragon.admin.db.utils.files.typesNat = ["n", "nat"];

dragon.admin.db.utils.files.typesCss = ["c", "css"];

dragon.admin.db.utils.files.typesJs = ["j", "js"];

dragon.admin.db.utils.files.typesall = ["j", "js", "c", "css", "s", "sass", "l", "less", "n", "nat", "m", "meta", "metafile", "h", "html", "e", "endjs", "p", "sv", "svg", "i", "inc", "include"];

dragon.admin.db.utils.files.typePreProcessor = function (fileType) {
    if (dragon.admin.db.utils.files.typesJs.indexOf(fileType) !== -1)
        fileType = "js";
    if (dragon.admin.db.utils.files.typesEndjs.indexOf(fileType) !== -1)
        fileType = "endjs";
    if (dragon.admin.db.utils.files.typesCss.indexOf(fileType) !== -1)
        fileType = "css";
    if (dragon.admin.db.utils.files.typesSass.indexOf(fileType) !== -1)
        fileType = "sass";
    if (dragon.admin.db.utils.files.typesLess.indexOf(fileType) !== -1)
        fileType = "less";
    if (dragon.admin.db.utils.files.typesHtml.indexOf(fileType) !== -1)
        fileType = "html";
    if (dragon.admin.db.utils.files.typesNat.indexOf(fileType) !== -1)
        fileType = "nat";
    if (dragon.admin.db.utils.files.typesMeta.indexOf(fileType) !== -1)
        fileType = "metafile";
    if (dragon.admin.db.utils.files.typesInclude.indexOf(fileType) !== -1)
        fileType = "include";
    if (dragon.admin.db.utils.files.typesSvg.indexOf(fileType) !== -1)
        fileType = "svg";
    return fileType;
}

dragon.admin.db.utils.files.add = function (fileType, fileName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: file still exist
    // 3: file not exist    
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    if (!dragon.tools.lib.fs.existsSync(dragon.fs.dirs[fileType] + fileName + "." + dragon.fs.ext[fileType]))
        return 3;
    for (let i = 0; i < dragon.admin.db.db.files.length; i++) {
        if ((dragon.admin.db.db.files[i].fileName === fileName) && (dragon.admin.db.db.files[i].fileType === fileType))
            return 2;
    }
    const serial = dragon.admin.db.utils.numbers.get('files');
//    if (!(dragon.admin.db.fs.existsSync("www/"+dragon.admin.fileread.v.dirs[fileType]+fileName))) return 3;
    dragon.admin.db.db.files.push({
        serial: serial,
        id: "aaa" + serial.toString() + "aaa",
        fileName: fileName,
        fileType: fileType
    });
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.files.make = function (fileType, fileName) {
    // output  
    // 0: ok 
    // 4: wrong type
    // 6: file still exist
    // 5: file  exist   
    var output = "";
    var fileTypes = [];
    var circle = "0";
    var fso = require("fs");
    var fdo = "";
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1) {
        if ((fileType === "a") || (fileType === "all")) {
            fileTypes = ["sass", "endjs", "html", "js"];
        } else {
            return 4;
        }
    } else {
        fileTypes.push(dragon.admin.db.utils.files.typePreProcessor(fileType));
    }
    for (var fli = 0; fli < fileTypes.length; fli++) {
        circle = "0";
        fileType = dragon.admin.db.utils.files.typePreProcessor(fileTypes[fli]);
        if (dragon.tools.lib.fs.existsSync(dragon.fs.dirs[fileType] + fileName + "." + dragon.fs.ext[fileType]))
            circle = "5";
        for (var i = 0; i < dragon.admin.db.db.files.length; i++) {
            if ((dragon.admin.db.db.files[i].fileName === fileName) && (dragon.admin.db.db.files[i].fileType === fileType))
                circle = "6";
        }
        if (circle === "0") {
            fdo = fso.openSync(dragon.fs.dirs[fileType] + fileName + "." + dragon.fs.ext[fileType], 'wx');
            fso.closeSync(fdo);
            circle = dragon.admin.db.utils.files.add(fileType, fileName);
        }
        output += circle+"\n";
//    if (!(dragon.admin.db.fs.existsSync("www/"+dragon.admin.fileread.v.dirs[fileType]+fileName))) return 3;
    }
    return output;
}


dragon.admin.db.utils.files.del = function (fileType, fileName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: file not exist
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    var delNumber = -1;
    for (var i = 0; dragon.admin.db.db.files.length > i; i++) {
        if ((dragon.admin.db.db.files[i].fileName === fileName) && (dragon.admin.db.db.files[i].fileType === fileType))
            delNumber = i;
    }
    if (delNumber === -1)
        return 2;
    dragon.admin.db.db.files.splice(delNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.files.list = function (fileType, fntag) {
    var out = [];
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    for (var i = 0; i < dragon.admin.db.db.files.length; i++) {
        if ((typeof fileType !== "undefined") && (fileType !== "all") && (fileType !== "a")) {
            if (typeof fntag !== "undefined") {
                if (dragon.admin.db.db.files[i].fileType === fileType)
                    if (dragon.admin.db.db.files[i].fileName.indexOf(fntag) > -1)
                        out.push({Type: dragon.admin.db.db.files[i].fileType, Name: dragon.admin.db.db.files[i].fileName});
            } else {
                if (dragon.admin.db.db.files[i].fileType === fileType)
                    out.push({Type: dragon.admin.db.db.files[i].fileType, Name: dragon.admin.db.db.files[i].fileName});
            }
        } else {
            if (typeof fntag !== "undefined") {
                if (dragon.admin.db.db.files[i].fileName.indexOf(fntag) > -1)
                    out.push({Type: dragon.admin.db.db.files[i].fileType, Name: dragon.admin.db.db.files[i].fileName});
            } else {
                out.push({Type: dragon.admin.db.db.files[i].fileType, Name: dragon.admin.db.db.files[i].fileName});
            }
        }
    }
    return out;
}

dragon.admin.db.utils.files.change = function () {


}



dragon.admin.db.utils.files.check = function (fileType) {
    // output  
    // 1: wrong type
    // 2: file still exist
    // 3: file not exist    
    var existNum = 0,
            retOut = [];
    if ((fileType === "a") || (fileType === "all")) {
        var fileTypes = dragon.admin.db.utils.files.typesAuto;
    } else {
        var fileTypes = [fileType];
    }
    for (var iT = 0; fileTypes.length > iT; iT++) {

        if (dragon.admin.db.utils.files.typesall.indexOf(fileTypes[iT]) === -1)
            return 1;
        fileType = dragon.admin.db.utils.files.typePreProcessor(fileTypes[iT]);

        var out = dragon.tools.fun.files.getFilesDirJustExtension(dragon.fs.dirs[fileType], dragon.fs.ext[fileType]);

        for (var iO = 0; iO < out.length; iO++) {
            out[iO] = out[iO].slice(0, ((dragon.fs.ext[fileType].length + 1) * -1));
            existNum = 0;
            for (var i = 0; i < dragon.admin.db.db.files.length; i++) {
                if ((dragon.admin.db.db.files[i].fileName === out[iO]) && (dragon.admin.db.db.files[i].fileType === fileType))
                    existNum = 1;
            }
            if (existNum === 0)
                retOut.push(fileType + "\t" + out[iO]);
        }
    }
    return retOut;
}





dragon.admin.db.utils.files.get = function (fileType) {
    // output  
    // 1: wrong type
    // 2: file still exist
    var existNum = 0,
            retOut = [];
    if ((fileType === "a") || (fileType === "all")) {
        var fileTypes = dragon.admin.db.utils.files.typesAuto;
    } else {
        var fileTypes = [fileType];
    }
    for (var iT = 0; fileTypes.length > iT; iT++) {

        if (dragon.admin.db.utils.files.typesall.indexOf(fileTypes[iT]) === -1)
            return 1;
        fileType = dragon.admin.db.utils.files.typePreProcessor(fileTypes[iT]);
        var out = dragon.tools.fun.files.getFilesDirJustExtension(dragon.fs.dirs[fileType], dragon.fs.ext[fileType]);
        var existNum = 0,
                retOut = [];
        for (var iO = 0; iO < out.length; iO++) {
            out[iO] = out[iO].slice(0, ((dragon.fs.ext[fileType].length + 1) * -1));
            existNum = 0;
            for (var i = 0; i < dragon.admin.db.db.files.length; i++) {
                if ((dragon.admin.db.db.files[i].fileName === out[iO]) && (dragon.admin.db.db.files[i].fileType === fileType))
                    existNum = 1;
            }
            if (existNum === 0) {
                retOut.push(fileType + "\t" + out[iO]);
                dragon.admin.db.utils.files.add(fileType, out[iO]);
            }
        }
    }
    return retOut;
}


/***********************************
 *                                 *
 *     Files util end              *
 *                                 *
 ***********************************/



dragon.admin.db.utils.numbers = {}

dragon.admin.db.utils.numbers.get = function (elementValue) {
    if (typeof dragon.admin.db.db.numbers[elementValue] === "undefined")
        dragon.admin.db.db.numbers[elementValue] = 0;
    var out = parseInt(dragon.admin.db.db.numbers[elementValue]);
    dragon.admin.db.db.numbers[elementValue] = out + 1;
    dragon.admin.db.utils.save();
    return out;
}


dragon.admin.db.utils.save = function () {
    var newobjects = {},
            ser = 0;
    for (ojica in dragon.admin.db.db.objects) {
        newobjects[ojica] = {};
        ser = 0;
        for (elem in dragon.admin.db.db.objects[ojica]) {
            newobjects[ojica][ser.toString()] = elem;
            ser++;
        }
    }
    dragon.admin.db.db.objects = newobjects;
    dragon.admin.db.db.setup = dragon.db.db.setup;
    if (dragon.admin.db.setup.beautify === 1) {
        dragon.admin.db.fs.writeFileSync(dragon.admin.db.setup.path, dragon.admin.db.lib.beautify(JSON.stringify(dragon.admin.db.db)), {indent_size: 2});
    } else {
        dragon.admin.db.fs.writeFileSync(dragon.admin.db.setup.path, JSON.stringify(dragon.admin.db.db));
    }
}






/************************************
 *                                  *
 * Groups Start                     *
 *                                  *
 ************************************/


// group main start

dragon.admin.db.utils.groups = {}


dragon.admin.db.utils.groups.add = function (groupName) {
    // output  
    // 0: ok 
    // 1: file not exist
    // 2: missing group name       
    if ((typeof groupName === "undefined") && (groupName === "undefined"))
        return 2;    
    for (var i = 0; i < dragon.admin.db.db.groups.length; i++) {
        if ((dragon.admin.db.db.groups[i].groupName === groupName))
            return 1;
    }

    var serial = dragon.admin.db.utils.numbers.get('groups');
    dragon.admin.db.db.groups.push({
        serial: serial,
        id: "aaa" + serial.toString() + "aaa",
        groupName: groupName,
        groupElements: [],
    });
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.groups.del = function (groupName) {
    // output  
    // 0: ok 
    // 1: file not exist
    var delNumber = -1;
    for (var i = 0; dragon.admin.db.db.groups.length > i; i++) {
        if (dragon.admin.db.db.groups[i].groupName === groupName)
            delNumber = i;
    }
    if (delNumber === -1)
        return 1;
    dragon.admin.db.db.groups.splice(delNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.groups.clone = function (groupNameA, groupNameB) {
    // output  
    // 0: ok 
    // 1: group name still exist
    // 2: original modul not exist
    var groupAcheck = -1;
    for (var i = 0; i < dragon.admin.db.db.groups.length; i++) {
        if ((dragon.admin.db.db.groups[i].groupName === groupNameB))
            return 1;
        if ((dragon.admin.db.db.groups[i].groupName === groupNameA))
            groupAcheck = i;
    }
    if (groupAcheck === -1)
        return 2;
    var fileList = []
    for (var i = 0; i < dragon.admin.db.db.groups[groupAcheck].groupElements.length; i++) {
        fileList.push(dragon.admin.db.db.groups[groupAcheck].groupElements[i]);
    }
    var serial = dragon.admin.db.utils.numbers.get('groups');
    dragon.admin.db.db.groups.push({
        serial: serial,
        id: "aaa" + serial.toString() + "aaa",
        groupName: groupNameB,
        groupElements: fileList,
    });
    dragon.admin.db.utils.save();
    return 0;
}



dragon.admin.db.utils.groups.checkAndFixAll = function () {
    if (typeof dragon.admin.db.db.groups === "undefined")
        dragon.admin.db.db.groups = [];
    for (var i = 0; i < dragon.admin.db.db.groups.length; i++) {
        dragon.admin.db.utils.groups.checkAndFix(i);
    }
}

dragon.admin.db.utils.groups.checkAndFix = function (groupSerial) {
}


dragon.admin.db.utils.groups.files = {}



dragon.admin.db.utils.groups.files.add = function (groupName, fileType, fileName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: group not exist
    // 3: file not exist
    // 4: file alredy added in the group
    
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    if ((fileType === "include") || (fileType === "svg"))
        return dragon.admin.db.utils.groups.include.add(groupName, fileType, fileName, fileName);

    var groupNumber = -1;
    for (var i = 0; dragon.admin.db.db.groups.length > i; i++) {
        if (dragon.admin.db.db.groups[i].groupName === groupName)
            groupNumber = i;
    }
    if (groupNumber === -1)
        return 2;
    var fileNumber = -1;
    for (var i = 0; dragon.admin.db.db.files.length > i; i++) {
        if ((dragon.admin.db.db.files[i].fileName === fileName) && (dragon.admin.db.db.files[i].fileType === fileType))
            fileNumber = i;
    }
    if (fileNumber === -1)
        return 3;
    for (var i = 0; dragon.admin.db.db.groups[groupNumber].groupElements.length > i; i++) {
        if ((dragon.admin.db.db.groups[groupNumber].groupElements[i]["Name"] === fileName) && (dragon.admin.db.db.groups[groupNumber].groupElements[i]["Type"] === fileType))
            return 4;
    }
    dragon.admin.db.db.groups[groupNumber].groupElements.push({"Type": fileType, "Name": fileName});
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.groups.include = {}

dragon.admin.db.utils.groups.include.add = function (groupName, fileType, fileName, fileAlias) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not exist
    // 4: file alredy added in the groups
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    var groupNumber = -1;
    for (var i = 0; dragon.admin.db.db.groups.length > i; i++) {
        if (dragon.admin.db.db.groups[i].groupName === groupName)
            groupNumber = i;
    }
    if (groupNumber === -1)
        return 2;
    var fileNumber = -1;
    for (var i = 0; dragon.admin.db.db.files.length > i; i++) {
        if ((dragon.admin.db.db.files[i].fileName === fileName) && ((dragon.admin.db.db.files[i].fileType === "include") || (dragon.admin.db.db.files[i].fileType === "svg")))
            fileNumber = i;
    }
    if (fileNumber === -1)
        return 3;
    for (var i = 0; dragon.admin.db.db.groups[groupNumber].groupElements.length > i; i++) {
        if ((dragon.admin.db.db.groups[groupNumber].groupElements[i]["Name"] === fileName) && (dragon.admin.db.db.groups[groupNumber].groupElements[i]["Type"] === fileType))
            return 4;
    }
    dragon.admin.db.db.groups[groupNumber].groupElements.push({"Type": fileType, "Name": fileName, "Alias": fileAlias});
    dragon.admin.db.utils.save();
    return 0;
}




dragon.admin.db.utils.groups.files.del = function (groupName, fileType, fileName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not in the group.
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    var groupNumber = -1;
    for (var i = 0; dragon.admin.db.db.groups.length > i; i++) {
        if (dragon.admin.db.db.groups[i].groupName === groupName)
            groupNumber = i;
    }
    if (groupNumber === -1)
        return 2;
    var delFileNumber = -1;
    for (var i = 0; dragon.admin.db.db.groups[groupNumber].groupElements.length > i; i++) {
        if ((dragon.admin.db.db.groups[groupNumber].groupElements[i]["Name"] === fileName) && (dragon.admin.db.db.groups[groupNumber].groupElements[i]["Type"] === fileType)) {
            delFileNumber = i;
        }
    }
    if (delFileNumber === -1)
        return 3;
    dragon.admin.db.db.groups[groupNumber].groupElements.splice(delFileNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.groups.files.list = function (groupName, fileType) {
    // output
    // 1:group not exist
    // 2:filetype not exist
    var out = [];
    var listNumber = -1;
    for (var i = 0; dragon.admin.db.db.groups.length > i; i++) {
        if (dragon.admin.db.db.groups[i].groupName === groupName)
            listNumber = i;
    }
    if (listNumber === -1)
        return 1;
    if ((['js', 'css', 'html', 'all']).indexOf(fileType) < 0)
        return 2;
    return dragon.admin.db.db.groups[listNumber].groupElements;
}


dragon.admin.db.utils.groups.files.move = function (groupName, fileType, fileName, newPosition) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not in the group.
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    var groupNumber = -1;
    for (var i = 0; dragon.admin.db.db.groups.length > i; i++) {
        if (dragon.admin.db.db.groups[i].groupName === groupName)
            groupNumber = i;
    }
    if (groupNumber === -1)
        return 2;
    var oldPosition = -1;
    for (var i = 0; dragon.admin.db.db.groups[groupNumber].groupElements.length > i; i++) {
        if ((dragon.admin.db.db.groups[groupNumber].groupElements[i]["Name"] === fileName) && (dragon.admin.db.db.groups[groupNumber].groupElements[i]["Type"] === fileType)) {
            oldPosition = i;
        }
    }
    if (oldPosition === -1)
        return 3;
    dragon.admin.db.db.groups[groupNumber].groupElements=dragon.tools.fun.array.move(dragon.admin.db.db.groups[groupNumber].groupElements, oldPosition, newPosition);
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.groups.get = function (groupName) {
    var out = [];
    dragon.admin.db.utils.groups.add(groupName);
    for (var i = 0; i < dragon.admin.db.db.files.length; i++) {
        if ((dragon.admin.db.db.files[i].fileName === groupName) && (dragon.admin.db.utils.files.typesAuto.indexOf(dragon.admin.db.db.files[i].fileType) !== -1)) {
            out.push(dragon.admin.db.db.files[i].fileType + "\t" + dragon.admin.db.db.files[i].fileName);
            dragon.admin.db.utils.groups.files.add(groupName, dragon.admin.db.db.files[i].fileType, dragon.admin.db.db.files[i].fileName);
        }
    }
    return out;

}

// group main End




/************************************
 *                                  *
 * Modules Start                      *
 *                                  *
 ************************************/








dragon.admin.db.utils.modules = {}


dragon.admin.db.utils.modules.checkAndFixAll = function () {
    for (var i = 0; i < dragon.admin.db.db.modules.length; i++) {
        dragon.admin.db.utils.modules.checkAndFix(i);
    }
}

dragon.admin.db.utils.modules.checkAndFix = function (moduleSerial) {
    if (typeof dragon.admin.db.db.modules[moduleSerial].title === "undefined")
        dragon.admin.db.db.modules[moduleSerial].title = "";
    if (typeof dragon.admin.db.db.modules[moduleSerial].favicon === "undefined")
        dragon.admin.db.db.modules[moduleSerial].favicon = "";
    if (typeof dragon.admin.db.db.modules[moduleSerial].metas === "undefined")
        dragon.admin.db.db.modules[moduleSerial].metas = [];
    if (typeof dragon.admin.db.db.modules[moduleSerial].info === "undefined")
        dragon.admin.db.db.modules[moduleSerial].info = {
            simpleSize: "0",
            simpleTime: "0",
            minifySize: "0",
            minifyTime: "0",
        };
    if (typeof dragon.admin.db.db.setup === "undefined")
        dragon.admin.db.db.setup = {};
}



dragon.admin.db.utils.modules.add = function (moduleName) {
    // output  
    // 0: ok 
    // 1: file not exist
    // 2: missin module name      
    if ((typeof moduleName === "undefined") && (moduleName === "undefined"))
        return 2;

    for (var i = 0; i < dragon.admin.db.db.modules.length; i++) {
        if ((dragon.admin.db.db.modules[i].moduleName === moduleName))
            return 1;
    }

    var serial = dragon.admin.db.utils.numbers.get('modules');
    dragon.admin.db.db.modules.push({
        serial: serial,
        id: "aaa" + serial.toString() + "aaa",
        moduleName: moduleName,
        moduleElements: [],
        title: "",
        metas: [],
    });
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.modules.del = function (moduleName) {
    // output  
    // 0: ok 
    // 1: file not exist
    var delNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            delNumber = i;
    }
    if (delNumber === -1)
        return 1;
    dragon.admin.db.db.modules.splice(delNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.modules.clone = function (moduleNameA, moduleNameB) {
    // output  
    // 0: ok 
    // 1: modulename still exist
    // 2: original modul not exist
    var modulAcheck = -1;
    for (var i = 0; i < dragon.admin.db.db.modules.length; i++) {
        if ((dragon.admin.db.db.modules[i].moduleName === moduleNameB))
            return 1;
        if ((dragon.admin.db.db.modules[i].moduleName === moduleNameA))
            modulAcheck = i;
    }
    if (modulAcheck === -1)
        return 2;
    var fileList = []
    for (var i = 0; i < dragon.admin.db.db.modules[modulAcheck].moduleElements.length; i++) {
        fileList.push(dragon.admin.db.db.modules[modulAcheck].moduleElements[i]);
    }
    var serial = dragon.admin.db.utils.numbers.get('modules');
    dragon.admin.db.db.modules.push({
        serial: serial,
        id: "aaa" + serial.toString() + "aaa",
        moduleName: moduleNameB,
        moduleElements: fileList,
    });
    dragon.admin.db.utils.save();
    return 0;
}




dragon.admin.db.utils.modules.favicon = {}

dragon.admin.db.utils.modules.favicon.get = function (moduleName) {
    // output  
    // 0: ok 
    // 1: modul not exist
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 1;
    if (typeof dragon.admin.db.db.modules[moduleNumber].favicon === "undefined")
        return "";
    return dragon.admin.db.db.modules[moduleNumber].favicon;
}

dragon.admin.db.utils.modules.favicon.del = function (moduleName) {
    // output  
    // 0: ok 
    // 1: modul not exist
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 1;
    dragon.admin.db.db.modules[moduleNumber].favicon = "";
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.modules.favicon.set = function (moduleName, titleText) {
    // output  
    // 0: ok 
    // 1: modul not exist
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 1;
    dragon.admin.db.db.modules[moduleNumber].favicon = titleText.replace("_", " ");
    dragon.admin.db.utils.save();
    return 0;
}









dragon.admin.db.utils.modules.title = {}

dragon.admin.db.utils.modules.title.get = function (moduleName) {
    // output  
    // 0: ok 
    // 1: modul not exist
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 1;
    if (typeof dragon.admin.db.db.modules[moduleNumber].title === "undefined")
        return "";
    return dragon.admin.db.db.modules[moduleNumber].title;
    dragon.admin.db.utils.modules.include
}

dragon.admin.db.utils.modules.title.del = function (moduleName) {
    // output  
    // 0: ok 
    // 1: modul not exist
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 1;
    dragon.admin.db.db.modules[moduleNumber].title = "";
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.modules.title.set = function (moduleName, titleText) {
    // output  
    // 0: ok 
    // 1: modul not exist
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 1;
    dragon.admin.db.db.modules[moduleNumber].title = titleText.replace("_", " ");
    dragon.admin.db.utils.save();
    return 0;
}



dragon.admin.db.utils.modules.meta = {}

dragon.admin.db.utils.modules.meta.list = function (moduleName) {
    // output  
    // 0: ok 
    // 1: modul not exist
    // 3: file not exist
    // 4: file alredy added in the module
    // output
    // 1:module not exist
    // 2:filetype not exist
    var out = [];
    var listNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            listNumber = i;
    }
    if (listNumber === -1)
        return 1;
    return dragon.admin.db.db.modules[listNumber].metas;
}

dragon.admin.db.utils.modules.meta.add = function (moduleName, metaName, metaContent) {
    // output  
    // 0: ok 
    // 1: modul not exist
    // 2: meta alredy added in the module
    // 5: missin module name
    // 6: missing meta name  
    // 7: missing meta content      
    if ((typeof moduleName === "undefined") && (moduleName === "undefined"))
        return 5;
    if ((typeof metaName === "undefined") && (metaName === "undefined"))
        return 6;
    if ((typeof metaContent === "undefined") && (metaContent === "undefined"))
        return 7;

    var out = [];
    var listNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            listNumber = i;
    }
    if (listNumber === -1)
        return 1;
    var metaNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules[listNumber].metas.length > i; i++) {
        if (dragon.admin.db.db.modules[listNumber].metas[i].name === metaName)
            metaNumber = i;
    }
    if (metaNumber !== -1)
        return 2;
    dragon.admin.db.db.modules[listNumber].metas.push({name: metaName, content: metaContent.replace("_", " ")});
    dragon.admin.db.utils.save();
    return 0;
}



dragon.admin.db.utils.modules.meta.get = function (moduleName, metaName) {
    // output  
    // 0: ok 
    // 1: modul not exist
    // 2: meta not in the module
    var out = [];
    var listNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            listNumber = i;
    }
    if (listNumber === -1)
        return 1;
    var metaNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules[listNumber].metas.length > i; i++) {
        if (dragon.admin.db.db.modules[listNumber].metas[i].name === metaName)
            metaNumber = i;
    }
    if (metaNumber === -1)
        return 2;
    dragon.admin.db.utils.save();
    return dragon.admin.db.db.modules[listNumber].metas[metaNumber]['content'];
}


dragon.admin.db.utils.modules.meta.del = function (moduleName, metaName) {
    // output  
    // 0: ok 
    // 1: modul not exist
    // 2: meta not in the module
    var out = [];
    var listNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            listNumber = i;
    }
    if (listNumber === -1)
        return 1;
    var metaNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules[listNumber].metas.length > i; i++) {
        if (dragon.admin.db.db.modules[listNumber].metas[i].name === metaName)
            metaNumber = i;
    }
    if (metaNumber === -1)
        return 2;
    dragon.admin.db.db.modules[listNumber].metas.splice(metaNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}




dragon.admin.db.utils.modules.meta.set = function (moduleName, metaName, metaContent) {
    // output  
    // 0: ok 
    // 1: modul not exist
    // 2: meta not in the module
    // 5: missin module name
    // 6: missing meta name  
    // 7: missing meta content      
    if ((typeof moduleName === "undefined") && (moduleName === "undefined"))
        return 5;
    if ((typeof metaName === "undefined") && (metaName === "undefined"))
        return 6;
    if ((typeof metaContent === "undefined") && (metaContent === "undefined"))
        return 7;

    var out = [];
    var listNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            listNumber = i;
    }
    if (listNumber === -1)
        return 1;
    var metaNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules[listNumber].metas.length > i; i++) {
        if (dragon.admin.db.db.modules[listNumber].metas[i].name === metaName)
            metaNumber = i;
    }
    if (metaNumber === -1)
        return 2;
    dragon.admin.db.db.modules[listNumber].metas[metaNumber] = {name: metaName, content: metaContent.replace("_", " ")};
    return 0;
}


dragon.admin.db.utils.modules.files = {}



dragon.admin.db.utils.modules.files.add = function (moduleName, fileType, fileName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not exist
    // 4: file alredy added in the module
    // 5: missin project name
    // 6: missing file type  
    // 7: missing file name      
    if ((typeof moduleName === "undefined") && (moduleName === "undefined"))
        return 5;
    if ((typeof fileType === "undefined") && (fileType === "undefined"))
        return 6;
    if ((typeof fileName === "undefined") && (fileName === "undefined"))
        return 7;

    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    if ((fileType === "include") || (fileType === "svg"))
        return dragon.admin.db.utils.modules.include.add(moduleName, fileType, fileName, fileName);

    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 2;
    var fileNumber = -1;
    for (var i = 0; dragon.admin.db.db.files.length > i; i++) {
        if ((dragon.admin.db.db.files[i].fileName === fileName) && (dragon.admin.db.db.files[i].fileType === fileType))
            fileNumber = i;
    }
    if (fileNumber === -1)
        return 3;
    for (var i = 0; dragon.admin.db.db.modules[moduleNumber].moduleElements.length > i; i++) {
        if ((dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Name"] === fileName) && (dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Type"] === fileType))
            return 4;
    }
    dragon.admin.db.db.modules[moduleNumber].moduleElements.push({"Type": fileType, "Name": fileName});
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.modules.include = {}

dragon.admin.db.utils.modules.include.add = function (moduleName, fileType, fileName, fileAlias) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not exist
    // 4: file alredy added in the module
    // 5: missin project name
    // 6: missing file type  
    // 7: missing file name      
    if ((typeof moduleName === "undefined") && (moduleName === "undefined"))
        return 5;
    if ((typeof fileType === "undefined") && (fileType === "undefined"))
        return 6;
    if ((typeof fileName === "undefined") && (fileName === "undefined"))
        return 7;

    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 2;
    var fileNumber = -1;
    for (var i = 0; dragon.admin.db.db.files.length > i; i++) {
        if ((dragon.admin.db.db.files[i].fileName === fileName) && ((dragon.admin.db.db.files[i].fileType === "include") || (dragon.admin.db.db.files[i].fileType === "svg")))
            fileNumber = i;
    }
    if (fileNumber === -1)
        return 3;
    for (var i = 0; dragon.admin.db.db.modules[moduleNumber].moduleElements.length > i; i++) {
        if ((dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Name"] === fileName) && (dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Type"] === fileType))
            return 4;
    }
    dragon.admin.db.db.modules[moduleNumber].moduleElements.push({"Type": fileType, "Name": fileName, "Alias": fileAlias});
    dragon.admin.db.utils.save();
    return 0;
}




dragon.admin.db.utils.modules.files.del = function (moduleName, fileType, fileName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not in the module.
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 2;
    var delFileNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules[moduleNumber].moduleElements.length > i; i++) {
        if ((dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Name"] === fileName) && (dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Type"] === fileType)) {
            delFileNumber = i;
        }
    }
    if (delFileNumber === -1)
        return 3;
    dragon.admin.db.db.modules[moduleNumber].moduleElements.splice(delFileNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.modules.files.list = function (moduleName, fileType) {
    // output
    // 1:module not exist
    // 2:filetype not exist
    var out = [];
    var listNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            listNumber = i;
    }
    if (listNumber === -1)
        return 1;
    if ((['js', 'css', 'html', 'include', 'less', 'sass', 'endjs', 'nat', 'svg']).indexOf(fileType) > -1) {
        for (var i = 0; dragon.admin.db.db.modules[listNumber].moduleElements.length > i; i++)
            if (fileType === dragon.admin.db.db.modules[listNumber].moduleElements[i]["Type"])
                out.push({"Name": dragon.admin.db.db.modules[listNumber].moduleElements[i]["Name"], "Type": dragon.admin.db.db.modules[listNumber].moduleElements[i]["Type"]});
    } else if ('all' === fileType) {
        for (var i = 0; dragon.admin.db.db.modules[listNumber].moduleElements.length > i; i++)
            out.push({"Name": dragon.admin.db.db.modules[listNumber].moduleElements[i]["Name"], "Type": dragon.admin.db.db.modules[listNumber].moduleElements[i]["Type"]});
    } else {
        return 2;
    }
    return dragon.admin.db.db.modules[listNumber].moduleElements;
}


dragon.admin.db.utils.modules.files.move = function (moduleName, fileType, fileName, newPosition) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not in the module.
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 2;
    var oldPosition = -1;
    for (var i = 0; dragon.admin.db.db.modules[moduleNumber].moduleElements.length > i; i++) {
        if ((dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Name"] === fileName) && (dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Type"] === fileType)) {
            oldPosition = i;
        }
    }
    if (oldPosition === -1)
        return 3;
    dragon.admin.db.db.modules[moduleNumber].moduleElements = dragon.tools.fun.array.move(dragon.admin.db.db.modules[moduleNumber].moduleElements, oldPosition, newPosition);
    dragon.admin.db.utils.save();
    return 0;
}






// modules groups start 
dragon.admin.db.utils.modules.groups = {}

dragon.admin.db.utils.modules.groups.add = function (moduleName, groupName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not exist
    // 4: file alredy added in the module
    // 5: missin project name
    // 6: missing file type  
    if ((typeof moduleName === "undefined") && (moduleName === "undefined"))
        return 5;
    if ((typeof groupName === "undefined") && (groupName === "undefined"))
        return 6;

    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 2;
    for (var i = 0; dragon.admin.db.db.modules[moduleNumber].moduleElements.length > i; i++) {
        if ((dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Name"] === groupName) && (dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Type"] === 'group'))
            return 4;
    }
    dragon.admin.db.db.modules[moduleNumber].moduleElements.push({"Name": groupName, "Type": "group"});
    dragon.admin.db.utils.save();
    return 0;
}





dragon.admin.db.utils.modules.groups.del = function (moduleName, groupName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not in the module.

    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 2;
    var delFileNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules[moduleNumber].moduleElements.length > i; i++) {
        if ((dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Name"] === groupName) && (dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Type"] === 'group')) {
            delFileNumber = i;
        }
    }
    if (delFileNumber === -1)
        return 3;
    dragon.admin.db.db.modules[moduleNumber].moduleElements.splice(delFileNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.modules.groups.list = function (moduleName) {
    // output
    // 1:module not exist
    // 2:filetype not exist
    var out = [];
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 1;
    for (var i = 0; dragon.admin.db.db.modules[moduleNumber].moduleElements.length > i; i++)
        if ('group' === dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Type"])
            out.push(dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Name"] + "\n");
    return out;
}


dragon.admin.db.utils.modules.groups.move = function (moduleName, groupName, newPosition) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not in the module.

    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 2;
    var oldPosition = -1;
    for (var i = 0; dragon.admin.db.db.modules[moduleNumber].moduleElements.length > i; i++) {
        if ((dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Name"] === groupName) && (dragon.admin.db.db.modules[moduleNumber].moduleElements[i]["Type"] === 'group')) {
            oldPosition = i;
        }
    }
    if (oldPosition === -1)
        return 3;
    dragon.admin.db.db.modules[moduleNumber].moduleElements = dragon.tools.fun.array.move(dragon.admin.db.db.modules[moduleNumber].moduleElements, oldPosition, newPosition);
    dragon.admin.db.utils.save();
    return 0;
}



dragon.admin.db.utils.modules.change = function () {
}


/************************************
 *                                  *
 * Modules End                      *
 *                                  *
 ************************************/



dragon.admin.db.utils.options = {}

dragon.admin.db.utils.options.add = function () {

    var serial = dragon.admin.db.utils.options.get('modules');
    dragon.admin.db.db.options.push({
        serial: serial,
        id: "aaa" + serial.toString() + "aaa",
        optionName: optionName,
        optionValue: optionValue,
    });
    dragon.admin.db.utils.save();

}


/************************************ 
 * @param {type} optionName         *
 * @returns {undefined}             *
 ************************************/



dragon.admin.db.utils.options.del = function (optionName) {
    var delNumber = -1;
    for (var i = 0; dragon.admin.db.db.options.length > i; i++) {
        if (dragon.admin.db.db.options[i].optionName === optionName)
            delNumber = i;
    }
    dragon.admin.db.db.options.splice(delNumber, 1);
    dragon.admin.db.utils.save();
}

dragon.admin.db.utils.options.list = function () {
}

dragon.admin.db.utils.options.change = function () {
}




dragon.admin.db.utils.projects = {}

dragon.admin.db.utils.projects.checkAndFixAll = function () {
    if (typeof dragon.admin.db.db.projects === "undefined") 
        dragon.db.db.projects = [];
}

dragon.admin.db.utils.projects.add = function (projectName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: project already exist
    // 3: missing projectname    
    if ((typeof projectName === "undefined")&&(projectName === "undefined"))
            return 3;           
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    for (var i = 0; i < dragon.admin.db.db.projects.length; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            return 2;
    }
  
    var serial = dragon.admin.db.utils.numbers.get('projects');
//    if (!(dragon.admin.db.fs.existsSync("www/"+dragon.admin.fileread.v.dirs[fileType]+fileName))) return 3;
    dragon.admin.db.db.projects.push({
        serial: serial,
        id: "aaa" + serial.toString() + "aaa",
        projectName: projectName,
        projectModules: [],
        projectGroups: [],
        projectFiles: []     
    });
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.projects.del = function (projectName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: file not exist
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var delNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            delNumber = i;
    }
    if (delNumber === -1)
        return 2;
    dragon.admin.db.db.projects.splice(delNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}


dragon.admin.db.utils.projects.list = function () {
    var out = [];
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        out.push({Name:dragon.admin.db.db.projects[i].projectName});
    }
    return out;
}



dragon.admin.db.utils.projects.modules = {}

dragon.admin.db.utils.projects.modules.add = function (projectName, moduleName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: project not exist
    // 3: modul not exist
    // 4: module alredy added in the project
    // 5: missin project name
    // 6: missing modul name   
    if ((typeof projectName === "undefined")&&(projectName === "undefined"))
            return 5;    
    if ((typeof moduleName === "undefined")&&(moduleName === "undefined"))
            return 6;            
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 2;
    var moduleNumber = -1;
    for (var i = 0; dragon.admin.db.db.modules.length > i; i++) {
        if (dragon.admin.db.db.modules[i].moduleName === moduleName)
            moduleNumber = i;
    }
    if (moduleNumber === -1)
        return 3;
    for (var i = 0; dragon.admin.db.db.projects[projectNumber].projectModules.length > i; i++) {
        if (dragon.admin.db.db.projects[projectNumber].projectModules[i]["Name"] === moduleName)
            return 4;
    }
    dragon.admin.db.db.projects[projectNumber].projectModules.push({"Name": moduleName});
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.projects.modules.del = function (projectName, moduleName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not in the module.
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 2;
    var delModuleNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects[projectNumber].projectModules.length > i; i++) {
        if (dragon.admin.db.db.projects[projectNumber].projectModules[i]["Name"] === moduleName) {
            delModuleNumber = i;
        }
    }
    if (delModuleNumber === -1)
        return 3;
    dragon.admin.db.db.projects[projectNumber].projectModules.splice(delModuleNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.projects.modules.list = function (projectName) {
    // output
    // 1:module not exist
    // 2:filetype not exist
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var out = [];
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 1;
    for (var i = 0; dragon.admin.db.db.projects[projectNumber].projectModules.length > i; i++)
        if(dragon.admin.db.db.projects[projectNumber].projectModules[i] !== "undefined")
            out.push({"Name": dragon.admin.db.db.projects[projectNumber].projectModules[i]["Name"]});
    return out;
}


dragon.admin.db.utils.projects.groups = {}

dragon.admin.db.utils.projects.groups.add = function (projectName, groupName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: project not exist
    // 3: modul not exist
    // 4: file alredy added in the module
    // 5: missin project name
    // 6: missing group name   
    if ((typeof projectName === "undefined")&&(projectName === "undefined"))
            return 5;   
    // 6: missing modul name   
    if ((typeof groupName === "undefined")&&(groupName === "undefined"))
            return 6;           
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 2;
    var groupNumber = -1;
    for (var i = 0; dragon.admin.db.db.groups.length > i; i++) {
        if (dragon.admin.db.db.groups[i].groupName === groupName)
            groupNumber = i;
    }
    if (groupNumber === -1)
        return 3;
    for (var i = 0; dragon.admin.db.db.projects[projectNumber].projectGroups.length > i; i++) {
        if (dragon.admin.db.db.projects[projectNumber].projectGroups[i]["Name"] === groupName)
            return 4;
    }
    dragon.admin.db.db.projects[projectNumber].projectGroups.push({"Name": groupName});
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.projects.groups.del = function (projectName, groupName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: modul not exist
    // 3: file not in the module.
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 2;
    var delGroupNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects[projectNumber].projectGroups.length > i; i++) {
        if (dragon.admin.db.db.projects[projectNumber].projectGroups[i]["Name"] === groupName) {
            delGroupNumber = i;
        }
    }
    if (delGroupNumber === -1)
        return 3;
    dragon.admin.db.db.projects[projectNumber].projectGroups.splice(delGroupNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.projects.groups.list = function (projectName) {
    // output
    // 1:module not exist
    // 2:filetype not exist
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var out = [];
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 1;
    for (var i = 0; dragon.admin.db.db.projects[projectNumber].projectGroups.length > i; i++)
        if(dragon.admin.db.db.projects[projectNumber].projectGroups[i] !== "undefined")
            out.push({"Name": dragon.admin.db.db.projects[projectNumber].projectGroups[i]["Name"]});
    return out;
}







dragon.admin.db.utils.projects.files = {}

dragon.admin.db.utils.projects.files.add = function (projectName, fileType, fileName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: project not exist
    // 3: file not exist
    // 4: file alredy added in the project
    // 5: missin project name
    // 6: missing file type  
    // 7: missing file name      
    if ((typeof projectName === "undefined")&&(projectName === "undefined"))
            return 5;   
    if ((typeof fileType === "undefined")&&(fileType === "undefined"))
            return 6;
    if ((typeof fileName === "undefined")&&(fileName === "undefined"))
            return 7;   
          
    if (dragon.admin.db.utils.files.typesall.indexOf(fileType) === -1)
        return 1;
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
/*    
    if ((fileType === "include") || (fileType === "svg"))
        return dragon.admin.db.utils.modules.include.add(moduleName, fileType, fileName, fileName);
*/
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 2;
    var fileNumber = -1;    
    for (var i = 0; dragon.admin.db.db.files.length > i; i++) {
        if ((dragon.admin.db.db.files[i].fileName === fileName) && (dragon.admin.db.db.files[i].fileType === fileType))
            fileNumber = i;
    }
    if (fileNumber === -1)
        return 3;
    for (var i = 0; dragon.admin.db.db.projects[projectNumber].projectFiles.length > i; i++) {
        if ((dragon.admin.db.db.projects[projectNumber].projectFiles[i]["Name"] === fileName)&&(dragon.admin.db.db.projects[projectNumber].projectFiles[i]["Type"] === fileType))
            return 4;
    }
    dragon.admin.db.db.projects[projectNumber].projectFiles.push({"Type": fileType, "Name": fileName});
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.projects.files.del = function (projectName, fileType, fileName) {
    // output  
    // 0: ok 
    // 1: wrong type
    // 2: project not exist
    // 3: file not in the project.
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 2;
    var delFileNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects[projectNumber].projectModules.length > i; i++) {
        if ((dragon.admin.db.db.projects[projectNumber].projectFiles[i]["Name"] === fileName)&&(dragon.admin.db.db.projects[projectNumber].projectFiles[i]["Type"] === fileType)) {
            delFileNumber = i;
        }
    }
    if (delFileNumber === -1)
        return 3;
    dragon.admin.db.db.projects[projectNumber].projectFiles.splice(delFileNumber, 1);
    dragon.admin.db.utils.save();
    return 0;
}

dragon.admin.db.utils.projects.files.list = function (projectName, fileType, fntag) {
    // output
    // 1:module not exist
    // 2:filetype not exist
    if (typeof dragon.admin.db.db.projects === "undefined") {
        dragon.admin.db.db.projects = [];
    }
    var projectNumber = -1;
    for (var i = 0; dragon.admin.db.db.projects.length > i; i++) {
        if (dragon.admin.db.db.projects[i].projectName === projectName)
            projectNumber = i;
    }
    if (projectNumber === -1)
        return 1;
    var out = "\n";
    fileType = dragon.admin.db.utils.files.typePreProcessor(fileType);
    for (var i = 0; i < dragon.admin.db.db.projects[projectNumber].projectFiles.length; i++) {
        if ((typeof fileType !== "undefined") && (fileType !== "all") && (fileType !== "a")) {
            if (typeof fntag !== "undefined") {
                if (dragon.admin.db.db.projects[projectNumber].projectFiles[i].fileType === fileType)
                    if (dragon.admin.db.db.projects[projectNumber].projectFiles[i].fileName.indexOf(fntag) > -1)
                        out +=  i.toString()+ "\t"+dragon.admin.db.db.projects[projectNumber].projectFiles[i].Type + "\t" + dragon.admin.db.db.projects[projectNumber].projectFiles[i].Name + "\n";
            } else {
                if (dragon.admin.db.db.projects[projectNumber].projectFiles[i].fileType === fileType)
                    out +=  i.toString()+ "\t"+dragon.admin.db.db.projects[projectNumber].projectFiles[i].Type + "\t" + dragon.admin.db.db.projects[projectNumber].projectFiles[i].Name + "\n";
            }
        } else {
            if (typeof fntag !== "undefined") {
                if (dragon.admin.db.db.projects[projectNumber].projectFiles[i].fileName.indexOf(fntag) > -1)
                    out +=  i.toString()+ "\t"+dragon.admin.db.db.projects[projectNumber].projectFiles[i].Type + "\t" + dragon.admin.db.db.projects[projectNumber].projectFiles[i].Name + "\n";
            } else {
                out +=  i.toString()+ "\t"+dragon.admin.db.db.projects[projectNumber].projectFiles[i].Type + "\t" + dragon.admin.db.db.projects[projectNumber].projectFiles[i].Name + "\n";
            }
        }
    }
    return out;


}








dragon.admin.httpd.fun.recv = function (req, res, Post) {
    var packet = [];
    if (typeof Post === "undefined")
        return dragon.admin.httpd.fun.send(req, res, [{M: "E", T: "0", P: "2"}]);
    if (typeof Post['P'] !== "undefined") // ping response ezzel tudja meg talalni a rendszer z idealis api szervert
        return dragon.admin.httpd.fun.send(req, res, [{M: "CM", T: "R", C: "P"}]);
    if (typeof Post['M'] === "undefined") {
        dragon.admin.httpd.fun.send(req, res, packet);
        return false;
    } else {
        if (Post['M'] === "CO") {
            if (typeof Post['C'] === "undefined") {
                dragon.admin.httpd.fun.send(req, res, packet);
                return false;
            } else if (Post['C'] === "C") {
                packet.push({"M": "CO", "C": "C", "T": "Q", "V": {"0": dragon.admin.cli.comin(Post['V']['0'])}});
                dragon.admin.httpd.fun.send(req, res, packet);
                return true;
            }
            return;
        }
    }
    dragon.admin.httpd.fun.send(req, res, packet);
    return true;
}


dragon.admin.httpd.fun.send = function (req, res, packet) {
    res.end(JSON.stringify(packet));
}






dragon.admin.out.html=function (requrl) {
       if (typeof requrl === "undefined") return false;

       if (requrl !== "/") requrl = requrl.slice(1);

       if ((requrl !== "/") && (typeof proj.pages[requrl] === "undefined")) return false;

        var outhtml = "";

        outhtml +=out.tag.headstart;

        outhtml +=out.getcss(requrl);

        outhtml +=out.getjs(requrl);

        outhtml +=out.gethtml(requrl);

        outhtml +=out.getendjs(requrl);

        outhtml +=out.getsass(requrl);

        outhtml +=out.tag.headend;

        outhtml +=out.tag.bodystart;

        outhtml +=out.tag.bodyend;

    if (dragon.out.setup.minify === 1) {
        outhtml= outhtml.replace(/\r?\n|\r/g, "");
    }

        return outhtml;

}

 
dragon.admin.render.fun.moduletest = function (moduleName) {
    // output  
    // 0: ok 
    // 1: file not exist
     let moduleNumber=-1;
     for(let i=0;dragon.admin.db.db.modules.length>i;i++){
         if(dragon.admin.db.db.modules[i].moduleName===moduleName) moduleNumber = i ;
      }
      if (moduleNumber === -1) return 1;
      let startdate = new Date().getTime();
      let simplesize = dragon.out.render.simple("/"+moduleName).toString().length;
      let enddate = new Date().getTime();
      let simpletime = enddate-startdate;
      let minifysize = dragon.out.render.minify("/"+moduleName).toString().length;
      enddate = new Date().getTime();
      let minifytime = enddate-startdate;
      dragon.admin.db.db.modules[moduleNumber].info={
      simpleSize:simplesize.toString(),
      simpleTime:simpletime.toString(),
      minifySize:minifysize.toString(),
      minifyTime:minifytime.toString(),
      }
      return 0;
}


dragon.admin.render.fun.simple = function (moduleName) {
     return "";
}

dragon.admin.render.fun.filesimple = function (moduleName) {
    // output  
    // 0: ok 
    // 1: file not exist
     let moduleNumber=-1;
     for(let i=0;dragon.admin.db.db.modules.length>i;i++){
         if(dragon.admin.db.db.modules[i].moduleName===moduleName) moduleNumber = i ;
      }
      if (moduleNumber === -1) return 1;
    dragon.admin.render.lib.fs.writeFileSync("render/simple/"+moduleName+".html", dragon.out.render.simple("/"+moduleName).toString());
    return 0;
}

dragon.admin.render.fun.fileminify = function (moduleName) {
    // output  
    // 0: ok 
    // 1: file not exist
     let moduleNumber=-1;
     for(let i=0;dragon.admin.db.db.modules.length>i;i++){
         if(dragon.admin.db.db.modules[i].moduleName===moduleName) moduleNumber = i ;
      }
      if (moduleNumber === -1) return 1;
    dragon.admin.render.lib.fs.writeFileSync("render/minify/"+moduleName+".html", dragon.out.render.minify("/"+moduleName).toString());
}

dragon.admin.render.fun.fileall= function () {
    for(let i=0;dragon.admin.db.db.modules.length>i;i++){
        dragon.admin.render.fun.filesimple(dragon.admin.db.db.modules[i].moduleName);
        dragon.admin.render.fun.fileminify(dragon.admin.db.db.modules[i].moduleName);
     }
     return 0;
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



dragon.init.fun.addStart(function () {
    /**************************************
     *                                    *
     *  interactive console init          *
     *                                    *
     **************************************/

    dragon.admin.cli.interactiveConsole = new interactiveConsole();
    let out = "";
    for (i = 0; 200 > i; i++)
        out += "\n";
    out += '\033[2J';
    out += "\n\n---Welcome to DragonWeb---\n\n                   .----.\n                 .'  \\__ '.\n                |   __|  _ :\n                V\\/(0I0\\/|/\n                   \\ : /  '\n                   (oYo)\n                   /` `\\n__\n                 _|  _ Vuu:,\n                |uV\\/ \| \\_/|\n                :      \\/\\  :\n                 \\   -'    /\n                  '-.___.-' <>\n                 =        <\n";
    out += "==========\n";
    out += "Commandline Admin\n";
    out += "==========\n";

    dragon.admin.cli.interactiveConsole.on = function (command) {
        dragon.config.fun.saveFileHistory();
    }


    dragon.admin.cli.interactiveConsole.cursorText = "dwpa_> ";
    dragon.admin.cli.interactiveConsole.watch();
    dragon.admin.cli.interactiveConsole.printLn(out);

    dragon.admin.cli.interactiveConsole.command.add(["a", "admin"], dragon.admin.cli.admin, {s: {s: {minify: {"0": {}, "1": {}}, debugjs: {"0": {}, "1": {}}}, set: {minify: {"0": {}, "1": {}}, debugjs: {"0": {}, "1": {}}}, g: {}, get: {minify: {}, debugjs: {}}}, setup: {s: {minify: {"0": {}, "1": {}}, debugjs: {"0": {}, "1": {}}}, set: {minify: {"0": {}, "1": {}}, debugjs: {"0": {}, "1": {}}}, g: {}, get: {minify: {}, debugjs: {}}}});
    dragon.admin.cli.interactiveConsole.command.add(["f", "file"], dragon.admin.cli.file, {l: {}, list: {}, a: {}, add: {}, m:{}, make:{}, d: {}, del: {}, c: {}, check: {}, g: {}, get: {}});
    dragon.admin.cli.interactiveConsole.command.add(["d", "dragon"], dragon.admin.cli.dragon.recv);
    dragon.admin.cli.interactiveConsole.command.add(["m", "module"], dragon.admin.cli.module, {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}, e: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, element: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, g: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, group: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}});
    dragon.admin.cli.interactiveConsole.command.add(["g", "group"], dragon.admin.cli.group, {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}, e: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, element: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}});
    dragon.admin.cli.interactiveConsole.command.add(["s", "setup"], dragon.admin.cli.setup, {s: {}, g: {}});
    dragon.admin.cli.interactiveConsole.command.add(["o", "object"], dragon.admin.cli.object);
    dragon.admin.cli.interactiveConsole.command.add(["p", "project"], dragon.admin.cli.project, {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}, e: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, element: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, m: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, modul: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, g: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}, group: {l: {}, list: {}, a: {}, add: {}, d: {}, del: {}}});
    dragon.admin.cli.interactiveConsole.command.add(["c", "chess"], dragon.admin.cli.chess);
    dragon.admin.cli.interactiveConsole.command.add(["h", "help"], dragon.admin.cli.help.help);
}, 2);










dragon.admin.db.read();




dragon.init.fun.addStart(function () {
    dragon.admin.httpd.lib.http.createServer(function (req, res) {
        let body = '';
        req.on('data', function (data) {
            body = data;
        });
        req.on('end', function () {
            if (typeof body !== "undefined") {
                try {
                    var Post = JSON.parse(body.toString('utf8'));
                } catch (err) {

                }
            }
            if (req.url === "/json") {

                //               res.setHeader("Access-Control-Allow-Origin", "http://testa.dev.air");
                res.setHeader("Access-Control-Allow-Origin", "*");
//                res.setHeader("Access-Control-Allow-Origin", "http://api.batgle.com");

                res.writeHead(200, {
                    'Content-Type': 'application/json',
                });
                dragon.admin.httpd.fun.recv(req, res, Post);
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                try {
                    res.end("ok");
//                ser.httpd.fs.appendFile('/var/log/dragonweb/acces.log', " ["+(new Date()).getTime().toString()+"] || "+req.url.toString()+" || "+req.connection.remoteAddress.toString()+"\n", function (err) {});
                } catch (err) {
//                ser.httpd.fs.appendFile('/var/log/dragonweb/error.log', " ["+(new Date()).getTime().toString()+"] || "+err.toString()+"\n", function (err) {}); 
                }
            }
        });
        res.on('close', function () {
            let Post = false;
            if (typeof body !== "undefined") {
                try {
                    Post = JSON.parse(body.toString('utf8'));
                    if (Post === false)
                        return false;
                    if (typeof Post['O'] === "undefined")
                        return false;
                    dragon.admin.httpd.fun.longPoolKill(Post['O']);
                } catch (err) {
                    return false;
                }
            }
        });
    }).listen(dragon.admin.httpd.setup.port, dragon.admin.httpd.setup.ip);
}, 30);



dragon.setup.fun.add(
        [
            {
                variable: "dragon.admin.httpd.setup.port",
                type: "integer",
                name: "admin_http_port",
                comment: "Admin http listening port",
                limitation: {max: 200, min: 1}
            },
            {
                variable: "dragon.admin.httpd.setup.ip",
                type: "string",
                name: "admin_http_ip",
                comment: "Admin http listening ip",
                max: 5,
                min: 1
            },
        ],
        "dragon.admin.httpd"
        );









dragon.onload={
    
    
}













dragon.init.fun.runStart();




