import React from 'react';
import { MdFastfood } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BsTelephonePlus, BsTwitter } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  const sections = [
    {
      title: 'Your Food Partner in Hunger',
      content: (
        <div className='flex flex-col items-center md:items-start'>
          <MdFastfood className="text-5xl text-orange-500" />
          <span className="text-xl text-black font-semibold">SherryEats</span>
        </div>
      ),
      description:
        "Enjoy the best food delivery experience with SherryEats. We're here to serve you!",
      copyright: 'SherryEats. All Rights Reserved.',
    },
    {
      title: 'Explore',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Menu', href: '/menu' },
        { label: 'Contact Us', href: '/contact-us' },
      ],
    },
    {
      title: 'Get In Touch',
      contactItems: [
        { icon: <GoLocation />, text: 'Istanbul, Turkey' },
        { icon: <BsTelephonePlus />, text: '+90 501 090 89 17' },
        { icon: <AiOutlineMail />, text: 'its.hussaiin@example.com' },
      ],
    },
    {
      title: 'Connect With Us',
      socialLinks: [
        { icon: <FaFacebookF />, href: '/' },
        { icon: <BsTwitter />, href: '/' },
        { icon: <FaInstagram />, href: '/' },
      ],
    },
  ];

  const renderLinks = (links) => (
    <ul className="mt-4">
      {links.map((link, index) => (
        <li key={index} className="text-sm mb-4 font-semibold text-gray-600">
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );

  const renderContactItems = (contactItems) => (
    <ul className="mt-4">
      {contactItems.map((item, index) => (
        <li key={index} className="text-sm mb-4 ml-16 sm:ml-0 font-semibold text-gray-600">
          <a className="flex items-center gap-2">
            {item.icon}
            <span>{item.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );

  const renderSocialLinks = (socialLinks) => (
    <ul className="mt-4 flex gap-4 justify-center items-center">
      {socialLinks.map((link, index) => (
        <li key={index} className="text-sm mb-4 font-semibold text-gray-600">
          <a href={link.href}>
            <a className="flex items-center gap-2">
              {link.icon}
              <span>{link.label}</span>
            </a>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid place-items-center grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 items-start bg-gray-50">
        {sections.map((section, index) => (
          <div key={index} className="text-center mb-4 lg:text-left lg:mb-0">
            <h2 className="font-semibold text-md ">{section.title}</h2>
            {section.content && <div className=''>{section.content}</div>}
            {section.description && (
              <p className="my-6 text-gray-600 text-sm text-justify sm:text-center md:text-left leading-8">
                {section.description}
              </p>
            )}
            {section.links && renderLinks(section.links)}
            {section.contactItems && renderContactItems(section.contactItems)}
            {section.socialLinks && renderSocialLinks(section.socialLinks)}
          </div>
        ))}
      </div>
      <div className="py-8 pt-2 px-2">
        <h5 className="text-black text-sm text-center leading-6">
          {sections[0].copyright}
        </h5>
      </div>
    </div>
  );
};

export default Footer;