
import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
      <h3 className="text-xl font-light mb-6 text-white">Kontaktinformationen</h3>
      <div className="space-y-4 text-sm">
        <div className="flex items-start">
          <div className="w-6 h-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-wine/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-wine">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <p className="font-medium mb-1 text-white">E-Mail</p>
            <a href="mailto:info@vinligna.com" className="text-wine hover:underline">info@vinligna.com</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-6 h-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-wine/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-wine">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <div>
            <p className="font-medium mb-1 text-white">Telefon</p>
            <a href="tel:+4963623094990" className="text-white/80 hover:text-wine">+49 6362 309 49 90</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-6 h-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-wine/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-wine">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div>
            <p className="font-medium mb-1 text-white">Werkstattadresse</p>
            <address className="not-italic text-white/80">
              VinLignum Holzmanufaktur GmbH & Co. KG<br />
              Industriestraße 19<br />
              67821 Alsenz<br />
              Deutschland
            </address>
            <p className="text-xs text-white/50 mt-2">Besuche nur nach Vereinbarung</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
