

import HeaderItems from "./components/Header.tsx";
import Button from "./components/Button.tsx";
import Cart from "./components/Cart.tsx";
import CardList from "./components/CardList.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8">   {/*  <div>

      {/* Heading */}
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
            What is React?
        </h1>

        {/* Paragraph */}
        <p className="text-slate-600 text-lg max-w-xl text-center mb-6">
            React is a JavaScript library for building user interfaces. You break
            your page into small, reusable pieces called <strong>components</strong>.
            Each component is just a function that returns HTML-like code called JSX.
        </p>

        {/* Button */}
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition mb-10">
            Start Learning React
        </button>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold text-slate-800 mb-2">🧩 Components</h2>
            <p className="text-slate-500 text-sm">
                A component is like a LEGO brick. You build small pieces and snap them
                together to create a full page. Each brick can be reused anywhere in
                your app.
            </p>
        </div>

        <HeaderItems />
        <Button />
        <Cart />
        <CardList />
      <Footer />

    </div>
  );
};

export default App;
