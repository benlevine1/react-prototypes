
import React, {Component} from 'react'
import ContactList from './contact_list'
import ContactForm from './contact_form'
import ContactData from '../data/contacts.js'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            contacts: ContactData
        }
    }
    addContact=(contact)=>{
        this.setState({
            contacts: [contact, ...this.state.contacts]
        })
    }
    deleteContact = () =>{
        console.log('clicked delete button', this.props.key, this.state.contacts)
        const newContacts = this.state.contacts.filter();
        this.setState({
            contacts: newContacts
        })
    }
    render(){
        return (
        <div className="container">
            <h1 className="text-center">Address Book</h1>
            <div className="row">
                <div className="col-4">
                    <ContactForm add = {this.addContact}/>
                </div>
                <ContactList delete = {this.deleteContact} contacts = {this.state.contacts}/>
            </div>
        </div>
    )}
}
export default App
