import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Building } from 'lucide-react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-cathedral-blue mb-4">
            Our Mission
          </h2>
          <p className="text-xl font-script text-cathedral-gold">
            Preserving Faith, Building Community
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Mount Carmel Cathedral stands as a testament to centuries of faith, devotion, and community spirit in Chilaw. As time has weathered our sacred walls, we now embark on a transformative journey to restore this architectural treasure. This restoration is more than preserving stone and mortar—it's about honoring our heritage, strengthening our community, and ensuring that future generations can gather in this sacred space to worship, celebrate, and find solace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-cathedral-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-cathedral-blue" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-cathedral-blue mb-4 text-center">
              Preserve Heritage
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Safeguarding our architectural and spiritual legacy for future generations to cherish and honor.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-cathedral-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-cathedral-gold" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-cathedral-blue mb-4 text-center">
              Unite Community
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Bringing together faithful hearts from near and far in a shared mission of restoration and renewal.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-cathedral-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Building className="w-8 h-8 text-cathedral-blue" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-cathedral-blue mb-4 text-center">
              Restore Glory
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Reviving the magnificent beauty and structural integrity of our sacred sanctuary with expert care.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
