import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Suggestion } from "../Suggestion/Suggestion";

export default {
  title: "Suggestion",
  component: Suggestion,
} as ComponentMeta<typeof Suggestion>;

const Template: ComponentStory<typeof Suggestion> = (args) => (
  <Suggestion {...args} />
);

export const SuggestionsContainer = Template.bind({});
SuggestionsContainer.args = {
  users: [
    {
      name: "sandeep",
      email: "sandeep@gmail.com",
      dp: "https://ca.slack-edge.com/E03D7PAA59N-U03SPV9KD51-4a98dd15e5af-512",
      uid: "sdsd232323",
    },
    {
      name: "kuldeep",
      email: "kuldeep@gmail.com",
      dp: "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/HD-wallpaper-money-heist-mask.jpg?alt=media&token=3dc4c8eb-f0cd-4312-9ee9-a54078f12031",
      uid: "sdsd232323",
    },
    {
      name: "geekyants_official",
      email: "geekyants@gmail.com",
      dp: "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/posts%2Fft8vyhw8hulcadw8akdy.pngc0450935-64a4-42e8-8919-8d23e2c8ed0a?alt=media&token=618d9770-1612-4388-bbbe-313ef3717d3b",
      uid: "sdsd232323",
    },
    {
      name: "vaibhavi_216",
      email: "vaibhavik@geekyants.com",
      dp: "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/posts%2F779820191a1ea67a31901f5682dcc83d.jpg26d7fea8-7b41-4eef-800c-34ef653e123d?alt=media&token=618d9770-1612-4388-bbbe-313ef3717d3b",
      uid: "sdsd232323",
    },
  ],
};
