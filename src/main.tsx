import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "./index.css";
import Spinner from "./share/components/Spinner.tsx";
import { AuthProvider } from "./context/Auth.tsx";
import { NotificationsProvider } from "./context/Notifications.tsx";
import { FcmTokenProvider } from "./context/FcmToken.tsx";
import { OtherNotificationsProvider } from "./context/OtherNotifications.tsx";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

  navigator.serviceWorker.addEventListener("message", (event) => {
    console.log("event",event);
    
    if (event.data && event.data.type === "PLAY_AUDIO") {
      // Play audio when a background message is received
      const audio = new Audio("/audio/audio1.wav");
      audio.play().catch((error) => {
        console.error("Audio play failed: ", error);
      });
    }
  });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Spinner />}>
    <HashRouter>
      <AuthProvider>
        <NotificationsProvider>
          <OtherNotificationsProvider>
            <FcmTokenProvider>
              <App />
            </FcmTokenProvider>
          </OtherNotificationsProvider>
        </NotificationsProvider>
      </AuthProvider>
    </HashRouter>
  </Suspense>
);
