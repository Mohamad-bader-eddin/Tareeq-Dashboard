import { Route, Routes as AppRotes, Navigate } from "react-router-dom";
// import HomeContainer from "../pages/home/container/HomeContainer";
import RequireAuth from "../auth/RequireAuth";
import PendingOrdersContainer from "../pages/orders/views/pendingOrders/container/PendingOrdersContainer";
import TrackOrders from "../pages/orders/container/TrackOrders";
import InfoOrder from "../pages/orders/container/InfoOrder";
import Clietntinfo from "../pages/users/views/clients/view/Clietntinfo";
import ActiveOrdersContainer from "../pages/orders/views/activeOrders/container/ActiveOrdersContainer";
import ArrivedOrdersContainer from "../pages/orders/views/arrivedOrders/container/ArrivedOrdersContainer";
import CanceledOrdersContainer from "../pages/orders/views/canceledOrders/container/CanceledOrdersContainer";
import ScheduleOrdersContainer from "../pages/orders/views/scheduleOrders/container/ScheduleOrdersContainer";
import CourierOnDemandContainer from "../pages/createNewOrder/views/courierOnDemand/container/CourierOnDemandContainer";
import P2pContainer from "../pages/createNewOrder/views/p2p/container/P2pContainer";
import ShoppersContainer from "../pages/users/views/shoppers/container/ShoppersContainer";
import CreateShopperContainer from "../pages/users/views/shoppers/views/createShopper/container/CreateShopperContainer";
import InfoContainer from "../pages/users/views/shoppers/views/info/container/InfoContainer";
import ClientsContainer from "../pages/users/views/clients/container/ClientsContainer";
import BlackListContainer from "../pages/users/views/blackList/container/BlackListContainer";
import BirdEye from "../pages/birdEye/container/BirdEye";
import StatsContainer from "../pages/stats/container/StatsContainer";
import ZonesContainer from "../pages/coverage/views/zones/container/ZonesContainer";
import AddZoneContainer from "../pages/coverage/views/zones/views/AddZoneContainer";
import PolygonsContainer from "../pages/coverage/views/polygons/container/PolygonsContainer";
import AddPolygonsContainer from "../pages/coverage/views/polygons/views/AddPolygonsContainer";
import LocationVotesContainer from "../pages/coverage/views/locationVotes/container/LocationVotesContainer";
import ViewLocationVote from "../pages/coverage/views/locationVotes/views/ViewLocationVote";
import PromoContainer from "../pages/marketing/views/promo/container/PromoContainer";
import UserUsedThisCouponContainer from "../pages/marketing/views/promo/views/userUsedThisCoupon/UserUsedThisCouponContainer";
import AddPromoCodeContainer from "../pages/marketing/views/promo/views/addPromoCode/AddPromoCodeContainer";
import PushNotifications from "../pages/marketing/views/pushNotifications/container/PushNotifications";
import SentNotification from "../pages/marketing/views/sentNotifications/container/SentNotification";
import OperationTimeContainer from "../pages/management/views/operationTime/container/OperationTimeContainer";
import AppVarialbesPeriods from "../pages/management/views/appVarialbesPeriods/container/AppVarialbesPeriods";
import AddAppVarialbesPeriods from "../pages/management/views/appVarialbesPeriods/views/add/container/AddAppVarialbesPeriods";
import OtherAppVariables from "../pages/management/views/otherAppVariables/container/OtherAppVariables";
import ShopperLimitContainer from "../pages/management/views/shopperLimit/container/ShopperLimitContainer";
import AppPhoneNumberContainer from "../pages/management/views/appPhoneNumber/container/AppPhoneNumberContainer";
import NotificationsContainer from "../pages/management/views/notifications/container/NotificationsContainer";
import MessagesContainer from "../pages/management/views/messages/container/MessagesContainer";
import ViewMessageContainer from "../pages/management/views/messages/views/ViewMessageContainer";
import FAQsContainer from "../pages/management/views/FAQs/container/FAQsContainer";
import AddFAQsContainer from "../pages/management/views/FAQs/views/AddFAQsContainer";
import VehiclesContainer from "../pages/vehicles/container/VehiclesContainer";
import VehicleInfoContainer from "../pages/vehicles/views/info/container/VehicleInfoContainer";
import AddVehicleContainer from "../pages/vehicles/views/addVehicle/container/AddVehicleContainer";
import InfoZoneContainer from "../pages/coverage/views/zones/views/InfoZoneContainer";
import InfoPromoContainer from "../pages/marketing/views/promo/views/infoPromo/container/InfoPromoContainer";
import SliderContainer from "../pages/slider/container/SliderContainer";
import AddSlideContainer from "../pages/slider/views/addSlide/container/AddSlideContainer";
import InfoSlideContainer from "../pages/slider/views/infoSlide/container/InfoSlideContainer";
import InfoPolygonContainer from "../pages/coverage/views/polygons/views/InfoPolygonContainer";
import InfoAppVarialbesPeriods from "../pages/management/views/appVarialbesPeriods/views/info/container/InfoAppVarialbesPeriods";

