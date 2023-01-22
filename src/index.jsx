import routes from "./routes";
import "./style/main.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(routes);
