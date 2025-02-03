import { useEffect } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';

export function useAnimationOffsetEffect(
  embla: EmblaCarouselType | null | undefined,
  transitionDuration: number
) {
  useEffect(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, transitionDuration);
    }
  }, [embla, transitionDuration]);
}
