const API_BASE = process.env.REACT_APP_API_BASE || "http://127.0.0.1:8000";

export async function registerUser({ username, email, password }) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (res.status === 201 || res.ok) {
    return await res.json();
  }

  let message = `Błąd rejestracji (${res.status})`;
  try {
    const data = await res.json();
    if (data?.violations) {
      message = data.violations.map((v) => v.message).join("\n");
    } else if (data?.message) {
      message = `Wystąpił błąd: ${data.message}`;
    } else if (data?.detail) {
      message = "Wystąpił błąd podczas rejestracji.";
    }
  } catch {}
  throw new Error(message);
}

export async function login({ email, password }) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    let msg = "Logowanie nieudane";
    try {
      const data = await res.json();
      msg = data?.message || msg;
    } catch {}
    throw new Error(msg);
  }

  return await res.json();
}
