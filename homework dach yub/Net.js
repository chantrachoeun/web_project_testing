
    function start(){
        var value = document.getElementById("save").value;
        if (value == 'Start') {
            startTime = new Date();
            var startHour = startTime.getHours();
            var startMinute = startTime.getMinutes();
            var startSecond = startTime.getSeconds();
            startMinute = checkTime(startMinute);
            startSecond = checkTime(startSecond);
            document.getElementById('item2').innerHTML = "Start time " +
            startHour + ":" + startMinute + ":" + startSecond;
            document.getElementById('item2').style.textAlign='center';
            document.getElementById('item2').style.fontSize='30px';
            document.getElementById("save").value = "Stop";   
        }
        if (value == 'Stop') {
            var endTime = new Date(); 
            var endHour = endTime.getHours();
            var endMinute = endTime.getMinutes();
            var endSecond = endTime.getSeconds();
            endMinute = checkTime(endMinute);
            endSecond = checkTime(endSecond);
            document.getElementById('item3').innerHTML = "End time " +
            endHour + ":" + endMinute + ":" + endSecond;
            document.getElementById('item3').style.textAlign='center';
            document.getElementById('item3').style.fontSize='30px';
            var minute=Math.ceil((((endTime.getTime()-startTime.getTime())/1000))/60);
            document.getElementById('item4').innerHTML="Total Minute :"+minute; 
            document.getElementById('item4').style.textAlign='center';
            document.getElementById('item4').style.fontSize='30px';  
            if(minute<=15){
                document.getElementById('item5').innerHTML="Total Money : 500 រៀល";
            }  
            else if(minute>=15 ||minute<=30){
                document.getElementById('item5').innerHTML="Total Money : 1000 រៀល";
            }    
            else if(minute>30){
                document.getElementById('item5').innerHTML="Total Money : 1500 រៀល";
            }        
            document.getElementById('item5').style.textAlign='center';
            document.getElementById('item5').style.fontSize='30px';
            document.getElementById("save").value = "Clear";
        }
        if(value=="Clear"){
            document.getElementById("item2").innerHTML="Start Time 00:00:00";
            document.getElementById("item3").innerHTML="End Time 00:00:00";
            document.getElementById("item4").innerHTML="Total Minute :";
            document.getElementById("item5").innerHTML="Total Money :";
            document.getElementById("save").value = "Start";
        }
    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }