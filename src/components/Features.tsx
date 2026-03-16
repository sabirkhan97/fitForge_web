"use client"

import { CheckCircle2, Zap, Shield, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';

const features = [
  {
    icon: Zap,
    title: "AI Powered",
    description: "Advanced AI analyzes your goals, experience, equipment and preferences to create scientifically optimized workouts.",
  },
  {
    icon: CheckCircle2,
    title: "100% Custom",
    description: "Every workout is unique to you. Age, gender, injuries, recovery status, weak points - all factored in.",
  },
  {
    icon: Shield,
    title: "Injury Safe",
    description: "Smart substitutions and modifications ensure workouts are safe for your body and limitations.",
  },
  {
    icon: Smartphone,
    title: "Any Equipment",
    description: "Full gym, home setup, bodyweight only, resistance bands - generates perfect workouts for your setup.",
  },
];

export default function Features() {
  return (
    <section className="container mx-auto px-6 pb-32 pt-24 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-20 max-w-3xl text-center"
      >
        <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          Professional Workouts
          <br />
          <span className="bg-gradient-to-r from-lime via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Without the Guesswork
          </span>
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted leading-relaxed">
          Built by fitness experts, powered by cutting-edge AI
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="h-full bg-card border-border p-8 hover:shadow-xl hover:shadow-lime/10 transition-all duration-300 border-opacity-50 group-hover:border-lime/50">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-lime to-yellow-400 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="mb-4 text-xl md:text-2xl font-black text-ink">{feature.title}</h3>
              <p className="text-muted text-base lg:text-lg leading-relaxed">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

