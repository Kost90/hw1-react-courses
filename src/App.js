import Input from "./components/input/Input";

function App() {
  const handelChange = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Input change={handelChange} />
    </div>
  );
}

export default App;
