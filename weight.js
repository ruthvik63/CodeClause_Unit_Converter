
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
        case "Kilogram":
            makethisMillimeter=1;
            break;
        case "Gram":
            makethisMillimeter=0.001;
            break;
        case "Milligram":
            makethisMillimeter=0.000001;
            break;
        case "Metric-Ton":
            makethisMillimeter=1000;
            break;
        case "Long-Ton":
            makethisMillimeter=1016.04608;
            break;
        case "Short-Ton":
            makethisMillimeter=907.184;
            break;
        case "Pound":
            makethisMillimeter=0.453592;
            break;
        case "Ounce":
            makethisMillimeter=0.0283495;
            break;
        case "Carrat":
            makethisMillimeter=0.0002;
            break;
    }
    inMillimeter=fromLength*makethisMillimeter;

    switch(toUnit)
    {
        case "Kilogram":
            result=inMillimeter;
            break;
        case "Gram":
            result=inMillimeter/0.001;
            break;
        case "Milligram":
            result=inMillimeter/0.000001;
            break;
        case "Metric-Ton":
            result=inMillimeter/1000;
            break;
        case "Long-Ton":
            result=inMillimeter/1016.04608;
            break;
        case "Short-Ton":
            result=inMillimeter/907.184;
            break;
        case "Pound":
            result=inMillimeter/0.453592;
            break;
        case "Ounce":
            result=inMillimeter/0.0283495;
            break;
        case "Carrat":
            result=inMillimeter/0.0002;
            break;
    }
    return result;
    
}
