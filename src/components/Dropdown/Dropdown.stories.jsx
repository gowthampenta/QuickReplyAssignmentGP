// src/components/Dropdown/Dropdown.stories.jsx

import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    label: { control: "text" },
    labelVisibility: {
      control: { type: "select", options: ["Visible", "Hidden"] },
    },
    status: {
      control: {
        type: "select",
        options: ["Unfilled", "Filled", "Disabled", "Error"],
      },
    },
    labelIconVisibility: {
      control: { type: "select", options: ["Visible", "Hidden"] },
    },
    leftIconVisibility: {
      control: { type: "select", options: ["Visible", "Hidden"] },
    },
    helperText: { control: "text" },
    required: {
      control: { type: "select", options: ["Yes", "No"] },
    },
    text: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["SingleNoIcon", "SingleRadio", "Multi"],
      },
    },
    activeItemIndex: { control: "number" },
    items: { control: "array" },
    onSelect: { action: "selected" },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Select an option",
  labelVisibility: "Visible",
  status: "Unfilled",
  labelIconVisibility: "Visible",
  leftIconVisibility: "Visible",
  helperText: "Please select an option from the dropdown",
  required: "No",
  text: "",
  type: "SingleNoIcon",
  activeItemIndex: -1,
  items: ["Option 1", "Option 2", "Option 3"],
};
