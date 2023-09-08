import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./componentes/Common/Loading";

const Error = lazy(() => import("./pages/404"));
const Home = lazy(() => import("./pages/home"));
const Users = lazy(() => import("./pages/users"));
const Products = lazy(() => import("./pages/products"));

function App() {
  return (
    <main className="main">
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/users"
        element={
          <Suspense fallback={<Loading />}>
            <Users />
          </Suspense>
        }
      />
    <Route
        path="/products"
        element={
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        }
      />
          <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <Error />
          </Suspense>
        }
      />
      </Routes>
      </main>
  );
}

export default App;
