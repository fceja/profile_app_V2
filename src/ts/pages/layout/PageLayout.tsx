import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "@scss/pages/layout/PageLayout.scss"
interface LayoutI {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutI> = (props) => {
    const location = useLocation();
    const { children } = props;

    /* scroll to top when navigating to new page */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="page-layout d-flex justify-content" >
            {children}
        </div>
    );
};

export default Layout;
