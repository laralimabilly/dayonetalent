import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-dark bg-blend-multiply"
          style={{ backgroundImage: "url('/img/building.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        
        <div className="relative z-10 container mx-auto px-4 pl-8 flex flex-col justify-center border-l-1">
          <div className="max-w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl mb-6 text-secondary"
            >
              Connecting<br />Top Companies with<br /><span className="font-bold">Exceptional Talent</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-secondary/80 max-w-2xl"
            >
              Our executive search process combines deep industry insight with precise talent matching, ensuring your organization finds the transformative leadership it needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-accent text-white hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-full font-medium">
                Transform Your Organization
              </button>
            </motion.div>
          </div>
          <div className="absolute flex flex-col items-center gap-6 top-1/2 -translate-y-1/2 right-0">
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}
  