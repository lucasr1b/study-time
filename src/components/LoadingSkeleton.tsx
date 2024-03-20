type LoadingSkeletonProps = {
  width: string;
  height: string;
  rounded: string;
};

const LoadingSkeleton = ({ width, height, rounded }: LoadingSkeletonProps) => {
  return (
    <div className={`leading-relaxed w-${width} h-${height} animate-pulse bg-darker-accent rounded-${rounded}`}></div>
  );
};

LoadingSkeleton.defaultProps = {
  rounded: 'sm',
};

export default LoadingSkeleton;