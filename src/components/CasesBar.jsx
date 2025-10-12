import { useEffect, useState } from "react";

export default function CasesBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const base =
          process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";
        const res = await fetch(`${base}/cases/tree`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setData(await res.json());
      } catch (e) {
        setErr(String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Ładowanie skrzynek…</div>;
  if (err) return <div>Błąd: {err}</div>;

  return (
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginTop: 20 }}>
      {data.map((cat) => (
        <div key={cat.id}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>
            {cat.name}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {cat.subs.map((sub) => (
              <a
                key={sub.id}
                href={`/?cat=${cat.slug}&case=${sub.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  border: "1px solid #ddd",
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: "#f9f9f9",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>{sub.name}</span>
                <span style={{ fontSize: 12, opacity: 0.7 }}>
                  ${sub.price?.toFixed(2) ?? "0.00"}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
