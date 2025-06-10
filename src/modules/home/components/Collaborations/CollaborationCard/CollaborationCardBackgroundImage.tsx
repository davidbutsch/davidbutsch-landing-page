import { theme } from "@/theme";

export type CollaborationCardBackgroundImageProps = {
  src: string;
};

export const CollaborationCardBackgroundImage = (
  props: CollaborationCardBackgroundImageProps
) => {
  const { src } = props;

  return (
    <img
      style={{
        position: "absolute",
        top: 0,
        right: 0,

        height: "100%",
        maxWidth: "75%",
        padding: theme.spacing(2),

        opacity: 0.25,
        maskImage: "linear-gradient(45deg, transparent 30%, #FFFFFF)",

        zIndex: 0,
      }}
      src={src}
    />
  );
};
