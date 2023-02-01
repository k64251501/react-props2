import CompB from "./CompB-Fun"
let CompA = ()=>{
    let ename= "karthik"
    return <div>
        <h1>component A</h1>
        <CompB one={"gm"} emp_Name={"ename"}/>
    </div>
    
}
export default CompA