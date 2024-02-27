export default function RegForm(){
    return (
        <div>
            <form>
                <input type="text" placeholder="username" /> <br/>
                <input type="text" placeholder="password"/> <br/>
                <input type="password" /><br/>
                <input type="name" placeholder="name"/><br/>
                Select Date: <input type="date" /><br/>
                <input type="email" placeholder="email"/><br/>
                <input type="submit" />
            </form>
        </div>
    )
}