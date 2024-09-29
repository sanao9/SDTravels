import anuradhapura from "../public/CardImg/Anuradhapura.jpg";
import ella from "../public/CardImg/Alla.png";
import Galle from "../public/CardImg/Rectangle 13 (1).png";
import sigiriya from "../public/CardImg/SIgiriya.jpg";
import { StaticImageData } from "next/image";

export interface Destination {
  id: number;
  name: string;
  image: StaticImageData;
  province:string;
  established:string;

}

export interface MoreDestination {
  name: string;
  image: StaticImageData;
}

export const destinations: Destination[] = [
  { id: 1, name: "Anuradhapura", province:"North Central Province", established:"5th century BC",image: anuradhapura  },
  { id: 2, name: "Sigiriya", province:"North Central Province", established:"5th century BC",image: sigiriya },
  { id: 3, name: "Ella", province:"North Central Province", established:"5th century BC",image: ella},

  { id: 4, name: "Anuradhapura", province:"North Central Province", established:"5th century BC",image: anuradhapura },
  { id: 5, name: "Sigiriya", province:"North Central Province", established:"5th century BC",image: sigiriya },
  { id: 6, name: "Ella" ,province:"North Central Province", established:"5th century BC", image: ella },
];

export const moreDestinations: MoreDestination[] = [
  { name: "sigiriya", image: sigiriya },
  { name: "Galle", image: Galle },
  { name: "Ella", image: ella },
  { name: "Anuradhapur", image: anuradhapura },
];
