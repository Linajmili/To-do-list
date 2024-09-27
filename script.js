
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "delete";
        deleteBtn.classList.add("remove-btn");

     
        deleteBtn.addEventListener("click", function () {
            listContainer.removeChild(li); 
        });

        li.appendChild(deleteBtn); 

        listContainer.appendChild(li); 

        inputBox.value = ''; 
    }
}
