import { BrowserRouter, Routes, Route } from "react-router-dom";
import withLayout from "./components/hocs/Layout";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" default element={withLayout(Stats)} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
