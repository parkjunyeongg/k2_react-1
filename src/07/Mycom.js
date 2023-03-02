import { useEffect, useState, useRef } from "react";


const Mycom = () => {
    const [tag,setTag] = useState();
    const txt1R = useRef();
    const txt2R = useRef();
    
    //컴포넌트가 랜더링 되었을때 
    useEffect(()=> {
        txt1R.current.focus();

    }, []);

    const checkFrom =(e) => {
        e.prevantDefalut();
        
        setTag(`입력된 아이디는 ${txt1R.current.value}이고 비밀번호는 ${txt2R.current.value}입니다.`);
    }



    return (
       <>
       <form>
        <p>
        <label for="txt1"> 아이디 : </label> <br/>
        <input ref={txt1R} type="text" name="txt1" placeholder="아이디입력"/>
        </p>

        <p>
        <label for="txt2"> 비밀번호 : </label> <br/>
        <input ref={txt2R} type="password" name="txt2" placeholder="비밀번호 입력"/>
        </p>

        <p>
        <label for="txt3"> 선택과목 : </label> <br/>
        <select name="sell">
            <option value="자바"> 자바</option>
            <option value="HTML"> HTML</option>
            <option value="파이썬"> 파이썬</option>
        </select>
        </p>

        <p>
        <input type="button" value="확인" onClick={checkFrom}/>
        <input type="reset" value="취소" />
        </p>
        
       </form>
        <div>
            {tag}
        </div>
       </>
    );
}

export default Mycom;