const main = document.createElement("main");

main.style.height = "100vh";
main.style.backgroundColor = 'red';
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';

document.body.appendChild(main);

const box = document.createElement('div');
box.style.height = "400px";
box.style.width = "400px";
box.style.background = "white";
box.style.borderRadius = "10px";

main.appendChild(box);

const inputBox = document.createElement('div');
inputBox.style.padding = "20px";

const input = document.createElement('input');
input.placeholder = "Enter Your Task";

const addButton = document.createElement('button');
addButton.textContent = "Add Task";

box.appendChild(inputBox);
inputBox.appendChild(input);
inputBox.appendChild(addButton);

const list = document.createElement('ul');
box.appendChild(list);

const addTask = () => {

    const item = document.createElement('li');
    const span = document.createElement('span');
    const editBtn = document.createElement('button');

    span.textContent = input.value;
    editBtn.textContent = "Edit";

    item.appendChild(span);
    item.appendChild(editBtn);
    list.appendChild(item);

    input.value = "";

    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === "Edit") {
            const editInput = document.createElement('input');
            editInput.value = span.textContent;
            // item.remove(span)
            // item.appendChild(editInput)
            item.insertBefore(editInput, span);
            item.removeChild(span);

            editBtn.textContent = "Save";
        } else {
            const editInput = item.querySelector('input');
            span.textContent = editInput.value;

            item.insertBefore(span, editInput);
            item.removeChild(editInput);

            editBtn.textContent = "Edit";
        }
    });
};

input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") addTask();
});

addButton.addEventListener('click', addTask);

box.addEventListener('mouseover', () => {
    main.style.backgroundColor = "black";
});
box.addEventListener('mouseleave', () => {
    main.style.backgroundColor = "blue";
});
