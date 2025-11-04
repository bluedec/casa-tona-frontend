import { useAuthContext } from "../src/contexts/auth/component";
import { supabase } from "./supabase";

export async function checkUserSession(): Promise<boolean> {
  const { data, error } = await supabase.auth.getSession();

  if (data.session) {
    return true;
  }
  if (error) {
    console.error("Error getting session: ", error);
    return false;
  }
  return false;
}

/**
 *  Makes a GET request to the specified route, returns the response as json.
 *  
 *  Route should look like so: "/api/admins".
 *
 * */
export async function backendGet(
  route: string,
  jwt: string | undefined,
) {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  let headers = {}
  if (jwt) {
    headers = {
      'Authorization': `Bearer ${jwt}`,
    }
  }

  const response = await fetch(`${backend_url}${route}`, {
    method: "GET",
    headers: headers,
  });
  if (response.ok) {
    return response.json();
  } 
}

/**
 *  Makes a POST request on the specified route, returns the response as json.
 *  
 *  Route should look like so: "/api/admins".
 *
 *
 * */
export async function backendPost(
  route: string,
  body: object | null,
  jwt: string | undefined,
) {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  let headers = {};

  if (!body) {
    if (!jwt) {
      console.log("No jwt passed to backendCall.");
      return;
    } else {
      headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      }
    }
  }
  const response = await fetch(`${backend_url}${route}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  });
  if (response.ok) {
    return response.json();
  } 

}


