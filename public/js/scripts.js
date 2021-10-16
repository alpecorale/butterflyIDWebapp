const nameVal = document.getElementById("name");
const famVal = document.getElementById("family");
const colorVal = document.getElementById("color");
const orangeCheck = document.getElementById("colorCheckOrange");
const whiteCheck = document.getElementById("colorCheckWhite");
const brownCheck = document.getElementById("colorCheckBrown");

async function applyFilter() {
    const colorArray = ''
    if(orangeCheck.checked){colorArray.push(orangeCheck.value)}
    if(whiteCheck.checked){colorArray.push(whiteCheck.value)}
    if(brownCheck.checked){colorArray.push(brownCheck.value)}

    const json = {desiredColor: colorArray};
    const body = JSON.stringify(json);

    await fetch('/filter', {
        method: 'POST',
        body,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(json => {
            //window.location.reload();
        })
    //window.location.reload();
}



async function submitHandler() {
    const json = {name: nameVal.value,
            family: famVal.value,
            color: colorVal.value},
        body = JSON.stringify(json);

        // submit new value
        await fetch('/postButt', {
            method: 'POST',
            body,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                window.location.reload();
            })
    window.location.reload();
}
