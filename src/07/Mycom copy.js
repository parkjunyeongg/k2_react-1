import { useEffect, useState, useRef } from "react";

const Mycom = () => {
    
    let cnt1 = 0;

    const [cnt2, setCnt2] = useState(0);

    const cnt3 = useRef(0);

    const showCnt = () => {
        console.log(`cnt1 = ${cnt1}`);
        console.log(`cnt2 = ${cnt2}`);
        console.log(`cnt3 = ${cnt3.current}`);
    }

    const addCnt1 = () => {
        cnt1 = cnt1 + 1 ;
        console.log(cnt1) ;
    }

    const addCnt2 = () => {
        setCnt2(cnt2+1);
    }

    useEffect(()=>{
        showCnt();
    }, [cnt2]);

    const addCnt3 = () => {
        cnt3.current.value
    }

    return (
       <>
            <ul>
                <li>cnt1 = {cnt1}</li>
                <li>cnt2 = {cnt2}</li>
                <li>cnt2 = {cnt3.current}</li>
            </ul>
            <form>
                <input type="button" value="cnt1증가" onClick={addCnt1}> </input>
                <input type="button" value="cnt2증가" onClick={addCnt2}> </input>
                <input type="button" value="cnt3증가" onClick={addCnt3}> </input>
            </form>
       </>
    );
}

export default Mycom;