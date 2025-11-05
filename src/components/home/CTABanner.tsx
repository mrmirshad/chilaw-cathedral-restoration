import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, ArrowRight } from "lucide-react";

function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      id="donate"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cathedral-blue/90 to-cathedral-blue/80"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center text-white"
      >
        <Heart className="w-16 h-16 mx-auto mb-6 text-cathedral-gold" />

        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Be Part of Something Sacred
        </h2>

        <p className="text-xl font-script text-cathedral-gold mb-8">
          Your gift today restores hope for tomorrow
        </p>

        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Every contribution, no matter the size, brings us closer to completing
          this sacred restoration. Join hundreds of faithful supporters in
          preserving our spiritual home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/donate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-cathedral-gold hover:bg-yellow-500 text-cathedral-blue font-bold px-10 py-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
          >
            Make Your Donation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50"
          >
            About Us
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 pt-12 border-t border-white/20"
        >
          <p className="text-sm text-white/80 italic">
            "For where your treasure is, there your heart will be also." -
            Matthew 6:21
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CTABanner;
