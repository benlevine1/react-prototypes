import React, {Component} from 'react'
import Field from './field'

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
    }
    handleInputChange=(event)=>{
        const {value, name} = event.target;
        const{form} = this.state;
        form[name] = value;
        this.setState({
            form: {...form}
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.add(this.state.form);
        this.reset();
    }
    reset=()=>{
        this.setState({
            form:{
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }
    render(){
        const {firstName, lastName, phone, email} = this.state.form;
        return(
            <form onSubmit = {this.handleSubmit}>
                <Field name = 'firstName' label = 'First Name' type = 'text' value = {firstName} onChange = {this.handleInputChange}/>
                <Field name = 'lastName' label = 'Last Name' type = 'text' value = {lastName} onChange = {this.handleInputChange}/>
                <Field name = 'phone' label = 'Phone Number' type = 'text' value = {phone} onChange = {this.handleInputChange}/>
                <Field name = 'email' label = 'Email' type = 'tel' value = {email} onChange = {this.handleInputChange}/>
                <button className = 'btn btn-primary'>Add Contact</button>
                <button className = 'btn' type = 'button' onClick = {this.reset}>Clear Form</button>
            </form>
        )}
}

export default ContactForm;