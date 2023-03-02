import { Link } from "react-router-dom";

const RouterNv = () => {

    return (
        <>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/p1">page1</Link></li>
                <li><Link to="/p2">page2</Link></li>
            </ul>
        </>
    );
    
    }
    export default RouterNv;
    