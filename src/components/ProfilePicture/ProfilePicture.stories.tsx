import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";

export default {
  title: "Profile Picrture",
  component: ProfilePicture,
} as ComponentMeta<typeof ProfilePicture>;

const Template: ComponentStory<typeof ProfilePicture> = (args) => (
  <ProfilePicture {...args} />
);

export const Profile = Template.bind({});
Profile.args = {
  type: "profilePhoto",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

export const Story = Template.bind({});
Story.args = {
  type: "story",

  src: "https://avatars2.githubusercontent.com/u/132554",
};

export const NavbarPicture = Template.bind({});
NavbarPicture.args = {
  type: "profile",

  src: "https://avatars2.githubusercontent.com/u/132554",
};

export const highlight = Template.bind({});
highlight.args = {
  type: "highlight",

  src: "https://avatars2.githubusercontent.com/u/132554",
};
