const skeletonStyles: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "var(--border)",
};

type VideoSkeletonProps = {
  aspectRatio?: string;
};

export function VideoSkeleton({ aspectRatio = "16/9" }: VideoSkeletonProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
      }}
      aria-hidden
    >
      <div style={skeletonStyles} />
    </div>
  );
}
