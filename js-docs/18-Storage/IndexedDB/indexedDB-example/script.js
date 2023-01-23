const indexedDB = window.indexedDB;
const form = document.getElementById("form");
const btnClear = document.getElementById("btn-clear");
const videogames = document.getElementById("videogames");

// Check browser support
if (!indexedDB) {
  alert("This browser doesn't support IndexedDB");
}

// Open a database
let db;
const request = indexedDB.open("videogames-db", 1);

request.onsuccess = () => {
  db = request.result;
  console.log("DATABASE OPENNED", db.name);

  readData();
};

request.onupgradeneeded = (e) => {
  db = e.target.result;
  console.log("DATABASE UPGRADED", db);
  const objectStore = db.createObjectStore("videogames", {
    keyPath: "title",
  });
};

request.onerror = (error) => {
  console.log("Error", error);
};

const addData = (data) => {
  const transaction = db.transaction(["videogames"], "readwrite");
  const objectStore = transaction.objectStore("videogames");
  const request = objectStore.add(data);

  request.onsuccess = (e) => {
    console.log("Added", { data });
  };

  readData();
};

const getData = (key) => {
  const transaction = db.transaction(["videogames"], "readwrite");
  const objectStore = transaction.objectStore("videogames");
  const request = objectStore.get(key);

  request.onsuccess = (e) => {
    form.title.value = request.result.title;
    form.genre.value = request.result.genre;
    form.button.dataset.action = "update";
    form.button.textContent = "Update Videogame";
  };
};

const updateData = (data) => {
  const transaction = db.transaction(["videogames"], "readwrite");
  const objectStore = transaction.objectStore("videogames");
  const request = objectStore.put(data);

  request.onsuccess = () => {
    form.button.dataset.action = "add";
    form.button.textContent = "Add Videogame";
    readData();
  };
};

const deleteData = (key) => {
  const transaction = db.transaction(["videogames"], "readwrite");
  const objectStore = transaction.objectStore("videogames");
  const request = objectStore.delete(key);

  request.onsuccess = () => {
    readData();
  };
};

const readData = () => {
  const transaction = db.transaction(["videogames"], "readonly");
  const objectStore = transaction.objectStore("videogames");
  const request = objectStore.openCursor();
  const fragment = document.createDocumentFragment();

  request.onsuccess = (e) => {
    const cursor = e.target.result;

    if (cursor) {
      const videogameContainer = document.createElement("DIV");
      videogameContainer.setAttribute("class", "videogame");
      const videogameTitle = document.createElement("P");
      videogameTitle.textContent = `${cursor.value.title} (${cursor.value.genre})`;
      videogameContainer.appendChild(videogameTitle);

      const actionsContainer = document.createElement("DIV");
      actionsContainer.setAttribute("class", "actions");

      const videogameUpdate = document.createElement("BUTTON");
      videogameUpdate.setAttribute("class", "button");
      videogameUpdate.dataset.type = "update";
      videogameUpdate.dataset.key = cursor.key;
      videogameUpdate.textContent = "Update";
      actionsContainer.appendChild(videogameUpdate);

      const videogameDelete = document.createElement("BUTTON");
      videogameDelete.setAttribute("class", "button button--ghost");
      videogameDelete.dataset.type = "delete";
      videogameDelete.dataset.key = cursor.key;
      videogameDelete.textContent = "Delete";
      actionsContainer.appendChild(videogameDelete);

      videogameContainer.appendChild(actionsContainer);
      fragment.appendChild(videogameContainer);

      cursor.continue();
    } else {
      videogames.textContent = "";
      videogames.appendChild(fragment);
    }
  };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    title: e.target.title.value,
    genre: e.target.genre.value,
  };

  if (e.target.button.dataset.action == "add") {
    addData(data);
  } else if (e.target.button.dataset.action == "update") {
    updateData(data);
  }

  form.reset();
});

videogames.addEventListener("click", (e) => {
  if (e.target.dataset.type == "update") {
    getData(e.target.dataset.key);
  } else if (e.target.dataset.type == "delete") {
    deleteData(e.target.dataset.key);
  }
});
