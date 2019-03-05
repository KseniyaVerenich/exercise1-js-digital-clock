
function currentTime(){
    //get the time
    //print the time using (...innerHTML="")
    
    var time = new Date();
    var str = time.toLocaleTimeString("en-us");
    document.getElementById("clock").innerHTML= str;


    var t= setTimeout (currentTime, 1000);
}
