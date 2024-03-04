import { useEffect, useState } from "react";
import Routes from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { CssBaseline, Stack } from "@mui/material";
import { languages } from "./languages/languages";
import jsCookie from "js-cookie";
import { useTranslation } from "react-i18next";
import {
  Routes as RoutesLogin,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/login/container/Login";
import Unauthorized from "./pages/login/views/unauthorized/Unauthorized";
import { theme } from "./share/utils/theme";
import { DarkModeProvider } from "./context/DarkMode";
import Sidebar from "./share/components/sidebar/Sidebar";
import Navbar from "./share/components/navbar/Navbar";
import MainLayout from "./share/components/mainLayout/MainLayout";
import { useAuth } from "./context/Auth";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/config";
import { useNotifications } from "./context/Notifications";

const queryClient = new QueryClient();

function App() {
  const currentLanguageCode = jsCookie.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const [openSidebar, setOpenSidebar] = useState(true);
  const { t } = useTranslation();
  const location = useLocation();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { setNotification } = useNotifications();

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
    document.title = t("app_title");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage]);
  useEffect(() => {
    const user = jsCookie.get("user");

    if (user) {
      setUser({ ...JSON.parse(user), roles: ["admin"] });
      navigate(location.pathname, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const VITE_APP_VAPID_KEY =
    "BDCJ6vx2pRNdMcf2mhjecpY0stmOluPrfdlUFjCp_Bf3BugM-3fGpxB0d1aIorSKry_OFSs0bsUznEI-tH2Igdc";

  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: VITE_APP_VAPID_KEY,
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  onMessage(messaging, (payload) => {
    if (payload.notification?.title === "scheduled") {
      const sound2 = new Audio("/audio/audio2.wav");
      sound2.play();
    } else {
      const sound1 = new Audio("/audio/audio1.wav");
      sound1.play();
    }
    setNotification((prev) => [
      ...prev,
      {
        body: payload.notification?.body as string,
        title: payload.notification?.title as string,
      },
    ]);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <DarkModeProvider>
          <CssBaseline />
          {location.pathname === "/login" ||
          location.pathname === "/unauthorized" ? (
            <RoutesLogin>
              <Route path="/login" element={<Login />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
            </RoutesLogin>
          ) : (
            <Stack direction={"row"}>
              <Sidebar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
              />
              <MainLayout isOpenSidebar={openSidebar}>
                <Navbar
                  openSidebar={openSidebar}
                  setOpenSidebar={setOpenSidebar}
                />
                <Routes />
              </MainLayout>
            </Stack>
          )}
        </DarkModeProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
