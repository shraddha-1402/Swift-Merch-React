import { v4 as uuid } from "uuid";
import hoodie1 from "../../assets/products/hoodies/hoodie1.png";
import hoodie2 from "../../assets/products/hoodies/hoodie2.png";
import hoodie3 from "../../assets/products/hoodies/hoodie3.webp";
import hoodie4 from "../../assets/products/hoodies/hoodie4.png";
import hoodie5 from "../../assets/products/hoodies/hoodie5.png";
import hoodie6 from "../../assets/products/hoodies/hoodie6.webp";
import accessesories1 from "../../assets/products/accessesories/accessesories1.webp";
import accessesories2 from "../../assets/products/accessesories/accessesories2.webp";
import accessesories3 from "../../assets/products/accessesories/accessesories3.webp";
import accessesories4 from "../../assets/products/accessesories/accessesories4.webp";
import accessesories5 from "../../assets/products/accessesories/accessesories5.webp";
import mobileCover1 from "../../assets/products/mobile-covers/mobileCover1.webp";
import mobileCover2 from "../../assets/products/mobile-covers/mobileCover2.webp";
import mobileCover3 from "../../assets/products/mobile-covers/mobileCover3.webp";
import music1 from "../../assets/products/music/music1.webp";
import music2 from "../../assets/products/music/music2.webp";
import music3 from "../../assets/products/music/music3.webp";
import music4 from "../../assets/products/music/music4.webp";
import music5 from "../../assets/products/music/music5.webp";

