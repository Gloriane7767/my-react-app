

import HeaderItems from "./components/Header.tsx";
import Button from "./components/Button.tsx";
import Cart from "./components/Cart.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <div>
      {/*  <div>
          <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
            <h1 className="text-4xl font-extrabold pink-400 drop-shadow-md">
              Welcome to ReactJS with Tailwind CSS!
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-md text-center">
              A minimal React app built with TypeScript, Vite, and Tailwind CSS.
            </p>
          </div>
        </div> */}

      <HeaderItems />
      <Button />
        <Cart />
      <Footer />

      </div>
  );
};

export default App;
