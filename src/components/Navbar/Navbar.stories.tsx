import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...(args as object)} />
);

export const NavbarMenu = Template.bind({});

NavbarMenu.args = {
  src: "https://ca.slack-edge.com/E03D7PAA59N-U03SPV9KD51-4a98dd15e5af-512",
};
