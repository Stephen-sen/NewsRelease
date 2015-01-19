$(function () {
      var $day = $("#day"),
        $month = $("#month"),
        $year = $("#year");



      var dDate = new Date(),
        dCurYear = dDate.getFullYear(),
        str = "";
      for (var i = dCurYear - 100; i < dCurYear + 1; i++) {
        if(i == $("#birthYear").val()){
          str = "<option value=" + $("#birthYear").val() + " selected=true>" + $("#birthYear").val() + "</option>";
        }
        else if (i == dCurYear && $("#birthYear").val() == "") {
              str = "<option value=" + i + " selected=true>" + i + "</option>";
          } else {
              str = "<option value=" + i + ">" + i + "</option>";
          }
          $year.append(str);
      }



      for (var i = 1; i <= 12; i++) {
        if(i == $("#birthMonth").val()){
          str = "<option value=" + $("#birthMonth").val() + " selected=true>" + $("#birthMonth").val() + "</option>";
        }
        else  if (i == (dDate.getMonth() + 1) && $("#birthMonth").val() == "") {
              str = "<option value=" + i + " selected=true>" + i + "</option>";
          } else {
              str = "<option value=" + i + ">" + i + "</option>";
          }
          $month.append(str);
      }
      
      
      TUpdateCal($year.val(), $month.val());
      $("#year,#month").bind("change", function(){
          TUpdateCal($year.val(),$month.val());
      });
  });



  function TGetDaysInMonth(iMonth, iYear) {
      var dPrevDate = new Date(iYear, iMonth, 0);
      return dPrevDate.getDate();
  }

  function TUpdateCal(iYear, iMonth) {
      var dDate = new Date(),
          daysInMonth = TGetDaysInMonth(iMonth, iYear),
          str = "";

      $("#day").empty();

      for (var d = 1; d <= parseInt(daysInMonth); d++) {
        if(d == $("#birthDay").val()){
          str = "<option value=" + $("#birthDay").val() + " selected=true>" + $("#birthDay").val() + "</option>";
        }
        else if (d == dDate.getDate() && $("#birthDay").val() == "") {
              str = "<option value=" + d + " selected=true>" + d + "</option>";
          } else {
              str = "<option value=" + d + ">" + d + "</option>";
          }
          $("#day").append(str);
      }
  }

 
  
  