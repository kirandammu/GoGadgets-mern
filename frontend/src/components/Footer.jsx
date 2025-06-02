import React from 'react'
import { assets, footerLinks } from '../assets/assets';

const Footer = () => {

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-black mt-20">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-300">
                <div>
                    <div className='flex items-start flex-col mx-auto w-40'>
                        <div className='font-semibold text-2xl uppercase text-[red]'>Go <span className='text-gray-100'>Gadgets</span></div>
                        <span className='w-26 h-0.5 bg-gray-300'></span>        
                    </div> 
                    <p className="max-w-[410px] mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
                </div>
                <div className="grid grid-cols-1 md:flex justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-100 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-200">
                Copyright {new Date().getFullYear()} © DAMMU KIRAN All Right Reserved.
            </p>
        </div>
    );
};
export default Footer