import CardDetails from "../components/CardDetails";
import Search from "./Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Search/>}/>
                <Route path="/details/:id" element={<CardDetails/>}/>
            </Routes>
        </Router>
    );
}

export default App;