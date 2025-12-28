import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const themes = ["light", "dark", "neon", "pink", "orange"];

export default function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const dispatch = useDispatch();

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip id="tooltip-top">Theme Switcher</Tooltip>}
    >
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          <FontAwesomeIcon icon={faBrush} className="theme-icon" size="lg" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {themes.map((t) => (
            <Dropdown.Item key={t} onClick={() => dispatch(setTheme(t))}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </OverlayTrigger>
  );
}
