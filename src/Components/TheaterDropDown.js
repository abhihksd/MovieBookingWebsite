import { useEffect, useState } from "react";

export default function TheaterDropDown(){
    const [locations,setLocations]=useState([]);
    const [selectedLocation,setSelectedLocation]=useState('');

    useEffect(()=>{
        fetchTheaterLocations();
    },[]);

    const fetchTheaterLocations= async () => {
        try {
            const response = await fetch('http://localhost:8080/locations');
            const data = await response.json();
            setLocations(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    const handleLocationChange=(event)=>{
        event.preventDefault();
        const location=event.target.value;
        setSelectedLocation(location);
        localStorage.setItem('selectedLocation',location)  //storing selected location in selectedLocation
        window.location.reload();
       
    }

    return (
        <div>
            <label htmlFor="locationDropdown" >Select Location</label>
            <select id="locationDropdown" value={selectedLocation} onChange={handleLocationChange} >
                <option value="" >select a location</option>
                {locations.map((location,index)=>(
                    <option key={index} value={location} >{location}</option>
                ))}
            </select>
            {/* {selectedLocation &&<p>selectedLocation:{selectedLocation}</p>} */}
        </div>
    )
}