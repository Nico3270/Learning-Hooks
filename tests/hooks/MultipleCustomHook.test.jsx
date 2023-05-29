import { render } from "@testing-library/react";
import React from "react";
import { MultipleConstHook } from "../../src/03-examples/MultipleCustomHook";

describe("Probando el componente MultipleCustomHook", () => {
  test("Debe de mostrar el componente por defecto", () => {
    render(<MultipleConstHook />);
  });
});
