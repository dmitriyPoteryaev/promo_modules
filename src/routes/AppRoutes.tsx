import  {FC, lazy, Suspense} from "react";

import { Route, Routes } from "react-router-dom";
import { Loader } from "../ui/loader/loader";

const RedirectApplicationPage = lazy(() =>
  import("../modules/applications/RedirectApplication")
.then((module) => ({ default: module.RedirectApplication})));

const MainPage = lazy(() =>
  import("../modules/main")
.then((module) => ({ default: module.Main})));

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/application/:id" element={<Suspense fallback={<Loader/>}><RedirectApplicationPage /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Loader/>}><MainPage /></Suspense>} />
      <Route path="*" element={<Suspense fallback={<Loader/>}><MainPage /></Suspense>} />
    </Routes>
  );
};
export default AppRoutes;