"use client";

import Lottie from "lottie-react";

interface AnimationLottieProps {
  animationData: object;
  width?: number;
}

const AnimationLottie = ({
  animationData,
  width = 95,
}: AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    style: {
      width: `${width}%`,
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
