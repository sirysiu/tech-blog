const submitButton = document.querySelector("#submit");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const submitted = async (event) => {
    console.log(email.value, password.value);
    event.preventDefault();

    let bodyData = {
        "name": username.value,
        "email": email.value,
        "password": password.value,
    };

    fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
};

// submitButton.addEventListener("click", submitted); 
document
.addEventListener('submit', submitted);