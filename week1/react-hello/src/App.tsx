import { useEffect, useState } from "react";

type HelloResponse = {
  message: string;
  time: string;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<HelloResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/hello");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as HelloResponse;
        setData(json);
      } catch (e) {
        setError(e instanceof Error ? e.message : "unknown error");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Week1 API Call</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
      {data && (
        <div>
          <p>Message: {data.message}</p>
          <p>Time: {data.time}</p>
        </div>
      )}
    </div>
  );
}