export const products = [
  {
    _id: uuid(),
    img: mobileCover1,
    name: "TS Lover Album Phone Case",
    price: 300,
    mrp: 400,
    category: "Mobile_Cover",
    album: "Lover",
    rating: 4,
    material: "100% plastic",
    description:
      "Pink phone case featuring photo of Taylor Swift and 'TS' logo. TPU phone case. Compatible with iPhone 12, 12 mini, 12 pro, 12 pro max, 13, 13 mini, 13 pro, 13 pro max",
  },
  {
    _id: uuid(),
    img: hoodie1,
    name: "Our love lasts so long Hoodie",
    price: 200,
    mrp: 350,
    category: "Clothes",
    album: "Folklore",
    rating: 5,
    material: "80% Cotton, 20% Polyester",
    description:
      "Faded storm blue long sleeve hoodie with extra-wide drawcord pulls, side seam slits and contrast rib knit insets at the shoulders. Exposed stitching at shoulders and raw edge distressed seams at hem with front featuring song lyric 'passed down like folk songs our love lasts so long' and back featuring song title 'seven' and song lyric 'I used to scream ferociously any time I wanted.'",
  },
  {
    _id: uuid(),
    img: music2,
    name: "Evermore Album Deluxe Edition Vinyl",
    price: 300,
    mrp: 400,
    category: "Music",
    album: "Evermore",
    rating: 4,
    material: "",
    description:
      "15 songs + 2 bonus tracks 'right where you left me' and 'its time to go' deluxe album lyric booklet, including full album lyrics, 6 unique photos and artwork",
  },
  {
    _id: uuid(),
    img: hoodie2,
    name: "All Too Well Gray Hoodie",
    price: 300,
    mrp: 400,
    category: "Clothes",
    album: "Red",
    rating: 4,
    material: "52% cotton, 48% polyester",
    description:
      "Heather gray hoodie featuring tree and scarf graphic and 'All Too Well' printed on front.",
  },
  {
    _id: uuid(),
    img: accessesories1,
    name: "Lover Album Scrunchies",
    price: 300,
    mrp: 400,
    category: "Accessories",
    album: "Lover",
    rating: 4,
    material: "100% polyester",
    description:
      "Set of pink and blue velvet scrunchies with 'TS' logo repeat print.",
  },
  {
    _id: uuid(),
    img: mobileCover2,
    name: "The “in the trees” phone case",
    price: 300,
    mrp: 400,
    category: "Mobile_Cover",
    album: "Folklore",
    rating: 4,
    material: "100% plastic",
    description:
      "Phone case featuring album cover artwork and album name. tpu phone case. compatible with iphone 11, 11 pro, 11 pro max, xs, xs max, 7/8, 7/8+, and XR.",
  },
  {
    _id: uuid(),
    img: music3,
    name: "RED (Taylor's Version) CD",
    price: 300,
    mrp: 400,
    category: "Music",
    album: "Red",
    rating: 4,
    material: "",
    description:
      "30 songs, including 9 songs from the Vault, exclusive album booklet with never before seen photos, artwork and lyrics for the 9 songs from the Vault",
  },
  {
    _id: uuid(),
    img: hoodie3,
    name: "Your Ivy Grows Crewneck",
    price: 400,
    mrp: 500,
    category: "Clothes",
    album: "Evermore",
    rating: 3,
    material: "80% cotton 20% polyester",
    description:
      "Green crewneck featuring image of Taylor Swift and ivy graphic with 'Taylor Swift' and 'My palm fits in the palm of your freezing hand, taking mine, but it's been promised to another, I can't stop you putting roots in my dreamland, my house of stone, your ivy grows and now I'm covered in you' song lyrics on front chest and ivy graphic on back.",
  },
  {
    _id: uuid(),
    img: music4,
    name: "Christmas Tree Farm Digital Single",
    price: 300,
    mrp: 400,
    category: "Music",
    album: "Lover",
    rating: 4,
    material: "",
    description:
      "If purchased, a digital copy of 'Christmas Tree Farm Digital Single' will be sent to the email address supplied at checkout on or about the date of purchase. digital downloads are delivered as MP3 44.1kHz/24-bit audio files.",
  },
  {
    _id: uuid(),
    img: music5,
    name: "The lakes digital single",
    price: 300,
    mrp: 400,
    category: "Music",
    album: "Folklore",
    rating: 4,
    material: "",
    description:
      "If purchased, a digital copy of 'the lakes (original version)' will be sent to the email address supplied at checkout on or about the date of purchase. digital downloads are delivered as MP3 44.1kHz/24-bit audio files.",
  },
  {
    _id: uuid(),
    img: accessesories2,
    name: "Gold Rush Velvet Scrunchie",
    price: 300,
    mrp: 400,
    category: "Accessories",
    album: "Evermore",
    rating: 4,
    material: "100% polyester",
    description: "Gold velvet bow scrunchie with 'Taylor Swift' woven label.",
  },
  {
    _id: uuid(),
    img: mobileCover3,
    name: "The “waiting by the phone” Phone Case",
    price: 300,
    mrp: 400,
    category: "Mobile_Cover",
    album: "Evermore",
    rating: 4,
    material: "100% plastic",
    description:
      "phone case featuring album cover artwork. tpu phone case. compatible with iphone 11, 11 pro, 11 pro max, xs, xs max, 12, 12 mini, 12 pro, 12 pro max and XR.",
  },
  {
    _id: uuid(),
    img: hoodie4,
    name: "Loving Him Was Red Hoodie",
    price: 300,
    mrp: 500,
    category: "Clothes",
    album: "Red",
    rating: 4,
    material: "50% cotton / 50% polyester",
    description:
      "Gray Hoodie featuring 'Taylor Swift' printed on wearer's left front chest and 'Losing him was blue like I'd never known, missing him was dark gray, all alone, forgetting him was like trying to know somebody you never met, but loving him was red' song lyrics printed on right sleeve and 'Taylor Swift Red (Taylor's Version)' with live photo printed on back.",
  },
  {
    _id: uuid(),
    img: accessesories3,
    name: "The All Too Well Knit Scarf",
    price: 300,
    mrp: 400,
    category: "Accessories",
    album: "Red",
    rating: 4,
    material: "52% cotton, 48% polyester",
    description:
      "Heather gray hoodie featuring tree and scarf graphic and 'All Too Well' printed on front.",
  },
  {
    _id: uuid(),
    img: hoodie5,
    name: "Beautiful Tragic Love Affair Crewneck",
    price: 700,
    mrp: 900,
    category: "Clothes",
    album: "Red",
    rating: 2,
    material: "100% cotton",
    description:
      "Black crewneck featuring photo of Taylor Swift printed on front.",
  },
  {
    _id: uuid(),
    img: music1,
    name: "Fearless (Taylor's Version) vinyl",
    price: 300,
    mrp: 400,
    category: "Music",
    album: "Fearless",
    rating: 4,
    material: "",
    description:
      "Fearless (Taylor's Version) vinyl each vinyl album features: 27 songs, including 6 unreleased songs from the vault, including unique photos and artwork. 3 metallic gold color discs, each including a disc photo",
  },
  {
    _id: uuid(),
    img: hoodie6,
    name: "Life Was a Willow Hoodie",
    price: 800,
    mrp: 1000,
    category: "Clothes",
    album: "Evermore",
    rating: 5,
    material: "50% Cotton 50% Polyester",
    description:
      "Green hoodie with 'Life Was a Willow' song lyrics on front chest, 'Taylor Swift' printed on wearer's left sleeve and photo of Taylor Swift printed on the back with 'the more that you say, the less I know wherever you stray, I follow, I’m begging for you to take my hand wreck my plans, that’s my man' song lyrics and design.",
  },
  {
    _id: uuid(),
    img: accessesories4,
    name: "RED Album Ring",
    price: 300,
    mrp: 400,
    category: "Accessories",
    album: "Red",
    rating: 4,
    material: "52% cotton, 48% polyester",
    description:
      "Diamond-shaped nickel free copper alloy adjustable ring, electroplated in silver and plated with a rhodium finish, featuring a design of the word 'RED' cut out and detailed with inlaid CZ crystals and gorgeous scalloped edges. ",
  },
  {
    _id: uuid(),
    img: accessesories5,
    name: "Swifties Hair Ties",
    price: 300,
    mrp: 400,
    category: "Accessories",
    album: "Red",
    rating: 4,
    material: "90% nylon, 10% polyester",
    description:
      "Pack of 5 elastic hair ties with 'Swifties' printed on front.",
  },
];
