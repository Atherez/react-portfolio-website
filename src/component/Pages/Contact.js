import React,{Component} from 'react';
import Fields from '../Common/ContactFields';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields={
    sections:[
        [
            {name:"name",type:"text",placeholder:"Enter Name Here",requiredMessage:"Please Enter the Name"},
            {name:"email",type:"email",placeholder:"Enter Email Here",requiredMessage:"Please Enter the Email"},
            {name:"phone",type:"tel",placeholder:"Enter Phone Number Here",requiredMessage:"Please Enter the Phone Number"},
        ],
        [
            {name:"message",type:"textarea",placeholder:"Enter Message Here",requiredMessage:"Please Enter the Message"},
        ]
    ]
}

class Contact extends Component{
    render(){
        return (
        <section className="page-section" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                    <div className="row">
                      {fields.sections.map((section,sectionIndex)=>{
                          return (
                            <div className="col-md-6" key={sectionIndex}>
                                {section.map((field,index)=>{
                                    return <Fields 
                                                {...field} 
                                                key={index}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[field.name])}
                                                errors={this.props.errors[field.name]}
                                                />
                                })}
                            </div>
                          )
                      })}
                      <div className="clearfix"></div>
                      <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button 
                            id="sendMessageButton" 
                            className="btn btn-primary btn-xl text-uppercase" 
                            type="submit"
                            >Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
export default withFormik({
  mapPropsToValues:()=>({
    name:'',
    email:'',
    phone:'',
    message:''
  }),
  validationSchema:Yup.object().shape({
    name:Yup.string().min(3,'Enter Valid Name!').matches(/\S+/,"Enter name not spaces").required("Enter Full Name"),
    email:Yup.string().email('Enter Valid Email Address').required("Enter Email Address"),
    phone:Yup.string().matches(/^[0-9]{10,11}$/,"Enter Valid Mobile Number").required("Enter Mobile Number"),
    message:Yup.string().min(10,'Message length should be more than 10').required("Enter the message !")
  }),
  handleSubmit:(values,{setSubmitting})=>{
    alert("You've submitted the form !")
  }
})(Contact);