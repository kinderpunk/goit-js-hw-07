const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

const switchName = () => {
    const newName = nameInput.value.trim();

    if (newName === "") {
        nameOutput.textContent = "Anonymous"
    } else {
        nameOutput.textContent = newName; 
    }
       
};

nameInput.addEventListener("input", switchName)