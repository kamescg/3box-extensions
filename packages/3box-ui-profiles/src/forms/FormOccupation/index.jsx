
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
  const occupationJob = idx(box, _ => _.profile.id.occupation.job)
  const occupationEmployer = idx(box, _ => _.profile.id.occupation.employer)
  const occupationDescription = idx(box, _ => _.profile.id.occupation.description)

  /* --- Internal State --- */
  const { handleSubmit, register, errors } = useForm();

  /**
   * @function onSubmit
   * @description Form Submission Handler
   * @param {Object} values 
   * @todo Add name validation.
   */
  const onSubmit = async (values) => {
    box.setInsert({
      access: 'public',
      index: 'id',
      key: 'occupation',
      input: values
    })
  }

  /* --- Component --- */
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
      <A.Flex flex={1}>
        <Field
          name='job'
          defaultValue={occupationJob}
          label="Job"
          placeholder="What you do."
          register={register}
          errors={errors}
          variants={['text']}
          sxWrapper={{
            flex: 1,
          }}
        />
        <Field
          name='employer'
          defaultValue={occupationEmployer}
          label="Work"
          placeholder="Where you do it."
          register={register}
          errors={errors}
          variants={['text']}
          sxWrapper={{
            flex: 1,
            mx: 2
          }}
        />
        <Field
          name='description'
          defaultValue={occupationDescription}
          label="Why"
          placeholder="Why you do it."
          register={register}
          errors={errors}
          variants={['text']}
          sxWrapper={{
            flex: 1,
          }}
        />
      </A.Flex>

      <Button {...props.sxButton} disabled={!box.isLoggedIn}>{props.label}</Button>
    </form>
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
