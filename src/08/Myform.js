import Myformcs from "./Myformcs.css";
import { useState ,useRef} from "react";

const Myform = () => {
    const txt1R = useRef();
    const txt2R = useRef();
    const sel1R = useRef();

    const [msgTag,setmsgTag] = useState() ;

    const formCheck = () => {
        if (txt1R.current.value == ""){
            alert("아이디를 입력하세요.")
            txt1R.current.focus();
            return ;
        }
        if (txt2R.current.value == ""){
            alert("비밀번호를 입력하세요.")
            txt2R.current.focus();
            return ;
        }

        setmsgTag(  
        <p>
            <span>{txt1R.current.value}</span>님의 
            선택과목은 <span>{sel1R.current.value}</span>입니다.;
        </p>)

        /*document.querySelector('#msg').innerHTML = 
            `아이디는 <spen>${txt1R.current.value}</spen>님의 
            선택과목은 <spen>${sel1R.current.value}</spen>입니다.`;*/

    }

    return (
       <>
        <form name="myform">
        <p>
        <label htmlfor="txt1"> 아이디 : </label> <br/>
        <input ref={txt1R} type="text" name="txt1" placeholder="아이디입력"/>
        </p>

        <p>
        <label htmlfor="txt2"> 비밀번호 : </label> <br/>
        <input ref={txt2R} type="password" name="txt2" placeholder="비밀번호 입력"/>
        </p>

        <p>
        <label htmlfor="txt3" > 선택과목 : </label> <br/>
        <select ref={sel1R} name="sel1">
            <option value="자바스크립트" > 자바스크립트</option>
            <option value="HTML" > HTML</option>
            <option value="파이썬"> 파이썬</option>
        </select>
        </p>

        <p>
        <input className ="button" type="button" value="확인" onClick={formCheck}/>
        <input className ="button" type="reset" value="취소" />
        </p>
        
        </form>

        <div id="msg">
            {msgTag}
        </div>
       </>
    );
}

export default Myform;