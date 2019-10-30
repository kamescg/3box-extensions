/* --- Global --- */
import React from 'react';
import { Field } from '@horizin/design-system-molecules'

/* --- Component --- */
const FormFields = props =>
  props.fields.map((field, index) => (
    <>
      {
        field.object === 'field' &&
        <Field
          register={props.register} // Form State Handler
          errors={props.errors} // Form Error Handler
          defaultValue={props.defaults ? props.defaults[field.name] : null}
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          as={field.input}
          variants={['text']}
          sx={{ ...field.sx }}
          sxWrapper={{
            width: '100%'
          }}
        />
      }
      {
        field.object === 'container' && Array.isArray(field.fields) && field.fields.length > 0 &&
        <Atom.Box {...field.properties} >
          <FormFields
            {...field}
            styled={props.styled}
            register={props.register}
            errors={props.errors} />
        </Atom.Box>
      }
    </>
  ))

export default FormFields