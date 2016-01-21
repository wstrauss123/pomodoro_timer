$(document).ready(function() {
  var minutes;
  var seconds;
  var totalSeconds = 1500;
  var breakSeconds = 240;

  $("#time").html("25:00");

  function playAlarm() {
    $('#sound')[0].volume = 0.4;
    $('#sound')[0].play();
  }

  function stopAlarm() {
    $('#sound')[0].pause();
    $('#sound')[0].currentTime = 0;
  }

$(".title").click(function(){
    location.reload();
});

  // 25 minute pomodoro timer.
  function myTimer() {
    minutes = parseInt(totalSeconds / 60);
    seconds = parseInt(totalSeconds % 60);
    totalSeconds--;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    $("#time").html(minutes + ":" + seconds);

    // start the 4 minute rest break
    if (totalSeconds < 0) {
      var minutes;
      var seconds;
      breakSeconds = 240;

      $(".color_me").animate({backgroundColor: '#6C0090'},2500);
      playAlarm();
      setTimeout(myAlarm, 5500);
      function myAlarm() {
        stopAlarm();
      }

      var breakHandle = setInterval(breakTimer, 1000);
      function breakTimer() {
        minutes = parseInt(breakSeconds / 60);
        seconds = parseInt(breakSeconds % 60);
        breakSeconds--;

        if (minutes < 10) {
          minutes = "0" + minutes;
        }

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        $("#time").html(minutes + ":" + seconds);

        if (breakSeconds < 0) {
          totalSeconds = 1500;
          clearInterval(breakHandle);
          $(".color_me").animate({backgroundColor: '#007D00'},2500);
          playAlarm();
          setTimeout(myAlarm, 5500);
          function myAlarm() {
            stopAlarm();
          }
        }
      };
    };

    // start the 25 minute timer again
    if (totalSeconds < 0) {
      totalSeconds = 1500;
    }
  };

  $("button").click(function() {
    $(".subphrase").hide();
    $("button").hide();
    $(".color_me").animate({backgroundColor: '#007D00'},2500);
    var handel = setInterval(myTimer, 1000);
    playAlarm();
    setTimeout(myAlarm, 5500);
    function myAlarm() {
      stopAlarm();
    };
  });
});
