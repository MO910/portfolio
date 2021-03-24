// Split Text
class textSpliter {
    constructor(argu = {}) {
        // arguments
        let arguObj = (p, value) => (argu[p] = argu[p] != undefined ? (typeof argu[p] == "string" ? argu[p].trim() : argu[p]) : value);
        arguObj("target", $(".split"));
        arguObj("duration", 2);
        arguObj("type", "word"); // char, word, line
        arguObj("shuffle", true); // true or false
        // splitting
        let wordsBreaker = [];
        argu.target
            .text()
            .split(" ")
            .forEach((char) => {
                wordsBreaker.push("<span class='char'>" + char.split("").join("</span><span class='char'>") + "</span>");
            });
        let html = `<span class='word'>${wordsBreaker.join(`</span><span class='word'>`)}</span>`,
            spaceWidth = `${parseInt(argu.target.css("font-size")) / 4}px`;
        // enject the pieces
        argu.target.html(html);
        // collect the lines
        let words = argu.target.find(`.word`);
        let collect = [],
            offset,
            linesCounter = -1;
        words.each(function () {
            if (offset != $(this).offset().top) {
                console.log(offset, $(this), $(this).offset().top);
                offset = $(this).offset().top;
                linesCounter++;
                $(collect[linesCounter]).wrapAll("<span class='line'></span>");
                collect[linesCounter] = collect[linesCounter] || [];
            } else {
                // fix spaces
                $(this).css("margin-left", spaceWidth);
            }
            collect[linesCounter].push(this);
        });
        collect.forEach(function (c) {
            $(c).wrapAll("<span class='line'></span>");
        });
        // calculate the duration
        let effectable = argu.target.find(`.${argu.type}`);
        argu.duration /= effectable.length;
        // animate
        gsap.from(argu.shuffle ? gsap.utils.shuffle(effectable) : effectable, {
            opacity: 0,
            y: -5,
            x: 20,
            rotateX: 45,
            // transformOrigin: "0% 50% -50",
            duration: argu.duration,
            stagger: (argu.duration / effectable.length) * 10,
        });
    }
}
let test = new textSpliter({ type: "line", shuffle: true });
/*
 * change single prop in transform css (uno)
 * https://codepen.io/shshaw/pen/WNrXGRm
 */
/* <h1 aria-label="Oh hello there">
	<span aria-hidden="true">O</span>
	<span aria-hidden="true">h</span>
	<span aria-hidden="true"> </span>
	<span aria-hidden="true">H</span>
	<span aria-hidden="true">e</span>
	<span aria-hidden="true">l</span>
	...
</h1> */
