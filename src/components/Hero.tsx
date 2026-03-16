"use client"

import { Button } from '../components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="container relative mx-auto grid max-w-screen-2xl grid-cols-1 px-6 pb-32 pt-12 md:grid-cols-2 md:px-8 md:pt-24 lg:px-12 lg:pt-32 xl:px-16 2xl:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center md:order-2"
      >
        <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-lime to-yellow-400 px-5 py-2 text-sm font-bold text-black">
          AI Powered Gym Generator
        </div>
        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight">
          Generate <span className="bg-gradient-to-r from-lime via-yellow-400 to-orange-400 bg-clip-text text-transparent">Custom</span>
          <br />
          Workouts in <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Seconds</span>
        </h1>
        <p className="mb-10 text-xl md:text-2xl lg:text-3xl text-muted leading-relaxed max-w-lg">
          AI analyzes your goals, equipment, and experience to create perfect workouts. No guesswork, just results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="group h-14 bg-gradient-to-r from-lime via-yellow-400 to-orange-400 hover:from-lime/90 font-bold shadow-xl shadow-lime/20 px-8 text-lg">
            <Link to="/workout">
              Start Generating <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="h-14 border-border bg-card hover:bg-card/80 font-bold px-8 text-lg">
            <Link to="#" >Watch Demo</Link>
          </Button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:order-1"
      >
        <div className="relative mx-auto aspect-video max-w-md md:max-w-lg lg:max-w-xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime/5 via-white/5 to-yellow-400/10 blur-3xl" />
          <div className="relative h-full rounded-3xl border border-border/50 bg-gradient-to-b from-card/70 via-card to-card/50 backdrop-blur-xl shadow-2xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-lime/20 via-yellow-400/20 to-orange-400/20 blur opacity-75" />
            <div className="relative h-full overflow-hidden rounded-3xl p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-lg">Push Day</h3>
                  <p className="text-muted text-sm">Chest & Shoulders</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-green-500 font-mono text-sm font-bold text-white">
                      01
                    </span>
                    <div>
                      <h4 className="font-black text-base">Barbell Bench Press</h4>
                      <p className="text-muted text-sm">Chest</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-muted">
                    <span>4 sets</span>
                    <span>6-8 reps</span>
                    <span>90s rest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

