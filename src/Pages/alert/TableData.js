import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editdata, trashData } from '../../redux/slices/CategorySlice';
import TransformerSec from './TransformerSec';

const TableData = ({ thead }) => {
    const [editModal, setEditModal]= useState(false);
    const {bodyData}= useSelector((state)=>state.category)
    const dispatch= useDispatch();
    const deleteData=(data)=>{
        dispatch(trashData(data))
    }

    const editData=(data)=>{
       setEditModal(true);
       dispatch(editdata(data))

    }

    // const closeModal=()=>{
    //     setEditModal(false)
    // }
    return (
        <div className="card ">
            <table className='table table-striped mb-0'>
                <thead>
                    <tr>
                        {
                            thead.map((curElm, index) => {
                                return (
                                    <>
                                        <th>{curElm} </th>
                                    </>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        bodyData.map((curElm, index)=>{
                        return(
                            <>
                              <tr>
                                <td>{index+1} </td>
                                <td>{curElm.name} </td>
                                <td>{curElm.role} </td>
                                <td>{curElm.location} </td>
                                <td>{curElm.company} </td>
                                <td>{curElm.education} </td>
                                <td>{curElm.mobile} </td>
                                <td>{curElm.email} </td>
                                <td colSpan={2}><button className='btn btn-primary btn-sm' onClick={()=>editData(curElm)}>Edit </button> <button className='btn btn-danger btn-sm' onClick={()=>deleteData(index)}>Trash</button> </td>
                              </tr>
                            </>
                        )
                      })
                    }
                </tbody>

            </table>

         { editModal &&  <TransformerSec show={editModal} hide={()=>setEditModal(false)} /> }
        </div>
    )
}

export default TableData