//Create parent component that will render the InputForm and UserList components, also it will pass the properties to them
//Create initial REST API call to fetch data from Github API for first page render
import { useState, useEffect } from "react";

import { InputForm } from "./components/InputForm";
import { ProgressSpinner } from "./components/ProgressSpinner";
import { UserList } from "./components/UserList";

import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  //Fetch data from Github API for first page render using useEffect hook
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //If data is not fetched yet, show ProgressSpinner component
  if (!data) {
    return <ProgressSpinner />;
  }
  //If data is fetched, show list of fetched users

  //Create function that will be used to fetch data from Github API depending on the user input event value and pass it as a prop to InputForm component
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  //Create function that will be used to update the username state depending on the user input event value and pass it as a prop to InputForm component
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <InputForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
      />
      <UserList data={data} />
    </>
  );
}

export default App;
