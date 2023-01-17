import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentBox } from "./CommentBox";

export default {
  title: "CommentBox",
  component: CommentBox,
} as ComponentMeta<typeof CommentBox>;

const Template: ComponentStory<typeof CommentBox> = (args) => (
  <CommentBox {...args} />
);

export const CarouselPost = Template.bind({});
CarouselPost.args = {
  comment: [
    {
      comment: "cool",
      userID: "hnmgL7RyJyAeehXdl8bp",
      dp: "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/posts%2FWhatsApp Image 2022-12-26 at 4.33.32 PM.jpeg444ab5c3-0f04-46f8-b811-453b3da13790?alt=media&token=618d9770-1612-4388-bbbe-313ef3717d3b",
      name: "vaibhavi_216",
    },
  ],
};
