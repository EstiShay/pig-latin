var translator = function(userInput){
  return userInput;
};





$(function() {
  $("#pig-latin").submit(function(event){
    event.preventDefault();
    var userInput = $("#rawtext").val();
    var result = translator(userInput);
    $("#output").append(result);
  });
});
