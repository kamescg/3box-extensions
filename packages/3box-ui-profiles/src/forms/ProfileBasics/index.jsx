
/**
 * @function FormProfile
 * @param {Object} props 
 * @param {Object} props.box 
 * @param {String} props.threadName 
 * 
 * @return {Component}
 */

/* --- Global --- */
import idx from 'idx'
import React from 'react';
import useForm from "react-hook-form";
import { BoxInject } from '3box-ui-state'
import { Button } from '@horizin/design-system-atoms'
import { Field } from '@horizin/design-system-molecules'
const ProfileBasics = ({ box, ...props }) => {
  const { handleSubmit, register, errors } = useForm();

  const occupationJob = idx(box, _ => _.profile.id.occupation.job)
  const occupationEmployer = idx(box, _ => _.profile.id.occupation.employer)
  const occupationDescription = idx(box, _ => _.profile.id.occupation.description)


  // Form Submit Handler
  const onSubmit = async (values) => {
    box.setInsert({
      access: 'public',
      index: 'id',
      key: 'occupation',
      input: values
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <A.Flex>
        <Field
          name='job'
          defaultValue={occupationJob}
          label="Job"
          placeholder="What you do."
          register={register}
          errors={errors}
          styled={{
            flex: 1
          }}
        />
        <Field
          name='employer'
          defaultValue={occupationEmployer}
          label="Work"
          placeholder="Where you do it."
          register={register}
          errors={errors}
          styled={{
            flex: 1,
            mx: 3
          }}
        />
        <Field
          name='description'
          defaultValue={occupationDescription}
          label="Why"
          placeholder="Why you do it."
          register={register}
          errors={errors}
          styled={{
            flex: 1
          }}
        />
      </A.Flex>

      <Button sm variant='green' disabled={!box.isLoggedIn}>Publish</Button>
    </form>
  );
}

export default props => <BoxInject><ProfileBasics {...props} /></BoxInject>
