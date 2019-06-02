window.onload = init;

function init() {
    /*Onload----*/
    alignmentSideCubeZ();
    /*------ */
    
    window.onresize = alignmentSideCubeZ;

    // Динамическое изменение значение по оси Z - стороны куба
    function alignmentSideCubeZ() {
        var sideCube = document.querySelectorAll(".cube .side-front"),
            widthCube = sideCube[0].offsetWidth;

        for(let i=0;i<sideCube.length;i++){
            sideCube[i].style.transform ="translateZ("+widthCube+"px)";
            sideCube[i].parentNode.style.transformOrigin="50% 50% "+widthCube/2+"px";
        }
    }
}