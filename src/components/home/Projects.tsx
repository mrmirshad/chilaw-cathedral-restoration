import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  target: number;
  raised: number;
  color: string;
}

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects: Project[] = [
    {
      title: 'Roof Restoration',
      description: 'Complete restoration of the cathedral roof including structural repairs and waterproofing',
      target: 5000000,
      raised: 3250000,
      color: 'bg-blue-500',
    },
    {
      title: 'Stained Glass Windows',
      description: 'Preservation and restoration of historic stained glass windows',
      target: 2500000,
      raised: 1800000,
      color: 'bg-purple-500',
    },
    {
      title: 'Interior Restoration',
      description: 'Renovation of altar, pews, flooring, and interior decorative elements',
      target: 4000000,
      raised: 2100000,
      color: 'bg-amber-500',
    },
    {
      title: 'Electrical & Lighting',
      description: 'Modern electrical system upgrade and restoration lighting installation',
      target: 1500000,
      raised: 950000,
      color: 'bg-emerald-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-cathedral-blue mb-4">
            Restoration Projects
          </h2>
          <p className="text-xl font-script text-cathedral-gold">
            Every Contribution Makes a Difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const percentage = (project.raised / project.target) * 100;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-2xl font-heading font-semibold text-cathedral-blue mb-3 group-hover:text-cathedral-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-gray-700">Progress</span>
                    <span className="text-cathedral-blue">{percentage.toFixed(1)}%</span>
                  </div>

                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                      className={`h-full ${project.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{ x: [0, 100, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Raised</p>
                      <p className="text-lg font-bold text-cathedral-blue">
                        LKR {project.raised.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Target</p>
                      <p className="text-lg font-bold text-gray-700">
                        LKR {project.target.toLocaleString()}
                      </p>
                    </div>
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
          className="mt-12 text-center"
        >
          <div className="inline-block bg-cathedral-blue/5 rounded-lg p-8">
            <p className="text-3xl font-heading font-bold text-cathedral-blue mb-2">
              LKR {projects.reduce((sum, p) => sum + p.raised, 0).toLocaleString()}
            </p>
            <p className="text-gray-600">Total Raised from All Projects</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
