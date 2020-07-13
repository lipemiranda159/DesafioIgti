import React, { useState } from "react";
import Header from "./components/header/header";

export default function App() {
  const [logged, setLogged] = useState(false);
  return (
    <div>
      <Header />
    </div>
  );
}
