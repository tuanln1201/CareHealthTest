import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from "./pages/Dashboard";
import { Coins } from "./pages/Coins";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="w-screen overflow-hidden flex flex-col mx-auto mt-12 bg-black">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/coins/:id' element={<Coins />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
