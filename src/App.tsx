/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import "./components/AddToCloset/AddToCloset";
import AddToCloset from "./components/AddToCloset/AddToCloset";
import Closetlist from "./components/ClosetList/ClosetList";
import FilterCloset from "./components/FilterCloset/FilterCloset";

import { useState, useEffect } from "react";
import axios from "axios";

//json-server --watch public/data/data.json --port 3001

function App() {
  const [closet, setCloset] = useState([]);
  const [filteredCloset, setFilteredCloset] = useState({});

  const handleFilter = (type: any, size: any, condition: any) => {
    setFilteredCloset({ type: type, size: size, condition: condition });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/myCloset/").then((res) => {
      setCloset(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="mainTitle">My Closet</h1>
      <FilterCloset onFilter={handleFilter} />
      <div className="main">
        <AddToCloset setCloset={setCloset} />
        <Closetlist
          filteredCloset={filteredCloset}
          clothes={closet}
          setCloset={setCloset}
        />
      </div>
    </div>
  );
}

export default App;
