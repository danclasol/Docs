const btnPermission = document.getElementById("btn-permission");

// Check if the browser supports notifications
if (!("Notification" in window)) {
  alert("This browser does not  support desktop notifications");
} else {
  console.log("Current permission:", Notification.permission);
}

// Request user's permission to show Notifications
const getPermissions = () => {
  Notification.requestPermission()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// Creates and shows the Notification
const notify = () => {
  const options = {
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "world.png",
    data: "Extra data2",
    tag: "notification demo2",
  };

  const notification = new Notification("Hello World2", options);

  notification.addEventListener("error", () => console.log("ERROR"));
  notification.addEventListener("close", () => console.log("CLOSE"));
  notification.addEventListener("show", () => console.log("SHOW"));
  notification.addEventListener("click", () => console.log("CLICK"));

  console.log(notification);
};

btnPermission.addEventListener("click", () => {
  console.log("click button", Notification.permission);

  if (Notification.permission !== "granted") {
    getPermissions();
  } else {
    notify();
  }
});
