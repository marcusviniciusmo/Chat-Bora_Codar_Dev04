import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export interface UserMocks {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
  title: string;
};