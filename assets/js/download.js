(function($) {
    var loadJSON = function(callback){
        var xmlobj = new XMLHttpRequest();
        xmlobj.overrideMimeType("application/json");
        xmlobj.open('GET', 'assets/version.json', true);
        xmlobj.onreadystatechange = function(){
          if(xmlobj.readyState == 4 && xmlobj.status == "200"){
               callback(xmlobj.responseText);
           }
      };
     xmlobj.send(null);
    };
    
    loadJSON(function(response){
       var json = JSON.parse(response);
        for (key in json){
            var app = json[key];
            document.getElementById("download-row").innerHTML += "<div class=\"col\" style=\"margin:20px;\"><div class=\"card\" style=\"height: 300px;background-color: rgb(70,70,70,.7);\"><div class=\"card-body\"><div class=\"col\"><p class=\"text-capitalize text-center\" style=\"height:40px;font-size: 14px;color: rgb(255,255,255);margin-bottom: 20px;\">"+app.name+"</p><p class=\"text-center\" style=\"height: 120px;font-size: 12px;color: rgb(255,255,255);margin-bottom: 0px;\">"+app.dec+"</p><p class=\"text-center\" style=\"font-size: 12px;color: rgb(255,255,255);margin-bottom: 0px;\">"+app.vString+"</p><p class=\"text-center\" style=\"font-size: 12px;color: rgb(255,255,255);margin-bottom: 20px;\">"+app.size+"</p><a class=\"btn btn-sm btn-default\" role=\"button\" style=\"font-size: 12px;color: rgb(72,158,194);\" href=\""+app.url+"\">Download</a></div></div></div></div>";
        }
    });
})();