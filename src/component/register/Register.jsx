import React from "react"
import {useFormik} from "formik"
import * as Yup from "yup"
import {Link} from "react-router-dom"
const Register = () => {
    const formik =useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            phoneNumber:'',
            email:'',
            password:'',
            repeat_password:''

        },
        onsubmit: values=>{
            alert(JSON.stringify(values))
        },
        validationSchema:Yup.object({
            firstname:Yup.string().max(20 , "must be 15 character or less").required("Riquired"),
            lastname:Yup.string().max(20 , "must be 15 character or less").required("Riquired"),
            email:Yup.string().email("invalid email").max(15 , "must be 15 character or less").required("Riquired"),
            phoneNumber:Yup.number().max(11 , "should be number").required("Required"),
            password:Yup.number().max(18 , "must be 8 character or longer").required("Riquired"),


        })
        
    })
    return ( 
      
        
        <div className="p-4 bg-warning" style={{height:"auto", background: "linear-gradient(30deg , black 10% , gold 70%)" }}>
           
        <form onsubmit={formik.handleSubmit} className="d-flex flex-column  mx-auto p-5  rounded mt-4  " style={{width:"400px"  , backgroundColor: "rgb(15, 15, 15)"}}>
            <div className="d-flex " >
                  <h1 className="text-danger" ><em>SH</em></h1>
                 <h1 className="text-warning" ><b>Bet</b></h1>
            </div>
            <label htmlFor="email" className="text-warning mt-3 fs-6 text-white">Email Address</label>
            <input  type="email" id="email" className="rounded border-top-0 border-start-0  border-buttom-1 bg-secondary text-white  " style={{outline:"none"}} {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email ? (<h6 className="text-danger">{formik.errors.email }</h6> ): null}
            <label htmlFor="firstname" className="text-warning fs-6 mt-3 text-white">Firstname</label>
            <input type="firstname" id="firstname" className="rounded border-top-0 border-start-0  bg-secondary  " style={{outline:"none"}} {...formik.getFieldProps('firstname')}/>
            {formik.touched.firstname && formik.errors.firstname? (<h6 className="text-danger">{formik.errors.firstname }</h6> ): null}
            <label htmlFor="lastname" className="text-warning fs-6 mt-3 text-white">LastName</label>
            <input type="lastname" id="lastname" className="rounded border-top-0 border-start-0  border-buttom-1 bg-secondary  " style={{outline:"none"}}  {...formik.getFieldProps('lastname')}/>
            {formik.touched.lastname && formik.errors.lastname ? (<h6 className="text-danger">{formik.errors.lastname }</h6>) : null}
            <label htmlFor="phoneNumber" className="text-warning fs-6 mt-3 text-white">PhoneNumber</label>
            <input type="phoneNumber" id="phoneNumber" className="rounded border-top-0 border-start-0  border-buttom-1 bg-secondary  " style={{outline:"none"}}  {...formik.getFieldProps('phoneNumber')}/>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ?( <h6 className="text-danger">{formik.errors.phoneNumber }</h6>) : null}
            <label htmlFor="password" className="text-warning fs-6 mt-2 text-white">Password</label>
            <input type="password" id="password" className="rounded border-top-0 border-start-0  border-buttom-1 bg-secondary   " style={{outline:"none"}} {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password?( <h6 className="text-danger">{formik.errors.password}</h6>) : null}
     
            <button className="btn btn-danger w-50 p-2 text-dark m-1 mt-4" type="submit" onClick={(e)=>{
                e.preventDefault()
            }}>Register</button>
        </form>
        </div>
     );

}
 
export default Register;