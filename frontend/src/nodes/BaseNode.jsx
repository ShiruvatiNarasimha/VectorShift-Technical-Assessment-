import React from "react";
import { render } from "@testing-library/react";
import BaseNode from "./BaseNode";

describe("BaseNode component", () => {
  test("renders the node with label and content", () => {
    const { getByText } = render(
      <BaseNode
        data={{ label: "Node 1", content: "This is node 1" }}
        handles={{ inputs: [], outputs: [] }}
        type="default"
      />
    );
    expect(getByText("Node 1")).toBeInTheDocument();
    expect(getByText("This is node 1")).toBeInTheDocument();
  });

  test("renders the node with label only", () => {
    const { getByText } = render(
      <BaseNode
        data={{ label: "Node 2" }}
        handles={{ inputs: [], outputs: [] }}
        type="default"
      />
    );
    expect(getByText("Node 2")).toBeInTheDocument();
  });

  test("renders the node with inputs and outputs", () => {
    const { container } = render(
      <BaseNode
        data={{ label: "Node 3" }}
        handles={{
          inputs: [{ id: "input1", position: "left" }],
          outputs: [{ id: "output1", position: "right" }],
        }}
        type="default"
      />
    );
    expect(
      container.querySelectorAll(".react-flow__handle-source").length
    ).toBe(1);
    expect(
      container.querySelectorAll(".react-flow__handle-target").length
    ).toBe(1);
  });

  test("renders the node with different type", () => {
    const { container } = render(
      <BaseNode
        data={{ label: "Node 4" }}
        handles={{ inputs: [], outputs: [] }}
        type="special"
      />
    );
    expect(
      container.querySelector(".node-container.special")
    ).toBeInTheDocument();
  });
});
