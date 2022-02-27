import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const onSubmit = (values) => {
  console.log('Form Data', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('*Required'),
  email: Yup.string().email('*Invalid email format').required('*Required'),
  password: Yup.string().required('*Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], '*Passwords must match')
    .required('*Required'),
})

function SignUpForm() {
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
      <div className="relative ">
        {/* <label className="absolute label">Full Name*</label> */}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name*"
          {...formik.getFieldProps('name')}
          className="form-input text-field"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="valid">{formik.errors.name} </div>
        ) : null}
      </div>
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
      <div className="relative">
        {/* <label className="absolute label">Password*</label> */}
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Re-enter Password*"
          {...formik.getFieldProps('confirmPassword')}
          className="form-input text-field"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="valid">{formik.errors.confirmPassword} </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="bg-[#C996CC] text-[#30194F] rounded-full py-3 w-7/12 mx-auto hover:drop-shadow-xl hover:scale-110 transition-all"
      >
        Submit
      </button>
    </form>
  )
}

export default SignUpForm
