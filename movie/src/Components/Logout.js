import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function LogoutComp() {
  useEffect(()=>{
    localStorage.clear();
  },[])
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("we are in logoout")
  dispatch(logout());
  navigate("/");
}
