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
        path: "/dashboard/orders/pending-orders",
      },
      {
        title: "active_orders",
        path: "/dashboard/orders/active-orders",
      },
      {
        title: "arrived_orders",
        path: "/dashboard/orders/arrived-orders",
      },
      {
        title: "canceled_orders",
        path: "/dashboard/orders/canceled-orders",
      },
      {
        title: "scheduled_orders",
        path: "/dashboard/orders/scheduled-orders",
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
  //       path: "/dashboard/create-new-order/courier-on-demand",
  //     },
  //     {
  //       title: "P2P",
  //       path: "/dashboard/create-new-order/p2p",
  //     },
  //   ],
  // },
  {
    title: "vehicle_type",
    path: "/dashboard/vehicles",
    icon: <DirectionsCarIcon />,
  },
  {
    title: "users",
    path: "/users",
    icon: <GroupIcon />,
    subNav: [
      {
        title: "drivers",
        path: "/dashboard/users/shoppers",
      },
      {
        title: "clients",
        path: "/dashboard/users/clients",
      },
      {
        title: "black_list",
        path: "/dashboard/users/black-list",
      },
    ],
  },
  // {
  //   title: "bird_eye",
  //   path: "/dashboard/bird-eye",
  //   icon: <LocationOnIcon />,
  // },
  // {
  //   title: "stats",
  //   path: "/dashboard/stats",
  //   icon: <BarChartIcon />,
  // },
  {
    title: "slider",
    path: "/dashboard/slider",
    icon: <ImageIcon />,
  },
  {
    title: "coverage",
    path: "/coverage",
    icon: <MapIcon />,
    subNav: [
      {
        title: "zones",
        path: "/dashboard/coverage/zones",
      },
      {
        title: "polygons",
        path: "/dashboard/coverage/polygons",
      },
      // {
      //   title: "location_votes",
      //   path: "/dashboard/coverage/location-votes",
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
        path: "/dashboard/marketing/promo",
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
      // {
      //   title: "operation_time",
      //   path: "/management/operation-time",
      // },
      {
        title: "app_variables_periods",
        path: "/dashboard/management/app-varialbes-periods",
      },
      // {
      //   title: "other_app_variables",
      //   path: "/management/other-app-variables",
      // },
      // {
      //   title: "shopper_limit",
      //   path: "/management/shopper-limit",
      // },
      // {
      //   title: "app_phone_number",
      //   path: "/management/app-phone-number",
      // },
      // {
      //   title: "notifications",
      //   path: "/management/notifications",
      // },
      // {
      //   title: "messsages",
      //   path: "/management/messsages",
      // },
      // {
      //   title: "faqs",
      //   path: "/management/faqs",
      // },
    ],
  },
];
