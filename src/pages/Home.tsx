import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowRight, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto bg-bg text-ink px-4 sm:px-6 lg:px-8">
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 pt-4 gap-4 lg:gap-0">
        <div>
          <p className="text-sm md:text-base font-semibold tracking-wide mb-1 uppercase">Good morning 👋</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-ink">FitForge</h1>
        </div>
        <div className="bg-card2 border-border rounded-2xl px-4 py-2.5 flex flex-col items-center border w-full lg:w-auto order-1 lg:order-2">
          <Flame className="w-5 h-5 mb-1" />
          <span className="text-lg md:text-xl font-black text-lime">5</span>
          <span className="text-xs font-bold text-muted uppercase tracking-wide">streak</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 bg-card border-border rounded-3xl p-5 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 lg:mb-8 gap-6 lg:gap-0">
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted mb-1.5 lg:mb-2">Weekly Progress</p>
              <h2 className="text-3xl md:text-4xl font-black text-ink tracking-tight">2 <span className="text-xl md:text-2xl font-normal text-muted">/ 4 workouts</span></h2>
              <p className="text-sm md:text-base text-muted mt-1 lg:mt-2">94 min this week</p>
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 relative flex-shrink-0">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 36 36">
                <path className="text-border" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3.5" strokeLinecap="round"/>
                <path className="text-lime" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="50, 100" strokeDashoffset="-25" fill="none" strokeWidth="3.5" strokeLinecap="round" pathLength="1" stroke="currentColor" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                <div className="text-lg md:text-xl font-black">50%</div>
                <div className="text-xs uppercase font-bold text-muted tracking-wide mt-0.5">done</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 lg:flex-nowrap">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-1 flex-1 min-w-[40px]">
                <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-sm ${i < 2 ? 'bg-lime' : 'bg-border/50'}`} />
                <span className="text-xs font-bold text-muted uppercase">{day}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8 gap-4 lg:gap-0">
        <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted">Quick Start</h3>
      </div>
      <div className="flex gap-2.5 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-none lg:overflow-visible lg:justify-center lg:gap-4">
        {[
          { emoji: '🔥', label: 'Push' },
          { emoji: '🫷', label: 'Pull' },
          { emoji: '🦵', label: 'Legs' },
          { emoji: '🌐', label: 'Full Body' },
        ].map((item) => (
          <motion.button
            key={item.emoji}
            className="min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-none bg-card2 border-border rounded-2xl px-4.5 py-3.5 flex flex-col items-center border hover:bg-card transition-colors snap-center"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/workout')}
          >
            <span className="text-2xl md:text-3xl mb-1.5 lg:mb-2">{item.emoji}</span>
            <span className="text-sm md:text-base font-bold text-ink">{item.label}</span>
          </motion.button>
        ))}
      </div>

      <motion.button
        className="w-full lg:max-w-md mx-auto bg-lime/90 hover:bg-lime text-black rounded-3xl p-5.5 lg:p-7 mb-4 relative overflow-hidden font-black shadow-2xl shadow-lime/10 border-0 mx-auto"
        onClick={() => navigate('/workout')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">Custom Generator</div>
            <div className="text-sm md:text-base font-medium text-black/80 mt-0.5">Build a plan tailored to you</div>
          </div>
          <ArrowRight className="w-11 h-11 md:w-12 md:h-12" />
        </div>
        <div className="absolute top-0 right-0 w-[120px] md:w-[140px] h-[120px] md:h-[140px] bg-white/10 rounded-full -translate-y-10 translate-x-8" />
      </motion.button>

      <div className="flex flex-col lg:flex-row gap-1 bg-card border-border rounded-2xl p-4 lg:p-6 mb-5">
        {[
          { label: 'Workouts', value: '12', unit: 'total' },
          { label: 'Avg. Time', value: '47', unit: 'min' },
          { label: 'Best Streak', value: '5', unit: 'days' },
        ].map((stat, i) => (
          <React.Fragment key={stat.label}>
            <div className="flex-1 text-center lg:border-r lg:border-border lg:last:border-r-0">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-ink tracking-tight">{stat.value}</div>
              <div className="text-xs md:text-sm font-bold text-lime uppercase tracking-wide">{stat.unit}</div>
              <div className="text-xs md:text-sm font-semibold text-muted uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-between items-center mb-3 lg:mb-4">
        <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted">Recent Forges</h3>
        <Button variant="ghost" size="sm" className="h-auto px-3 py-1 text-xs md:text-sm font-bold text-lime">
          See all
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
        <Card className="bg-card border-border rounded-2xl p-4 md:p-5">
          <div className="flex items-start gap-4">
            <div className="w-1.25 flex-shrink-0 h-16 md:h-20 bg-gradient-to-b from-emerald-400 to-green-500 rounded-l-xl" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-black text-ink text-base md:text-lg truncate">Push Day</h4>
                <span className="text-xs font-semibold text-muted ml-2 whitespace-nowrap">Yesterday</span>
              </div>
              <p className="text-sm md:text-base text-muted mb-3 truncate">Chest & Shoulders</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs md:text-sm font-semibold bg-card2 rounded-full text-muted border border-border whitespace-nowrap">⏱ 52 min</span>
                <span className="px-2.5 py-1 text-xs md:text-sm font-semibold bg-yellow-400/20 text-yellow-400 border border-yellow-400/50 rounded-full whitespace-nowrap">● Intermediate</span>
              </div>
            </div>
            <ArrowRight className="text-muted w-5 h-5 flex-shrink-0 ml-2" />
          </div>
        </Card>
        <Card className="bg-card border-border rounded-2xl p-4 md:p-5">
          <div className="flex items-start gap-4">
            <div className="w-1.25 flex-shrink-0 h-16 md:h-20 bg-gradient-to-b from-orange-400 to-red-500 rounded-l-xl" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-black text-ink text-base md:text-lg truncate">Leg Day</h4>
                <span className="text-xs font-semibold text-muted ml-2 whitespace-nowrap">3 days ago</span>
              </div>
              <p className="text-sm md:text-base text-muted mb-3 truncate">Quads & Glutes</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs md:text-sm font-semibold bg-card2 rounded-full text-muted border border-border whitespace-nowrap">⏱ 48 min</span>
                <span className="px-2.5 py-1 text-xs md:text-sm font-semibold bg-red-400/20 text-red-400 border border-red-400/50 rounded-full whitespace-nowrap">● Advanced</span>
              </div>
            </div>
            <ArrowRight className="text-muted w-5 h-5 flex-shrink-0 ml-2" />
          </div>
        </Card>
      </div>

      <div className="h-10 md:h-16" />
    </div>
  );
}

