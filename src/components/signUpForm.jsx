import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
  name: '',
  email: '',
  password: '',
}

const onSubmit = (values) => {
  console.log('Form Data', values)
}

const validate = (values) => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Required Field'
  }
  if (!values.email) {
    errors.email = 'Required Field'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Format'
  }

  if (!values.password) {
    errors.password = 'Required Field'
  }
  return errors
}

function SignUpForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  console.log('form errors', formik.errors)

  return (
    <div className="w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-8 w-full"
      >
        <div className="w-full">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            className="form-input text-field"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="valid">{formik.errors.name} </div>
          ) : null}
        </div>
        <div className="">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-input text-field"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="valid">{formik.errors.email} </div>
          ) : null}
        </div>
        <div className="">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="form-input text-field"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="valid">{formik.errors.password} </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-[#C996CC] text-[#30194F] rounded-full py-3 w-9/12 mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
