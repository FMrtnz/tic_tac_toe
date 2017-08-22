var player1 = true;
var winner = null;
var over = false;
var block1 = undefined;
var block2 = undefined;
var block3 = undefined;
var block4 = undefined;
var block5 = undefined;
var block6 = undefined;
var block7 = undefined;
var block8 = undefined;
var block9 = undefined;

$(document).ready(function(){
  $("#restart").hide();
  game();
});

function game() {
  $("td").click(function(){
    VanischIntro();
    changePlayer(this);
    progress();
    winAlert();
  });
  $("#restart").click(function(){
    location.reload();
  });

};

function changePlayer(x) {
  var caseState = $(x).attr("class");
  if (player1 == true && caseState == undefined) {
      $(x).addClass("cross");
    player1 = false;
    player2 = true;
    whoPlay();
    iconPlayerUpdate();
  } else if (player1 == false && caseState == undefined) {
    $(x).addClass("circle");
    player1 = true;
    player2 = false;
    whoPlay();
    iconPlayerUpdate();
  };
};

function whoPlay() {
  if (player1 == true && over == false) {
    $("#turn").text("Please let play Player 1.");
  } else if (player2 == true && over == false) {
    $("#turn").text("Please let play Player 2.");
  };
};

function iconPlayerUpdate() {
  if (player1 == true && over == false) {
    $("#iconPlayer").removeClass("circle").addClass("cross");
  } else if (player2 == true && over == false) {
    $("#iconPlayer").removeClass("cross").addClass("circle");
  };
};

function blocksState() {
  block1 = $("#block1").attr("class");
  block2 = $("#block2").attr("class");
  block3 = $("#block3").attr("class");
  block4 = $("#block4").attr("class");
  block5 = $("#block5").attr("class");
  block6 = $("#block6").attr("class");
  block7 = $("#block7").attr("class");
  block8 = $("#block8").attr("class");
  block9 = $("#block9").attr("class");
};

function overState() {
  if (block1 !== undefined && block2 !== undefined && block3 !== undefined && block4 !== undefined && block5 !== undefined && block6 !== undefined && block7 !== undefined && block8 !== undefined) {
    over = true;
  }
};

function conditionPlayer1() {
  var case1 = block1 == "cross" && block2 == "cross" && block3 == "cross";
  var case2 = block4 == "cross" && block5 == "cross" && block6 == "cross";
  var case3 = block7 == "cross" && block8 == "cross" && block9 == "cross";
  var case4 = block7 == "cross" && block5 == "cross" && block3 == "cross";
  var case5 = block9 == "cross" && block5 == "cross" && block1 == "cross";
  var case6 = block7 == "cross" && block4 == "cross" && block1 == "cross";
  var case7 = block8 == "cross" && block5 == "cross" && block2 == "cross";
  var case8 = block9 == "cross" && block6 == "cross" && block3 == "cross";
  if (case1 == true || case2 == true || case3 == true || case4 == true || case5 == true || case6 == true || case7 == true || case8 == true) {
    winner = 1;
  }
};

function conditionPlayer2() {
  var case1 = block1 == "circle" && block2 == "circle" && block3 == "circle";
  var case2 = block4 == "circle" && block5 == "circle" && block6 == "circle";
  var case3 = block7 == "circle" && block8 == "circle" && block9 == "circle";
  var case4 = block7 == "circle" && block5 == "circle" && block3 == "circle";
  var case5 = block9 == "circle" && block5 == "circle" && block1 == "circle";
  var case6 = block7 == "circle" && block4 == "circle" && block1 == "circle";
  var case7 = block8 == "circle" && block5 == "circle" && block2 == "circle";
  var case8 = block9 == "circle" && block6 == "circle" && block3 == "circle";
  if (case1 == true || case2 == true || case3 == true || case4 == true || case5 == true || case6 == true || case7 == true || case8 == true) {
    winner = 2;
  }
};

function winPlayer1() {
  alert("Player 1 win !!!!");
  location.reload();
};

function winPlayer2() {
  alert("Player 2 win !!!!");
  location.reload();
};

function eguality() {
  alert("Sorry, there is no winner ...");
  location.reload();
};

function winAlert() {
  if (winner == 1) {
    winPlayer1();
  } else if (winner == 2) {
    winPlayer2();
  } else if (over == true) {
    eguality();
  };
};

function progress() {
  blocksState();
  conditionPlayer1();
  conditionPlayer2();
  overState();
};

function VanischIntro() {
  $("#intro").hide("fast");
  $("#restart").show("fast");
}
