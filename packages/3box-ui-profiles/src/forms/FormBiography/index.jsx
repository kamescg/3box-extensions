
/**
 * @function FormProfileName
 * @description Profile name input for 3Box Profile Standard 0.0.1
 * @version 1.0.0
 */

/* --- Global --- */
import idx from 'idx'
import React from 'react';
import useForm from "react-hook-form";
import { BoxContext } from '3box-ui-state'
import { Button } from '@horizin/design-system-atoms'
import { Field } from '@horizin/design-system-molecules'

const FormProfileName = ({ box, ...props }) => {
  /* --- Passed State --- */
  const biographyQuote = idx(box, _ => _.profile.details.quote)
  const biographyContent = idx(box, _ => _.profile.details.biography)

  /* --- Internal State --- */
  const { handleSubmit, register, errors } = useForm();

  /**
   * @function onSubmit
   * @description Form Submission Handler
   * @param {Object} values 
   * @todo Add name validation.
   */
  const deleteDb = (values) => {
    box.remove({
      access: 'public',
      key: 'details',
    })
  }
  const onSubmit = (values) => {
    box.setInsert({
      access: 'public',
      index: 'details',
      input: values
    })
  }

  /* --- Component --- */
  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
        <Atom.Flex flex={1}>
        <Field
          name='biography'
          placeholder="What are you about?"
          label="Biography"
          as='textarea'
          defaultValue={biographyContent}
          register={register}
          errors={errors}
          variants={['text']}
          sx={{
            minHeight: 230
          }}
          sxWrapper={{
            flex: 1,
          }}
        />

        </Atom.Flex>
        <Atom.Button type='submit' {...props.sxButton} disabled={!box.isLoggedIn}>{props.label}</Atom.Button>
      </form>
      {/* <Button onClick={deleteDb}>delete</Button> */}
    </>
  );
}

FormProfileName.defaultProps = {
  label: 'Publish',
  sxButton: {
    alignSelf: 'flex-end',
    bg: 'blue',
    my: 3,
    color: 'white'
  }
}

FormProfileName.propTypes = {

}

export default props => <BoxContext>{box => (<FormProfileName box={box} {...props} />)}</BoxContext>
