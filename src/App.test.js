import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("shows loading text", () => {
  const { getByText } = render(<App />);
  const loadingElement = getByText(/loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

// More testing could be done here... obviously!
// Although i would prefer to abstract the current implementation into ints own component and test that instead. Much tidier.