const Routes = () => {
  return (
    <AppRotes>
      <Route
        path="/"
        element={
          <Navigate to="/dashboard/orders/pending-orders" replace={true} />
        }
      />
      <Route
        path="/dashboard/orders/pending-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <PendingOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/orders/track-order/:type"
        element={<TrackOrders />}
      />
      <Route
        path="/dashboard/orders/info-orders/:type/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoOrder />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/orders/active-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ActiveOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/orders/arrived-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ArrivedOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/orders/canceled-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <CanceledOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/orders/scheduled-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ScheduleOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/create-new-order/courier-on-demand"
        element={<CourierOnDemandContainer />}
      />
      <Route
        path="/dashboard/create-new-order/p2p"
        element={<P2pContainer />}
      />
      <Route
        path="/dashboard/vehicles"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <VehiclesContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/vehicles/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <VehicleInfoContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/vehicles/add-vehicle"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddVehicleContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/users/shoppers"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ShoppersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/users/shoppers/add-shopper"
        element={<CreateShopperContainer />}
      />
      <Route
        path="/dashboard/users/shoppers/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/users/clients"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ClientsContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/users/clients/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <Clietntinfo />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/users/black-list"
        element={<BlackListContainer />}
      />
      <Route path="/dashboard/bird-eye" element={<BirdEye />} />
      <Route
        path="/dashboard/slider"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <SliderContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/slider/add-slide"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddSlideContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/slider/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoSlideContainer />
          </RequireAuth>
        }
      />
      <Route path="/dashboard/stats" element={<StatsContainer />} />
      <Route
        path="/dashboard/coverage/zones"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ZonesContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/coverage/add-zones"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddZoneContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/coverage/zones/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoZoneContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/coverage/polygons"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <PolygonsContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/coverage/add-polygons"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddPolygonsContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/coverage/polygons/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoPolygonContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/coverage/location-votes"
        element={<LocationVotesContainer />}
      />
      <Route
        path="/dashboard/coverage/location-vote-info"
        element={<ViewLocationVote />}
      />
      <Route
        path="/dashboard/marketing/promo"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <PromoContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/marketing/add-promo-code"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddPromoCodeContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/marketing/promos/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoPromoContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/marketing/promo-used-copoun"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <UserUsedThisCouponContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/marketing/push-notifications"
        element={<PushNotifications />}
      />
      <Route
        path="/marketing/sent-notifications"
        element={<SentNotification />}
      />
      <Route
        path="/management/operation-time"
        element={<OperationTimeContainer />}
      />
      <Route
        path="/dashboard/management/app-varialbes-periods"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AppVarialbesPeriods />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/management/add-app-varialbes-periods"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddAppVarialbesPeriods />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/management/app-varialbes-periods/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoAppVarialbesPeriods />
          </RequireAuth>
        }
      />
      <Route
        path="/management/other-app-variables"
        element={<OtherAppVariables />}
      />
      <Route
        path="/management/shopper-limit"
        element={<ShopperLimitContainer />}
      />
      <Route
        path="/management/app-phone-number"
        element={<AppPhoneNumberContainer />}
      />
      <Route
        path="/management/notifications"
        element={<NotificationsContainer />}
      />
      <Route path="/management/messsages" element={<MessagesContainer />} />
      <Route
        path="/management/messsages/:id"
        element={<ViewMessageContainer />}
      />
      <Route path="/management/faqs" element={<FAQsContainer />} />
      <Route path="/management/add-faqs" element={<AddFAQsContainer />} />
    </AppRotes>
  );
};

export default Routes;
