export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import LogosHolder from '@/components/logosholder'

export default function Home() {
  return (
    <>
      <Hero />
      <LogosHolder />
      <Features />
      <Newsletter />
    </>
  )
}
