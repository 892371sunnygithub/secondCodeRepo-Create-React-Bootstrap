import React,{useState} from 'react'
import Table from '../../Table'
import Checkbox from '../../Checkbox'
import TableData from './TableData'
import Transformer from './Transformer'
const AlertComponent = () => {
  const [modal, setModal]=useState();
 

  const theadData=["Id","Name", "Role", "Location", "Company", "Education", "Mobile", "Email","Action"]

  const showModal=()=>{
    setModal(true);
  }

  const closeModal=()=>{
    setModal(false);
  }
  return (
    <div className='alert'>
       {/* <Table />  
       <Checkbox />  */}
      <h3>Company Employee Data </h3>
      <div className="mt-2 text-end"><button className='btn btn-success' onClick={()=>showModal()}>Add Data</button> </div>
       <TableData thead={theadData}   /> 
      {modal && <Transformer show={modal} hide={closeModal} />}
    </div>
  )
}

export default AlertComponent



