import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import DashboardCards from '@/components/Dashboard-Card'
const logedInuser="john doe"
const Dashboard = () => {
  return (
    <section className='w-full flex  flex-col gap-4'>
      <HeaderBox
      type ="greeting"
      title="Dashboard"
     
      subtext="this is your FPO Khata "/>



{/* dashboard section */}
      <div className=' w-full'>
      <DashboardCards />

      </div>
    </section>
  )
}

export default Dashboard