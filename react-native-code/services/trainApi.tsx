const BASE_URL="http://255.255.255.0:8080";

const getTrains=async(from:string,to:string)=>{
    const response=await fetch(`${BASE_URL}/trains?from=${from}&to=${to}`);
    console.log("api called");
    
    if(!response.ok){
        throw new Error("Failed to fetch trains");
    }
    const trains=response.json();
    console.log(trains);
    return trains;
}
export default getTrains;