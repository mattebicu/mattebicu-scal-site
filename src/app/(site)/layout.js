import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// --- DATI SCAL PLASTICA ---
const sanityData = {
  siteName: "Scal Plastica", 
  logoUrl: null, 
  themeColor: "text-blue-600", 
  
  // MENU PRINCIPALE (Navbar)
  navLinks: [
    { title: "Audit", slug: "audit" },
    { title: "Chi Siamo", slug: "chi-siamo" },
    { title: "Contatti", slug: "contatti" },
  ],

  socials: {
    linkedin: "https://www.linkedin.com/" 
  },

  externalLink: {
    title: "Green Polymers",
    url: "https://www.scal-greenpolymers.com/"
  },

  footerData: {
    siteName: "Scal Plastica",
    bgColor: "bg-slate-900", 
    vatNumber: "IT01234567890",
    legalInfo: {
      title: "Sede Legale & Operativa",
      text: "Via dell'Industria, 15 - 37050 Vallese di Oppeano (VR) - Italia"
    },
    menuLinks: [
      { title: "Audit", slug: "audit" },
      { title: "Chi Siamo", slug: "chi-siamo" },
      { title: "Contatti", slug: "contatti" }
    ],
    contacts: {
      email: "info@scalplastica.com",
      phone: "+39 045 123 4567",
      address: "Via dell'Industria, 15 - Verona"
    }
  }
};

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar content={sanityData} />
      <main className="flex-grow w-full flex flex-col">
        {children}
      </main>
      <Footer content={sanityData.footerData} />
    </>
  );
}