export type SkeletonVariant = "text" | "circular" | "rectangular";

export interface SkeletonProps {
  /** Shape variant of the skeleton */
  variant?: SkeletonVariant;
  /** Width of the skeleton (CSS value or number in px) */
  width?: string | number;
  /** Height of the skeleton (CSS value or number in px) */
  height?: string | number;
  /** Number of lines to render (only applies to text variant) */
  lines?: number;
  /** Whether the shimmer animation is active */
  animated?: boolean;
  /** Additional CSS classes */
  className?: string;
}
