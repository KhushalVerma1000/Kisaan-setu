import { ImageCarousel } from '@/components/ImageCarousel'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const Home = () => {
  return (
    <section>

      <TopNavbar />

      <ImageCarousel />

      <div className=' mx-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h1 className='mb-4 text-4xl  text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Kisaan Setu</h1>
        <h2 className='text-2xl md:text-4xl font-extrabold dark:text-white'>Your Comprehensive Digital Bridge for FPO Empowerment, Efficiency, and Growth</h2>

        <p className='y-4 text-lg text-gray-500'>Farmer Producer Organizations (FPOs) stand as vital pillars in strengthening the agricultural community, but managing their diverse and complex operations presents unique challenges. From coordinating hundreds of members and tracking countless transactions to optimizing resource allocation and connecting with markets, the need for a robust, integrated system is paramount.</p>
        <p className='y-4 text-lg text-gray-500'>Introducing Kisaan Setu (meaning 'Farmer's Bridge') – more than just software, it's a dedicated, comprehensive platform meticulously designed to bridge these operational gaps. Kisaan Setu is the smart, simple, and intuitive solution built specifically to empower your FPO, cultivate sustainable growth, enhance transparency, and maximize benefits for every single farmer member. It replaces cumbersome paperwork and fragmented systems with a single, unified digital backbone for your entire organization.</p>



        <h2>Unlock the Full Potential of Your FPO with Kisaan Setu's Integrated Modules:</h2>
        <ul className='list-disc list-inside'>
          <li> <span className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Strengthen Your Foundation: Streamlined Member Management</span>
            <ul className='max-w-xlmax-w-xl p-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
              <li>Easily onboard, manage, and maintain detailed profiles for all farmer members, including land holdings and cropping patterns.</li>
              <li>Centralize communication, track member activities, and foster a stronger, more connected community.</li>
              <li>Build a solid, organized foundation for all FPO activities and benefit distribution.</li>

            </ul>
          </li>



          <li> <span className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Optimize Core Operations: Efficient Input, Inventory & Procurement Control

          </span>
            <ul className='max-w-xlmax-w-xl p-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
              <li>Gain real-time visibility and efficiently track the procurement, stock levels, and distribution of crucial inputs like seeds, fertilizers, and pesticides.
              </li>
              <li>Seamlessly manage aggregated produce inventory from members, reducing spoilage and enabling better sales planning.
              </li>
              <li>Streamline the entire procurement process, save valuable time, reduce manual errors, and ensure resource availability.
              </li>

            </ul>
          </li>


          <li> <span className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Achieve Financial Clarity & Control: Integrated Accounting</span>
            <ul className='max-w-xlmax-w-xl p-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
              <li>Simplify your FPO's financial management with easy-to-use tools for tracking payments, receivables, expenses, and member share capital.
              </li>
              <li>Manage transactions transparently, generate accurate financial statements (like Balance Sheets, P&L), and gain a clear understanding of your organization's financial health.
              </li>
              <li>Enhance financial accountability across all operations, ensuring trust and compliance.
              </li>

            </ul>
          </li>


          <li> <span className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Unlock Market Potential: Enhanced Sales & Market Linkages

          </span>
            <ul className='max-w-xlmax-w-xl p-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
              <li>Efficiently manage the collective marketing and sales process for aggregated member produce.</li>
              <li>Track sales orders, deliveries, and buyer payments systematically.
              </li>
              <li>Facilitate better connections between your FPO's output and potential buyers, unlocking improved market opportunities and prices.
              </li>

            </ul>
          </li>

          <li> <span className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Empower with Insights: Data-Driven Decisions & Reporting

          </span>
            <ul className='max-w-xlmax-w-xl p-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
              <li>Move beyond guesswork with powerful, easy-to-understand reports and analytics.
              </li>
              <li>Gain valuable, crucial insights into operational efficiency, financial performance, member activity, and inventory turnover.
              </li>
              <li>Make informed, strategic decisions to guide your FPO's direction, optimize resource allocation, and drive profitability.
              </li>

            </ul>
          </li>


          <li> <span className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>The Kisaan Setu Advantage: Your Essential Bridge to Success</span>
            <ul className='max-w-xlmax-w-xl p-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
              <li><span className='font-semibold text-gray-900 dark:text-white'>Operate with Peak Efficiency:</span>Automate tasks, eliminate redundant paperwork, and significantly reduce manual errors.</li>
              <li><span className='font-semibold text-gray-900 dark:text-white'>Enhance Transparency & Accountability: </span>Foster trust among members and stakeholders with clear, accessible data.</li>
              <li><span className='font-semibold text-gray-900 dark:text-white'>Drive Profitability:</span> Optimize operations from input procurement to final sale, maximizing returns for members</li>
              <li><span className='font-semibold text-gray-900 dark:text-white'>Empower Your Members:</span>Ensure fair practices and clear communication regarding transactions and benefits.</li>
              <li><span className='font-semibold text-gray-900 dark:text-white'>Cultivate Sustainable Growth:</span>Build a stronger, more resilient, and data-informed organization poised for future success.</li>

            </ul>
          </li>

        </ul>

      </div>
  
      <footer>
    <div className=" bg-purple-950 py-4 text-gray-400">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 my-4 w-full xl:w-1/5">
            <a href="/" className=" flex items-center gap-2   mb-10">
             <img src="/Logo.jpeg" alt="Logo" className=" w-16 h-16 rounded-2xl" /> 
             <span className=' text-3xl font-bold'>Kisaan Setu</span>
            </a>
            <p className="text-justify">
            Build a transparent, efficient, and prosperous future for your farmer members. Let Kisaan Setu be the essential digital bridge connecting your FPO's efforts to tangible success.            </p>
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
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
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