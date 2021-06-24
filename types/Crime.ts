import {
  faAmbulance,
  faBicycle,
  faCar,
  faFire,
  faMask,
  faMoneyBill,
  faMoneyBillAlt,
  faPills,
  faQuestion,
  faReplyAll,
  faShoppingBag,
  faShuttleVan,
  faSprayCan,
  faStickyNote,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export interface PostCode {
  data: PostCodeResult;
}

interface PostCodeResult {
  status: number;
  result: PostCodeInfo;
}

interface PostCodeInfo {
  longitude: number;
  latitude: number;
}

export const crime: any = {
  "all-crime": {
    name: "All Crime",
    icon: faReplyAll,
  },
  "anti-social-behaviour": {
    name: "Anti Social Behaviour",
    icon: faSprayCan,
  },
  "bicycle-theft": {
    name: "Bicycle Theft",
    icon: faBicycle,
  },
  burglary: {
    name: "Burglary",
    icon: faMask,
  },
  "criminal-damage-arson": {
    name: "Arson",
    icon: faFire,
  },
  drugs: {
    name: "Drugs",
    icon: faPills,
  },
  "other-theft": {
    name: "Other Theft",
    icon: faMoneyBillAlt,
  },
  "possession-of-weapons": {
    name: "Possession of Weapons",
    icon: faUtensils,
  },
  "public-order": {
    name: "Public Order",
    icon: faStickyNote,
  },
  robbery: {
    name: "Robbery",
    icon: faShuttleVan,
  },
  shoplifting: {
    name: "Shoplifting",
    icon: faShoppingBag,
  },
  "theft-from-the-person": {
    name: "Theft from the person",
    icon: faMoneyBill,
  },
  "vehicle-crime": {
    name: "Vehicle Crime",
    icon: faCar,
  },
  "violent-crime": {
    name: "Violent Crime",
    icon: faAmbulance,
  },
  "other-crime": {
    name: "Other Crime",
    icon: faQuestion,
  },
};
