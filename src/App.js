import * as React from "react";
import {Outlet, useLocation} from "react-router-dom";
import RootSidebar from "./components/RootSidebar";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import {AuthLayout} from "./components/utils/AuthLayout";


function App() {
    // Get the current router object
    const currentLocation = useLocation();

    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState('');

    // get the current page url
    useEffect(() => {
        setCurrentUrl(window.location.href.replace('/student-performance', ''));
        if (currentUrl.startsWith('/student') || currentUrl.startsWith('/quality-assurance')
            || currentUrl.startsWith('/instructor') || currentUrl.startsWith('/coordinator')
            || currentUrl.startsWith('/administrator')) {
            // import('./DashboardApp.css');
        } else {
            // import('./App.css');
        }
    }, [location]);

  return (
    <>
    <div style={{ display: "flex" }}>
        <RootSidebar />
        <div id="details" style={{ flex: 1, padding: "20px" }}>
            <Outlet />
        </div>
    </div>
</>

  );
}

export default App;
