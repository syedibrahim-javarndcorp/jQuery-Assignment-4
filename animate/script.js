$(".head").on("click", function () {
    $(".box").animate({
        height:  '700px',
        width: "800px"
    }, 1000);
})
$(".btn").on("click", function () {
    $(".box").animate({
        height:  '150px',
        width: "150px"
    }, 1000);
})