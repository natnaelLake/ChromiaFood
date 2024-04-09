import { useNavigate } from "react-router-dom";
import Signup from "./RegisterUser";

const RegisterLoadable = () => {
  const navigate = useNavigate();
  const handleSingUpLinkClick = () => {
    navigate("/login");
  };
  return <Signup handleLoginLinkClick={handleSingUpLinkClick} />;
};

export default RegisterLoadable;
