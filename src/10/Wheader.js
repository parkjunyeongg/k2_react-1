//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Wheader = ({title}) => {

    const navigate=useNavigate();
    const url = {
        '↩' : '/H1?item=↩' 
        
    }

    const goUrl = (item) => {
        navigate(url[item]);
    }


    return (
        <>
            <div className="wh">
                <h1 className="title">{title}</h1>
                <div className="gotohome" onClick={()=>goUrl('↩')}>↩</div>
            </div>
        </>
    );
    
    }
    export default Wheader;
    