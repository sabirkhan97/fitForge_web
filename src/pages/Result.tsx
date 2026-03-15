import { useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Share2 } from 'lucide-react';

export default function Result() {
  const [searchParams] = useSearchParams();
  const workoutData = searchParams.get('data');
  const workout = workoutData ? JSON.parse(workoutData) : null;
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-4xl mx-auto bg-bg text-ink px-4 sm:px-6 lg:px-8">
      <header className="bg-card border-b border-border px-5 pt-3.5 pb-4 mb-1 rounded-b-2xl">
        <div className="flex items-center justify-between mb-4">
          <button className="w-9.5 h-9.5 bg-card2 border-border rounded-xl flex items-center justify-center">
            ‹
          </button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2 bg-lime/10 border border-lime/40 rounded-2xl px-3.5 py-2 text-sm font-bold text-lime h-auto">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1.5">Push Day</p>
        <h1 className="text-2xl font-black text-ink tracking-tight mb-3">Chest & Shoulders</h1>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="flex items-center gap-1.5 px-3 py-1.5 border border-yellow-400/50 bg-yellow-400/10 rounded-2xl">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="text-xs font-bold text-yellow-400">Intermediate</span>
          </span>
          <span className="px-3 py-1.5 border border-border bg-card2 rounded-2xl text-xs font-semibold text-muted">⏱ 55 min</span>
          <span className="px-3 py-1.5 border border-border bg-card2 rounded-2xl text-xs font-semibold text-muted">🔥 ~420 kcal</span>
        </div>
      </header>
      <div className="w-[30%] h-0.5 bg-lime mx-auto -mt-1 mb-4" />
      <div className="space-y-3">
        <Card className="bg-card border-border rounded-2xl p-0 overflow-hidden">
          <div className="flex">
            <div className="w-1 bg-gradient-to-b from-emerald-400 to-green-500" />
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <span className="text-xs font-bold text-muted mr-2">01</span>
                  <span className="font-black text-base">Barbell Bench Press</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 text-xs font-bold bg-red-400/20 text-red-400 rounded border border-red-400/50">Heavy</span>
                  <span className="text-xs font-bold text-red-400">Chest</span>
                </div>
              </div>
              <p className="text-sm text-muted mb-3">Chest</p>
              <div className="flex bg-card2 rounded-xl py-2.5">
                <div className="flex-1 flex items-center justify-center gap-0.5">
                  <span className="text-xl font-black">4</span>
                  <span className="text-xs uppercase font-bold text-muted tracking-widest">sets</span>
                </div>
                <div className="w-px bg-border h-6 self-center" />
                <div className="flex-1 flex items-center justify-center gap-0.5">
                  <span className="text-xl font-black">6-8</span>
                  <span className="text-xs uppercase font-bold text-muted tracking-widest">reps</span>
                </div>
                <div className="w-px bg-border h-6 self-center" />
                <div className="flex-1 flex items-center justify-center gap-0.5">
                  <span className="text-xl font-black">90s</span>
                  <span className="text-xs uppercase font-bold text-muted tracking-widest">rest</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

