import { ListerDataType } from "./types";
import { GITHUB } from "../../constants/index";
import {
  FACEBOOK,
  INSTAGRAM,
  LINKEDIN,
  NSOKOO_LINKEDIN,
} from "../../constants/index";

export const footerOptions: ListerDataType[] = [
  {
    title: "about me",
    items: [
      { title: "about", path: "/about" },
      {
        title: "Testimonials",
        path: "./recommendations",
      },
    ],
  },
  {
    title: "Follow me",
    items: [
      {
        title: "LinkedIn",
        path: LINKEDIN,
      },
      {
        title: "github",
        path: GITHUB,
      },
      { title: "facebook", path: FACEBOOK },
      {
        title: "instagram",
        path: INSTAGRAM,
      },
    ],
  },
  {
    title: "My Products",
    items: [{ title: "nsokoo", path: NSOKOO_LINKEDIN }],
  },
];
