import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PostModal } from "../PostModal/PostModal";

export default {
  title: "PostModal",
  component: PostModal,
} as ComponentMeta<typeof PostModal>;

const Template: ComponentStory<typeof PostModal> = (args) => (
  <PostModal {...args} />
);

export const Modal = Template.bind({});
Modal.args = {
  user: {
    dp: "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/posts%2Fbd0be5136e4214a25a160af157e92d43.jpgac7e826b-8a03-4a12-b431-48cc51d4d9cc?alt=media&token=618d9770-1612-4388-bbbe-313ef3717d3b",
    email: "sandeep@gmail.com",
    name: "sd769113",
    uid: "f59KFyFzI8UmowgSStUnxSVQr093",
  },
};
