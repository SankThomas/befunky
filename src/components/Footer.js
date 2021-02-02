import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'
import data from '../data/footer'
import logo from '../images/logo.svg'

const Footer = () => {
  const [footerLinks, setFooterLinks] = React.useState(data)

  return (
    <>
      <footer className="p-10 sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:w-9/12 lg:mx-auto">
        <div className="mr-10 mb-10">
          <img src={logo} alt="" />
          <ul className="flex">
            <li className="mx-2 ">
              <FaFacebook className="text-lg" />
            </li>
            <li className="mx-2">
              <FaTwitter className="text-lg" />
            </li>
            <li className="mx-2 ">
              <FaInstagram className="text-lg" />
            </li>
            <li className="mx-2 ">
              <FaLinkedin className="text-lg" />
            </li>
            <li className="mx-2 ">
              <FaPinterest className="text-lg" />
            </li>
            <li className="mx-2">
              <FaYoutube className="text-lg" />
            </li>
          </ul>
        </div>
        {footerLinks.map((footerLink) => {
          const { id, title, links } = footerLink

          return (
            <div key={id}>
              <h4 className="font-bold text-xl mb-4">{title}</h4>
              <ul className="mb-5">
                {links.map((link) => {
                  return (
                    <li
                      key={link}
                      className="mb-2 text-sm text-gray-500 cursor-pointer hover:text-black"
                    >
                      {link}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </footer>
    </>
  )
}

export default Footer
