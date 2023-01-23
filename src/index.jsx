import routes from "./routes";
import "./style/main.css";
import { createRoot } from "react-dom/client";

const body = document.getElementById("root");
const root = createRoot(body);
root.render(routes);
