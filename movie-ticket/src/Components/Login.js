import { useReducer, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){

    const init={
        username:"",
        password:""
    }
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state, [action.fld]:action.val};
            case 'reset':
                    return init;

        }
    }
    const [info,dispatch]=useReducer(reducer,init);
    const [msg,setMsg]=useState("")
    const navigate=useNavigate();
    const sendData=(e)=>{
        e.preventDefault();
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        }
        fetch("http://localhost:8080/chkLogin",reqOptions)
        .then(resp=>resp.text())
        .then(text=>text.length?JSON.parse(text):{})
        .then(obj=>{
            if(Object.keys(obj).length===0)
            {
                setMsg("Wrong UID/PWD")
            }
            else{
               if(obj.role_id.role_id==1)
               {
                    //customer home
                    navigate("/customer_home")
               }
               else if(obj.role_id.role_id==2)
               {
                //theatre home
               }
               else if(obj.role_id.role_id==3)
               {
                //admin home
               }
            }
        })
    }

    return (
        <div> 
             
            <form>
               
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Enter username</label>
                    <input type="text" className="form-control" id="username"  name="username" value={info.username}
                    onChange={(e)=>{dispatch({type:'update',fld:'username',val:e.target.value})}}/>
                    <div id="usernameHelp" className="form-text">username</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter password</label>
                    <input type="text" className="form-control" id="password"  name="password" value={info.password} 
                    onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}/>
                    <div id="passwordHelp" className="form-text">password</div>
                </div>
                <p>{msg}</p>
                <p>{JSON.stringify(info)}</p>
                <button type="submit" className="btn btn-primary" onClick={(e)=>{sendData(e)}}>Submit</button>
                <button type="reset" className="btn btn-danger" onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
            </form>                                                                                               
        </div>
    )
}