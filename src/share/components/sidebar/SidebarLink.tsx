import { useTranslation } from "react-i18next";
import { A, ButtonLink, LinkItem } from "./SidebarLink.style";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Typography,
  Tooltip,
  styled,
  tooltipClasses,
  TooltipProps,
  Collapse,
  Stack,
} from "@mui/material";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import { useDarkMode } from "../../../context/DarkMode";
import useMedeaQueries from "../../utils/useMideaQuery";

const Tooltips = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: "18px",
  },
});

const SidebarLink = ({
  openSidebar,
  hoverOnCloseSidebar,
  path,
  title,
  icon,
  subNav,
}: SidebarLinkProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();
  const { tablet } = useMedeaQueries();
  return (
    <>
      {openSidebar ||
      (!openSidebar && hoverOnCloseSidebar) ||
      (openSidebar && tablet) ? (
        subNav ? (
          <>
            <LinkItem>
              <ButtonLink
                onClick={() => setOpen((prev) => !prev)}
                className={open ? "active" : ""}
                $darkMode={darkMode}
              >
                <div className="content">
                  <div className="icon">{icon}</div>
                  <Typography variant="body1">{t(title)}</Typography>
                </div>
                <Stack direction={"row"} alignItems={"center"}>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </Stack>
              </ButtonLink>
            </LinkItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {subNav.map((item, index) => (
                <A to={item.path} $darkMode={darkMode} key={index}>
                  <div className="content">
                    {/* <div className="icon">
                      <FiberManualRecordIcon sx={{ fontSize: "18px" }} />
                    </div> */}
                    <Typography variant="body1" sx={{ marginInline: "20px" }}>
                      {t(item.title)}
                    </Typography>
                  </div>
                </A>
              ))}
            </Collapse>
          </>
        ) : (
          <LinkItem>
            <A to={path} $darkMode={darkMode}>
              <div className="content">
                <div className="icon">{icon}</div>
                <Typography variant="body1">{t(title)}</Typography>
              </div>
            </A>
          </LinkItem>
        )
      ) : !tablet ? (
        <LinkItem>
          <Tooltips title={t(title)}>
            <A to={path} $darkMode={darkMode}>
              <div className="content">
                <div className="icon">{icon}</div>
              </div>
            </A>
          </Tooltips>
        </LinkItem>
      ) : null}
    </>
  );
};

type SidebarLinkType = {
  path: string;
  title: string;
  icon?: JSX.Element;
};

type SidebarLinkProps = SidebarLinkType & {
  openSidebar: boolean;
  hoverOnCloseSidebar: boolean;
  subNav?: SidebarLinkType[];
};

export default SidebarLink;
