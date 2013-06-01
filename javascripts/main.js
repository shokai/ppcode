var eid = null;
var prettify = function(){
  if(eid) clearTimeout(eid);
  eid = setTimeout(function(){
    eid = null;
    var code = $("#code").val();
    var pre = $("<pre>").text(code).addClass("prettyprint");
    $("#prettyprint").html(pre);
    $("#script").html( $("<script>").attr("src", "./javascripts/run_prettify.js") );
  }, 400);
};

$(function(){
  prettify();
  $("#code").keyup(prettify);
});
