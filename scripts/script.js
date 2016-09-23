$(document).ready(function(){

    $(".noShow").hide();

    $('#goalCheck1').attr('checked', false); 
    $('#goalCheck2').attr('checked', false); 
    $('#goalCheck3').attr('checked', false); 

    $("#goalCheck1").click(function(){
        $(".noGoals").hide();
        $(".goalsSet").show();
        $("#goal1").show();
    });

      $("#goalCheck2").click(function(){
        $(".noGoals").hide();
        $(".goalsSet").show();
        $("#goal2").show();
    });

      $("#goalCheck3").click(function(){
        $(".noGoals").hide();
        $(".goalsSet").show();
        $("#goal3").show();
    });
});