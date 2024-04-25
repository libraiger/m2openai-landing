import { AppContainer } from "@features/layouts";
import { DashBoard } from "@pages/dashboard";
import { Plans } from "@pages/plans";
import { Route, Routes, Navigate } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        {["/dashboard", "/"].map(path => (
          <Route key="Home" path={path} element={<DashBoard />}/>
        ))}
        <Route path="/pricing" element={<Plans />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Route>
    </Routes>
  );
};
