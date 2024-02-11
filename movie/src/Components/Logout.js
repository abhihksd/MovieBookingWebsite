import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function LogoutComp(){
    const navigate = useNavigate();

    const dispatch = useDispatch();
    localStorage.clear();
    dispatch(logout());//logged is false main menu is visible
    navigate("/")
}