var n;
var r;
var qt;
var q;
var kysymys;
var vastaus;

$( document ).ready(function() {
  n = $('#num_rows').val();
  new_question();

  $('#vastaus').keypress(function (e) {
    if (e.which == 13) {
      check_answer();
      return false;
    }
  });
});

function new_question() {
  if (n > 0) {
    r = Math.floor((Math.random()*n));
    qt = $('#q_'+r).val();
    q = qt.split('|');
    if ($('#lang').prop('checked')) {
      kysymys = $.trim(q[0]);
      vastaus = $.trim(q[1]);
    } else {
      kysymys = $.trim(q[1]);
      vastaus = $.trim(q[0]);
    }
    $('#kysymys').text(kysymys);
    $('#vastaus').val('');
  } else {
    $('#kysymys').text('Finished!');
    $('#vastaus').val('');
    $('#palaute').text('');
  }
}

function change_file() {
  window.location = 'index.php?file='+$('#tiedosto').val();
}
/*
function check_enter(e) {
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    // Enter pressed
    check_answer();
  }  
}
*/
function check_answer() {
  var answer = $('#vastaus').val();
  if (answer == vastaus) {
    $('#palaute').text('Correct!');
    $('#palaute').css('color','green');
    next_word(true);
  } else {
    $('#palaute').text('Wrong! Correct answer: '+vastaus);
    $('#palaute').css('color','red');
    next_word(false);
  }
}

function next_word(oikein) {
  if (oikein) {
    for (var i = r; i < (n-1); i++) {
      $('#q_'+i).val($('#q_'+(i+1)).val());
    }
    n--;
    new_question();
  } else {
    new_question();
  }
}

