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
      }
    }
    var consonants = userArray.slice(0, vowelPosition);
    var checkingY = consonants.slice(1,consonants.length);
    if (checkingY.includes('y')) {
      alert("found y");
      //When 'y' found, need to change consonants to only be the characters before the 'y', and move the 'y' and everything after it back to the beginning of userArray.
    }

    var consString = consonants.join('')
    userArray.splice(0, consonants.length);
    if ((consString[consString.length - 1] === 'q') && (userArray[0] === 'u')) {
      userArray.shift();
      consString += "u";
    }

    userArray.splice(userArray.length, 0, consString);
    userArray.splice(userArray.length, 0, "ay");
    var consOutput = userArray.join('');
    return consOutput;
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
