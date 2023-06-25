
function calculateLength(){
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
    document.getElementById("fromUnit").value="Millimeter";
    document.getElementById("toUnit").value="Millimeter";
    document.getElementById("result-id").style.visibility="hidden";
}
function convertLength(fromLength,fromUnit,toUnit){
    
    fromLength=Number(fromLength);
    var inMillimeter=0;
    var makethisMillimeter=0;
    var result;

    switch(fromUnit)
    {
        case "Millimeter":
            makethisMillimeter=1;
            break;
        case "Centimeter":
            makethisMillimeter=10;
            break;
        case "Decimeter":
            makethisMillimeter=100;
            break;
        case "Meter":
            makethisMillimeter=1000;
            break;
        case "Kilometer":
            makethisMillimeter=1000000;
            break;
        case "Foot":
            makethisMillimeter=304.8;
            break;
        case "Inch":
            makethisMillimeter=25.4;
            break;
        case "Mile":
            makethisMillimeter=1609344;
            break;
        case "Yard":
            makethisMillimeter=914.4;
            break;
    }
    inMillimeter=fromLength*makethisMillimeter;

    switch(toUnit)
    {
        case "Millimeter":
            result=inMillimeter;
            break;
        case "Centimeter":
            result=inMillimeter/10;
            break;
        case "Decimeter":
            result=inMillimeter/100;
            break;
        case "Meter":
            result=inMillimeter/1000;
            break;
        case "Kilometer":
            result=inMillimeter/1000000;
            break;
        case "Foot":
            result=inMillimeter/304.8
            break;
        case "Inch":
            result=inMillimeter/25.4
            break;
        case "Mile":
            result=inMillimeter/1609344;
            break;
        case "Yard":
            result=inMillimeter/914.4;
            break;
    }
    return result;
    
}
