import "./App.css";
import Toast from "./components/Toast";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right On!",
    },
    {
      title: "warning",
      text: "Hmmm",
    },
    {
      title: "error",
      text: "Uh Oh",
    },
  ];

  return (
    <div className="wrapper">
      {messageArray.map((message) => (
        <Toast message={message} />
      ))}
    </div>
  );
}

export default App;
