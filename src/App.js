import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App() {
  const [language, setLanguage] = useState("th");
  const [text, setText] = useState("");
  return (
    <div>
      <h1 className="title">Hi there!</h1>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <br />
      <Translate text={text} language={language} />
    </div>
  );
}
