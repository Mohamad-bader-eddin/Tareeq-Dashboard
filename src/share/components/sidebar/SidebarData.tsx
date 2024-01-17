// import HouseIcon from "@mui/icons-material/House";
import StyleIcon from "@mui/icons-material/Style";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
import GroupIcon from "@mui/icons-material/Group";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ImageIcon from "@mui/icons-material/Image";

export const SidebarData = [
  // {
  //   title: "dashboard",
  //   path: "/",
  //   icon: <HouseIcon />,
  // },
  {
    title: "orders",
    path: "/orders",
    icon: <StyleIcon />,
    subNav: [
      {
        title: "pending_orders",
        path: "/orders/pending-orders",
      },
      {
        title: "active_orders",
        path: "/orders/active-orders",
      },
      {
        title: "arrived_orders",
        path: "/orders/arrived-orders",
      },
      {
        title: "canceled_orders",
        path: "/orders/canceled-orders",
      },
      {
        title: "scheduled_orders",
        path: "/orders/scheduled-orders",
      },
    ],
  },
  // {
  //   title: "create_new_order",
  //   path: "/create-new-order",
  //   icon: <AddCircleIcon />,
  //   subNav: [
  //     {
  //       title: "courier_on_demand",
  //       path: "/create-new-order/courier-on-demand",
  //     },
  //     {
  //       title: "P2P",
  //       path: "/create-new-order/p2p",
  //     },
  //   ],
  // },
  {
    title: "vehicle_type",
    path: "/vehicles",
    icon: <DirectionsCarIcon />,
  },
  {
    title: "users",
    path: "/users",
    icon: <GroupIcon />,
    subNav: [
      {
        title: "drivers",
        path: "/users/shoppers",
      },
      {
        title: "clients",
        path: "/users/clients",
      },
      {
        title: "black_list",
        path: "/users/black-list",
      },
    ],
  },
  // {
  //   title: "bird_eye",
  //   path: "/bird-eye",
  //   icon: <LocationOnIcon />,
  // },
  // {
  //   title: "stats",
  //   path: "/stats",
  //   icon: <BarChartIcon />,
  // },
  {
    title: "slider",
    path: "/slider",
    icon: <ImageIcon />,
  },
  {
    title: "coverage",
    path: "/coverage",
    icon: <MapIcon />,
    subNav: [
      {
        title: "zones",
        path: "/coverage/zones",
      },
      {
        title: "polygons",
        path: "/coverage/polygons",
      },
      // {
      //   title: "location_votes",
      //   path: "/coverage/location-votes",
      // },
    ],
  },
  {
    title: "marketing",
    path: "/marketing",
    icon: <LocalActivityIcon />,
    subNav: [
      {
        title: "promo",
        path: "/marketing/promo",
      },
      // {
      //   title: "push_notifications",
      //   path: "/marketing/push-notifications",
      // },
      // {
      //   title: "sent_notifications",
      //   path: "/marketing/sent-notifications",
      // },
    ],
  },
  {
    title: "management",
    path: "/management",
    icon: <SettingsSuggestIcon />,
    subNav: [
      {
        title: "operation_time",
        path: "/management/operation-time",
      },
      {
        title: "app_variables_periods",
        path: "/management/app-varialbes-periods",
      },
      {
        title: "other_app_variables",
        path: "/management/other-app-variables",
      },
      // {
      //   title: "shopper_limit",
      //   path: "/management/shopper-limit",
      // },
      {
        title: "app_phone_number",
        path: "/management/app-phone-number",
      },
      // {
      //   title: "notifications",
      //   path: "/management/notifications",
      // },
      // {
      //   title: "messsages",
      //   path: "/management/messsages",
      // },
      {
        title: "faqs",
        path: "/management/faqs",
      },
    ],
  },
];
