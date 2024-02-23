import SystemNavbar from "./SystemNavbar";
import TheaterNavbar from "./TheaterNavBar";
import UserNavbar from "./UserNavBar";

export default function NavBar(){
    const role=JSON.parse(localStorage.getItem('user')).role_id.role_id
    console.log(role);
    
    switch (role) {
        // case 'guest':
        //   return <GuestNavbar />;
        case 1:
          return <UserNavbar />;
        // case 'admin':
        //   return <AdminNavbar />;
        case 2:
            return <TheaterNavbar/>
        case 3:
            return <SystemNavbar/>
        default:
          return null;
      }
    
      
}