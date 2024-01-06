let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');
let btn = document.querySelector('.add');

inputBx.addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        addItem(inputBx.value);
        inputBx.value = "";
    }
});

btn.addEventListener("click", () => {
    addItem(inputBx.value);
    inputBx.value = "";
});

let addItem = (inputValue) => {
    if (inputValue.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${inputValue}<i> </i>`;

        listItem.addEventListener('click', function () {
            this.classList.toggle('done');
        });

        listItem.querySelector('i').addEventListener('click', function () {
            listItem.remove();
        });

        list.appendChild(listItem);
    }
}