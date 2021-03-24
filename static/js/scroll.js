const container = $(".SlidesContainer"),
    slides = $(".SlidesContainer .Slide");
// sort
function sort() {
    let i = -1;
    slides.each(function () {
        active = $(this).hasClass("active");
        i = active ? 0 : i;
        gsap.set(this, {
            top: `${i * $(this).innerHeight()}px`,
            duration: 3,
        });
        i = active ? 1 : i;
    });
}
sort();
// mouse wheel event
let available = true;
$(window).on("mousewheel", function (e) {
    const active = slides.filter(".active"),
        target = e.originalEvent.wheelDelta < 0 ? "next" : "prev";
    if (active[target](".Slide").length && available) {
        // reset active class
        active.addClass("moveOut").removeClass("active");
        active[target]().addClass("moveIn").addClass("active");
        sort();
        // reset available flag
        setTimeout(() => {
            available = true;
            $(".moveOut, .moveIn").removeClass("moveOut moveIn");
        }, parseFloat(slides.css("transition-duration")) * 1000);
        available = false;
    }
});
