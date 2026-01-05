import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Todoli.css"

const Todoli = () => {
    const [list,setlist]  = useState([]);
    const [confirmid, setconfirmid] = useState(null);

    // inserting an empty object in the array
    // Date.now() is being used to assign a unique value to each todolist
    const addtodo = () => {
        setlist([...list, { id: Date.now(), text: ""}])
    }

    
    const updatetodo = (id,text) => {
        setlist(
            list.map(item => 
                item.id === id ? {...item, text: text}: item
            )
        )
    }

    const deletetodo = (id) => {
        setlist(list.filter(item => item.id !== id))
        setconfirmid(null);
    }


  return (
    <div className="main">
        <div className="lists">
                {
                    list.map(item => (
                        <div className="todo" key={item.id}>
                        <div className="head">
                            <FontAwesomeIcon icon={faXmark} className='del-icon' 
                            onClick={() => setconfirmid(item.id)}
                            />
                        </div>
                            {confirmid === item.id && (
                                <div className="confirm-box">
                                    <span>Delete this TODO?</span>
                                    <div className="btn">
                                        <button onClick={() => deletetodo(item.id)} className='yes-btn'>yes</button>
                                        <button onClick={() => setconfirmid(null)} className='no-btn'>no</button>
                                    </div>
                                </div>
                            )}
                        <div className="chest">
                            <input type="checkbox" name="" id=""/>
                            <input 
                                type="text" 
                                value={item.text} 
                                placeholder='Enter a task' 
                                onChange={(e) => updatetodo(item.id, e.target.value)}
                            />
                        </div>
                        </div>
                    ))
                }
        </div>
        <button onClick={addtodo} className='button-78' >ADD NEW TODO</button>
    </div>
  )
}

export default Todoli
