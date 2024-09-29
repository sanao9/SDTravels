"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function ContactFormAndFooter() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    contact: '',
    message: '',
  })
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12 relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-black transform -skew-x-12 -ml-32 z-0"></div>
        <div className="flex flex-wrap -mx-4 relative z-10">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Serendipity Travels</h2>
              <p className="text-xl mb-4">Sri Lanka: A Paradise Awaits</p>
              <p className="text-sm mb-4">
                Regístrate y disfruta de todas las ventajas que te ofrecemos, introduce tus datos y empieza la transformación de tu restaurante.
              </p>
              <Image
                src="/Group 1137.png"
                alt="Sri Lankan landmarks illustration"
                width={300}
                height={200}
                className="mt-8"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
              <div className="flex items-center text-sm">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="mr-2"
                  required
                />
                <label htmlFor="privacy-policy">
                  I have read and accept the <a href="#" className="text-blue-600 hover:underline">privacy policy</a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <Image
                src="/Logo.png"
                alt="Serendipity Travels Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div className="mt-2 text-center text-xs">
            <p>© 2024 Serendipity Travels. All rights reserved.</p>
            <p>Ceyron Labs (Pvt.) LTD.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}