import React from 'react'
import '../style/contact.css'

function Contact() {
  return (
    <div className='container box'>
    <div className="px-8 py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Business Hours</h2>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
      <h2 className="text-xl font-bold my-4">Visit Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu scelerisque eros, id scelerisque ligula. Fusce porttitor velit in sem scelerisque, vitae maximus risus efficitur.</p>
      <div className="my-4">
        <h2 className="text-xl font-bold mb-2">Social Media</h2>
        <a href="/" className="mr-2 text-blue-500">Facebook</a>
        <a href="/" className="mr-2 text-blue-500">Instagram</a>
        <a href="/" className="text-blue-500">Twitter</a>
      </div>
      <h2 className="text-xl font-bold my-4">Support</h2>
      <p>If you have any questions, please check out our <a href="/" className="text-blue-500">FAQ</a>.</p>
      <p>We strive to respond to all inquiries within 24 hours.</p>
    </div></div>
  )
}

export default Contact
