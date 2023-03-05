function SubPlans(){
  

var SubPrice = document.getElementById('SubP').value;
	
alert("The subscription price is " + SubPrice);

var SubLength = document.getElementById('SubL').value;

alert("The desired subscription length is " + SubLength);


var SubPriceCopy = SubPrice

var SubLengthCopy = SubLength

var SubPriceCopy = parseFloat()

var SubLengthCopy = parseFloat()

var OverallP = (SubPrice * SubLength)


var unDef = undefined

if (OverallP < 100){
unDef = "The subscription price is reasonable, possibly consider more months.";
} else if (OverallP > 200){
unDef = "The subscription plan is a bit too high, maybe consider less months.";
} else {
unDef ="This is a great plan for me.";
}

document.getElementById("FinalCost").innerHTML = "The subscription plan is : $" + OverallP + ".  " + unDef; 

}

