const BASE_URL="http://255.255.255.0:8080";

const getBuses=async(fromCity:string,toCity:string)=>{
    const response=await fetch(`${BASE_URL}/buses?fromCity=${fromCity}&toCity=${toCity}`);
    console.log("bus api called");
    if(!response.ok){
        throw new Error("Failed to fetch buses");
    }
    const data=await response.json();
    return data.buses;
};

export default getBuses