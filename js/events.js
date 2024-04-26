
const ChangeEvent = new Event("ChangeEvent");
const NavigateEvent = new Event("NavigateEvent");

document.body.addEventListener("NavigateEvent", ()=>{
    console.log("NavigateEvent")

    navigationContent.update()
    navigationContent.render()

    mainContent.update()
    mainContent.render()

})


window.addEventListener('resize', function(event) {
    if (window.screen.width < 576) {
        console.log("x-sm")
    }
    else if (window.screen.width >= 576 && window.screen.width < 768) {
        console.log("sm")
    }
    else if (window.screen.width >= 768 && window.screen.width < 992) {
        console.log("md")
    }
    else if (window.screen.width >= 992 && window.screen.width < 1200) {
        console.log("lg")
    }
    else if (window.screen.width >= 1200 && window.screen.width < 1400) {
        console.log("xl")
    }
    else if (window.screen.width >= 1400) {
        console.log("xxl")
    }

}, true);


