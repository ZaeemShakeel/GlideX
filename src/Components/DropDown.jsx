import React, { useState } from "react";

const Dropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const currencies = ["USD", "EUR", "PKR"];
  const languages = ["EN", "FR", "UR"];

  return (
    <div className="flex gap-3">
      {/* Currency Dropdown */}
      <div className="relative">
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="p-2 bg-transparent"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      {/* Language Dropdown */}
      <div className="relative">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="p-2 bg-transparent"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
