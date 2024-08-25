// src/components/ContactPage/Contact.tsx

import '../main.scss'
import ContactSection from './ContactSection'
import ContactForm from './Form'
import MapSection from './Map'

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 pt-[80px]">
      <MapSection />
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="flex-1">
          <ContactSection />
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
