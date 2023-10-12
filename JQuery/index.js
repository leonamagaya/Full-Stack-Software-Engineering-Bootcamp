$("h1").addClass("big-title");

$("button").text("press me");

$("a").attr("href", "www.youtube.com");

$("button").click(function() {
  $("h1").css("color", "purple")
})

$("input").keydown(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});