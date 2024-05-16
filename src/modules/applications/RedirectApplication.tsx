import React from "react";
import { Application1 } from "./application1/Application1";
import { Application2 } from "./application2/Application2";
import { Application3 } from "./application3/Application3";

import { useParams } from "react-router-dom";

export const RedirectApplication = () => {
  const { id } = useParams<{ id: any }>();
  const numberChartInString = id?.length ? id.length - 1 : 0;

  const lastChar = id[numberChartInString];

  const neededNumber = lastChar;

  switch (neededNumber) {
    case "1":
      return <Application1 />;
    case "2":
      return <Application2 />;
    case "3":
      return <Application3 />;
    default:
      return <Application1 />;
  }
};
