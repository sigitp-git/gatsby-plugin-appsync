import React from "react";
import { Rehydrated } from "aws-appsync-react";

export default function Rehydrate({ children }) {
  return <Rehydrated>{children}</Rehydrated>;
}
