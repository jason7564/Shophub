$(document).on("mobileinit", function() {});

$(document).ready(function(ev) {

  checkCheck = JSON.parse(localStorage.getItem("check-box"));
  if (checkCheck === null) {
    console.log("Nothing is picked up!");
    checkCheck = [];
    vd = [];
  } else {
    vd = [];
    console.log("I know what you did");
  };

  userCheck = JSON.parse(localStorage.getItem("grocery-prez0005"));
  if (userCheck === null) {
    console.log("There is nothing in your list.");

    counter = 0;
    $("#addBtn").on("click", function(ev) {

      if ($("#inputId").val() === "") {
        return false;
      } else {

        $("<li>").attr("id", "row" + counter).addClass("ui-li-has-alt ui-first-child ui-last-child").appendTo(".shopCart");
        $("<a>").addClass("halp ui-btn ui-btn-b").attr("id", "line" + counter).attr("name", counter).appendTo("#row" + counter);
        $("<p>").text($("#inputId").val()).attr("id", "listTxt").appendTo("#line" + counter);
        $("<input>").attr("type", "checkbox").attr("id", "checkBox").appendTo("#line" + counter);
        $("<a>").addClass("ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-b").attr("id", "closeBtn" + counter).attr("name", counter).appendTo("#row" + counter);

        $("#closeBtn" + counter).on("click", function() {
          var counterNum = $(this).attr("name");
          var index = userCheck.indexOf(userCheck[counterNum]);
          userCheck.splice(index, 1);
          localStorage["grocery-prez0005"] = JSON.stringify(userCheck);
          $(this).parent().remove();
          location.reload(true)
        });

        $("#line" + counter).on("click", function() {
          var checkedBox = $(this).find(':checkbox');
          checkedBox.attr('checked', 'checked');
          numCount = $(this).attr("name");
          var xedni = (userCheck[numCount]);
          (checkCheck).push(xedni);
          (localStorage["check-box"]) = JSON.stringify(checkCheck);
        });
        counter++;
      }
    });

  } else {

    console.log("Loading Data... Please Wait...");

    for (i = 0; i < userCheck.length; i++) {

      $("<li>").attr("id", "row" + i).addClass("ui-li-has-alt ui-first-child ui-last-child").appendTo(".shopCart");
      $("<a>").addClass("halp ui-btn ui-btn-b").attr("id", "line" + i).attr("name", i).appendTo("#row" + i);
      $("<p>").text(userCheck[i]).attr("id", "listTxt").appendTo("#line" + i);
      $("<input>").attr("type", "checkbox").attr("id", "checkBox").appendTo("#line" + i);
      $("<a>").addClass("ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-b").attr("id", "closeBtn" + i).attr("name", i).appendTo("#row" + i);

      $("#closeBtn" + i).on("click", function() {
        var counterNum = $(this).attr("name");
        var index = userCheck.indexOf(userCheck[counterNum]);
        userCheck.splice(index, 1);
        localStorage["grocery-prez0005"] = JSON.stringify(userCheck);
        $(this).parent().remove();
        location.reload(true)
      });

      $("#line" + i).on("click", function() {
        var checkedBox = $(this).find(':checkbox');
        checkedBox.attr('checked', 'checked');
        numCount = $(this).attr("name");
        var xedni = (userCheck[numCount]);
        (checkCheck).push(xedni);
        (localStorage["check-box"]) = JSON.stringify(checkCheck);

      });
    };

    for (d = 0; d < checkCheck.length; d++) {
      vd.push(userCheck.indexOf(checkCheck[d], 0));
    };

    for (q = 0; q < vd.length; q++) {
      var checkCa = $("#line" + vd[q]).find(":checkbox");
      checkCa.attr("checked", "checked");
    };

    i = userCheck.length;
    counter2 = i;

    $("#addBtn").on("click", function(ev) {

      if ($("#inputId").val() === "") {
        return false;
      } else {

        $("<li>").attr("id", "row" + counter2).addClass("ui-li-has-alt ui-first-child ui-last-child").appendTo(".shopCart");
        $("<a>").addClass("halp ui-btn ui-btn-b").attr("id", "line" + counter2).attr("name", counter2).appendTo("#row" + counter2);
        $("<p>").text($("#inputId").val()).attr("id", "listTxt").appendTo("#line" + counter2);
        $("<input>").attr("type", "checkbox").attr("id", "checkBox").appendTo("#line" + counter2);
        $("<a>").addClass("ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-b").attr("id", "closeBtn" + counter2).attr("name", counter2).appendTo("#row" + counter2);

        $("#closeBtn" + counter2).on("click", function() {
          var counterNum = $(this).attr("name");
          var index = userCheck.indexOf(userCheck[counterNum]);
          userCheck.splice(index, 1);
          localStorage["grocery-prez0005"] = JSON.stringify(userCheck);
          $(this).parent().remove();
          location.reload(true)
        });

        $("#line" + counter2).on("click", function() {
          var checkedBox = $(this).find(':checkbox');
          checkedBox.attr('checked', 'checked');
          numCount = $(this).attr("name");
          var xedni = (userCheck[numCount]);
          (checkCheck).push(xedni);
          (localStorage["check-box"]) = JSON.stringify(checkCheck);

        });
        counter2++;
      }
    });

  }

  if (userCheck === null) {
    sList = [];
  } else {
    sList = userCheck;
  };

  $("#addBtn").on("click", function(ev) {

    if ($("#inputId").val() === "") {
      return false;
    } else {

      (sList).push($("#inputId").val());
      localStorage["grocery-prez0005"] = JSON.stringify(sList);
      userCheck = JSON.parse(localStorage.getItem("grocery-prez0005"));
      $("#inputId").val("");

    }

  });

});