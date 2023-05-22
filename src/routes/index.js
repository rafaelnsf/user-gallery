import { BrowserRouter, Route, Routes } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home} />} />
                <Route path="/" element={<Signin />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;