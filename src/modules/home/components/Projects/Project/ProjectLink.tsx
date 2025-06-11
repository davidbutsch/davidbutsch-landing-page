import { Icon, Link } from "@mui/material";
import { useMemo } from "react";

export type ProjectLinkProps = {
  url: string;
};

export const ProjectLink = (props: ProjectLinkProps) => {
  const { url } = props;

  const hostname = useMemo(() => new URL(url).hostname, [url]);

  return (
    <Link href={url} target="_blank" rel="noopener" mt={{ xs: 4, md: 8 }}>
      {hostname}
      <Icon className="material-symbols-outlined" fontSize="small">
        arrow_outward
      </Icon>
    </Link>
  );
};
