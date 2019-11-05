/**
 * @name FormProfileDetails
 * @version 0.0.1
 * @description Set Identiy Details
 */

 /* --- Global --- */
import React, { useState, useEffect } from 'react';
import useForm from "react-hook-form";
import { Field } from '@horizin/design-system-molecules'
import { AccessButton } from '3box-ui-system'

/* --- Component --- */
const FormProfileIdentity = props => {
  const [ status, setStatus ] = useState(props.status) 
  const { handleSubmit, register, errors, reset } = useForm();

  /**
   * @name statusParentPassEffect
   * @description Set status from parent component state. 
   */
  useEffect( () => { 
    setStatus(props.status)
  }, [props.status])

  /**
   * @name onSubmitHandler
   * @description When form is submitted pass values back to parent component.
   * @todo Add field validation via Yup.
   */
  const onSubmit = async (values) => {
    props.onSubmit && props.onSubmit(values)
  }

  /**
   * @name onResetHandler
   * @description Reset form values.
   */
  const onResetHandler = () => {
    setStatus(false)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="job"
            variants={['text']}
            register={register}
            errors={errors}
            placeholder="Job"
            sx={{
              my: 1
            }}
          />
          <Field
            name="employer"
            variants={['text']}
            register={register}
            errors={errors}
            placeholder="Employer"
            sx={{
              my: 1
            }}
          />
          <Field
            name="description"
            variants={['text']}
            register={register}
            errors={errors}
            placeholder="Description"
            sx={{
              my: 1
            }}
          />
        <Atom.Flex between>
          <AccessButton {...props.accessLevel} />
          <SumbitStatusHandler status={status} />
        </Atom.Flex>
      </form>
    </>
  );
}

const SumbitStatusHandler = props => { 
 return(
  <Atom.Span>
    {
      props.status && 
      <Atom.Flex column>
        <Atom.Span><strong>Set Success!</strong> Check your profile.</Atom.Span>
      </Atom.Flex>
    }
  </Atom.Span>
)}


export default FormProfileIdentity