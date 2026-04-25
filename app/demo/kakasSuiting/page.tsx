import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: "Kaka's Suiting and Shirtings | Premium Clothing in Bhiwandi",
  description: "Premium suiting and shirting in Bhiwandi. Trusted by 1000+ happy customers for quality fabrics & stitching. Visit us today!",
};

export default function KakasSuitingDemo() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 ${inter.className} selection:bg-[#C5A059] selection:text-white`}>
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className={`text-2xl sm:text-3xl font-bold text-[#0A192F] leading-none ${playfair.className}`}>KAKA'S</h1>
            <span className="text-[0.65rem] sm:text-xs tracking-widest font-semibold text-[#C5A059] uppercase mt-1">Suiting & Shirtings</span>
          </div>
          <a 
            href="tel:+910000000000" 
            className="flex items-center gap-2 border-2 border-[#C5A059] text-[#C5A059] px-4 py-2 text-sm sm:text-base font-semibold rounded hover:bg-[#C5A059] hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1920)' }} 
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A192F]/85 to-[#0A192F]/70" />
        
        <div className="relative z-20 w-full max-w-4xl mx-auto px-5 py-20 text-white">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-6 drop-shadow-md ${playfair.className}`}>
            Premium Suiting & Shirting in Bhiwandi
          </h2>
          <p className="text-lg sm:text-xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
            Trusted by 1000+ happy customers for quality fabrics & stitching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maps.google.com/?q=Shop+No.+2,+363+Lahoti+Compound,+Kalyan+-+Bhiwandi+Rd,+Bhiwandi,+Maharashtra+421302" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0A192F] hover:bg-[#061121] text-white px-8 py-3.5 rounded font-semibold transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Get Directions
            </a>
            <a 
              href="https://wa.me/910000000000?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20collection." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-3.5 rounded font-semibold transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-[#0A192F] mb-4 ${playfair.className}`}>Why Choose Us</h2>
            <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "1000+ Google Reviews", desc: "Proudly rated 4.6★ by our beloved customers.", icon: "star" },
              { title: "High-Quality Fabrics", desc: "Premium materials sourced for durability and comfort.", icon: "layers" },
              { title: "Best Market Pricing", desc: "Unmatched quality at the most competitive rates.", icon: "tag" },
              { title: "Expert Stitching", desc: "Tailored to perfection by experienced craftsmen.", icon: "scissors" },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto bg-[#C5A059]/10 text-[#C5A059] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {/* Simplified generic icon placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                </div>
                <h3 className="text-lg font-bold text-[#0A192F] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-[#0A192F] mb-4 ${playfair.className}`}>Our Collection</h2>
            <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Premium Suiting", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800" },
              { title: "Formal Shirting", img: "https://images.unsplash.com/photo-1620012253295-c1590e048fb0?auto=format&fit=crop&q=80&w=800" },
              { title: "Fabric Collection", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800" },
              { title: "Wedding Collection", img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=800" },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-md cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className={`text-white text-xl font-medium text-center ${playfair.className}`}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-[#0A192F] mb-4 ${playfair.className}`}>What Our Customers Say</h2>
            <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full mb-6"></div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-bold text-[#0A192F]">4.6</span>
              <div className="flex text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <span className="text-gray-500 font-medium">(1000+ Reviews)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul M.", initial: "R", review: "Classy, quality place at best market price and excellent stitching." },
              { name: "Sameer K.", initial: "S", review: "Awesome designs and great variety of clothing materials." },
              { name: "Amit P.", initial: "A", review: "Best fabric, best service, very friendly environment." },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <div className={`absolute top-4 left-6 text-6xl text-[#C5A059]/10 font-serif leading-none ${playfair.className}`}>"</div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-[#0A192F] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A192F]">{review.name}</h4>
                    <div className="flex text-[#FBBC05] w-3 h-3 gap-1">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic relative z-10">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Store Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold text-[#0A192F] mb-8 ${playfair.className}`}>Visit Our Store</h2>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#C5A059] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Store Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Shop No. 2, 363 Lahoti Compound,<br/>Kalyan - Bhiwandi Rd, Bhiwandi,<br/>Maharashtra 421302
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="text-[#C5A059] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                  <p className="text-gray-600">Open Today till 8:00 PM</p>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Shop+No.+2,+363+Lahoti+Compound,+Kalyan+-+Bhiwandi+Rd,+Bhiwandi,+Maharashtra+421302" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0A192F] hover:bg-[#061121] text-white px-8 py-4 rounded font-semibold transition-all shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Get Directions on Google Maps
              </a>
            </div>
            
            <div className="h-[400px] rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1956554523315!2d73.0560731!3d19.273898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd7480a42e5b%3A0x647e62a1228e932b!2sLahoti%20Compound!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="py-16 bg-[#0A192F] text-center">
        <div className="max-w-4xl mx-auto px-5">
          <h3 className={`text-3xl md:text-4xl text-white mb-8 ${playfair.className}`}>See latest stock & designs on WhatsApp</h3>
          <a 
            href="https://wa.me/910000000000?text=Hi%2C%20I%20would%20like%20to%20see%20the%20latest%20designs." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Message Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050c17] text-white/70 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className={`text-2xl text-white font-bold mb-1 ${playfair.className}`}>KAKA'S</h2>
              <p className="text-[#C5A059] text-xs tracking-[0.2em]">SUITING & SHIRTINGS</p>
            </div>
            
            <div className="text-center md:text-right space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-[#C5A059]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                Shop No. 2, 363 Lahoti Compound, Bhiwandi, MH
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-[#C5A059]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                Open Mon-Sun: 10:00 AM - 8:00 PM
              </p>
            </div>
          </div>
          
          <div className="text-center text-sm border-t border-white/10 pt-8">
            <p>&copy; {new Date().getFullYear()} Kaka's Suiting & Shirtings. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      <a 
        href="https://wa.me/910000000000?text=Hi%2C%20I%20need%20help%20with%20your%20products." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebd5a] hover:scale-110 transition-all z-50"
        aria-label="WhatsApp Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span className="absolute w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
      </a>

    </div>
  );
}
