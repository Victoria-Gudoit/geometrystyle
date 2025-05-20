import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../router";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
