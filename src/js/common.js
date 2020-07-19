import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../sass/common.sass'

function alignmentSideCubeZ() {
    var sideCube = document.querySelectorAll(".cube .side-front"),
        widthCube = sideCube[0].offsetWidth;

    for (let i = 0; i < sideCube.length; i++) {
        sideCube[i].style.transform = "translateZ(" + widthCube + "px)";
        sideCube[i].parentNode.style.transformOrigin = "50% 50% " + widthCube / 2 + "px";
    }
}

window.addEventListener("load", function () {
    alignmentSideCubeZ();
    document.querySelector(".breakBg .stage").style.opacity=1;
    document.querySelector(".s-header .socials").style.opacity=1;
})
window.addEventListener("resize", function () {
    alignmentSideCubeZ();
})