import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Mission from '@/components/Mission'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Mission />
      <CTA />
      <Footer />
    </main>
  )
}
