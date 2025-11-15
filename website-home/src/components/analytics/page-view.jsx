/* global gtag */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GooglePageView = () => {
  const location = useLocation();

  useEffect(() => {
    const path = window.location.hash.substring(1) || "/";
    gtag('event', 'page_view', {
      page_path: path
    });
  }, [location]);

  return null;
};

export default GooglePageView;
