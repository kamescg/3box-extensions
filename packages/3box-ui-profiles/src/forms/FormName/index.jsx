
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
  const nameFirst = idx(box, _ => _.profile.id.name.first)
  const nameLast = idx(box, _ => _.profile.id.name.last)
  const nameMiddle = idx(box, _ => _.profile.id.name.middle)

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
      key: 'name',
      input: values
    })
  }

  /* --- Component --- */
  return (
    <form style={{ display: 'flex', flex: 1, flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
      <A.Flex flex={1}>
        <Field
          name='first'
          placeholder="First Name"
          label="First Name"
          defaultValue={nameFirst}
          register={register}
          errors={errors}
          variants={['text']}
          sxWrapper={{
            flex: 1,
          }}
        />
        <Field
          variants={['text']}
          name='middle'
          placeholder="Middle"
          label="Middle"
          defaultValue={nameMiddle}
          register={register}
          errors={errors}
          sxWrapper={{
            mx: 2
          }}
        />
        <Field
          variants={['text']}
          name='last'
          placeholder="Last Name"
          label="Last Name"
          defaultValue={nameLast}
          register={register}
          errors={errors}
          sx={{
            flex: 3,
            p: 2
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
