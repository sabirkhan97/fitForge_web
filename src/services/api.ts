// Update hostname as needed - currently mobile local network
const hostname = import.meta.env.VITE_API_HOST || '192.168.1.124';
// const API_BASE_URL = `http://${hostname}:3001`;

const API_BASE_URL = "https://fit-forge-backend.vercel.app/api"
import type { Workout, GenerateWorkoutBody } from '../types/workout';

const api = {
  generateWorkout: async (body: GenerateWorkoutBody): Promise<Workout> => {
    const response = await fetch(`${API_BASE_URL}/generate-workout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(body),
          body: JSON.stringify(body)

    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  },
};

export type { GenerateWorkoutBody };
export default api;

