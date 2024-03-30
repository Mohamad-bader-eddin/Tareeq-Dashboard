import HouseIcon from "@mui/icons-material/House";
import StyleIcon from "@mui/icons-material/Style";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GroupIcon from "@mui/icons-material/Group";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ImageIcon from "@mui/icons-material/Image";
import ReceiptIcon from "@mui/icons-material/Receipt";

export const SidebarData = [
  {
    title: "admin",
    path: "/",
    icon: <HouseIcon />,
  },
  {
    title: "orders",
    path: "/orders",
    icon: <StyleIcon />,
    subNav: [
      {
        title: "pending_orders",
        path: "/admin/orders/pending-orders",
      },
      {
        title: "active_orders",
        path: "/admin/orders/active-orders",
      },
      {
        title: "arrived_orders",
        path: "/admin/orders/arrived-orders",
      },
      {
        title: "canceled_orders",
        path: "/admin/orders/canceled-orders",
      },
      {
        title: "scheduled_orders",
        path: "/admin/orders/scheduled-orders",
      },
    ],
  },
  {
    title: "create_new_order",
    path: "/admin/create-new-order",
    icon: <AddCircleIcon />,
    // subNav: [
    //   {
    //     title: "courier_on_demand",
    //     path: "/admin/create-new-order/courier-on-demand",
    //   },
    //   {
    //     title: "P2P",
    //     path: "/admin/create-new-order/p2p",
    //   },
    // ],
  },
  {
    title: "vehicle_type",
    path: "/admin/vehicles",
    icon: <DirectionsCarIcon />,
  },
  {
    title: "transaction_type",
    path: "/admin/transaction-type",
    icon: <ReceiptIcon />,
  },
  {
    title: "users",
    path: "/users",
    icon: <GroupIcon />,
    subNav: [
      {
        title: "drivers",
        path: "/admin/users/shoppers",
      },
      {
        title: "clients",
        path: "/admin/users/clients",
      },
      {
        title: "black_list",
        path: "/admin/users/black-list",
      },
    ],
  },
  // {
  //   title: "bird_eye",
  //   path: "/admin/bird-eye",
  //   icon: <LocationOnIcon />,
  // },
  {
    title: "stats",
    path: "/admin/stats",
    icon: <BarChartIcon />,
  },
  {
    title: "slider",
    path: "/admin/slider",
    icon: <ImageIcon />,
  },
  {
    title: "coverage",
    path: "/coverage",
    icon: <MapIcon />,
    subNav: [
      {
        title: "zones",
        path: "/admin/coverage/zones",
      },
      {
        title: "polygons",
        path: "/admin/coverage/polygons",
      },
      {
        title: "location_votes",
        path: "/admin/coverage/location-votes",
      },
    ],
  },
  {
    title: "marketing",
    path: "/marketing",
    icon: <LocalActivityIcon />,
    subNav: [
      {
        title: "promo",
        path: "/admin/marketing/promo",
      },
      {
        title: "notifications",
        path: "/admin/marketing/notifications",
      },
      {
        title: "push_notifications",
        path: "/admin/marketing/push-notifications",
      },
      {
        title: "sent_notifications",
        path: "/admin/marketing/sent-notifications",
      },
    ],
  },
  {
    title: "management",
    path: "/management",
    icon: <SettingsSuggestIcon />,
    subNav: [
      {
        title: "operation_time",
        path: "/admin/management/operation-time",
      },
      {
        title: "app_variables_periods",
        path: "/admin/management/app-varialbes-periods",
      },
      // {
      //   title: "other_app_variables",
      //   path: "/admin/management/other-app-variables",
      // },
      {
        title: "auto_assign_radius",
        path: "/admin/management/auto-assign-radius",
      },
      {
        title: "app_phone_number",
        path: "/admin/management/app-phone-number",
      },
      {
        title: "shopper_limit",
        path: "/admin/management/shopper-limit",
      },
      {
        title: "WhatsApp",
        path: "/admin/management/Whatsapp",
      },
      // {
      //   title: "notifications",
      //   path: "/admin/management/notifications",
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
