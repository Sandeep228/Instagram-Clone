import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Highlight } from "./Highlight";

export default {
  title: "Dialog",
  component: Highlight,
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = (args) => <Highlight />;

export const StoryDialogue = Template.bind({});
StoryDialogue.args = {};
