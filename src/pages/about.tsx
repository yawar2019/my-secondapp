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

    const OnEdit=(id:number)=>{
      axios.get<employeeDetail>("https://localhost:44397/api/employeeDetailsApi/"+id)
      .then((res)=> {setSaveData(res.data);})
    }


    const OnDelete=(id:number)=>{
      var res=confirm("are you sure you want to delete record");
      if(res==true){
      axios.delete("https://localhost:44397/api/employeeDetailsApi/"+id)
      .then((res)=>{ alert('Deleted Successfully')})

    }
  }

const Onsubmit=(e:any)=>{
  e.preventDefault();
  console.log(savedata);
  if(savedata.EmpId==null){
  axios.post("https://localhost:44397/api/employeeDetailsApi",{EmpName:savedata.EmpName,EmpSalary:savedata.EmpSalary})
.then((res)=>{console.log(res)})
}
else{
  axios.put("https://localhost:44397/api/employeeDetailsApi/"+savedata.EmpId,{EmpId:savedata.EmpId,EmpName:savedata.EmpName,EmpSalary:savedata.EmpSalary})
  .then((res)=>{alert('Updated Record Successfully')})
}
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
      <table style={divClass} className='table table-bordered'>
        <tr>
        <th>EmpId</th>
        <th>EmpName</th>
        <th>EmpSalary</th>
        <th>Action</th>
        </tr>
      {data.map((item)=>
      <tr key={item.EmpId}>
        <td>{item.EmpId}</td>
        <td>{item.EmpName}</td>
        <td>{item.EmpSalary}</td>
        <td>
        <button onClick={()=>OnEdit(item.EmpId)} className="btn btn-primary">Edit</button>
        <button onClick={()=>OnDelete(item.EmpId)} className='btn btn-danger'>Delete</button>
          </td>
      </tr>
      )}
      </table>
      }
       <br/>
<form onSubmit={Onsubmit}>
 <input type="hidden" name="EmpId" value={savedata.EmpId}/>
  <input type="text" name="EmpName" onChange={handleInputChange} value={savedata.EmpName} className='form-control'/> 
  <input type="number" name="EmpSalary" onChange={handleInputChange}  value={savedata.EmpSalary} className='form-control'/>
  
<input type="submit" value="Save" className='btn btn-success'/>
</form>
    </>
  )
}
