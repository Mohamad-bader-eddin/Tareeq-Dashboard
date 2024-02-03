import PaperContainer from "../../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import Table from "../../../../../../share/components/table/Table";
import useUserUsedThisCouponColumns from "./hooks/useUserUsedThisCouponColumns";
import useUserUsedThisCouponRows from "./hooks/useUserUsedThisCouponRows";
import Breadcrumb from "../../../../../../share/components/breadcrumbs/Breadcrumb";

const UserUsedThisCouponContainer = () => {
  const { t } = useTranslation();
  const { columns } = useUserUsedThisCouponColumns();
  const { initialRows } = useUserUsedThisCouponRows();
  const breadcrumbsTracks = [
    { path: "/admin/marketing/promo", name: t("promo") },
  ];
  return (
    <Layout>
      <Breadcrumb
        tracks={breadcrumbsTracks}
        current={t("user_used_this_coupon")}
      />
      <PaperContainer>
        <Table
          columns={columns}
          rows={initialRows}
          title={t("user_used_this_coupon")}
          totalCount={80}
          loading={false}
        />
      </PaperContainer>
    </Layout>
  );
};

export default UserUsedThisCouponContainer;
