import axios from 'axios';
import { useEffect,useState } from 'react';

const divClass=
{
 border:"solid black 1px"
}

interface employeeDetail
{
EmpId:number;
EmpName:string;
EmpSalary:number;
}


export default function About() {

  const initialEmployeeState = [
    {
    EmpId: 0,
    EmpName: "",
    EmpSalary:0
   
     
  }


];

  const emp = {
    EmpId: 0,
    EmpName: "",
    EmpSalary:0
     
  };


    const[data,setData]=useState<employeeDetail[]>(initialEmployeeState);
    const[savedata,setSaveData]=useState<employeeDetail>(emp);


const Onsubmit=(e:any)=>{
  e.preventDefault();
  console.log(savedata);
  axios.post("https://localhost:44397/api/employeeDetailsApi",{EmpName:savedata.EmpName,EmpSalary:savedata.EmpSalary})
.then((res)=>{console.log(res)})
}


const handleInputChange = (event:any) => {
   
   
  setSaveData({ ...savedata, [ event.target.name]:  event.target.value })
  console.log(savedata);
}

  useEffect(()=>{

  if(data!=null){
axios.get<employeeDetail[]>("https://localhost:44397/api/employeeDetailsApi")
.then((res)=>{ setData(res.data)})

  }},[data])
    return (
    <>
      {data!=null &&
      <table style={divClass} className='table table-bordered table-stripped'>
        <tr>
        <th>EmpId</th>
        <th>EmpName</th>
        <th>EmpSalary</th>
        </tr>
      {data.map((item)=>
      <tr>
        <td>{item.EmpId}</td>
        <td>{item.EmpName}</td>
        <td>{item.EmpSalary}</td>
      </tr>
      )}
      </table>
      }
       <br/>
<form onSubmit={Onsubmit}>
 
  <input type="text" name="EmpName" onChange={handleInputChange} className='form-control'/> 
  <input type="number" name="EmpSalary" onChange={handleInputChange} className='form-control'/>
  
<input type="submit" value="add" className='btn btn-success'/>
</form>
    </>
  )
}
