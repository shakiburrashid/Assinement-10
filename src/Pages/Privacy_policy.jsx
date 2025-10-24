import React from 'react'
import { Link } from 'react-router-dom'

const Privacy_policy = () => {
  return (
    <div className='mx-20 my-10'>
      <h1 className='text-5xl font-bold text-center my-5 underline'>Privacy Policy</h1>
      <p className='text-3xl'><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
      <p className='text-xl'>Your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.</p>
      <h1 className='text-3xl font-bold text-left my-5'>Information We Collect</h1>
      <p className='text-xl'>When you use Learn24/7, we may collect the following types of information:
        <ul className='list-disc list-inside'>
          <li><strong>Personal Information:</strong> Name, email address, profile picture, and other details you provide during registration.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our platform, including courses viewed, time spent, and preferences.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience and gather information about site usage.</li>
        </ul>
      </p>
      <h1 className='text-3xl font-bold text-left my-5'>How We Use Your Information</h1>
      <p className='text-xl'>We use your data to:
        <ul className='list-disc list-inside'>
          <li>Provide and maintain our services.</li>
          <li>Personalize your learning experience.</li>
          <li>Communicate with you about updates, promotions, and support.</li>
          <li>Improve our platform and develop new features.</li>
        </ul>
      </p>
      <h1 className='text-3xl font-bold text-left my-5'>Data Security</h1>
      <p className='text-xl'>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
      <h1 className='text-3xl font-bold text-left my-5'>Your Rights</h1>
      <p className='text-xl'>You have the right to access, correct, or delete your personal information. You can also opt-out of receiving promotional communications at any time.</p>
      <h1 className='text-3xl font-bold text-left my-5'>Changes to This Privacy Policy</h1>
      <p className='text-xl'>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <h1 className='text-3xl font-bold text-left my-5'>Contact Us</h1>
      <p className='text-xl'>If you have any questions about this Privacy Policy, please contact us at learn247@gmail.com or<Link to={'/contact'} className='btn btn-link'>Contact Us</Link></p>
    </div>
  )
}

export default Privacy_policy
