import { useState } from "react";

const Greeting = () => {
   const [textchange , setChsngeText] = useState(false);
   
   const handleChange = () => {
    setChsngeText(true);
   } 
   
   return (
        <div>
            <h2>Hello world !</h2>
            {!textchange && <p>its good to see you</p>}
                     {textchange && <p>changed! </p>}

            <button onClick={handleChange}>Change Text </button>
        </div>
    );
}
export default Greeting;