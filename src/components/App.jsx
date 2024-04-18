import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar'; 

const App = () => {
    return (
        <>
        Teste
            <Navbar/>
        </>
    );
};

export default App;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
