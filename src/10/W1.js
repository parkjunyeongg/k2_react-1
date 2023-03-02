import Wheader from "./Wheader"
import keys from "../db/item.json"
import weather2 from "../db/weather2.json"
import { useState, useEffect } from "react"

const W1 = () => {

    const [items, setitmes] = useState();
    const [itemTag,setitemTag] = useState();

    

    useEffect(()=>{
        setitmes(weather2.response.body.items.item);
    },[]);

    useEffect(()=>{
        if (!items) return ;

        console.log("items",items)

        let temp =items.map((i,n) => 
        <div className="w2div" key={"w2div" + n}> 
            <span className="sp0">{keys[i.category][0]}</span>
            <span className="sp1">{i.obsrValue}</span>
            <span className="sp2">{keys[i.category][1]}</span>
        </div>
    );
    setitemTag(temp);
    },[items]);

    return (
        <div className="content"> 
            <Wheader title={"일기예보 - 단기정보"}/>
            {items && itemTag}
        </div>
    );
    
    }
    export default W1;
    