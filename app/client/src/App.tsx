import React, { useState } from "react";

export default function App() {
  const [logged, setLogged] = useState(false);
  if (logged) {
    return <h1>Logado</h1>;
  } else {
    return <h1>Faça login</h1>;
  }
}
