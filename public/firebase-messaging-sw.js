// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAmmnKf8lomncj7Sz0sNCDwwQJThA_wZs8",
  authDomain: "tareeq-df80b.firebaseapp.com",
  projectId: "tareeq-df80b",
  storageBucket: "tareeq-df80b.appspot.com",
  messagingSenderId: "609507972793",
  appId: "1:609507972793:web:b771f8e17189b07e9ced68",
  measurementId: "G-79Z9G3J397",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  // messaging.onBackgroundMessage(function () {
  // console.log("Received background message ", payload);
  // const notificationTitle = payload?.notification?.title
  //   ? payload?.notification?.title
  //   : "Tareeq";
  // const notificationOptions = {
  //   body: payload?.notification?.body
  //     ? payload?.notification?.body
  //     : "New Notification",
  //   icon: "./images/icon.png",
  // };  
  // eslint-disable-next-line no-restricted-globals
  // self.registration.showNotification(notificationTitle, notificationOptions);

  // Play audio
  // Post message to clients to play audio
if(payload?.notification?.title.includes("New Order")){
  self.clients.matchAll({ includeUncontrolled: true }).then((clients) => {
    // clients.forEach((client) => {
    //   client.postMessage({
    //     type: "PLAY_AUDIO",
    //   });
    // });
    clients[0].postMessage({
      type: "PLAY_AUDIO",
    })
  });
}
});
