var diet = "omnivore";
  // var diet = "vegetarian";
  var name;
  var numberParty;
  var disabled;

$(document).ready(function(){
  // var diet = prompt("Tell me, are you an Omnivore, Vegetarian, or Carnivore?");
  // var diet = diet.toLowerCase();



  if (diet === "omnivore") {
    //  if true do this
      // $("div").show(".omnivore");
      $("body").css("background-color", "white");
      $("#packageName").text("Omnivore Tour");
      $("#panelheading").text("Opertunivores");
      $("div.ul1").show("ul");
      $("div.animalPanel").show("animaPanel");
  } else if (diet === "vegetarian"){
      $("body").css("background-color", "#white");
      $("#packageName").text("Vegetarian Tour");
      $("#panelheading").text("Plant Eating Animals");
      $("div.ul2").show("ul");
  } else if (diet === "carnivore") {
    // do this if prior two are not true
      $("body").css("background-color", "#white");
      $("#packageName").text("Carnivore Tour");
      $("#panelheading").text("Meat Eating Animals");
      $("div.ul3").show("ul");
}  //closes if statement

$("#formOne").submit(function(){

  numberParty = parseInt($("input#numberParty").val());
  var dollarAmount = numberParty * 12;

  function discount(){
    dollarAmount = dollarAmount/1.2;
  }
    console.log();
    name = $("input#name").val();
    disabled = parseInt($("input:radio[name=disabled]:checked").val());

    if (disabled === 1){
      discount();
      // discount();
      }

  $(".confirmName").text(name);
  $(".confirmNumber").text(numberParty);
  $(".dollarAmount").text(dollarAmount);
  $(".confirm").show();
  event.preventDefault();

  });

});
