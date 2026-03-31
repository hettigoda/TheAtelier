/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Flower, 
  Scissors, 
  Heart, 
  User, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  MessageSquare, 
  Phone,
  Globe,
  Instagram,
  Share2,
  MoveRight,
  X,
  Calendar,
  Clock,
  Menu,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Info,
  Lock,
  Image as ImageIcon
} from "lucide-react";

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void; currentPage: string }) => (
  <nav className="sticky top-0 w-full z-50 glass shadow-sm shadow-stone-200/50">
    <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
        <Flower className="text-primary w-6 h-6" />
        <span className="text-2xl font-bold tracking-tighter text-primary font-headline">THE ATELIER</span>
      </div>
      <div className="hidden md:flex items-center gap-10 font-label text-sm tracking-widest">
        <button 
          onClick={() => onNavigate('home')}
          className={`${currentPage === 'home' ? 'text-primary border-b-1.5 border-primary' : 'text-stone-500 hover:text-primary'} transition-colors duration-300 uppercase`}
        >
          ATELIER
        </button>
        <button className="text-stone-500 hover:text-primary transition-colors duration-300 uppercase">SERVICES</button>
        <button className="text-stone-500 hover:text-primary transition-colors duration-300 uppercase">RITUALS</button>
        <button 
          onClick={() => onNavigate('booking')}
          className={`${currentPage === 'booking' ? 'text-primary border-b-1.5 border-primary' : 'text-stone-500 hover:text-primary'} transition-colors duration-300 uppercase`}
        >
          BOOKING
        </button>
      </div>
      <button 
        onClick={() => onNavigate('booking')}
        className="gold-gradient text-on-primary px-8 py-3 rounded-full font-label text-xs tracking-[0.2em] font-bold active:scale-95 transition-all"
      >
        BOOK NOW
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-[795px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        alt="Luxury Salon Interior" 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUGZ0hV5vjIYsgA5ko5gLgBMdwKaCsA4SAO_r4cT_c0kTfKqsqcPPT0czqcBw8VQ3fFRubL94F84srowaxdf0qnZ25259R3zmsqbSIKJdLIAAvrfRp3sAx4apsoxZYlObolElEVbWg5deZIFcVoUgVeOd_jrczjq4kjm1TyOZC4R-6-e8z7aoJKl_T3OnqvQCeNJoJmPDXSGbzNcFvnv1IEddZ7ddKU10HVDhMk-tZmdbb5yx00LV6HQvVHOLCtqr5fTVuHabc89M"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1 mb-6 border border-primary-container text-primary font-label text-[10px] tracking-[0.3em] uppercase rounded-full">
          EST. 2024 • THE DIGITAL ATELIER
        </span>
        <h1 className="font-headline text-6xl md:text-8xl leading-[1.1] text-on-surface mb-8 tracking-tight">
          Transform Your <span className="italic text-primary">Beauty</span>, Elevate Your Confidence.
        </h1>
        <p className="text-xl text-on-surface-variant font-light mb-10 max-w-xl leading-relaxed">
          A curated sanctuary where bespoke artistry meets the precision of clinical excellence. Discover the ritual of transformation.
        </p>
        <div className="flex flex-wrap gap-6">
          <button className="gold-gradient text-on-primary px-10 py-5 rounded-full font-label text-sm tracking-widest font-bold shadow-xl shadow-primary/20 active:scale-95 transition-all">
            BOOK APPOINTMENT
          </button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface px-10 py-5 rounded-full font-label text-sm tracking-widest hover:bg-surface-container-low active:scale-95 transition-all">
            VIEW SERVICES
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const detailedServices = [
  {
    title: "Biologique Recherche Skincare",
    duration: "90 mins",
    price: "$250",
    description: "A personalized skin analysis followed by a bespoke methodology using high-concentration active ingredients for immediate, visible results."
  },
  {
    title: "Artisanal Hair Styling",
    duration: "60-120 mins",
    price: "From $120",
    description: "Master cuts and bespoke coloring tailored to your facial structure and lifestyle, using sustainable, high-performance products."
  },
  {
    title: "Bridal Masterclass",
    duration: "180 mins",
    price: "$450",
    description: "A comprehensive consultation and application for timeless elegance, ensuring you look radiant for your most significant moments."
  },
  {
    title: "Spa & Holistic Massage",
    duration: "60/90 mins",
    price: "From $140",
    description: "Reconnect with your essence through therapeutic touch, essential oils, and ancient techniques designed to melt away tension."
  },
  {
    title: "Atelier Nail Care",
    duration: "45-75 mins",
    price: "From $85",
    description: "High-precision manicure and pedicure services using premium, non-toxic polishes and nourishing botanical treatments."
  }
];

const Services = ({ onBook }: { onBook: (service: any) => void }) => (
  <section className="py-24 bg-surface-container-low px-8">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-headline text-5xl mb-4">The Rituals</h2>
          <p className="text-on-surface-variant max-w-md">Each treatment is a choreographed performance designed for your unique anatomy and spirit.</p>
        </div>
        <div className="text-primary font-label text-xs tracking-widest border-b border-primary pb-1 uppercase cursor-pointer hover:opacity-70 transition-opacity">
          Explore Full Menu
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured: Skincare */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-8 group relative overflow-hidden rounded-xl h-[500px]"
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9U8rR7y7hjdUT6s6lKV_hZVselECJ4b8K6hrpRKr-qwOr51Mlj6d0Sj_INVdRtu05iy2r65xrI6sUgfrLnMOWnag2IX6Dmp1oF7sxP--g4rUa5FDQvP45ANVKfOHONgRFTGNN7Vvy0Mzmc_rW1zB5pz6Qd_lHfKrT3qvkWwySTjgla9kxkYggDY9_8rLKsnWSzAdQCvOriEux12rTbU-bmsecoQpu_laP_Kwstj_AXYYPzGX4rhV_NzxSIqy9EkbkRQ1PdRNR2oM"
            referrerPolicy="no-referrer"
            alt="Skincare Ritual"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 w-full">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-primary-container font-label text-[10px] tracking-widest uppercase mb-2 block">SIGNATURE RITUAL</span>
                <h3 className="font-headline text-3xl text-white">Biologique Recherche Skincare</h3>
                <p className="text-white/70 max-w-xs mt-2">Personalized skin analysis and methodology for immediate, visible results.</p>
              </div>
              <div className="text-white font-headline text-2xl">From $250</div>
            </div>
          </div>
        </motion.div>

        {/* Side Card 1: Hair */}
        <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between editorial-shadow border border-outline-variant/10">
          <div className="flex justify-between items-start">
            <Scissors className="w-10 h-10 text-primary/40" strokeWidth={1} />
            <div className="bg-tertiary-container/20 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest">POPULAR</div>
          </div>
          <div>
            <h3 className="font-headline text-2xl mb-2">Artisanal Hair Styling</h3>
            <p className="text-on-surface-variant text-sm mb-6">Master cuts and bespoke coloring tailored to your facial structure.</p>
            <div 
              onClick={() => onBook(detailedServices[1])}
              className="flex items-center gap-2 text-primary font-label text-[10px] tracking-widest group cursor-pointer"
            >
              <span>RESERVE NOW</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Small Cards Grid Row */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-xl h-[350px]">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQf90mysDnC8lxtHhBX7cZvvuASgiRM0id3xUfPIZYmBbuTxhkCvvVAldeS6GXIthRKfDHsL2pPzbWoS4QaOEhYZQC9J9umAgB5fvdEAKfpcD6K1loqcNOI7aAlM188gzN6IHYRGR8xwOZAg1I-P9F7P5f0DAr6nnANiMfdPuRVNkVh3iJ8YvIRRYcthV0uugp5WOHeFbPIZn3dJs_sahdp-I2-cdqaoG3-ucZsmsXnpSNzxlAToPpw5T93FcSepIx4TB2Y_2CW8g"
            referrerPolicy="no-referrer"
            alt="Bridal Masterclass"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <div>
              <h3 className="font-headline text-2xl text-white mb-2">Bridal Masterclass</h3>
              <p className="text-white/80 text-sm">Timeless elegance for your most significant moments.</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-white p-10 rounded-xl editorial-shadow relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl"></div>
          <Heart className="w-10 h-10 text-primary/40 mb-6" strokeWidth={1} />
          <h3 className="font-headline text-2xl mb-2">Spa & Holistic Massage</h3>
          <p className="text-on-surface-variant text-sm mb-8">Reconnect with your essence through therapeutic touch and essential oils.</p>
          <p className="text-primary font-headline text-xl">From $140</p>
        </div>

        <div className="md:col-span-4 group relative overflow-hidden rounded-xl h-[350px]">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhpODga4hQlsBr9YePU4gQOxwZvPU679xQDpmU7ZXMKrTyAF6jG3JwWhkCgSQtjs9_iOJeEtq5dXHgSMQBkpdhTlzv4PikD6WX-RtV45SZ1zo_WQ1L4_Syp8LKRK9w0HFRHZTrr_isgddcmqlAOLiCdPaZtpqazm1TnWCtOmsEXTp-dcaHC6AE_5_uvzyAV9C7HNmgD3uJAgJ-xVl9WvQOufYM-sP7IoWdHAnFdPjI1nnsR2OIexsOOW-YuZZ8IVyjEYnKlZ9eTI0"
            referrerPolicy="no-referrer"
            alt="Nail Care"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="font-headline text-xl text-white">Atelier Nail Care</h3>
            <span className="text-white/70 text-xs font-label tracking-widest uppercase">From $85</span>
          </div>
        </div>
      </div>

      {/* Detailed Service Menu */}
      <div className="mt-32 border-t border-outline-variant/20">
        <div className="pt-16 mb-12">
          <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase block mb-4">Curated Menu</span>
          <h3 className="font-headline text-4xl">Service Details</h3>
        </div>
        <div className="space-y-0">
          {detailedServices.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-12 border-b border-outline-variant/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group hover:bg-surface-container-lowest/50 transition-colors px-6 -mx-6 rounded-xl"
            >
              <div className="md:col-span-4">
                <h4 className="font-headline text-2xl mb-2">{service.title}</h4>
                <div className="flex gap-4 text-primary font-label text-[10px] tracking-widest uppercase">
                  <span>{service.duration}</span>
                  <span className="opacity-30">•</span>
                  <span>{service.price}</span>
                </div>
              </div>
              <div className="md:col-span-6">
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">{service.description}</p>
              </div>
              <div className="md:col-span-2 text-right">
                <button 
                  onClick={() => onBook(service)}
                  className="text-primary font-label text-[10px] tracking-widest border border-primary/20 px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all font-bold"
                >
                  RESERVE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Practitioners = () => (
  <section className="py-24 px-8 overflow-hidden">
    <div className="max-w-screen-2xl mx-auto">
      <div className="mb-16">
        <h2 className="font-headline text-5xl mb-4">Master Practitioners</h2>
        <div className="w-24 h-1 bg-primary-container mb-6"></div>
        <p className="text-on-surface-variant max-w-xl">Our artists are chosen not just for their technical precision, but for their ability to interpret your unique vision into reality.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            name: "Julian Thorne",
            role: "Principal Colorist • 15Y EXP",
            desc: "Specializing in dimensional balayage and architectural cuts that evolve beautifully over time.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjFTBIAz9w1039RH0M_b0l9uMS_n7zePtwzjQp26jtFtgYrPmX3K2UUVCVhZfl73h7Crf5_UBP5HwtLtMVqiClDi3Ui25v5p7T1WvM2TmuOyzSA5i0oJ2sX9q-ksDigReXrc3Y_sb_QAvnmOLvNgsqKBMeRZsivRi27U4hlaJf-SSDjbuN2AqD7hjJ0ASoJXWrra87cTHSm0HGHh9tMy2jTDNLSfY3PwtrI3xjg5bSiPm8SFUelRsYdYyoikagItXsztiWizhkoUk"
          },
          {
            name: "Elena Vance",
            role: "Skin Therapist • 12Y EXP",
            desc: "Dedicated to non-invasive facial rejuvenation and custom clinical skincare regimens.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCW-MyMmTywJSqveqiKHzeJA1hddJUnurTqgflxa-PHJG0lz8XpMPsCIE1tbU8CnhLcrcSl-GOw78fhhgiYxjRWfxyEYI-Ln7mkWMiR2xblZhdwN6IZlNBpAGEh7T5kodW5yxbViROG0ZAZTo2ye1HnISwYzKzS5B5eHMqtjk_de5kWOEeEUMZgxfdCeJ-JYGTIYRgn0qF7cSyNnRNnmvFIY120cC-JH0qm59jrluWLMXy5p6oJnhVS0VjabkxEbArc0jJL_mZL5U"
          },
          {
            name: "Marcus Chen",
            role: "Bridal Lead • 10Y EXP",
            desc: "Renowned for creating 'lit-from-within' looks that bridge the gap between editorial and natural.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMbHvkbn_2tz8e9ZdUKiCsn6OCSL1E6t5V14wGku2vFMQ6iO1jc9ko4eDxG_ePQDfllxHW9nheAccAvSbQA1AZk8Nf7Jdh-Q7poLyaxjxNFOOeTBqu8shirpIRMABYo09PIlnU8JcTdA5lkULWw31drXMhrhAw4HJm8waiCajg92WiZ9VyFbMvWUV51IrsNRhVo_nmtQYVUSBu0P_TVt_GgYu2z9B4YfwJMdiPO7YDGoxwTZfxIv5ObO8VNj3e45_qwowh5DLaNGQ"
          }
        ].map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="relative mb-6 overflow-hidden aspect-[3/4] rounded-lg">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                src={p.img}
                referrerPolicy="no-referrer"
                alt={p.name}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-on-surface px-6 py-3 rounded-full font-label text-[10px] tracking-widest font-bold">VIEW PORTFOLIO</button>
              </div>
            </div>
            <h4 className="font-headline text-2xl">{p.name}</h4>
            <p className="text-primary font-label text-[10px] tracking-[0.2em] uppercase mb-3">{p.role}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Transformation = () => (
  <section className="py-24 bg-surface text-on-surface">
    <div className="max-w-screen-2xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="relative flex gap-4">
            <div className="w-1/2 overflow-hidden rounded-xl">
              <img 
                alt="Before" 
                className="w-full aspect-[4/5] object-cover filter grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW0pnbk_aQF8gz2X7bojeOzZuXkNZkyAa5zVV1DG3RpSaEl1DiS29cZYGB2kC0Bfy9XfXy9yBCvV-RaawE36xpKW1Ov3IQxzJHKVI3EOb-OkyMWRzI3CbwVZPa3GAIdLrTGVvaqZ9AKosroM676mwhNtnANJDa8f9nljlz-HDLhk1MsWpA0gnLwYFgNDhM2ZEyqTgrThK2hVgZtJFtVm41_eWThWBl_BAtgRVN1Q--51yYcJ_9SGni8gj5AeF7EWfb4yoKJzD3L-4"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white/80 backdrop-blur text-center font-label text-[10px] tracking-widest">BEFORE</div>
            </div>
            <div className="w-1/2 overflow-hidden rounded-xl translate-y-12">
              <img 
                alt="After" 
                className="w-full aspect-[4/5] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1Vc3CtQHOeEdYQ2Njkr0W60FnOJgn3wX71dDurm9Lb0_gb7PLHuTRfj1kgYgQoZo_ZT7dmKQnSDr-jT8tZycumzDmA4ofA8MO6c5ifZHKFfURJTCV_A2Ef76cO7wGlikwvnRt_KmmEo0dx-SzB_XVGoBY4_RFS3Rmch9rj-jqCwPrVd-DJDYPzw2JzYkXHHIcAYgFbU3BmxmXWTKsvce_PIKC-l5z3OEAFFhL5Ww3hPbeUK9ImkUmnyY3aUidvMJUZW3TJrFRhwk"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-primary-container text-on-primary-container text-center font-label text-[10px] tracking-widest font-bold">AFTER</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-tertiary font-label text-[10px] tracking-widest uppercase block mb-4 italic">The Transformation Journal</span>
          <h2 className="font-headline text-5xl mb-8 leading-tight">Mastery in Every <span className="text-primary">Brushstroke.</span></h2>
          <p className="text-on-surface-variant text-lg mb-10 leading-relaxed italic">
            "We don't just change appearances; we reveal the confidence that was already there. Each transformation is a journey of collaboration between practitioner and guest."
          </p>
          <button className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <Play className="w-5 h-5" />
            </div>
            <span className="font-label text-sm tracking-widest font-bold">VIEW GALLERY STORY</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Membership = () => (
  <section className="py-24 px-8 bg-surface-container-low">
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-white rounded-3xl p-12 md:p-20 editorial-shadow relative overflow-hidden flex flex-col md:flex-row gap-16 items-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="md:w-1/2 relative z-10">
          <span className="text-primary-container font-label text-[10px] tracking-[0.3em] uppercase block mb-6">EXCLUSIVE OFFERING</span>
          <h2 className="font-headline text-5xl mb-8">The Atelier Circle</h2>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">Join our bespoke membership program for priority booking, seasonal ritual giftings, and complimentary refreshments in our private lounge.</p>
          <ul className="space-y-4 mb-10">
            {[
              "Priority Booking Window (48h Early)",
              "15% Savings on All Private Rituals",
              "Bespoke Birthday Experience Ritual"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary" fill="currentColor" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <button className="gold-gradient text-on-primary px-10 py-5 rounded-full font-label text-sm tracking-widest font-bold">DISCOVER TIERS</button>
        </div>
        <div className="md:w-1/2 relative z-10 grid grid-cols-2 gap-4">
          <div className="bg-background p-8 rounded-2xl border border-outline-variant/10 text-center">
            <h4 className="font-headline text-3xl mb-1">$199</h4>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">Monthly / Silver</p>
          </div>
          <div className="bg-background p-8 rounded-2xl border border-primary-container text-center shadow-lg">
            <h4 className="font-headline text-3xl mb-1">$349</h4>
            <p className="text-primary font-label text-[10px] uppercase tracking-widest font-bold">Monthly / Gold</p>
          </div>
          <div className="col-span-2 bg-surface-container-highest p-8 rounded-2xl text-center">
            <p className="text-sm italic">"The Gold Tier has completely transformed my self-care routine. It's an investment in my wellbeing."</p>
            <p className="text-[10px] mt-2 font-bold tracking-widest">— Sarah J.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 px-8">
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-headline text-4xl mb-8">Visit the Atelier</h2>
          <div className="space-y-12">
            <div>
              <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-4">Location</h5>
              <p className="text-lg">128 Luxury Boulevard, <br/>Suite 400, New York, NY</p>
            </div>
            <div>
              <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-4">Opening Hours</h5>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <span className="text-on-surface-variant">Mon – Fri</span>
                <span className="text-right">09:00 AM – 08:00 PM</span>
                <span className="text-on-surface-variant">Saturday</span>
                <span className="text-right">10:00 AM – 06:00 PM</span>
                <span className="text-on-surface-variant">Sunday</span>
                <span className="text-right italic">By Appointment Only</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-green-600/10 text-green-700 p-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600/20 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="font-label text-[10px] font-bold tracking-widest">WHATSAPP</span>
              </button>
              <button className="flex-1 bg-surface-container-highest p-4 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-label text-[10px] font-bold tracking-widest">CALL US</span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 rounded-3xl overflow-hidden grayscale contrast-[1.1] editorial-shadow h-[500px]">
          <img 
            alt="Location Map" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhx1M5sIAFpTMN0gWqQteaEaWei2BHxR-ux1qvidZXmHUMjQZkJ_jpMW4mJa-uPjjlPoYJdQinJ2kFOWMBln_Z2N1vxETYVpd_Q1oSc54h2LYgIs6yDB4Fdgs2mAVP-ORR_CMTVBKRRfKtdVmCvD8kg_yL-ZSSJ6l5lFcfM_UIbZblN-aSkYaleMx-ggD9U2PFIB4cYCEQ9THpznkDaorMWneBLM40xeLwFDYMkFGqJBehchk17wj1jm5CBB3y2oIJYB94VlapuU"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-stone-50 border-t border-stone-200">
    <div className="max-w-screen-2xl mx-auto px-8 py-24 flex flex-col md:flex-row justify-between gap-12">
      <div className="md:max-w-xs">
        <span className="font-headline text-3xl mb-8 block text-stone-900">THE ATELIER</span>
        <p className="font-body text-sm font-light tracking-wide text-stone-600 leading-relaxed">
          A destination for those who seek the extraordinary. Our philosophy blends heritage techniques with modern clinical precision.
        </p>
        <div className="flex gap-6 mt-8">
          <Globe className="w-5 h-5 text-stone-400 hover:text-primary cursor-pointer transition-colors" />
          <Instagram className="w-5 h-5 text-stone-400 hover:text-primary cursor-pointer transition-colors" />
          <Share2 className="w-5 h-5 text-stone-400 hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        <div>
          <h6 className="font-label text-[10px] tracking-[0.3em] uppercase mb-6 font-bold text-stone-900">EXPERIENCE</h6>
          <ul className="space-y-4 font-body text-sm text-stone-500">
            <li><a className="hover:text-primary transition-all" href="#">The Rituals</a></li>
            <li><a className="hover:text-primary transition-all" href="#">Private Bookings</a></li>
            <li><a className="hover:text-primary transition-all" href="#">Atelier Circle</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-label text-[10px] tracking-[0.3em] uppercase mb-6 font-bold text-stone-900">ATELIER</h6>
          <ul className="space-y-4 font-body text-sm text-stone-500">
            <li><a className="hover:text-primary transition-all" href="#">Contact</a></li>
            <li><a className="hover:text-primary transition-all" href="#">Sustainability</a></li>
            <li><a className="hover:text-primary transition-all" href="#">Press</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h6 className="font-label text-[10px] tracking-[0.3em] uppercase mb-6 font-bold text-stone-900">NEWSLETTER</h6>
          <div className="relative">
            <input className="w-full bg-transparent border-b border-outline-variant/40 py-2 focus:outline-none focus:border-primary-container font-label text-[10px] tracking-widest" placeholder="YOUR EMAIL" type="email"/>
            <button className="absolute right-0 bottom-2 text-primary">
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-screen-2xl mx-auto px-8 pb-12">
      <p className="font-body text-[10px] font-light tracking-[0.2em] text-stone-400 uppercase">
        © 2024 THE DIGITAL ATELIER. ALL RIGHTS RESERVED.
      </p>
    </div>
  </footer>
);

const MobileNav = () => (
  <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-3 pb-8 px-6 bg-stone-50/80 backdrop-blur-2xl shadow-[0_-8px_30px_rgb(0,0,0,0.04)] rounded-t-3xl border-t border-stone-200/20">
    <div className="flex flex-col items-center justify-center text-primary scale-110 transition-transform">
      <Flower className="w-6 h-6" fill="currentColor" />
      <span className="font-label text-[8px] uppercase tracking-widest mt-1">Atelier</span>
    </div>
    <div className="flex flex-col items-center justify-center text-stone-400">
      <Scissors className="w-6 h-6" />
      <span className="font-label text-[8px] uppercase tracking-widest mt-1">Services</span>
    </div>
    <div className="flex flex-col items-center justify-center text-stone-400">
      <Heart className="w-6 h-6" />
      <span className="font-label text-[8px] uppercase tracking-widest mt-1">Rituals</span>
    </div>
    <div className="flex flex-col items-center justify-center text-stone-400">
      <User className="w-6 h-6" />
      <span className="font-label text-[8px] uppercase tracking-widest mt-1">Account</span>
    </div>
  </nav>
);

const BookingPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [step, setStep] = useState(1);
  const [selectedArtisan, setSelectedArtisan] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const artisans = [
    {
      id: "elena",
      name: "Elena Vance",
      role: "Lead Therapist",
      exp: "12 Years Exp.",
      desc: '"Specializing in anatomical sculpting and deep-tissue recovery through mindful pressure."',
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWF7j2yV5LsToaOMA5rwiPviLf-zWHH9U1Mf1tuzEQrgE0fGR88-Hd-_XoLy_2QXYaG3YhdnwxjmCADA2_KmfiJgY9mMXNHMPVOcgFUZBMAXPSPksZQLFY6mhPociGFCf_kwlmLCxc3CGnZoUti7SzR6CidlbNhqvTx--nVn3AFGZWCNFoIAvQr_CZ_usLddrRaVDZkBhMGOaJ1l8Cg13D4ee4o5k4CE3aNW3k-GpITGm5BQIl6pjNze5MRNwEaxGqAXLnwoEtvqE"
    },
    {
      id: "julian",
      name: "Julian Thorne",
      role: "Aesthetician",
      exp: "8 Years Exp.",
      desc: '"Master of botanical infusion facials and dermal restoration techniques."',
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClFIJRfpsnO4al5voniG_c0s2b8NwHxn7DpvdQN0jKs97Dx1GrWtlGkPUbELrUH88pIYnjqn9fiXi50tQ31CKxoFm1EeS1oB68JjW50L8LpLMYrKOzI8CnUIb1UGlhx5oQYKSS-RqIrNd_o_4WzBf61Z6MxuujjQ9D6J3kqp1SyNt7AMWlRFouOafjZYklnsvPXuuzKIsnddOebQhoWiuVxvoJCXzCArQU1_fBGi6ujBZ24RGm8NNxx5ef5D1Q_DkkXoMuESRoK-c"
    },
    {
      id: "sasha",
      name: "Sasha Moore",
      role: "Holistic Guide",
      exp: "15 Years Exp.",
      desc: '"Curating multi-sensory experiences that bridge physical release and mental stillness."',
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPaceFalYVuyxweAdvKbZDnS1psNBkgL5HkOrlZ5OaGx2p4tjpRFPESp8FXll7J6dBED5Gm2YQa3z5wzCNrBnavvgQgupGQYHuCjoXKKVycx3geB7nGwiCd4-xnSdlgdIe_oebc3UeW37Bi6x1F3k93G6RQH962uSzhkpUjK0d30ThlYlucE6jWhIKS1ZRULCF21lvwOYx5rK7o6BrBbrIQLFai1mnMAdJ5bXKBpB8EEkEB2PBlkdNMN1idEg3hx-37tzENGAEgns"
    }
  ];

  const timeSlots = ["09:00 AM", "11:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  const handleConfirm = () => {
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCalendar = () => {
    const title = "Atelier Signature Sculpt Ritual";
    const description = "Your transformation at THE ATELIER SPA";
    const location = "THE ATELIER SPA";
    
    let hours = 13;
    let minutes = 0;

    if (selectedTime) {
      const [time, modifier] = selectedTime.split(' ');
      const [h, m] = time.split(':').map(Number);
      hours = h;
      minutes = m;
      if (modifier === 'PM' && hours < 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;
    }

    const pad = (n: number) => n.toString().padStart(2, '0');
    const startStr = `20241105T${pad(hours)}${pad(minutes)}00`;
    
    // 90 minutes duration
    let endHours = hours + 1;
    let endMinutes = minutes + 30;
    if (endMinutes >= 60) {
      endHours += 1;
      endMinutes -= 60;
    }
    const endStr = `20241105T${pad(endHours)}${pad(endMinutes)}00`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "atelier-ritual.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-12 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-16 flex justify-center overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 md:gap-8 min-w-max">
          {[
            { n: 1, label: "Service" },
            { n: 2, label: "Artisan" },
            { n: 3, label: "Time" },
            { n: 4, label: "Details" }
          ].map((s, i) => (
            <div key={s.n} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step >= s.n ? 'gold-gradient text-on-primary shadow-lg shadow-primary/20' : 'border border-outline text-outline'
              }`}>
                {s.n}
              </div>
              <span className={`text-[10px] uppercase tracking-widest font-semibold ${
                step >= s.n ? 'text-primary' : 'text-outline'
              }`}>{s.label}</span>
              {i < 3 && <div className="h-px w-8 md:w-16 bg-outline-variant/30"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-24">
          {/* Step 1: Service (Summary view as we assume it's pre-selected or first step) */}
          <section>
            <div className="mb-8">
              <h2 className="text-4xl font-headline tracking-tight mb-2">Refine Your Ritual</h2>
              <p className="text-secondary font-body font-light text-lg">Select the treatment that calls to you today.</p>
            </div>
            <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-xl p-6 flex justify-between items-center group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-high overflow-hidden">
                  <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSIFSKItm11L3nCQ0mr8n12IL4A3O-5giqM09YnZTiqTvYc3mKRBgxX46RopvaU7xuPIApTNPhs32MesBRuti_mw681LKCe5zaAUCErFqEFs5Iocdvr5KHHPvDTqMyPU23AssLJSF9yJUKhn4yYuQfoYi17Ti7HNkxRoAr1ONSlog7k_BbBhF2zAAZ_yx2SSqS9uWZH5mXAjkdyrxxY576_qQ8pw8xEDyCzfmPH4xm_D99CJoywBSrJy25C3HfIZpkJZpM3jRDeQk"/>
                </div>
                <div>
                  <h3 className="font-headline text-lg">Atelier Signature Sculpt</h3>
                  <p className="text-[10px] uppercase tracking-widest text-secondary">90 Minutes • $210</p>
                </div>
              </div>
              <button className="text-[10px] uppercase tracking-widest font-bold text-primary hover:underline">Change</button>
            </div>
          </section>

          {/* Step 2: Artisan */}
          <section>
            <div className="mb-10">
              <h2 className="text-4xl font-headline tracking-tight mb-2">Master Practitioners</h2>
              <p className="text-secondary font-body font-light text-lg">Entrust your care to our world-class artisans.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artisans.map((artisan) => (
                <div 
                  key={artisan.id}
                  onClick={() => { setSelectedArtisan(artisan.id); setStep(Math.max(step, 3)); }}
                  className={`group cursor-pointer bg-surface-container-lowest p-5 rounded-2xl border transition-all duration-500 hover:shadow-xl ${
                    selectedArtisan === artisan.id ? 'border-primary-container shadow-xl' : 'border-outline-variant/10'
                  }`}
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                    <img alt="" className={`w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105 ${selectedArtisan === artisan.id ? '' : 'grayscale group-hover:grayscale-0'}`} src={artisan.img}/>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass py-3 px-4 rounded-lg flex justify-between items-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">{artisan.role}</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">{artisan.exp}</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-headline text-2xl mb-2">{artisan.name}</h4>
                  <p className="text-sm text-secondary font-body leading-relaxed italic mb-4">{artisan.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                      {selectedArtisan === artisan.id ? 'Selected' : 'Select Artisan'}
                    </span>
                    <ArrowRight className={`w-4 h-4 text-primary group-hover:translate-x-1 transition-transform ${selectedArtisan === artisan.id ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              ))}
              <div className="group cursor-pointer bg-surface p-5 rounded-2xl border-2 border-dashed border-outline-variant/30 hover:border-primary-container transition-all duration-500 flex flex-col justify-center text-center items-center">
                <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mb-6">
                  <Flower className="text-on-primary w-8 h-8" />
                </div>
                <h4 className="font-headline text-2xl mb-2">Next Available</h4>
                <p className="text-sm text-secondary font-body leading-relaxed mb-6 px-4">"The quickest path to relaxation. We'll pair you with the best available expert for your time."</p>
                <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">Priority Booking</span>
              </div>
            </div>
          </section>

          {/* Step 3: Time */}
          <section>
            <div className="mb-8">
              <h2 className="text-4xl font-headline tracking-tight mb-2">Secure Your Moment</h2>
              <p className="text-secondary font-body font-light text-lg">Select a date for your transformation.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-outline-variant/10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <h4 className="font-headline text-xl">November 2024</h4>
                    <div className="flex gap-6">
                      <ChevronLeft className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                      <ChevronRight className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-4 text-center text-[9px] uppercase tracking-[0.2em] text-outline/60 font-bold mb-6">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {[28, 29, 30, 31].map(d => <div key={d} className="aspect-square flex items-center justify-center text-xs opacity-10">{d}</div>)}
                    {[1, 2, 3, 4].map(d => <div key={d} className="aspect-square flex items-center justify-center text-xs font-body cursor-pointer hover:text-primary rounded-full">{d}</div>)}
                    <div className="aspect-square flex items-center justify-center text-xs font-bold bg-primary text-white rounded-full shadow-lg shadow-primary/20 scale-110">5</div>
                    {[6, 7, 8, 9, 10].map(d => <div key={d} className="aspect-square flex items-center justify-center text-xs font-body cursor-pointer hover:text-primary rounded-full">{d}</div>)}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-label text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Selected Date: Nov 05</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {timeSlots.map(time => (
                      <button 
                        key={time}
                        onClick={() => { setSelectedTime(time); setStep(Math.max(step, 4)); }}
                        className={`py-4 px-2 rounded-xl border text-[11px] font-label tracking-widest transition-all ${
                          selectedTime === time 
                            ? 'bg-primary-container text-on-primary-container font-bold border-primary-container shadow-md' 
                            : 'border-outline-variant/20 hover:border-primary-container hover:bg-primary-container/5'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                    <button className="py-4 px-2 rounded-xl border border-outline-variant/10 text-[11px] font-label tracking-widest opacity-30 cursor-not-allowed">06:30 PM</button>
                  </div>
                  <div className="mt-auto pt-8">
                    <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-lg">
                      <Info className="w-4 h-4 text-primary mt-0.5" />
                      <p className="text-[9px] text-secondary uppercase tracking-widest leading-relaxed">Early arrival (15 mins) recommended for initial consultation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 4: Details */}
          <section>
            <div className="mb-12">
              <h2 className="text-4xl font-headline tracking-tight mb-2">Final Touches</h2>
              <p className="text-secondary font-body font-light text-lg">Details for your reservation profile.</p>
            </div>
            <div className="max-w-2xl space-y-12">
              <div className="relative group">
                <input className="w-full bg-transparent border-b border-outline-variant/40 py-4 focus:outline-none focus:border-primary-container transition-all font-headline text-2xl placeholder:text-outline-variant/30 peer" id="name" placeholder=" " type="text"/>
                <label className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.2em] text-primary font-bold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-outline-variant/50 peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-bold pointer-events-none" htmlFor="name">Full Name</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-4 focus:outline-none focus:border-primary-container transition-all font-body text-base placeholder:text-outline-variant/30 peer" id="email" placeholder=" " type="email"/>
                  <label className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.2em] text-primary font-bold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-outline-variant/50 peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-bold pointer-events-none" htmlFor="email">Email Address</label>
                </div>
                <div className="relative group">
                  <input className="w-full bg-transparent border-b border-outline-variant/40 py-4 focus:outline-none focus:border-primary-container transition-all font-body text-base placeholder:text-outline-variant/30 peer" id="phone" placeholder=" " type="tel"/>
                  <label className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.2em] text-primary font-bold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-outline-variant/50 peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-bold pointer-events-none" htmlFor="phone">Phone Number</label>
                </div>
              </div>
              <div className="relative group">
                <textarea className="w-full bg-transparent border-b border-outline-variant/40 py-4 focus:outline-none focus:border-primary-container transition-all font-body text-base placeholder:text-outline-variant/30 resize-none peer" id="requests" placeholder=" " rows={1}></textarea>
                <label className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.2em] text-primary font-bold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-outline-variant/50 peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-bold pointer-events-none" htmlFor="requests">Special Requests (Allergies, Focus Areas)</label>
              </div>
            </div>
          </section>

          <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-secondary font-label text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:text-on-surface transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Services
            </button>
            <button 
              onClick={handleConfirm}
              className="gold-gradient text-on-primary px-16 py-6 rounded-full font-label font-bold text-xs uppercase tracking-[0.4em] hover:shadow-2xl transition-all hover:scale-[1.02] shadow-xl"
            >
              Confirm Ritual
            </button>
          </div>
        </div>

        {/* Right Column: Summary */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/20 shadow-sm">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-10 border-b border-outline-variant/30 pb-4">Booking Summary</h3>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0 ring-1 ring-outline-variant/20">
                  <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm0Cg-hYYx_SIL7UiwdvkhnRLSRzlVSaCs9G1FVipDbFKDC1ZMAh72Um8NjriQf3Ka09aVp-6PVBf3kra9fmegTpFY4kG1PX6p0Ll52WUG8OEc4Zf81bLiusjUPfpKiheJDNGD_EWn1K7VTBF2EDFdffvE461ajP6rR1K7aRT2vXrTtbgfjwHj782uUUk8dn1HJuGnEhH73Yf2vug-lVAyMQEKDcBmUjaEG869LZbB4D-mfKSrYLCj_EhTN2K8jEbnPcz8zv8xojQ"/>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-secondary mb-1">Ritual</p>
                  <p className="font-headline text-sm font-bold">Atelier Signature Sculpt</p>
                  <p className="text-[10px] text-primary mt-1 font-bold">90 Minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-on-primary shadow-md">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-secondary mb-1">Master Practitioner</p>
                  <p className="font-label font-bold text-sm">{selectedArtisan ? artisans.find(a => a.id === selectedArtisan)?.name : 'Next Available'}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-on-primary shadow-md">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-secondary mb-1">Appointment</p>
                  <p className="font-label font-bold text-sm">Nov 5, 2024 • {selectedTime || '--:--'}</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-outline-variant/30 space-y-5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-secondary font-body">Subtotal</span>
                <span className="font-bold">$210.00</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-secondary font-body">Service Fee</span>
                <span className="font-bold">$12.00</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Total Investment</span>
                <span className="font-headline text-2xl font-bold text-primary">$222.00</span>
              </div>
            </div>
            <div className="mt-10 p-5 rounded-xl bg-white border border-outline-variant/10">
              <div className="flex gap-4">
                <Lock className="w-5 h-5 text-primary" />
                <p className="text-[9px] text-secondary leading-relaxed uppercase tracking-[0.1em]">Secured by L'Atelier Private Vault. Payment processed upon arrival for your convenience.</p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl border border-dashed border-outline-variant/40 flex flex-col items-center text-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-outline-variant font-bold mb-4">Personal Concierge</p>
            <a className="font-label text-sm font-bold hover:text-primary transition-colors tracking-widest" href="tel:+15552835437">+1 (555) ATELIER</a>
          </div>
        </aside>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-surface/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-xl w-full bg-white p-12 rounded-3xl shadow-2xl border border-primary-container/20 text-center"
            >
              <div className="w-24 h-24 gold-gradient rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
                <CheckCircle2 className="w-12 h-12 text-on-primary" />
              </div>
              <h2 className="text-4xl font-headline mb-6">Ritual Reserved</h2>
              <p className="text-secondary font-body mb-10 leading-relaxed text-lg">Your moment of renewal is secured. A private confirmation has been dispatched to your digital inbox.</p>
              <div className="bg-surface-container-low p-8 rounded-2xl mb-12 text-left space-y-4">
                <div className="flex justify-between text-xs border-b border-outline-variant/20 pb-3">
                  <span className="text-secondary uppercase tracking-widest font-bold">Confirmation ID</span>
                  <span className="font-label font-bold text-primary tracking-widest">#LA-29910</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-secondary uppercase tracking-widest font-bold">Date & Time</span>
                  <span className="font-label font-bold">Nov 5, 2024 — {selectedTime || '01:00 PM'}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={handleAddToCalendar}
                  className="flex-1 gold-gradient text-on-primary py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-lg"
                >
                  Add to Calendar
                </button>
                <button 
                  onClick={() => onNavigate('home')}
                  className="flex-1 border border-outline-variant py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-surface-container-low transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HomeView = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <>
    <Hero />
    <Services onBook={() => onNavigate('booking')} />
    <Practitioners />
    <Transformation />
    <Membership />
    <Contact />
  </>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomeView onNavigate={handleNavigate} />
            </motion.div>
          ) : (
            <motion.div
              key="booking"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BookingPage onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
