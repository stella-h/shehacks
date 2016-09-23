$(document).ready(function(){

    $(".noShow").hide();



/*Dashboard*/
  $("[data-toggle=popover]").popover({
        html : true, 
        content: function() {
          return $("#user-menu").html();
        }
    });

    $('#goalCheck1').attr('checked', false); 
    $('#goalCheck2').attr('checked', false); 
    $('#goalCheck3').attr('checked', false); 

    $("#goalCheck1").click(function(){
        $(".noGoals").hide();
        $(".goalsSet").show();
        $("#goal1").toggle();
    });

      $("#goalCheck2").click(function(){
        $(".noGoals").hide();
        $(".goalsSet").show();
        $("#goal2").toggle();
    });

      $("#goalCheck3").click(function(){
        $(".noGoals").hide();
        $(".goalsSet").show();
        $("#goal3").toggle();
    });
});