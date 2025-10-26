import {
    useLocation,
    useNavigate
} from "react-router-dom";
import { BreadcrumbGroup } from "@cloudscape-design/components";
import { useMemo } from "react";

const NavigationPath = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const breadcrumbs = useMemo(() => {
        const pathParts = location.pathname.split("/").filter(Boolean);

        const items = pathParts.map((part, index) => {
            const href = "/" + pathParts.slice(0, index + 1).join("/");
            const partWords = part.split('-')
            const capitalisedWords = partWords.map(word => word.charAt(0).toUpperCase() + word.slice(1))
            const label = capitalisedWords.join(' ')
            return { text: label, href };
        });

        return [{ text: "Home", href: "/" }, ...items];
    }, [location]);

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
        </div>
    )
}

export default NavigationPath;
