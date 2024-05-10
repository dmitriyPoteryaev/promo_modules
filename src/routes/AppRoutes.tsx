import  {FC} from "react";

import {Main} from "../modules/main";
import { Route, Routes } from "react-router-dom";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};
export default AppRoutes;