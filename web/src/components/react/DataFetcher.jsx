import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(Math.floor(Math.random() * 100));
    console.warn(`Données chargées: ${data}`);

    return () => {
      console.log("Nettoyage du composant");
    };
  }, [data]); // Le tableau vide signifie que ça s'exécute une seule fois (au montage)

  function handleUpdate() {
    setData(2000);
  }

  return (
    <div style={{padding: "12px", background: "#f0f0f0", borderRadius: "6px"}}>
      <p>Données: {data ?? "Aucune donnée"}</p>
      <button style={{background: "royalblue", color: "white", border: "none", borderRadius: "2px"}} onClick={handleUpdate}>Update!</button>
    </div>
  );
}

export default DataFetcher;