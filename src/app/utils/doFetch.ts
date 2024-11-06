import { getAuth, User } from 'firebase/auth';

export async function authenticatedFetch(endpoint: string, options: RequestInit = {}, user: User) { 
  const idToken = await user!.getIdToken();
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${idToken}`,
    ...options.headers,
  };

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers,
  });
}