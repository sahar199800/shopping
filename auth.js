const inputsBox = document.querySelectorAll('input');
const loginButton = document.querySelector('button');
const submitHandler = (event) => {
    event.preventDefault();
    const username = inputsBox[0].value;
    const password = inputsBox[1].value;
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        }),
        headers:{"Content-Type":"application/json "}
    })
        .then(res => res.json())
        .then(json => console.log(json))
}

loginButton.addEventListener('click', submitHandler)