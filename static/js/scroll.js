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
    console.log(active[target](".Slide"));
    if (active[target](".Slide").length && available) {
        // last active
        active
            // reset active class
            .removeClass("active")
            // remove hover active prefix
            .find(".curser_hover_active")
            .removeClass("curser_hover_active")
            .addClass("curser_hover");
        active
            // remove pointer active prefix
            .find(".curser_pointer_active")
            .removeClass("curser_pointer_active")
            .addClass("curser_pointer");
        // target active
        active[target](".Slide")
            // reset active class
            .addClass("active")
            // add hover active prefix
            .find(".curser_hover")
            .removeClass("curser_hover")
            .addClass("curser_hover_active");
        active[target](".Slide")
            // add pointer active prefix
            .find(".curser_pointer")
            .removeClass("curser_pointer")
            .addClass("curser_pointer_active");
        // sort
        sort();
        // reset available flag
        available = false;
        setTimeout(() => {
            available = true;
            // set dimensions
            $(window).trigger("resize");
        }, parseFloat(slides.css("transition-duration")) * 1000);
    }
});
