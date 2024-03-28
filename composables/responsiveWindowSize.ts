import { useWindowSize } from "@vueuse/core"

type ResponsivenessThresholds = {
  tablet?: number;
  mobile?: number;
}
export function useResponsiveWindowSize({ tablet = 1024, mobile = 640 }: ResponsivenessThresholds) {
  const { width } = useWindowSize()

  function isWithinThreshold(threshold: number) {
    if (width.value === Infinity && window)
      return window.innerWidth <= threshold
    else if (width.value === Infinity && !window)
      return null

    return width.value <= threshold
  }

  const isTablet = computed(() => {
    const threshold = tablet
    return isWithinThreshold(threshold)
  })


  const isMobile = computed(() => {
    const threshold = mobile
    return isWithinThreshold(threshold)
  })

  return {
    isTablet,
    isMobile
  }
}