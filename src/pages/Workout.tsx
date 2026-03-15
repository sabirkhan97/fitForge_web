import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function Workout() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-4xl mx-auto bg-bg text-ink px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-5 pt-3">
        <button className="w-10 h-10 bg-card border-border rounded-xl flex items-center justify-center" onClick={() => navigate('/')}>
          ‹
        </button>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-border rounded-full" />
          <div className="w-1.5 h-1.5 bg-lime rounded-full" />
          <div className="w-6 h-1.5 bg-border rounded-full" />
        </div>
        <span className="text-xs font-bold text-muted">1 / 5</span>
      </div>
      <div className="flex items-center gap-3.5 mb-4">
        <div className="text-3xl">🧍</div>
        <div>
          <h2 className="text-2xl font-black text-ink">Your Body</h2>
          <p className="text-sm text-muted">Let's start with the basics</p>
        </div>
      </div>
      <div className="space-y-5 mb-8">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2.5">Gender</label>
          <div className="grid grid-cols-3 gap-2">
            {['Male', 'Female', 'Other'].map((g) => (
              <button key={g} className="flex items-center gap-1.5 border border-border bg-card2 rounded-xl px-3.5 py-2.25 hover:bg-card transition-colors">
                {g}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2.5">Age</label>
          <input className="w-full h-12 bg-card2 border border-border rounded-2xl px-4 text-lg font-semibold placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-lime/50" placeholder="e.g. 25" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2.5">Height</label>
            <div className="relative">
              <input className="w-full h-12 bg-card2 border border-border rounded-2xl px-4 text-lg font-semibold placeholder:text-muted pr-12 focus:outline-none focus:ring-2 focus:ring-lime/50" placeholder="170" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted">cm</span>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2.5">Weight</label>
            <div className="relative">
              <input className="w-full h-12 bg-card2 border border-border rounded-2xl px-4 text-lg font-semibold placeholder:text-muted pr-12 focus:outline-none focus:ring-2 focus:ring-lime/50" placeholder="70" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted">kg</span>
            </div>
          </div>
        </div>
      </div>
      <Button className="w-full h-14 bg-lime/90 hover:bg-lime text-black rounded-2xl font-black text-lg shadow-2xl shadow-lime/20" onClick={() => navigate('/result')}>
        Continue →
      </Button>
    </div>
  );
}

