let nameVal = document.getElementById("name");
let famVal = document.getElementById("family");
let colorVal = document.getElementById("color");


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
