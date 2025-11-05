import { Church, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-cathedral-blue text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="w-8 h-8 text-cathedral-gold" />
              <h3 className="text-xl font-heading font-semibold">Mount Carmel Cathedral</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Preserving our sacred heritage through faith, community, and generous hearts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cathedral-gold flex-shrink-0 mt-1" />
                <span className="text-white/80">Cathedral Road, Chilaw, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cathedral-gold flex-shrink-0" />
                <span className="text-white/80">+94 32 222 1234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cathedral-gold flex-shrink-0" />
                <span className="text-white/80">restore@mtcarmelchilaw.lk</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-cathedral-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-cathedral-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-cathedral-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="text-white/80">
              <p className="font-semibold mb-2">Share Our Mission:</p>
              <p className="text-cathedral-gold">#RestoreMountCarmel</p>
              <p className="text-cathedral-gold">#ChilawCathedral</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Mount Carmel Cathedral Restoration Campaign. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Tax receipts available for all donations
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
