 //RED STUFF ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//Variable Initialization
  var money = 10;
  var generatorsRed = 0;
  var generatorRedcost = 10;
  var generatorRedtrueCost = 10;
  var moneypergeneratorRed = 1;
  var moneyshown = 10;
  var generatorRedshown = 0;
  var generatorRedbought = 0;
  var moneyshownREAL = 10;
  var generatorRedcostshown = 10;
//Repeat Money Updating Function COMPLETE
  setInterval(update_money_generated,50);
//Process Buy Request from Button COMPLETE
function GeneratorRedBuyRequest() {
  generatorRedcost = Math.round(generatorRedtrueCost);
  if (money > generatorRedcost - 1) {
//Buying Money and Product change COMPLETE
    money = money - generatorRedtrueCost;
    generatorsRed ++;
    generatorRedbought ++;
    if (Math.round(generatorRedbought / 10) == generatorRedbought / 10) {
      red_multiple();
    }
    generatorRedcost = Math.round(generatorRedtrueCost);
    moneyshown = Math.round(money);
//Update variables NOT COMPLETE
    generatorRedshown = Math.round(generatorsRed)
    <!-- if (setting = "Scientific") { -->
    if (moneyshown.toString().length > 6) {
      moneyshownREAL = moneyshown.toExponential();
    }
    else {
      moneyshownREAL = moneyshown
    }  
    <!-- if (setting = "Scientific") { -->
    if (generatorRedcost.tostring().length > 6) {
      generatorRedcostshown = generatorRedcost.toExponential();
    }
    else {
      generatorRedcostshown = generatorRedcost
    }
    document.getElementById("GeneratorsRed").innerHTML = "You have: " + generatorRedshown + " red color printers (" + generatorRedbought + " bought, giving you a " + moneypergeneratorRed + "x boost).";
    document.getElementById("CostI").innerHTML = "Costs: " + generatorRedcostshown + " color";
    document.getElementById("Money").innerHTML = "You have: " + moneyshownREAL + " color.";
  } 
}
//Update money
function update_money_generated() {
  money = money + (generatorsRed * moneypergeneratorRed / 20);
  moneyshown = Math.round(money);
  <!-- if (setting = "Scientific") { -->
  if (moneyshown.toString().length > 6) {
    moneyshownREAL = moneyshown.toExponential();
  }
  else {
    moneyshownREAL = moneyshown
  } 
  document.getElementById("Money").innerHTML = "You have: " + moneyshownREAL + " color.";
//Cost Scaling
}
function red_multiple() {
  generatorRedtrueCost = generatorRedtrueCost * 1000;
  moneypergeneratorRed = moneypergeneratorRed * 2;
}
//REDORANGESTUFF||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//Initialize variables
  var generatorsRedOrange = 0;
  var generatorRedOrangecost = 100;
  var RedpergeneratorRedOrange = 0.1;
  var generatorRedOrangetrueCost = 100;
  var generatorRedOrangeshown = 0;
  var generatorRedOrangecostshown = 100;
  var generatorRedshownReal
//Repeat function
  setInterval(updateRedOrangeGenerated,50);
//Process Buy Request from Button 
function GeneratorRedOrangeBuyRequest() {
  generatorRedOrangecost = Math.round(generatorRedOrangetrueCost);
  if (money > generatorRedOrangecost - 1) {
//Buying Money and Product change
    money = money - generatorRedOrangecost;
    generatorsRedOrange ++;
    if (Math.round(generatorsRedOrange / 10) == generatorsRedOrange / 10) {
      RedOrange_multiple();
    }
    generatorRedOrangecost = Math.round(generatorRedOrangetrueCost);
    moneyshown = Math.round(money);
    generatorRedOrangeshown = Math.round(generatorsRedOrange);
//Update variables
    <!-- if (setting = "Scientific") { -->
    if (moneyshown.toString().length > 6) {
      moneyshownREAL = moneyshown.toExponential();
    }
    else {
      moneyshownREAL = moneyshown
    } 
    <!-- if (setting = "Scientific") { -->
    if (generatorRedOrangecost.toString().length > 6) {
      generatorRedOrangecostshown = generatorRedOrangecost.toExponential();
    }
    else {
      generatorRedOrangecostshown = generatorRedOrangecost;
    }
    document.getElementById("GeneratorsRedOrange").innerHTML = "You have: " + generatorRedOrangeshown + " Red-Orange color printers.";
    document.getElementById("CostII").innerHTML = "Costs: " + generatorRedOrangecost + " color.";
    document.getElementById("Money").innerHTML = "You have: " + moneyshownREAL + " color.";
  }
}
function RedOrange_multiple() {
  generatorRedOrangetrueCost = generatorRedOrangetrueCost * 10000;
  RedpergeneratorRedOrange = RedpergeneratorRedOrange * 2;
}
function updateRedOrangeGenerated () {
  generatorsRed = generatorsRed + (generatorsRedOrange * RedpergeneratorRedOrange / 20);
  generatorRedshown = Math.round(generatorsRed);
  if (generatorRedshown.toString().length > 6) {
    generatorRedshownReal = generatorRedshown.toExponential();
  }
  else {
    generatorRedshownReal = generatorRedshown;
  }
  document.getElementById("GeneratorsRed").innerHTML = "You have: " + generatorRedshownReal + " red color printers (" + generatorRedbought + " bought, giving you a " + moneypergeneratorRed + "x boost).";
  if (money > 100) {
    document.getElementById("RedOrange").style.display="block";
  }
}
//Tabs - COMPLETE ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function openTab(evt, tabnumber) { 
//Initialize variables
  var i, tabcontent, tablinks;
//Hide all content relating to tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabnumber).style.display = "block";
  evt.currentTarget.className += " active";
}
