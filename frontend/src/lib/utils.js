/**
 * Utility function to merge class names.
 * Drop-in replacement for shadcn's cn() that doesn't require clsx/tailwind-merge.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
