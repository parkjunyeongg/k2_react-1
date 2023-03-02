import "./Wmain.css";

import Wmenu from "./Wmenu"
import W1 from "./W1";
import W2 from "./W2";
import { Route , Routes} from "react-router-dom";

const Wmain = () => {

    return (
        <>
        
        <Routes>
        <Route path="/" element={<Wmenu/>} />
        <Route path="/W1" element={<W1/>}/>
        <Route path="/W2" element={<W2/>}/>
        </Routes>
        </>
    );
    
    }
    export default Wmain;
    