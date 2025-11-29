function agregarTarea() {
    const input = document.getElementById("tareaInput");
    const texto = input.value.trim();
    if (texto === "") return alert("Escribe una tarea");

    const lista = document.getElementById("listaTareas");
    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completarTarea(this)">${texto}</span>
        <button onclick="eliminarTarea(this)">Eliminar</button>
    `;

    lista.appendChild(li);
    input.value = "";
}

function completarTarea(elemento) {
    elemento.classList.toggle("completada");
}

function eliminarTarea(boton) {
    boton.parentElement.remove();
}
