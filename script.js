const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("You must write somthing !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // now we create cross element for remove the value which stored on our UI.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // then inputBox value show the empty
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); 
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// display the localStorage data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
