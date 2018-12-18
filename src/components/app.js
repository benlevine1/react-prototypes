import React, {Component} from 'react'
import ContactData from '../data/contacts.js'
import ContactList from './contact_list'
import ContactForm from './contact_form'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            contacts: ContactData
        }
    }
    addContact=(contact)=>{
        this.setState = {
            contacts: [contact, ...this.state.contacts]
        }
    }
    render(){
        return (
        <div className="container">
            <h1 className="text-center">Address Book</h1>
            <div className="row">
                <div className="col-4">
                    <ContactForm add = {this.addContact}/>
                </div>
                <ContactList contacts = {this.state.contacts}/>
            </div>
        </div>
    )}
}
export default App

