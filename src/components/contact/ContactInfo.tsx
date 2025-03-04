
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8">
      <h3 className="text-xl font-light mb-4 md:mb-6 text-white">Kontaktinformationen</h3>
      <div className="space-y-4 md:space-y-6 text-sm">
        <div className="flex items-start">
          <div className="w-8 flex-shrink-0 flex items-center justify-center">
            <Mail size={18} className="text-wine" />
          </div>
          <div>
            <p className="font-medium mb-1 text-white">E-Mail</p>
            <a href="mailto:info@vinligna.com" className="text-wine hover:underline">info@vinligna.com</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-8 flex-shrink-0 flex items-center justify-center">
            <Phone size={18} className="text-wine" />
          </div>
          <div>
            <p className="font-medium mb-1 text-white">Telefon</p>
            <a href="tel:+4963623094990" className="text-white/80 hover:text-wine">+49 6362 309 49 90</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-8 flex-shrink-0 flex items-center justify-center">
            <MapPin size={18} className="text-wine" />
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
