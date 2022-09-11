import React from 'react'
import PropTypes from 'prop-types'
import NoteInput from '../components/NoteInput'

function NewNote({addNote}) {
  return (
    <section>
      <NoteInput addNote = {addNote}/>
    </section>
  )
}

NewNote.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NewNote
