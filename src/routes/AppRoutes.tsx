import  {FC} from "react";

import {Application1} from "../modules/applications/application1/Application1";
import {Main} from "../modules/main";
import { Route, Routes } from "react-router-dom";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/application1" element={<Application1 />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};
export default AppRoutes;