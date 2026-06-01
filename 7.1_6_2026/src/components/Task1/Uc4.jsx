import React from 'react'
import { useContext } from "react";
import { N1, N2 } from "./Uc1";
import { N3 } from "./Uc3"

export default function T4() {
    const n1 = useContext(N1);
    const n2 = useContext(N2);
    const n3 = useContext(N3);
    const answer = n1 * n2;
  return (
    <div>
      <h1 style={n3}>
        Product Of {n1} & {n2} : {answer}
      </h1>
    </div>
  );
}
