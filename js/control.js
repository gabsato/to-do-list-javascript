let count = 0;
let input = document.getElementById('inputTask');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaList');

function addTask() {
    //Grab value from the input
    let valueInput = input.value;

    ++count;

    //If it's not empty, nor null and nor indefined 
    if ((valueInput !== "") && (valueInput !== null) && (valueInput !== undefined)) {
        let newItem = `<div id="${count}" class="item">
        <div onclick="tagTask(${count})" class="item-icon">
            <i id="icon_${count}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="tagTask(${count})" class="item-name">
            ${valueInput}
        </div>
        <div class="item-buttom">
            <button onclick="deleting(${count})" class="delete"><i class="mdi mdi-delete"></i>Delete</button>
        </div>
    </div>`;

        //Add new item in main
        main.innerHTML += newItem;

        //Clear the fields
        input.value = "";
        input.focus();

    }

}

function deleting(id) {
    var task = document.getElementById(id);
    task.remove();
}

function tagTask(id) {
    var item = document.getElementById(id);
    var classType = item.getAttribute('class');
    console.log(classType);

    if (classType == "item") {
        item.classList.add('clicked')

        var icon = document.getElementById('icon_' + id);

        icon.classList.remove('mdi-circle-outline');
        icon.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicked')

        var icon = document.getElementById('icon_' + id);

        icon.classList.remove('mdi-check-circle');
        icon.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})