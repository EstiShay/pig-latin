var vowels = "aeiouAEIOU";
var userInput = "";

var translator = function(userInput){
  var firstChar = userInput[0];
  if (vowels.search(firstChar)> -1) {
    return userInput + "way";
  } else if (vowels.search(firstChar)=== -1){
    var userArray = Array.from(userInput);
    var vowelPosition = '';
    var vowelFound = false
    for (var index=0; vowelFound != true; index += 1) {
      if (vowels.search(userArray[index]) > -1) {
        vowelPosition = [index];
        vowelFound = true;
        alert(vowelPosition);
      }
    }
  }
};






$(function() {
  $("#pig-latin").submit(function(event){
    event.preventDefault();
    userInput = $("#rawtext").val();
    var result = translator(userInput);
    $("#output").append(result);
  });
});
