import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Products",
  desc: "We offer a diverse range of digital marketing products to cater to your business needs:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Digital Marketing",
      desc: "Comprehensive strategies to enhance your online presence and drive traffic.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Social Media Optimization",
      desc: "Maximize your reach and engagement on major social media platforms.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Google Business Listing",
      desc: "Improve your local visibility and attract more customers through optimized Google listings.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "We offer a diverse range of digital marketing products to cater to your business needs",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Digital Business Card with Auto SMS App",
      desc: "Modernize your networking with digital business cards and automated SMS.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Content Marketing",
      desc: "Craft compelling content that attracts and retains your target audience.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "NFC Google Review Card",
      desc: "Simplify the review process and boost your online reputation with NFC-enabled cards.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
