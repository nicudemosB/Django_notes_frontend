import React, { useState, useEffect } from 'react'

const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        // wait until this method is done
      let response = await fetch('http://127.0.0.1:8000/api/notes/')
      let data = await response.json()
      console.log('DATA:', data);
      setNotes(data)
    }

  return (
    <div>
        notes
    </div>
   )
}

export default NotesListPage