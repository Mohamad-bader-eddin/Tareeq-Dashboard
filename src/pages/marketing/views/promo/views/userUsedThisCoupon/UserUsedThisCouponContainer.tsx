import PaperContainer from "../../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import Table from "../../../../../../share/components/table/Table";
import useUserUsedThisCouponColumns from "./hooks/useUserUsedThisCouponColumns";
import useUserUsedThisCouponRows from "./hooks/useUserUsedThisCouponRows";
import Breadcrumb from "../../../../../../share/components/breadcrumbs/Breadcrumb";
import { useParams } from "react-router-dom";
import usePromoIdQuery from "./hooks/usePromoIdQuery";

const UserUsedThisCouponContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = usePromoIdQuery(id as string);
  const { columns } = useUserUsedThisCouponColumns();
  const { rows } = useUserUsedThisCouponRows({ data: data?.data?.content });
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
          rows={rows}
          title={t("user_used_this_coupon")}
          totalCount={data?.data?.content?.used_promos.length}
          loading={isLoading}
        />
      </PaperContainer>
    </Layout>
  );
};

export default UserUsedThisCouponContainer;
