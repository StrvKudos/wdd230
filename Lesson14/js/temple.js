//Index JSON Javascript

var indexObject = new XMLHttpRequest();

indexObject.open('GET', src="../temple.json", true);

indexObject.send();

indexObject.onload = function (){

  var templeInfo = JSON.parse(indexObject.responseText);
  console.log(templeInfo);

  //Manila Temple

  document.getElementById('mancity').innerHTML = templeInfo.towns["1"].temple;
  document.getElementById('manaddress').innerHTML = templeInfo.towns["1"].address;
  document.getElementById('mantelephone').innerHTML = templeInfo.towns["1"].telephone;
  document.getElementById('manemail').innerHTML = templeInfo.towns["1"].email;
  document.getElementById('manservices').innerHTML = templeInfo.towns["1"].services["1"];
  document.getElementById('manhistory').innerHTML = templeInfo.towns["1"].history["0"];
  document.getElementById('manordinance').innerHTML = templeInfo.towns["1"].ordinanceSchedule;
  document.getElementById('manclosure').innerHTML = templeInfo.towns["1"].templeClosure["2"];

  //Cebu Temple

 
  document.getElementById('cebucity').innerHTML = templeInfo.towns["2"].temple;
  document.getElementById('cebuaddress').innerHTML = templeInfo.towns["2"].address;
  document.getElementById('cebutelephone').innerHTML = templeInfo.towns["2"].telephone;
  document.getElementById('cebuemail').innerHTML = templeInfo.towns["2"].email;
  document.getElementById('cebuservices').innerHTML = templeInfo.towns["2"].services["1"];
  document.getElementById('cebuhistory').innerHTML = templeInfo.towns["2"].history["0"];
  document.getElementById('cebuordinance').innerHTML = templeInfo.towns["2"].ordinanceSchedule;
  document.getElementById('cebuclosure').innerHTML = templeInfo.towns["2"].templeClosure["2"];
 

  //Hongkong Temple

  document.getElementById('hkcity').innerHTML = templeInfo.towns["3"].temple;
  document.getElementById('hkaddress').innerHTML = templeInfo.towns["3"].address;
  document.getElementById('hktelephone').innerHTML = templeInfo.towns["3"].telephone;
  document.getElementById('hkemail').innerHTML = templeInfo.towns["3"].email;
  document.getElementById('hkservices').innerHTML = templeInfo.towns["3"].services["1"];
  document.getElementById('hkhistory').innerHTML = templeInfo.towns["3"].history["0"];
  document.getElementById('hkordinance').innerHTML = templeInfo.towns["3"].ordinanceSchedule;
  document.getElementById('hkClosure').innerHTML = templeInfo.towns["3"].templeClosure["2"];
 
 

    //Fuluola Japan temple
    document.getElementById('japancity').innerHTML = templeInfo.towns["4"].temple;
    document.getElementById('japanaddress').innerHTML = templeInfo.towns["4"].address;
    document.getElementById('japantelephone').innerHTML = templeInfo.towns["4"].telephone;
    document.getElementById('japanemail').innerHTML = templeInfo.towns["4"].email;
    document.getElementById('japanservices').innerHTML = templeInfo.towns["4"].services["1"];
    document.getElementById('japanhistory').innerHTML = templeInfo.towns["4"].history["0"];
    document.getElementById('japanordinance').innerHTML = templeInfo.towns["4"].ordinanceSchedule;
    document.getElementById('japanClosure').innerHTML = templeInfo.towns["4"].templeClosure["2"];
   
  
}