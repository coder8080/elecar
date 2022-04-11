import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter basename="/elecar">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
