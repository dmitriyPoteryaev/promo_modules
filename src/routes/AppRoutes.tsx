import  {FC} from "react";

import {RedirectApplication} from "../modules/applications/RedirectApplication";
import {Main} from "../modules/main";
import { Route, Routes } from "react-router-dom";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/application/:id" element={<RedirectApplication />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};
export default AppRoutes;