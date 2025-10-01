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

  if (res.status === 201) {
    return await res.json();
  }

  let message = `Błąd rejestracji (${res.status})`;
  try {
    const data = await res.json();
    if (data?.violations) {
      message = data.violations
        .map((v) => `${v.propertyPath}: ${v.message}`)
        .join("\n");
    } else if (data?.message) message = data.message;
    else if (data?.detail) message = data.detail;
  } catch (_) {}
  throw new Error(message);
}

export async function login({ email, password }) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    let msg = "Logowanie nieudane";
    try {
      msg = (await res.json())?.message || msg;
    } catch {}
    throw new Error(msg);
  }
  return res.json();
}
