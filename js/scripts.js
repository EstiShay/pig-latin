
var vowels = "aeiouAEIOU";
var userInput = "";

var translator = function(userInput){
  var firstChar = userInput[0];
  if (vowels.search(firstChar)>=0) {
    return userInput + "way";
  };
};






$(function() {
  $("#pig-latin").submit(function(event){
    event.preventDefault();
    userInput = $("#rawtext").val();
    var result = translator(userInput);
    $("#output").append(result);
  });
});
