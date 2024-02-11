import Home from "./components/Home";
import AuthPage from "./components/authUi/authPage";
import {RouterProvider,createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <AuthPage />
    }
  ]);

function App(){
    return (
        <RouterProvider router={router} />
        // <div>{JSON.stringify(import.meta.env)}</div>
    );
}

export default App;