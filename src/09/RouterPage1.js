import { useParams } from "react-router-dom";
import weather from "../db/weather.json"

const RouterPage1 = () => {
    
    const item = useParams().item ;
    console.log("p1 item" , item)

    /*const abk = () => {
        if (item = "μ¬κ³Όπ") {
            <p>μ¬κ³Όλ κ³ΌμΌμλλ€ π</p>
        } else if ( item = "λ°λλπ") {
            <p>λ°λλλ κ³ΌμΌμλλ€ π</p>
        } else if ( item = "λΉκ·Όπ₯"){
            <p>λΉκ·Όμ κ³ΌμΌμ΄ μλλλ€.</p>
        }
         
    }*/
    
    
    const fruits = ['μ¬κ³Όπ','λ°λλπ'] ;
    /*f (fruits.includes(item)) tag = "κ³ΌμΌμλλ€." ;
    else tag = "κ³ΌμΌμ΄ μλλλ€.";*/
    let tag = fruits.includes(item) ? "κ³ΌμΌμλλ€." : "κ³ΌμΌμ΄ μλλλ€." ;
    return (
        <>
         <h1>Page1</h1>
        {`${item}μ/λ ${tag}`}
        </>
    );
    
    }
    export default RouterPage1;
    