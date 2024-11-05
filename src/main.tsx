import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App, {TestElement} from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

    },
    {
        path: "/asd",
        element: <TestElement />
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
)
