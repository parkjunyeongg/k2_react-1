import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from 'query-string';

const RouterPage2 = () => {
    let location = useLocation().search; //'https://newsstand.naver.com/?list=&pcode=120'
    //location = location.split('?')[1];
    console.log(location);
    let item = qs.parse(location).item;
    console.log(item);

    const fruits = ['사과🍎','바나나🍌'] ;
    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다." ;

    return (
        <>
         <h1>Page2</h1>
         {`${item}은/는 ${tag}`}
        </>
    );
    
    }
    export default RouterPage2;
    