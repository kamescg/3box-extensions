/**
 * @name FormFeedback
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types'
import useForm from "react-hook-form";


/* --- Component --- */
const FormFeedback = ({ styled, ...props }) => {
  /* --- Form Hook State --- */
  const { handleSubmit, register, errors } = useForm()

  /* --- Component State --- */
  const [isComplete, setComplete] = useState()

  /* --- Submit Handler --- */
  const onSubmit = (values) => {
    if (values) {
      console.log(values, 'values')
      setComplete(true) // Validate submission and set complete status to true
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Molecule.Field
        name='feedback'
        variants={['text']}
        as='textarea'
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{
          minHeight: 300
        }}
      />
      <Atom.Button bg='blue' color='white' sx={{ mt: 3 }}>
        {
          isComplete
            ? <Atom.Span>Complete!</Atom.Span>
            : <Atom.Span>Submit Feedback</Atom.Span>
        }
      </Atom.Button>
    </form>
  )
}


FormFeedback.defaultProps = {
  styled: {}
}

FormFeedback.propTypes = {
  styled: PropTypes.object
}

export default FormFeedback