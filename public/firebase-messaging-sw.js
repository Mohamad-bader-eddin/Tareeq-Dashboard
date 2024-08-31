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
console.log("firebase init");
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const data = payload.data;
  const notificationTitle = data.title;
  var notificationOptions ;
console.log(data);
if (payload.data?.title.includes("New")) {
    console.log("new order");

    var notificationOptions = {
        body: data.body,
        data:{sound: "/public/audio/audio1.wav"}
    };

}
else if(payload.data?.title.includes("scheduled")){

    var notificationOptions = {
        body: data.body,
        data:{sound: "/public/audio/audio2.wav"}
    };

}
self.clients.matchAll({ type: 'window' }).then((clients) => {
  if (clients.length > 0) {
    clients[0].postMessage({
      type: 'PLAY_SOUND',
      sound: "/audio/audio1.wav"
    });
  }
});
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
