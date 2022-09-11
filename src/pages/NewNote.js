import React from 'react'
import PropTypes from 'prop-types'
import NoteInput from '../components/NoteInput'

function NewNote(props) {
  return (
    <section>
      <NoteInput/>
    </section>
  )
}

NewNote.propTypes = {}

export default NewNote
