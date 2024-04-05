import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "./App";
import CVOutput from "./components/CVOutput";
import TestComp from "./components/test";
import Parent from "./components/Parent";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Parent />,
    // children: [
    // //   {
    // //     path: '/',
    // //     element: <Navigate to="/"/>
    // //   },
    // //   {
    // //     path: '/print',
    // //     // element: <CVOutput/>
    // //     element: <TestComp />
    // //   },
    // ]
  },
  {
    path: '/print',
    // element: <CVOutput/>
    element: <CVOutput />
  },
])

export default router;