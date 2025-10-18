import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Star } from 'lucide-react';

function Recognition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const donors = [
    { name: 'Fernando Family', amount: 500000, tier: 'Platinum' },
    { name: 'Maria Silva', amount: 250000, tier: 'Gold' },
    { name: 'Joseph Perera', amount: 100000, tier: 'Silver' },
    { name: 'Anne D\'Souza', amount: 50000, tier: 'Bronze' },
    { name: 'St. Mary\'s Parish', amount: 300000, tier: 'Gold' },
    { name: 'Anonymous Donor', amount: 150000, tier: 'Silver' },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800';
      case 'Gold':
        return 'bg-gradient-to-r from-cathedral-gold to-yellow-300 text-cathedral-blue';
      case 'Silver':
        return 'bg-gradient-to-r from-gray-400 to-gray-300 text-gray-800';
      case 'Bronze':
        return 'bg-gradient-to-r from-amber-700 to-amber-500 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };
}

export default Recognition;
