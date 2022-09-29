import { Field, useField } from 'formik'
import React from 'react'

export default function KaanKaplanTextInput({...props}) {

    const [field, meta] = useField(props)

  return (

    <Field {...field} {...props} />

  )
}
