import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CarouselCard } from "../ Carousel/CarouselCard";

export default {
  title: "Carousel",
  component: CarouselCard,
} as ComponentMeta<typeof CarouselCard>;

const Template: ComponentStory<typeof CarouselCard> = (args) => (
  <CarouselCard {...args} />
);

export const CarouselPost = Template.bind({});
CarouselPost.args = {
  src: [
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/pexels-photo-14332931%201.png?alt=media&token=ffa2498d-6218-45f7-bd5b-7fbb550b8ca6",
    "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  ],
};
export const WithoutCarousel = Template.bind({});

WithoutCarousel.args = {
  src: [
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-39647.appspot.com/o/pexels-photo-14332931%201.png?alt=media&token=ffa2498d-6218-45f7-bd5b-7fbb550b8ca6",
  ],
};
