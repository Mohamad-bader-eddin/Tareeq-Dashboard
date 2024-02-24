import { Route, Routes as AppRotes } from "react-router-dom";
import HomeContainer from "../pages/home/container/HomeContainer";
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
import TransactionTypeContainer from "../pages/transactionType/container/TransactionTypeContainer";
import AddTransactionTypeContainer from "../pages/transactionType/views/addTransactionType/container/AddTransactionTypeContainer";
import InfoTransactionTypeContainer from "../pages/transactionType/views/infoTransactionType/container/InfoTransactionTypeContainer";

const Routes = () => {
  return (
    <AppRotes>
      <Route
        path="/"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <HomeContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/orders/pending-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <PendingOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/orders/track-order/:type/:id"
        element={<TrackOrders />}
      />
      <Route
        path="/admin/orders/info-orders/:type/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoOrder />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/orders/active-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ActiveOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/orders/arrived-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ArrivedOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/orders/canceled-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <CanceledOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/orders/scheduled-orders"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ScheduleOrdersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/create-new-order"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <CourierOnDemandContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/vehicles"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <VehiclesContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/vehicles/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <VehicleInfoContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/vehicles/add-vehicle"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddVehicleContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/transaction-type"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <TransactionTypeContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/transaction-type/add"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddTransactionTypeContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/transaction-type/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoTransactionTypeContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/users/shoppers"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ShoppersContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/users/shoppers/add-shopper"
        element={<CreateShopperContainer />}
      />
      <Route
        path="/admin/users/shoppers/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/users/clients"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ClientsContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/users/clients/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <Clietntinfo />
          </RequireAuth>
        }
      />
      <Route path="/admin/users/black-list" element={<BlackListContainer />} />
      <Route path="/admin/bird-eye" element={<BirdEye />} />
      <Route
        path="/admin/slider"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <SliderContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/slider/add-slide"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddSlideContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/slider/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoSlideContainer />
          </RequireAuth>
        }
      />
      <Route path="/admin/stats" element={<StatsContainer />} />
      <Route
        path="/admin/coverage/zones"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ZonesContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/coverage/add-zones"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddZoneContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/coverage/zones/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoZoneContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/coverage/polygons"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <PolygonsContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/coverage/add-polygons"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddPolygonsContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/coverage/polygons/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoPolygonContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/coverage/location-votes"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <LocationVotesContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/coverage/location-vote-info/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ViewLocationVote />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/marketing/promo"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <PromoContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/marketing/add-promo-code"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddPromoCodeContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/marketing/promos/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoPromoContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/marketing/promo-used-copoun"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <UserUsedThisCouponContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/marketing/push-notifications"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <PushNotifications />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/marketing/sent-notifications"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <SentNotification />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/management/operation-time"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <OperationTimeContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/management/app-varialbes-periods"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AppVarialbesPeriods />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/management/add-app-varialbes-periods"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AddAppVarialbesPeriods />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/management/app-varialbes-periods/:id"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <InfoAppVarialbesPeriods />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/management/other-app-variables"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <OtherAppVariables />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/management/shopper-limit"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <ShopperLimitContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/management/app-phone-number"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AppPhoneNumberContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/management/notifications"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <NotificationsContainer />
          </RequireAuth>
        }
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
