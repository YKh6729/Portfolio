import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

import "./App.css";

const App: FC = () => <RouterProvider router={routes} />;

export default App;
