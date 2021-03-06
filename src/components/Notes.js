import React from 'react';

export const Notes = ({ notes, onRemove }) => {
  return (
    <ul className="list-group">
      {notes.map(note => (
        <li key={note.id} className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <small>{note.date}</small>
          </div>
          <button onClick={() => onRemove(note.id)} type='button' className='btn btn-outline-danger'>&times;</button>
        </li>
      ))}
    </ul>
  )
}