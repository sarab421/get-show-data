import axios from "axios";
import { useState, useEffect } from "react";
import Component from "./Components";
import EnterData from "./EnterData";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []); 

  return (
    <>
      <div>
        {data?.slice(0, 1).map((item, index) => {
          return (
            <Component
              key={index} 
              title={item.title}
              id={item.id}
              body={item.body}
            ></Component>
          );
        })}
      </div>

      <h1>Now Enter Data</h1>
      <EnterData />
    </>
  );
}

export default App;
