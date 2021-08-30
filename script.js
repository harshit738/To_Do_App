let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");
let lists = document.querySelectorAll(".task-list li")

function taskDeleter(e){
    e.currentTarget.remove();
}

for(let i = 0 ; i<lists.length ; i++){
    lists[i].addEventListener("dblclick", taskDeleter);
}
input.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        let task = input.value;
        //console.log(task);
        if(task == ""){
            alert("Error : Adding empty task");
            return;
        }
        input.value  = "";

        // let li = document.createElement("li");
        // li.innerText = task;
        // ul.appendChild(li);

        // let li = `<list>${task}</list>`;
        // let mli = ul.innerHTML;
        // let finalHTML = li + mli;
        // ul.innerHTML = finalHTML;

        let li = document.createElement("li");
        li.innerText = task;
        li.classList.add("tasklist-item");        // adding class to a self made list
        li.addEventListener("dblclick", taskDeleter);
        ul.insertBefore(li, ul.firstChild);
;    }
});