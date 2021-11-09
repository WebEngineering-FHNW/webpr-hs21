
function startTodo() {

}

function addTodo() {
    const container = document.getElementById("todoContainer");
    container.innerHTML = `<tr>
            <td>
                <label for="todo0">First Todo:</label>
                <input type="text" name="todo0" id="todo0" value="my first todo!">
            </td>
        </tr>`

}
