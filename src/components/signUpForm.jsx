import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required Field";
  }
  if (!values.email) {
    errors.email = "Required Field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format";
  }

  if (!values.password) {
    errors.password = "Required Field";
  }
  return errors;
};

function SignUpForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("form errors", formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4 ">
        <div className="">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div>{formik.errors.name} </div> : null}
        </div>
        <div className="">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email} </div> : null}
        </div>
        <div className="">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password} </div> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
