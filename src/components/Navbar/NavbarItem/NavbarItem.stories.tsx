import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavbarItem from "./NavbarItem";

export default {
  title: "navbarItem",
  component: NavbarItem,
} as ComponentMeta<typeof NavbarItem>;

const Template: ComponentStory<typeof NavbarItem> = (args) => (
  <NavbarItem {...args} />
);

export const Search = Template.bind({});
Search.args = {
  label: "Search",
  imgSrc: "https://img.icons8.com/ios/25/null/search--v1.png",
};
