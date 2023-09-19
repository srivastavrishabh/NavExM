import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainSection from './MainSection'
import Banner from './Banner'
import Market from './Market'

export default function Home() {
  return (
    <div >
      <Header />
      <MainSection />
      <Banner />
      <Market title="Market" />
      <Footer />
    </div>
  )
}
