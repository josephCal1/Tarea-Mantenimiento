// HU 2: Como desarrollador, necesito un método para agregar tareas
function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const texto = input.value.trim();

    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const lista = document.getElementById('listaDeTareas');
    const listItem = document.createElement('li');

    // Crea el texto de la tarea
    const taskText = document.createElement('span');
    taskText.textContent = texto;
    listItem.appendChild(taskText);

    // Crea el botón para marcar como completada (simulando una acción)
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.onclick = function() {
        listItem.classList.toggle('completed'); // Agrega clase para tachar
        this.remove(); // Remueve el botón 'Completar' después de usar
    };
    listItem.appendChild(completeButton);

    lista.appendChild(listItem);
    input.value = ''; // Limpia el input

    console.log(`Tarea agregada: ${texto}`);
}