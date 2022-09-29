import "./App.css";
import { AlertProvider } from "./context/alert/AlertContext";
import Home from "./pages/Home";
import Alert from "./components/layouts/Alert";
import { WeatherProvider } from "./context/weather/WeatherContext";

function App() {
  return (
    // <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <WeatherProvider>
      <AlertProvider>
        <div className="app">
          <Alert />
          <Home />
        </div>
      </AlertProvider>
    </WeatherProvider>
    // </div>
  );
}

export default App;
