import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ImageBox } from "../ImageBox/ImageBox";

export default {
  title: "ImageBox",
  component: ImageBox,
} as ComponentMeta<typeof ImageBox>;

const Template: ComponentStory<typeof ImageBox> = (args) => (
  <ImageBox {...args} />
);

export const ImageCard = Template.bind({});
ImageCard.args = {
  src: "https://placeimg.com/250/250/tech",
};
