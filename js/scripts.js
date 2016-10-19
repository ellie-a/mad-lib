$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var verbInput= $("input#verb").val();
    var timeInput = $("input#time").val();
    var verb2Input = $("input#verb2").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".verb").text(verbInput);
    $(".time").text(timeInput);
    $(".verb2").text(verb2Input);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
