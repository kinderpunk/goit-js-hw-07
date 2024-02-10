const form = document.querySelector(".login-form");

const alertCheck = (event) => {
    event.preventDefault();

    const formEmail = form.elements.email.value.trim()
    const formPass = form.elements.password.value.trim()

    if (formEmail === "" || formPass === "") {
        alert('All form fields must be filled in')
    } else {
       const values = {
           email: formEmail,
           password: formPass
       }
        form.reset();
        console.log(values)
    }
}


form.addEventListener("submit", alertCheck)
