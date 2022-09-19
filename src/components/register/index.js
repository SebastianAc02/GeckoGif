import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import registerService from "../../services/registerService";
import "./register.css";



 
export default function Register() {
  const [ registered, setRegistered] = useState(false)
 const [ , navigate] = useLocation()
 const {login} = useUser()
  return (
    <div className="RegisterPage">
      <h2> Register  </h2>
      <Formik
        initialValues={{ username: '', password: "" }}
        validate={(values) => {
          const errors = {};

          if (values.username === '') {
            errors.username = "Required username";
          }
          if (values.password === '') {
            errors.password = "Required password";
          }

          return errors;
        }}
        onSubmit={(values, { setFieldError }) => {
          return registerService(values).then(()=>
          {setRegistered(true) 

            login({username:values.username, password:values.password})

            setTimeout(()=>{
              navigate('/')}, 3000)

          }).catch((err) => {
        

        if(values.username.length < 6)
            {
            setFieldError("username", "username is not vaild, lenth should be more than 6 characters ");
            }
            if(values.username.length > 12){
              setFieldError("username", "username is not vaild, lenth should be less than 12");
            }
            if(err){
              setFieldError(reportError)
            }
          });
        }}
      >
        {({ errors, isSubmitting, ErrorMessage }) => (
          <Form className="">
            
            <label className="LabelForms"> Username </label>
            <Field placeholder="USERNAME"  className="InputForm"  name={"username"}></Field>
         
          <label className="LabelForms"> Password </label>
            <Field placeholder="PASSWORD" className="InputForm" name={"password"}></Field>
            <button className="buttonForm" disabled={isSubmitting}>
              Register
            </button>
         
    
          <p className="Errors"> {errors.username}</p>
          <p className="Errors">{errors.password}</p>
          </Form>

      
        )}
      </Formik>
      {registered? <p className="Success"> You have been registered</p>:null}
    </div>
  );
}
