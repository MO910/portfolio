import { toggleMenu } from "./appBar.js";
import { tl } from "./dark.js";
// variables
const curser = $("#curser"),
    outerCurser = $("#outerCurser"),
    curserCenter = [curser.outerWidth() / 2, curser.outerHeight() / 2],
    outerCurserCenter = [
        outerCurser.outerWidth() / 2,
        outerCurser.outerHeight() / 2,
    ],
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
        let hovering = hoverP.filter(
            (ele) =>
                e.clientY + (curserCenter[1] + glow) >= ele.top &&
                e.clientY - (curserCenter[1] + glow) <= ele.bottom &&
                e.clientX + (curserCenter[0] + glow) >= ele.left &&
                e.clientX - (curserCenter[0] + glow) <= ele.right
        )[0];
        // normal movement
        if (!hovering || hovering.ele.hasClass("curser_hover_active")) {
            console.log("normal");
            // hover curser
            gsap.set(curser, {
                x: e.clientX - curserCenter[0],
                y: e.clientY - curserCenter[1],
                scale: 1,
                ease: Power0,
            });
            gsap.to(outerCurser, {
                x: e.clientX - outerCurserCenter[0],
                y: e.clientY - outerCurserCenter[1],
                duration: 0.8,
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
                    x: e.clientX - curserCenter[0],
                    y: e.clientY - curserCenter[1],
                    scale: 0,
                    duration: 0.6,
                    ease: Power0,
                });
                gsap.to(outerCurser, {
                    x:
                        hovering.left +
                        hovering.width / 2 -
                        outerCurserCenter[0],
                    y:
                        hovering.top +
                        hovering.height / 2 -
                        outerCurserCenter[1],
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
        console.log("leave");
        $(".curser_hovering").removeClass("curser_hovering");
        // switch to the rest mode
        gsap.to(curser, {
            x: $(window).width() / 2 + curserCenter[0],
            y: $(window).height() - curserCenter[1],
            scale: 0,
            duration: 0.6,
            ease: Power0,
        });
        gsap.to(outerCurser, {
            x: $(window).width() / 2 + outerCurserCenter[0],
            y: $(window).height() - outerCurserCenter[1],
            scale: 2,
            background: "white",
            duration: 0.6,
            ease: Power0,
        });
    },
    mouseenter() {
        console.log("in");
        // switch to the movement mode
        gsap.set(curser, {
            x: e.clientX - curserCenter[0],
            y: e.clientY - curserCenter[1],
            scale: 1,
            ease: Power0,
        });
        gsap.to(outerCurser, {
            scale: 1,
            duration: 0.4,
        });
    },
});
// click
$(window).on({
    click(e) {
        if ($(".curser_hovering").length) {
            if (
                $(".menuIcon.curser_hovering, .menu .close.curser_hovering")
                    .length
            ) {
                toggleMenu();
                setDimensions();
            } else if ($(".darkMode.curser_hovering").length) {
                // set position
                gsap.set("svg clipPath#bobble path", {
                    x: e.clientX,
                });
                // timeline
                if (!$(".darkMode").hasClass("active")) {
                    tl.play();
                } else {
                    tl.reverse();
                }
                // manage active class
                $(".darkMode").toggleClass("active");
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
