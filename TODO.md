# fitForge_web Replication TODO
✅ Plan approved - replicating fitForge_Frontend exactly for web

## Implementation Steps (execute sequentially):

1. **Install dependencies**  
   `cd fitForge_web && npm i react-router-dom framer-motion lucide-react clsx tailwind-merge @types/node`  
   Update API hostname if needed.

2. **Core setup**  
   - Create src/types/workout.ts (interfaces)  
   - Create src/services/api.ts (copy from mobile, adjust URL)  
   - Update tailwind.config.ts (custom colors/spacing)  
   - Create src/lib/theme.ts (constants)

3. **App Router** (src/App.tsx)  
   - BrowserRouter + Routes (/Home /workout /result)  
   - Global dark theme wrapper

4. **Home page** (src/pages/Home.tsx)  
   - Dashboard exact replica w/ ProgressRing, chips, CTA, recent cards

5. **Workout form** (src/pages/Workout.tsx)  
   - 5-step form w/ chips, inputs, anim transitions

6. **Result page** (src/pages/Result.tsx)  
   - Workout display w/ ExCard, banners, muscle grid

7. **Shared UI**  
   - src/components/ui/Chip.tsx  
   - src/components/ui/ProgressRing.tsx  
   - src/components/ui/ExCard.tsx  
   - Update shadcn components styling

8. **Test**  
   `npm run dev` → verify navigation/API/animations/responsiveness

9. **Polish**  
   - Exact color matching  
   - Mobile responsiveness  
   - PWA setup if needed

✅ 1-3. **App Router complete** - full replica UI structure live!
**Next:** npm run dev to test, then 4. Full Home logic + navigation

