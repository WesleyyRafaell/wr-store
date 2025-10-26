import { FaCheck } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoTime } from "react-icons/io5";

export const pix = [
  {
    title: "Pagamento confirmado",
    icon: FaCheck,
  },
  {
    title: "Em transito",
    icon: FaCheck,
  },
  {
    title: "Saiu para entrega",
    icon: FaBoltLightning,
  },
  {
    title: "Pedido entregue",
    icon: FaCalendarCheck,
  },
];

export const ticket = [
  {
    title: "Aguardando confirmação de pagamento",
    icon: IoTime,
  },
  {
    title: "Em transito",
    icon: FaTruck,
  },
  {
    title: "Saiu para entrega",
    icon: FaBoltLightning,
  },
  {
    title: "Pedido entregue",
    icon: FaCalendarCheck,
  },
];

export const creditCard = [
  {
    title: "Falha no pagamento",
    icon: IoClose,
  },
  {
    title: "Em transito",
    icon: FaTruck,
  },
  {
    title: "Saiu para entrega",
    icon: FaBoltLightning,
  },
  {
    title: "Pedido entregue",
    icon: FaCalendarCheck,
  },
];
