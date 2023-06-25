
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
    document.getElementById("fromUnit").value="Cubic Meter";
    document.getElementById("toUnit").value="Cubic Meter";
    document.getElementById("result-id").style.visibility="hidden";
}
function convertLength(fromLength,fromUnit,toUnit){
    
    fromLength=Number(fromLength);
    var incubicmeter=0;
    var makethiscubicmeter=0;
    var result;

    switch(fromUnit)
    {
        case "Cubic-Meter":
            makethiscubicmeter=1;
            break;
        case "Cubic-Kilometer":
            makethiscubicmeter=1000000000;
            break;
        case "Cubic-Centimetr":
            makethiscubicmeter=0.000001;
            break;
        case "Liter":
            makethiscubicmeter=0.001;
            break;
        case "Milliliter":
            makethiscubicmeter=0.000001;
            break;
        case "US-Gallon":
            makethiscubicmeter=0.00378541;
            break;
        case "US-Quart":
            makethiscubicmeter=0.0009463525;
            break;
        case "US-Pint":
            makethiscubicmeter=0.0004731763;
            break;
        case "Imperial Gallon":
            makethiscubicmeter=0.00454609;
            break;
        case "Imperial Quart":
            makethiscubicmeter=0.0011365225;
            break;
        case "Imperial Pint":
            makethiscubicmeter=0.0005682613;
            break;
        case "Cubic Mile":
            makethiscubicmeter=4168180000;
            break;
        case "Cubic Yard":
            makethiscubicmeter=0.764554858;
             break;
        case "Cubic Foot":
           makethiscubicmeter=0.0283168466;
           break;
        case "Cubic Inch":
            makethiscubicmeter=0.0000163871;
            break;
    }
    incubicmeter=fromLength*makethiscubicmeter;

    switch(toUnit)
    {
        case "Cubic-Meter":
            result=incubicmeter;
            break;
        case "Cubic-Kilometer":
            result=incubicmeter/1000000000;
            break;
        case "Cubic-Centimetr":
            result=incubicmeter/0.000001;
            break;
        case "Liter":
            result=incubicmeter/0.001;
            break;
        case "Milliliter":
            result=incubicmeter/0.000001;
            break;
        case "US-Gallon":
            result=incubicmeter/0.00378541;
            break;
        case "US-Quart":
            result=incubicmeter/0.0009463525;
            break;
        case "US-Pint":
            result=incubicmeter/0.0004731763;
            break;
        case "Imperial-Gallon":
            result=incubicmeter/0.00454609;
            break;
        case "Imperial-Quart":
            result=incubicmeter/0.0011365225;
            break;
        case "Imperial-Pint":
            result=incubicmeter/0.0005682613;
            break;
        case "Cubic-Mile":
            result=incubicmeter/4168180000;
            break;
        case "Cubic-Yard":
            result=incubicmeter/0.764554858;
            break;
        case "Cubic-Foot":
            result=incubicmeter/0.0283168466;
            break;
        case "Cubic-Inch":
            result=incubicmeter/0.0000163871;
            break;
    }
    return result;
    
}
