import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PostCard } from "../PostCard/PostCard";

export default {
  title: "PostCard",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  users: {
    doc_ID: "ces7u2Zrgxi3RloNAKL8",
    src: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ3HFGMv8lyN7b5xQjy0-cPk6So5Yjt6zf4ScDB63pw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ3HFGMv8lyN7b5xQjy0-cPk6So5Yjt6zf4ScDB63pw&s",
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/posts%2Fbd0be5136e4214a25a160af157e92d43.jpgac7e826b-8a03-4a12-b431-48cc51d4d9cc?alt=media&token=618d9770-1612-4388-bbbe-313ef3717d3b",
    ],
    user: {
      dp: "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/posts%2Fbd0be5136e4214a25a160af157e92d43.jpgac7e826b-8a03-4a12-b431-48cc51d4d9cc?alt=media&token=618d9770-1612-4388-bbbe-313ef3717d3b",
      email: "sandeep@gmail.com",
      name: "sd769113",
      uid: "f59KFyFzI8UmowgSStUnxSVQr093",
    },
  },
};
