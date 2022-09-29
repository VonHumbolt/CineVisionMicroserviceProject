import { Field, useField } from 'formik'
import React from 'react'

export default function KaanKaplanTextArea({...props}) {

    const [field, meta] = useField(props)

  return (

    <Field as="textarea" {...field} {...props}>

    </Field>
  )
}
