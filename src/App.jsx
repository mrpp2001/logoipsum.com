import React, { useState } from "react";
import jsonData from "../data.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import JoinUs from "./components/JoinUs";
import Offers from "./components/Offers";


const App = () => {
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (searchQuery) => {
    const filtered = jsonData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setSearchInitiated(true);
  };

  return (
    <>
      <Navbar />
      {searchInitiated ? (
        <>
          <Hero onSearch={handleSearch} />
          <Profile data={filteredData} />
          <Footer />
        </>
      ) : (
        <>
          <Hero onSearch={handleSearch} />
          <JoinUs />
          <Offers />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
