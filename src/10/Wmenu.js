import Wheader from "./Wheader"
import { Link, useNavigate } from "react-router-dom";


const Wmenu = () => {


    const navigate=useNavigate();
    const url = {
        '단기예보' : '/W1?item=단기예보' ,
        '중기예보' : '/W2?item=중기예보',
        
    }

    const goUrl = (item) => {
        navigate(url[item]);
    }

    return (
        <>  
            <Wheader title={"일기예보"}/>
            <div className="content">
                <div className="menubutton" onClick={()=>goUrl('단기예보')}>단기예보</div>
                <div className="menubutton" onClick={()=>goUrl('중기예보')}>중기예보</div>
            </div>
        </>
    );
    
    }
    export default Wmenu;
    