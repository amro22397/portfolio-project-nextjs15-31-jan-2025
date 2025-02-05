'use client'

import React, { useState } from 'react'

import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel,
  SelectTrigger } from '../../../components/ui/select'

  import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

  import { info } from '../../../public/Constants'

  import { motion } from 'framer-motion';
import { SelectValue } from '@radix-ui/react-select'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const page = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const pathName = usePathname();



const handleChange = () => {
  setMessageSuccess(false);
  setError('');
}


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [messageSuccess, setMessageSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

          formData.append("access_key", "ce9610a5-e759-46bf-86a7-08b198f09ac4");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

        if (firstName === '' || phoneNumber === '' || email === '' || message === '') {
          setMessageSuccess(false);
          setError({
            message: 'Please fill all the fields',
          })
          return;
        }

        setLoading(true);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: "application/json"
            },
            body: json,
          });

          if (res.ok) {
            setMessageSuccess(true);
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhoneNumber('');
              setMessage('');
          } else {
            setMessageSuccess(false)
          }
          const result = await res.json();
          if (result.success) {
              console.log(result);
              
          }

          setLoading(false)

    }

    const contactPage = useTranslations('ContactPage')
    
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
    className='py-6 max-w-[100vw] sm:max-w-[575px]
     xl:max-w-[1400px] mx-auto'
    >
      <div className="containter mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <div className={`xl:h-[54%] order-2 xl:order-none
            ${pathName.includes('ar') ? 'xl:max-w-[675px]' : ''}`}>

            <form onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 bg-[#27272c] dark:bg-[#414149] sm:rounded-xl rounded-none">
              <h3 className={`text-4xl text-orange-400 
                ${pathName.includes('ar') ? 'text-2xl' : ''}`}>{contactPage('WorkTogether')}</h3>
              <p className={`text-white/60 ${pathName.includes('ar') ? 'text-md' : ''}`}>
              {contactPage('HappyGetRequests')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type='firstname' placeholder={contactPage('p-First Name')}
                onChange={(e) => {
                  handleChange();
                  setFirstName(e.target.value);
                }} name="firstName" id="firstName"
                value={firstName} />

                <Input type='lastname' placeholder={contactPage('p-Last Name')}
                 onChange={(e) => {
                  handleChange();
                  setLastName(e.target.value);
                }} name="lastName" id="lastName" 
                 value={lastName} />

                <Input type='email' placeholder={contactPage('p-Email address')}
                onChange={(e) => {
                  handleChange();
                  setEmail(e.target.value);
                }} name="email" id="email"
                value={email} />

                <Input type='phone' placeholder={contactPage('p-Phone number')}
                onChange={(e) => {
                  handleChange();
                  setPhoneNumber(e.target.value);
                }} name="phoneNumber" id="phoneNumber"
                value={phoneNumber}  />

              </div>

              <select onChange={handleChange} id="service"
              name="service" defaultValue="Frontend"
              className='bg-gray-700 text-white/80 px-3
              py-3 border border-gray-50/10'>
                <option value="Frontend">{contactPage('Frontend Development')}</option>
                <option value="Backend">{contactPage('Backend Development')}</option>
                <option value="Full Stack">{contactPage('Full Stack Development')}</option>
              </select>

              <Textarea 
              name="message"
              className="h-[200px]"
              placeholder={contactPage('textAreaMessage')}
              onChange={(e) => {
                handleChange();
                setMessage(e.target.value);
              }} id="message"
              value={message} 
              />

              {error && (
                <div className="text-red-600 text-lg">
                  {error.message}
                </div>
              )}

              <Button type='submit'
              size="md" className="max-w-40 py-2 bg-orange-600 hover:bg-orange-700
              active:bg-amber-800 text-white disabled:bg-gray-400" disabled={loading}>
                {loading ? contactPage('Sending...') : contactPage('Send message')}
              </Button>

              {messageSuccess && (
                <div className="flex flex-row items-center justify-center text-white text-xl
                gap-2">
                  <i class="fa-solid fa-circle-check
                  text-green-600 "></i>
                  <span>{contactPage('Message sent successfully!')}</span>
                </div>
              )}
            </form>
          </div>

          <div className="flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0 mx-auto">
            <ul className=''>
              {info.map((item, index) => {

                return (
                  <li key={index} className='flex flex-row gap-3 my-12'>

                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                    bg-[#27272c] text-white rounded-md flex items-center
                    justify-center'>
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-black dark:text-white font-semibold">
                        {pathName.includes("en") ? item.title : item.arTitle}
                      </p>
                      <h3 className="">
                      {pathName.includes("en") && item?.description ? item.description :
                      item?.arDescription && item.arDescription}
                      {pathName.includes("en") && item?.link ? (
                        <Link href={item?.link} target='_blank'
                        className='text-green-500 hover:underline active:scale-95'>
                          Click Here
                        </Link>
                      ) : item?.arLink && (
                        <Link href={item?.arLink} target='_blank'
                        className='text-green-500 hover:underline active:scale-95'>
                          أضغط هنا
                        </Link>
                      )}
                      </h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default page
