$(document).ready(function(){
  var diet = prompt("Tell me, are you an Omnivore, Vegetarian, or Carnivore?");
  var diet = diet.toLowerCase();

  if (diet === "omnivore") {
    //  if true do this
      // $("div").show(".omnivore");
      $("body").css("background-color", "#685ACC");
      $("#packageName").text("Omnivore Tour");
      $("#panelheading").text("Opertunivores");
      $("div.ul1").show("ul");


  } else if (diet === "vegetarian"){
      $("body").css("background-color", "#92FF8A");
      $("#packageName").text("Vegetarian Tour");
      $("#panelheading").text("Plant Eating Animals");
      $("div.ul2").show("ul");

  } else if (diet === "carnivore") {
    // do this if prior two are not true
      $("body").css("background-color", "#B25945");
      $("#packageName").text("Carnivore Tour");
      $("#panelheading").text("Meat Eating Animals");
      $("div.ul3").show("ul");
}


    $("li").click(function() {

    });
console.log(diet);






});
