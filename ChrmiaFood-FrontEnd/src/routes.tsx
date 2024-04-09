import { createBrowserRouter, useNavigate } from "react-router-dom";
import NewFoods from "./components/FoodsMenu";
import AddFood from "./components/AddFood";
import UsersList from "./components/UserList";
import App from "./App";
import LoginLoadable from "./components/LoginLoadable";
import RegisterLoadable from "./components/RegisterLoadable";
import { useEffect, useMemo } from "react";

function PrivateRoute() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const isAuthenticated = useMemo(() => user !== null, [user]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return <App />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <NewFoods />,
      },
      {
        path: "/new-post",
        element: <AddFood />,
      },
      {
        path: "/users",
        element: <UsersList />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLoadable />,
  },
  {
    path: "/register",
    element: <RegisterLoadable />,
  },
]);
