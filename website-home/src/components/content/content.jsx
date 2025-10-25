import { 
  Routes,
  Route, 
  useLocation, 
  useNavigate
} from "react-router-dom";
import Home from "../home/home";
import Mathematics from "../topics/mathematics";
import { BreadcrumbGroup } from "@cloudscape-design/components";
import { useMemo } from "react";

const Content = () => {
  const location = useLocation();
const navigate = useNavigate();
   // Compute breadcrumbs automatically
  const breadcrumbs = useMemo(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);

    const items = pathParts.map((part, index) => {
      const href = "/" + pathParts.slice(0, index + 1).join("/");
      const label = part || part.charAt(0).toUpperCase() + part.slice(1);
      return { text: label, href };
    });

    return [{ text: "Home", href: "/" }, ...items];
  }, [location]);

  // Handle breadcrumb click
  const onBreadcrumbClick = (event) => {
    event.preventDefault();
    navigate(event.detail.href);
  };

  return (
    <div className="content">
      <BreadcrumbGroup
      items={breadcrumbs}
      onFollow={onBreadcrumbClick}
    />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mathematics" element={<Mathematics/>} />
            {/* <Route path="/" element={<Electronics />} /> */}
            {/* <Route path="/" element={<Computers />} /> */}
        </Routes>
    </div>
  )
}

export default Content;
