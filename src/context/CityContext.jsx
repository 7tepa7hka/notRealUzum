import { createContext, useContext, useState } from "react";

const CityContext = createContext();

const cities = ["Ташкент", "Самарканд", "Бухара", "Фергана", "Андижан"];

export function CityProvider({ children }) {
  const [city, setCity] = useState(
    () => localStorage.getItem("city") || "Ташкент",
  );

  const changeCity = (newCity) => {
    setCity(newCity);
    localStorage.setItem("city", newCity);
  };

  return (
    <CityContext.Provider value={{ city, changeCity, cities }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}
