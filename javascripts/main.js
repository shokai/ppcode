var prettify = function(){
    var code = $("#code").val();
    var pre = $("<pre>").text(code).addClass("prettyprint");
    $("#prettyprint").html(pre);
    $("#script").html( $("<script>").attr("src", "./javascripts/run_prettify.js") );
};

$(function(){
  prettify();
  $("#code").keyup(prettify);
});

