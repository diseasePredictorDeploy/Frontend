import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../Pages/button'

const initialValues = {
  email: '',
  password: '',
}

const onSubmit = (values) => {
  console.log('Form Data', values)
}

const validationSchema = Yup.object({
  email: Yup.string().email('*Invalid email format').required('*Required'),
  password: Yup.string().required('*Required'),
})

function SignInForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  console.log('form errors', formik.errors)

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-6 w-1/2 mx-auto"
    >
      <div className="relative">
        {/* <label className="absolute label">Your Email*</label> */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email*"
          {...formik.getFieldProps('email')}
          className="form-input text-field"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="valid">{formik.errors.email} </div>
        ) : null}
      </div>
      <div className="relative">
        {/* <label className="absolute label">Password*</label> */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password*"
          {...formik.getFieldProps('password')}
          className="form-input text-field"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="valid">{formik.errors.password} </div>
        ) : null}
      </div>
      <button type="submit" className="relative pt-3">
        <Button />
      </button>
    </form>
  )
}

export default SignInForm