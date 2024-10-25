import { useState } from "react";

type Status = "loading" | "idle" | "error";

export function LoadingComponent() {
  const [status, setStatus] = useState<Status>("idle");

  const loadData = async () => {
    setStatus("loading");

    try {
      // тут логіка завантаження даних у випадку успіху
      setStatus("idle");
    } catch (error) {
      // У випадку помилки
      setStatus("error");
    }
  };

  return (
    <div>
      <p>Status : {status}</p>
      <button onClick={loadData}>Завантажити дані</button>
    </div>
  );
}
