import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tdetail from "./Tdetail";

const Taccidentmain = ({c1, c2, data}) => {

    console.log("c1",c1);
    console.log("c2",c2);
    console.log("Data",data)

    return (
       <>
        <div className="main"> 
           <Tc1 />
           <Tc2 />
           <Tdetail />
        </div>
        
       </>
    );
}

export default Taccidentmain;