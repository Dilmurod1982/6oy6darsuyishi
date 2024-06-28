import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css";

function BreadCrumps() {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
}

export default BreadCrumps;
