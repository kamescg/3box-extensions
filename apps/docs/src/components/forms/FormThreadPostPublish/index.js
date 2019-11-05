import React from 'react';
import useForm from "react-hook-form";
import { Button } from '@horizin/design-system-atoms'
import { Field } from '@horizin/design-system-molecules'

/**
 * @function FormThreadPostPublish
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const FormThreadPostPublish = ({ amount, ethers, contractAddress, contractName, delta, styled, ...props }) => {
  const { handleSubmit, register, errors } = useForm();

  // Form Submit Handler
  const onSubmit = async (values) => {
    props.onSubmit && props.onSubmit(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}} >
        <Field
          name="post"
          register={register}
          errors={errors}
          placeholder="Post"
        />
      <Button sm variant='green' fullWidth>Submit</Button>
    </form>
  );
}


export default FormThreadPostPublish