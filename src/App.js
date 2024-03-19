import React, { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import "./styles/index.scss";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import ReactGA from "react-ga";

import { auth } from "./config/config-dev";
// import { auth } from "./config/config-prod";
import { useAuthStatus } from "./hooks/hooks";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import KnowMorePage from "./pages/KnowMore";

const TRACKING_ID = "G-TBB5CS1QL7";
ReactGA.initialize(TRACKING_ID);

function App() {
  const { checkingStatus, authUser, updateAuthUserAttr } = useAuthStatus();
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const location = useLocation();

  const handleLogout = (alertMsg, alertType) => {
    auth.signOut()
      .then(() => {
        if (alertMsg) {
          setAlertMsg(alertMsg, alertType);
        } else {
          setAlertMsg("Signed out!");
        }
      })
      .catch((err) => {
        setAlertMsg(err.message);
        setAlertSeverity("error");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setAlertMsg("");
      setAlertSeverity("info");
    }, 5000);
  }, [alertMsg]);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Layout user={authUser}>
        <Alert message={alertMsg} severity={alertSeverity} />
        <AnimatedRoutes
          authUser={authUser}
          handleLogout={handleLogout}
          updateAuthUserAttr={updateAuthUserAttr}
          checkingStatus={checkingStatus}
        />
      </Layout>
    </>
  );
}

export default App;
