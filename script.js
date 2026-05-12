function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    // Mark task as completed when clicked
    span.onclick = function () {
        li.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Delete task when clicked
    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    // Clear input field
    taskInput.value = "";
    taskInput.focus();
}

// Add task when Enter key is pressed
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});