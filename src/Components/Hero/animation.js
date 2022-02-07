import gsap from "gsap";
let tl = gsap.timeline();
const animate = (image1, image2, image3) => {
  tl.from(
    image1,
    {
      duration: 1.2,
      y: 1200,
      ease: "power3.inOut",
      opacity: 0,
    },
    "-=1"
  )
    .from(
      image1,
      {
        duration: 2,
        scale: 1.6,
        ease: "power3.inOut",
      },
      "-=1.2"
    )
    .from(
      image2,
      {
        duration: 1.2,
        y: 1200,
        ease: "power3.inOut",
        opacity: 0,
      },
      "-=1"
    )
    .from(
      image2,
      {
        duration: 2,
        scale: 1.6,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .from(
      image3,
      {
        duration: 1.2,
        y: 1200,
        ease: "power3.inOut",
        opacity: 0,
      },
      "-=1"
    )
    .from(
      image3,
      {
        duration: 2,
        scale: 1.6,
        ease: "power3.inOut",
      },
      "-=1"
    );
};
export default animate;
