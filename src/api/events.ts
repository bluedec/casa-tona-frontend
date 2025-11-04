
const API_URL = import.meta.env.VITE_BACKEND_URL;

export async function getEvents() {
  const response = await fetch(`${API_URL}/events`);
  if (!response.ok) {
     
  }
}

export function getAdminCount(): number | null {
  return null;

}
