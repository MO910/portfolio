import { toggleMenu } from "./appBar.js";
// variables
const curser = $("#curser"),
    curserCenter = [curser.width() / 2, curser.height() / 2],
    glow = 10;

let hoverP = [];
// hover position
function setDimensions(
    ele = $(".curser_pointer_active, .curser_hover_active")
) {
    hoverP = [];
    $(ele).each(function () {
        hoverP.push({
            ele: $(this),
            top: $(this).offset().top,
            left: $(this).offset().left,
            right: $(this).offset().left + $(this).width(),
            bottom: $(this).offset().top + $(this).height(),
            width: $(this).width(),
            height: $(this).height(),
        });
    });
}
setDimensions();
// set up curser position
gsap.set(curser, {
    x: $(window).width() / 2 + curserCenter[0],
    y: $(window).height() - curserCenter[1],
    scale: 2,
});
// movement  event
$("body").on({
    mousemove(e) {
        // filter the elements
        // console.log(hoverP);
        // console.log(
        //     e.clientY + (curserCenter[1] + glow),
        //     "--------------",
        //     e.clientY - (curserCenter[1] + glow)
        // );
        let hovering = hoverP.filter(
            (ele) =>
                e.clientY + (curserCenter[1] + glow) >= ele.top &&
                e.clientY - (curserCenter[1] + glow) <= ele.bottom &&
                e.clientX + (curserCenter[0] + glow) >= ele.left &&
                e.clientX - (curserCenter[0] + glow) <= ele.right
        )[0];
        // normal movement
        if (!hovering || hovering.ele.hasClass("curser_hover_active")) {
            // hover curser
            gsap.to(curser, {
                x: e.clientX - curserCenter[0],
                y: e.clientY - curserCenter[1],
                duration: 0.4,
                scale: 1,
                ease: Power0,
            });
            $(".curser_hovering").removeClass("curser_hovering");
        }
        // curser pointer
        if (hovering) {
            if (hovering.ele.hasClass("curser_pointer_active")) {
                // pointer curser
                gsap.to(curser, {
                    x: hovering.left + hovering.width / 2 - curserCenter[0],
                    y: hovering.top + hovering.height / 2 - curserCenter[1],
                    duration: 0.6,
                    scale: 1.4,
                    ease: Power0,
                });
            }
            // add the hover class
            hovering.ele.addClass("curser_hovering");
        }
    },
    mouseleave() {
        // switch to the rest mode
        gsap.to(curser, {
            opacity: 0.3,
            x: $(window).width() / 2 + curserCenter[0],
            y: $(window).height() - curserCenter[1],
            scale: 2,
        });
        $(".curser_hovering").removeClass("curser_hovering");
    },
    mouseenter() {
        // switch to the movement mode
        gsap.to(curser, {
            duration: 0.4,
            opacity: 1,
            scale: 1,
        });
    },
});
// click
$(window).on({
    click() {
        if ($(".curser_hovering").length) {
            console.log("click");
            if (
                $(".menuIcon.curser_hovering, .menu .close.curser_hovering")
                    .length
            ) {
                toggleMenu();
                setDimensions();
            } else if ($(".v-input.curser_hover_active").length) {
                console.log("focus");
                $(".curser_hovering input, .curser_hovering textarea").trigger(
                    "focus"
                );
            }
        }
    },
    resize() {
        setDimensions($(".curser_pointer_active, .curser_hover_active"));
    },
});
/*
curser_pointer
curser_pointer_active
curser_hover
curser_hover_active

curser_hovering
*/
