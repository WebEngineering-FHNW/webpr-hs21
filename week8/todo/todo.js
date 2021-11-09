
function startTodo() {

}

let currentTodoIndex = 0;
function addTodo() {
    const container = document.getElementById("todoContainer");
    container.innerHTML += `
        <tr>
            <td>
                <label for="todo${currentTodoIndex}">First Todo:</label>
                <input type="text" name="todo${currentTodoIndex}" 
                       id="todo${currentTodoIndex}" value="my first todo!">
            </td>
        </tr>`;
    currentTodoIndex += 1;
}
