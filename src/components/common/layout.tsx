import Footer from './footer'
import Navbar from './navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex container mx-auto max-w-screen-md place-content-center">
      <div className="justify-center items-center">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}
