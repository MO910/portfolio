// toggle the menu
const toggleMenu = () => {
    console.log("toggle");
    $("#noise").toggleClass("menu-active");
    $(".menu").toggleClass("active");
    // toggle pointer active
    $(
        "header .curser_pointer_active, header .curser_pointer, .menu .curser_pointer_active, .menu .curser_pointer"
    ).toggleClass("curser_pointer_active curser_pointer");
    // toggle hover active
    $(
        "header .curser_hover_active, header .curser_hover, .menu .curser_hover_active, .menu .curser_hover"
    ).toggleClass("curser_hover_active curser_hover");
};
//
$(".menu .row").on("click", () => {
    console.log("row clicked");
});
export { toggleMenu };
