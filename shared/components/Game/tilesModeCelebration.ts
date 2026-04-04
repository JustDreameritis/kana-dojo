'use client';

export const celebrationExplodeContainerVariants = {
  idle: {},
  celebrate: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.04,
    },
  },
};

export const explosionKeyframes = `
@keyframes explode {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2.4);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;
