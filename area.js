
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
    document.getElementById("fromUnit").value="Square Meter";
    document.getElementById("toUnit").value="Square Meter";
    document.getElementById("result-id").style.visibility="hidden";
}
function convertLength(fromLength,fromUnit,toUnit){
    
    fromLength=Number(fromLength);
    var inSquaremeter=0;
    var makethisSquaremeter=0;
    var result;

    switch(fromUnit)
    {
        case "Square-meter":
            makethisSquaremeter=1;
            break;
        case "Square-kilometer":
            makethisSquaremeter=1000000;
            break;
        case "Square-centimeter":
            makethisSquaremeter=0.0001;
            break;
        case "Hectare":
            makethisSquaremeter=10000;
            break;
        case "Square-mile":
            makethisSquaremeter=2589990;
            break;
        case "Square-yard":
            makethisSquaremeter=0.83612736;
            break;
        case "Square-foot":
            makethisSquaremeter=0.09290304;
            break;
        case "Square-inch":
            makethisSquaremeter=0.00064516;
            break;
        case "Acre":
            makethisSquaremeter=4046.8564224;
            break;
    }
    inSquaremeter=fromLength*makethisSquaremeter;

    switch(toUnit)
    {
        case "Square-meter":
            result=inSquaremeter;
            break;
        case "Square-kilometer":
            result=inSquaremeter/1000000;
            break;
        case "Square-centimeter":
            result=inSquaremeter/0.0001;
            break;
        case "Hectare":
            result=inSquaremeter/10000;
            break;
        case "Square-mile":
            result=inSquaremeter/2589990;
            break;
        case "Square-yard":
            result=inSquaremeter/0.83612736;
            break;
        case "Square-foot":
            result=inSquaremeter/0.09290304;
            break;
        case "Square-inch":
            result=inSquaremeter/0.00064516;
            break;
        case "Acre":
            result=inSquaremeter/4046.8564224;
            break;
    }
    return result;
    
}
