import { useEffect, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartContext } from "./Components/context/CartContext";
import CartCheckout from "./Components/CartCheckout";
import HomePage from "./Components/HomePage";
import RootLayout from "./Components/Root";
import PayStack from "./Components/PayStack";

function App() {
  // const ctx = useContext(CartContext.items);

  // useEffect(() => {
  //   fetch("", {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(ctx)
  //   })
  // }, [ctx])

  const router = createBrowserRouter([
    {path: "/", element: <RootLayout />,
      children: [
        {
          path: "/", element: <HomePage />
        },
        {
          path: "/cart", element: <CartCheckout />
        }
      ]
  } 
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
