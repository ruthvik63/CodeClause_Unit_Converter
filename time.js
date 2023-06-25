function calculateTime(){
    var fromLength=Number(document.getElementById("fromLength").value);
    
    if(valid(fromLength)){

        var fromUnit=(document.getElementById('fromUnit').value);
        var toUnit=(document.getElementById('toUnit').value);
        
        

        var result=convertLength(fromLength,fromUnit,toUnit);
        var roundresult=roundNumber(result,9);
        document.getElementById("toLength").value=roundresult;
        document.getElementById("result-id").style.visibility="visible";
        document.getElementById("output-id").innerHTML=fromLength+" "+fromUnit+" is equal to "+roundresult+" "+toUnit;
    }
}
function roundNumber(num,dec){
    return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
}
function valid(fromLength){
    if(fromLength<=0){
        document.getElementById("result-id").style.visibility="visible";
        document.getElementById("output-id").innerHTML="Please enter valid number!!"
         
        return false;
    }
    return true;
}
function reset(){  
    document.getElementById("fromLength").value=0;
    document.getElementById("toLength").value=0;
    document.getElementById("fromUnit").value="Second";
    document.getElementById("toUnit").value="Second";
    document.getElementById("result-id").style.visibility="hidden";
}
function convertLength(fromLength,fromUnit,toUnit){
    
    fromLength=Number(fromLength);
    var inSecond=0;
    var makethisSecond=0;
    var result;

    switch(fromUnit)
    {
        case "Second":
            makethisSecond=1;
            break;
        case "Millisecond":
            makethisSecond=0.001;
            break;
        case "Microsecond":
            makethisSecond=0.000001;
            break;
        case "Nanosecond":
            makethisSecond=0.000000001;
            break;
        
        case "Minute":
            makethisSecond=60;
            break;
        case "Hour":
            makethisSecond=3600;
            break;
        case "Day":
            makethisSecond=86400;
            break;
        case "Week":
            makethisSecond=604800;
            break;
        case "Month":
            makethisSecond=2628002.88;
            break;
        case "Year":
            makethisSecond=31557600;
            break;
    }
    inSecond=fromLength*makethisSecond;

    switch(toUnit)
    {
        case "Second":
            result=inSecond;
            break;
        case "Millisecond":
            result=inSecond/0.001;
            break;
        case "Microsecond":
            result=inSecond/0.000001;
            break;
        case "Nanoseond":
            result=inSecond/0.000000001;
            break;
        case "Minute":
            result=inSecond/60;
            break;
        case "Hour":
            result=inSecond/3600;
            break;
        case "Day":
            result=inSecond/86400;
            break;
        case "Week":
            result=inSecond/604800;
            break;
        case "Month":
            result=inSecond/2628002.88;
            break;
        case "Year":
            result=inSecond/31557600;
            break;
    }
    return result;
    
}