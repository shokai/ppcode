$(function(){
  $("#code").keyup(function(e){
    console.log("pretty");
    var code = $("#code").val();
    var pre = $("<pre>").text(code).addClass("prettyprint");
    $("#prettyprint").html(pre);
    $("#script").html( $("<script>").attr("src", "./javascripts/run_prettify.js") );
  });
});

