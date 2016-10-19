$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var questionInput = $("input#question").val();

    questionInput = questionInput.toUpperCase();

    $(".question").text(questionInput);

    $("#answer").show();

    event.preventDefault();
  });
});
