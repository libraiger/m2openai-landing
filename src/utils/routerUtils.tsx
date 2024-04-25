import { AppContainer } from "@features/layouts";
import { DashBoard } from "@pages/dashboard";
import { Plans } from "@pages/plans";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/plans" element={<Plans />} />
      </Route>
    </Routes>
  );
};
