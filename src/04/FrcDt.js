const FrcDt = ({dt, setDt}) => {
    
    let dtdiv1Tag = [...dt];
    //console.log("frcDt",dtdiv1Tag);

    const show = (v) => {
        console.log("show",v);
        setDt(v);
    } 
    dtdiv1Tag = dtdiv1Tag.map((v) => 
        <div className='dtdiv1' key={v} onClick={()=>show(v)}>{v}</div>)
    console.log();
    return (
        <div className="mainbox1">
            {dtdiv1Tag}
        </div>
    );
}
/* <div className='dtdiv1' onClick={()=>showInfo(1)}>{item.frcstOneDt}</div>
            <div className='dtdiv1' onClick={()=>showInfo(2)}>{item.frcstTwoDt}</div>
            <div className='dtdiv1' onClick={()=>showInfo(3)}>{item.frcstThreeDt}</div>
            <div className='dtdiv1' onClick={()=>showInfo(4)}>{item.frcstFourDt}</div>*/
export default FrcDt;