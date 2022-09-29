import { Field, useField } from 'formik'
import React from 'react'

export default function KaanKaplanSelect({...props}) {

    const [field, meta] = useField(props);

  return (
    <Field as="select" {...field} {...props}>

        <option value="" default hidden>{props.placeholder}</option>

        {props.options.map(option => {
            return (
                <option key={option.key} value={option.key}>
                    {option.value}
                </option>
            )
        })}
    </Field>
  )
}
