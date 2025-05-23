import { ImageCarousel } from '@/components/ImageCarousel'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Home = () => {
  return (
    <section>

      <TopNavbar />

      <ImageCarousel />

      <div className='mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h1 className='mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Kisaan Setu</h1>
        <h2 className='text-2xl md:text-4xl font-extrabold dark:text-white'>Your Comprehensive Digital Bridge for FPO Empowerment, Efficiency, and Growth</h2>

        <p className='y-4 text-lg text-gray-500'>Farmer Producer Organizations (FPOs) stand as vital pillars in strengthening the agricultural community, but managing their diverse and complex operations presents unique challenges. From coordinating hundreds of members and tracking countless transactions to optimizing resource allocation and connecting with markets, the need for a robust, integrated system is paramount.</p>
        <p className="y-4 text-lg text-gray-500">Introducing Kisaan Setu meaning &apos;Farmer&apos;s Bridge&apos; more than just software, it&apos;s a dedicated, comprehensive platform meticulously designed to bridge these operational gaps.</p>

        <h2>Unlock the Full Potential of Your FPO with Kisaan Setu&apos;s Integrated Modules:</h2>
        
        {/* Rest of the list items */}
        <ul className='list-disc list-inside'>
          <li><span className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Enhance Transparency & Accountability: </span>Foster trust among members and stakeholders with clear, accessible data.</li>
          <li><span className='font-semibold text-gray-900 dark:text-white'>Drive Profitability:</span> Optimize operations from input procurement to final sale, maximizing returns for members</li>
          <li>Simplify your FPO&apos;s financial management with easy-to-use tools for tracking payments, receivables, expenses, and member share capital.</li>
          <li>Manage transactions transparently, generate accurate financial statements (like Balance Sheets, P&L), and gain a clear understanding of your organization&apos;s financial health.</li>
          <li>Facilitate better connections between your FPO&apos;s output and potential buyers, unlocking improved market opportunities and prices.</li>
        </ul>
      </div>
  
      <footer>
    <div className=" bg-purple-950 py-4 text-gray-400">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 my-4 w-full xl:w-1/5">
            <Link href="/" className="flex items-center gap-2 mb-10">
              <Image 
                src="/Logo.jpeg" 
                alt="Logo" 
                width={64}
                height={64}
                className="rounded-2xl"
              />
              <span className="text-3xl font-bold">Kisaan Setu</span>
            </Link>
            <p className="text-justify">
            Build a transparent, efficient, and prosperous future for your farmer members. Let Kisaan Setu be the essential digital bridge connecting your FPOs efforts to tangible success.</p>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
            </div>
            <ul className="leading-8">
              <li><a href="https://sukrshinfotech.com/Farmermobalization/" className="hover:text-blue-400">About Us</a></li>

              <li><a href="https://sukrshinfotech.com/Contact/" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Sukrsh</h2>
            </div>
            <p className=' w-96'>Sukrsh Infotech Private Limited is a consultancy firm specializing in agriculture, water, and sanitation projects, partnering with government and non-government organizations to drive sustainable rural development.</p>
          </div>
          {/* <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
            </div>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </div>
    <div className="bg-indigo-700 py-4 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            Copyright © 2025
          
            Sukrsh. All Rights Reserved.
          </div>
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
           Sukrsh Infotech Pvt. Ltd.
          </div>
        </div>
      </div>
    </div>
  </footer>
    </section>

  )
}

export default Home