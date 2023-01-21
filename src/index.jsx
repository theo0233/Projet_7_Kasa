import routes from "./routes";
import "./style/main.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(routes);
