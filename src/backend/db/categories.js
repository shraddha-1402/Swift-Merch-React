import { v4 as uuid } from "uuid";
import {
  clothCategory,
  musicCategory,
  mobileCoverCategory,
} from "../../assets";

export const categories = [
  {
    _id: uuid(),
    imgUrl: musicCategory,
    imgAlt: "music-albums",
    category: "Music Albums",
    filterName: "Music",
  },
  {
    _id: uuid(),
    imgUrl: clothCategory,
    imgAlt: "clothes",
    category: "Hoodies & T-Shirts",
    filterName: "Clothes",
  },
  {
    _id: uuid(),
    imgUrl: mobileCoverCategory,
    imgAlt: "mobile-covers",
    category: "Mobile Covers",
    filterName: "Mobile_Cover",
  },
];
