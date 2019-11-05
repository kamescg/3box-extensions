/**
 * @name FormThreadPostPublish
 * @author kamescg
 * @version 0.0.1
 * @description Generic 3Box thread/message post form.
 */

 /* --- Global --- */
 import React, { useState, useEffect } from 'react';
 import useForm from "react-hook-form";
 import { Field } from '@horizin/design-system-molecules'
 import { AccessButton } from '3box-ui-system'
 
 /* --- Component --- */
 const FormThreadPostPublish = props => {
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
             name="value"
             as='textarea'
             variants={['text']}
             register={register}
             errors={errors}
             placeholder="Post Message"
             sx={{
               minHeight: 140,
               m: 1
             }}
           />
         <Atom.Flex between>
           <AccessButton {...props.accessLevel} label='Publish Post' />
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
         <Atom.Span><strong>Post Success!</strong> Check thread to view comment.</Atom.Span>
       </Atom.Flex>
     }
   </Atom.Span>
 )}
 
 
 export default FormThreadPostPublish