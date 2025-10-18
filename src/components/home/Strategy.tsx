import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Calendar, TrendingUp, Award } from 'lucide-react';

function Strategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const strategies = [
    {
      icon: Target,
      title: 'Phased Approach',
      description: 'Breaking restoration into manageable phases, prioritizing urgent structural needs first',
    },
    {
      icon: Calendar,
      title: 'Timeline Management',
      description: '24-month restoration plan with quarterly milestones and transparent progress updates',
    },
    {
      icon: TrendingUp,
      title: 'Community Engagement',
      description: 'Regular fundraising events, parish involvement, and outreach to global community',
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Honoring donors through Wall of Blessings, naming opportunities, and commemorative plaques',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-cathedral-blue to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Fundraising Strategy
          </h2>
          <p className="text-xl font-script text-cathedral-gold">
            A Comprehensive Approach to Success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-cathedral-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-cathedral-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-3">
                      {strategy.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
        >
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Transparency & Accountability
          </h3>
          <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
            Every rupee donated is tracked and reported. We provide monthly financial updates, detailed expenditure reports, and photo documentation of restoration progress. Your trust is our foundation, and we're committed to complete transparency throughout this sacred journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Strategy;
