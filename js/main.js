const puzzle = () => {
    let x = document.getElementById("valueX").value;
    let y = document.getElementById("valueY").value;
    let z = document.getElementById("valueZ").value;

    let vX = parseFloat(x);
    let vY = parseFloat(y);
    let vZ = parseFloat(z);

    let sum = vX + vY;

    typ = typeof vX;

    if (isNaN(vX) || isNaN(vY) || isNaN(vZ)) {
        document.querySelector(".message").innerHTML = `No field should be empty`;
        document.querySelector(".textResult").innerHTML = " ";
    } else {
        document.querySelector(".message").innerHTML = " ";
        if (vZ > sum) {
            document.querySelector(".textResult").innerHTML = `NO Solution`;
        } else {
            document.querySelector(".textResult").innerHTML = `The riddle does have a solution`;
        }
        if (vX === 0) {
            if (vY > vZ) {
                document.querySelector(".textResult").innerHTML = `The riddle does have a solution`;
            } else {
                document.querySelector(".textResult").innerHTML = `NO Solution`;
            }
            if ((vY === 0)) {
                if (vX > vZ) {
                    document.querySelector(".textResult").innerHTML = `The riddle does have a solution`;
                } else {
                    document.querySelector(".textResult").innerHTML = `NO Solution`;
                }
            }
        }
    }

}