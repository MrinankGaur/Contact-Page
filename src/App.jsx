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
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
   
  )
}


export default App
