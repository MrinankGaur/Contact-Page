import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeaer/ContactHeader'
import Button from './components/Button/Button'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <div>
      <Navigation/>
      <ContactHeader/>
      <ContactForm/>
    </div>
   
  )
}


export default App
