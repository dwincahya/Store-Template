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
  title: "Keuntungan yang didapat",
  desc: "Berbagai macam keuntungan yang bisa didapat",
  image: benefitOneImg,
  bullets: [
    {
      title: "Transaksi Cepat",
      desc: "Proses transaksi item cepat.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Keamanan Ekstra",
      desc: "Jaminan uang kembali 100% jika akun bermasalah / item tidak masuk.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Harga Menarik",
      desc: "Banyak promo menarik yang membuat harga lebih terjangkau.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Jasa yang di Tawarkan",
  desc: "Light Store menawarkan berbagai macam jasa untuk customer",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Joki Game",
      desc: "Kami menerima berbagai macam joki game online.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Jual Beli Akun",
      desc: "Kami menyediakan platform untuk jual beli akun game.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Top Up Multi",
      desc: "Top up banyak game dengan sekali pembayaran. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
