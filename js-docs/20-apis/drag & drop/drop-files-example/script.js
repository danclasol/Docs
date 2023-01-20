const dropZone = document.getElementById("drop-zone");
const listFiles = document.getElementById("files");

dropZone.addEventListener("drop", (ev) => {
  // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
    for (let i = 0; i < ev.dataTransfer.items.length; i++) {
      // Si los elementos arrastrados no son ficheros, rechazarlos
      if (ev.dataTransfer.items[i].kind === "file") {
        const file = ev.dataTransfer.items[i].getAsFile();
        const li = document.createElement("li");

        li.appendChild(document.createTextNode(file.name));
        listFiles.appendChild(li);
      }
    }
  } else {
    // Usar la interfaz DataTransfer para acceder a el/los archivos
    for (let i = 0; i < ev.dataTransfer.files.length; i++) {
      const file = ev.dataTransfer.files[i];
      const li = document.createElement("li");

      li.appendChild(document.createTextNode(file.name));
      listFiles.appendChild(li);
    }
  }
});

dropZone.addEventListener("dragover", (ev) => {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
});
