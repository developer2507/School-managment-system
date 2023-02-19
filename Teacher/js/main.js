
$(document).ready(function(){
  // MESSAGES DISPLAY AND DISABLE
  if ($(window).width() < 768) {

    $(".messages-block").css({"display":"none"});
    $(".users-block").css({"width":"100%"});
    $(".messages-back").css({"display":"inline-block"});

    $(".users-user").click(function(){

      $(".users-block").css({"display":"none"});
      $(".messages-block").css({"width":"100%", "display":"block"});

      $(".messages-back").click(function(){
        $(".messages-block").css({"display":"none"});
        $(".users-block").css({"width":"100%", "display":"block"});
      });

    });

  }
  

  // SELECTING TABS

  $('.academic-tabs div').click(function(){
    $(this).addClass('active-academic').siblings().removeClass('active-academic');
  });

  $("[tab=Attendance]").click(function(){
    $("#attendance").css({'display': 'block'});
    $("#marks").css({'display': 'none'});
    $("#homework").css({'display': 'none'});
  });

  $("[tab=Marks]").click(function(){
    $("#attendance").css({'display': 'none'});
    $("#marks").css({'display': 'block'});
    $("#homework").css({'display': 'none'});
  });

  $("[tab=Homework]").click(function(){
    $("#attendance").css({'display': 'none'});
    $("#marks").css({'display': 'none'});
    $("#homework").css({'display': 'block'});
    $(".academic-marks").css({'border-left': '1px solid #7A66CC'});
  });


  // OPEN SETTINGS PANEL
  $(".user-name").click(function(){
      $(".settings").toggle(100);
      
      // OPEN AND CLOSE ARROW BUTTON
      $(".open-settings").toggle();
      $(".close-settings").toggle();
  });

  // OPEN AND CLOSE NAVBAR
    $(".burger-btn").click(function(){
      $(".menu-nav-list").toggle(250);
      
      $(".open-menu").toggle(100);
      $(".close-menu").toggle(100);
    });

    // MAKE DIRECT USER ACTIVE FOR MESSAGES

    $('.users-user').click(function(){
      $(this).addClass('active-message').siblings().removeClass('active-message');
    });


    // OPEN MODAL WINDOW
   
    $('#addhomeworkbtn').click(function(){
      $("#addModal").modal("show");      
    });

    $('.editIcon').click(function(){
      $("#editModal").modal("show");      
    });

    $('.deleteIcon').click(function(){
      $("#deleteModal").modal("show");      
    });

    $('#addAttendance').click(function(){
      $("#addAttendanceModal").modal("show");      
    });

    $('.direct-mark').click(function(){
      $("#addMarkModal").modal("show");      
    });

    // DRAG SCROLLING

  // const ele = document.querySelector('.academic-tabs-scroll');

  // let pos = { top: 0, left: 0, x: 0, y: 0 };

  // const mouseDownHandler = function (e) {
  //     ele.style.userSelect = 'none';

  //     pos = {
  //         left: ele.scrollLeft,
  //         top: ele.scrollTop,
  //         // Get the current mouse position
  //         x: e.clientX,
  //         y: e.clientY,
  //     };

  //     document.addEventListener('mousemove', mouseMoveHandler);
  //     document.addEventListener('mouseup', mouseUpHandler);
  // };
  

  // const mouseMoveHandler = function (e) {
  //     // How far the mouse has been moved
  //     const dx = e.clientX - pos.x;
  //     const dy = e.clientY - pos.y;

  //     // Scroll the element
  //     ele.scrollTop = pos.top - dy;
  //     ele.scrollLeft = pos.left - dx;
  // };

  // const mouseUpHandler = function () {
  //     ele.style.removeProperty('user-select');

  //     document.removeEventListener('mousemove', mouseMoveHandler);
  //     document.removeEventListener('mouseup', mouseUpHandler);
  // };

  // // Attach the handler
  // ele.addEventListener('mousedown', mouseDownHandler);

  
});

// SCROLL DOWN THE MESSAGE

  const messages = document.getElementById('messages');

  if (messages) {
    messages.scrollTop = messages.scrollHeight;
  }