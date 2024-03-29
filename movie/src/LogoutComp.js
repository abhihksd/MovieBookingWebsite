import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./loggedSlice";

export default function LogoutComp() {
  const dispatch = useDispatch();
  const navigate = useNavigate("/login");
  localStorage.removeItem("user")
  dispatch(logout());
  const mystate = useSelector((state) => state.logged);
  navigate("/login");
  return (
    <div>
      <p>Logged out Successfully</p>
      <p>Login Status:{mystate.loggedIn.toString()}</p>
    </div>
  );
}
