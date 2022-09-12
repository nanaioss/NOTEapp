import React from 'react'
import {AiFillFileExcel} from 'react-icons/ai'

const Note =({id, text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <AiFillFileExcel 
            onClick={()=> handleDeleteNote(id)}
            className="delete-icon" size="1.3em" />
        </div>
    </div>
  ) 
}

export default Note;