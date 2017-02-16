$(document).ready(function(){
  var diet = prompt("Tell me, are you an Omnivore, Vegetarian, or Carnivore?");
var diet = diet.toLowerCase();

  if (diet === "omnivore") {
    //  if true do this
      // $("div").show(".omnivore");
      $("body").css("background-color", "#685ACC");

  } else if (diet === "vegetarian"){
      $("body").css("background-color", "#92FF8A");
  } else if (diet === "carnivore") {
    // do this if prior two are not true
      $("body").css("background-color", "#B25945");
}

console.log(diet);
});
