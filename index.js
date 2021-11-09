function scuberGreetingForFeet(someValue){
if (someValue <= 400)
{return "This one is on me!"}
else if (someValue <= 2499)
{return "I will gladly take your thirty bucks."}
else (someValue >= 2500)
{return "No can do."}
}

function ternaryCheckCity(location){
  // Write your code here!
  return ternaryCheckCity = location === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
  case "generous" :
    return "Thank you so much.";
  case "not as generous" :
    return "Thank you.";
  default: return "Bye.";
} 
}