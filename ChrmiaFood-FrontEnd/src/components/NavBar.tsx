import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const handleNavBar = (route: string) => {
    navigate(`${route}`);
  };
  const handleLogoutButton = () => {
    localStorage.removeItem("user");
    navigate('/login');
  };
  return (
    <div style={{ ...navStyle, position: "fixed" }}>
      <ul style={ulStyle}>
        <li>
          <Button onClick={() => handleNavBar("/")} style={linkStyle}>
            <span style={textStyle}>Food Ordering Dapp</span>
          </Button>
        </li>
        <div style={divStyle}>
          <li>
            <Button onClick={() => handleNavBar("/new-post")} style={linkStyle}>
              New Food
            </Button>
          </li>
          <li>
            <Button onClick={() => handleNavBar("/users")} style={linkStyle}>
              Users
            </Button>
          </li>
          <li>
            <Button onClick={() => handleNavBar("/")} style={linkStyle}>
              Foods
            </Button>
          </li>
          <li>
            {localStorage.getItem("user") && (
              <Button onClick={() => handleLogoutButton()} style={linkStyle}>
                Logout
              </Button>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
};

// Styles
const navStyle = {
  padding: "10px 20px",
  backgroundColor: "#333",
  // position:'fixed',
  zIndex: 10,
  width: "100%",
};

const ulStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  listStyleType: "none",
  margin: 0,
  padding: 0,
};

const divStyle = {
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
};

const textStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

export default NavBar;
