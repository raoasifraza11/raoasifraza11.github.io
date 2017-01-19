function updateActive() {
    $("body").attr("class", "");
    $("body").addClass(document.location.hash.substring(2));
    $("section").removeClass("active");
    $("section#" + document.location.hash.substring(2)).addClass("active");
    $("menu a").removeClass("active");
    var left = $("a[href='#_" + document.location.hash.substring(2) + "']").addClass("active").offset().left;
    $("nav .tracker").css( "left", left );
}
$(document).ready(function() {
    $("menu li").on("mouseover", function(e) {
        document.location = $(e.target).closest("li").children("a").attr('href');
        updateActive();
    });

    window.onhashchange = updateActive;
    if (!document.location.hash.length)
        document.location.hash = $("nav menu a").attr('href');
    updateActive();
});