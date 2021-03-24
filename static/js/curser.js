const curser = $("#curser"),
    curserD = [curser.width(), curser.height()];
$("body").on({
    mousemove: (e) => {
        gsap.to(curser, {
            x: e.clientX - curserD[0] / 2,
            y: e.clientY - curserD[1] / 2,
            duration: 0.2,
            // delay: 0.05,
            ease: Power0,
        });
    },
    mouseleave: () => {
        // console.log("out");
        gsap.to(curser, {
            opacity: 0.3,
            x: ($(window).width() + curserD[0]) / 2,
            y: $(window).height() - curserD[1] / 2,
        });
    },
    mouseenter: () => {
        gsap.to(curser, {
            opacity: 1,
        });
    },
});
