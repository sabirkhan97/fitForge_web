"use client"

import { Users, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <section className="container relative mx-auto -mt-12 px-6 pb-32 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl bg-gradient-to-br from-lime/5 via-white/5 to-yellow-400/5 p-8 shadow-xl backdrop-blur-md border border-border/50 hover:shadow-2xl hover:shadow-lime/20 transition-all duration-500"
        >
          <Users className="mx-auto mb-4 h-16 w-16 text-lime" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight mb-2">
              10K+
            </div>
            <div className="text-lg md:text-xl font-bold text-muted uppercase tracking-wide">
              Workouts Generated
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl bg-gradient-to-br from-yellow-400/5 via-white/5 to-orange-400/5 p-8 shadow-xl backdrop-blur-md border border-border/50 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500"
        >
          <Clock className="mx-auto mb-4 h-16 w-16 text-yellow-400" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight mb-2">
              47min
            </div>
            <div className="text-lg md:text-xl font-bold text-muted uppercase tracking-wide">
              Average Session
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl bg-gradient-to-br from-orange-400/5 via-white/5 to-red-400/5 p-8 shadow-xl backdrop-blur-md border border-border/50 hover:shadow-2xl hover:shadow-orange-400/20 transition-all duration-500"
        >
          <Award className="mx-auto mb-4 h-16 w-16 text-orange-400" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight mb-2">
              5 Day
            </div>
            <div className="text-lg md:text-xl font-bold text-muted uppercase tracking-wide">
              Avg Streak
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

