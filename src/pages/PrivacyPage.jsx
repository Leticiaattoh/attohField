import  Navbar  from '../components/Navbar'
import React from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Footer from '../components/Footer'

const PrivacyPage = () => {
  return (
      <div>
          <Navbar />
          <PrivacyPolicy />
          <Footer/>
    </div>
  )
}

export default PrivacyPage