import { useParams } from "react-router-dom";
import weather from "../db/weather.json"

const RouterPage1 = () => {
    
    const item = useParams().item ;
    console.log("p1 item" , item)

    /*const abk = () => {
        if (item = "사과🍎") {
            <p>사과는 과일입니다 🍎</p>
        } else if ( item = "바나나🍌") {
            <p>바나나는 과일입니다 🍌</p>
        } else if ( item = "당근🥕"){
            <p>당근은 과일이 아닙니다.</p>
        }
         
    }*/
    
    
    const fruits = ['사과🍎','바나나🍌'] ;
    /*f (fruits.includes(item)) tag = "과일입니다." ;
    else tag = "과일이 아닙니다.";*/
    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다." ;
    return (
        <>
         <h1>Page1</h1>
        {`${item}은/는 ${tag}`}
        </>
    );
    
    }
    export default RouterPage1;
    