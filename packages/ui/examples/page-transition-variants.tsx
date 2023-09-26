import { useRef, useState, useLayoutEffect } from "react";
import { PageTransition, type PageLoaderProps } from "@ui";
import { Trigger, Selector, Radio, Slider, ShowcaseWrapper } from "@controls";
import gsap from "gsap";

type Props = {};

const easeTypes = [
  "none",
  "power1",
  "power1.in",
  "power1.out",
  "power1.inOut",
  "power2",
  "power2.in",
  "power2.out",
  "power2.inOut",
  "power3",
  "power3.in",
  "power3.out",
  "power3.inOut",
  "power4",
  "power4.in",
  "power4.out",
  "power4.inOut",
  "back",
  "back.in",
  "back.out",
  "back.inOut",
  "bounce",
  "bounce.in",
  "bounce.out",
  "bounce.inOut",
  "circ",
  "circ.in",
  "circ.out",
  "circ.inOut",
  "elastic",
  "elastic.in",
  "elastic.out",
  "elastic.inOut",
  "expo",
  "expo.in",
  "expo.out",
  "expo.inOut",
  "sine",
  "sine.in",
  "sine.out",
  "sine.inOut",
];

const PageTransitionVariant = (props: Props) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [direction, setDirection] = useState<"y" | "x">("y");
  const [ease, setEase] = useState<PageLoaderProps["ease"]>("none");
  const [resolution, setResolution] = useState<number>(16);
  const [stagger, setStagger] = useState<number>(100 / 300 / 2);
  const [trajectory, setTrajectory] = useState<"default" | "reversed">(
    "default"
  );

  return (
    <ShowcaseWrapper className="w-full h-full flex-col md:flex-row gap-8 justify-between">
      <ShowcaseWrapper.Component className="w-full h-full rounded-xl">
        <PageTransition
          direction={direction}
          ease={ease}
          resolution={resolution}
          stagger={stagger}
          trajectory={trajectory}
          trigger={trigger}
        />
      </ShowcaseWrapper.Component>
      <ShowcaseWrapper.Controllers className="gap-4">
        <Radio
          propName="Direction"
          items={["x", "y"]}
          defaultValue={direction}
          direction="row"
          defaultChecked={true}
          onValueChange={(val: typeof direction): void => setDirection(val)}
          className=""
        />
        <Radio
          propName="Trajectory"
          items={["default", "reversed"]}
          defaultValue={trajectory}
          direction="row"
          defaultChecked={true}
          onValueChange={(val: typeof trajectory): void => setTrajectory(val)}
          className=""
        />
        <Selector
          className=""
          propName="Ease"
          propTypes={easeTypes}
          direction="column"
          onValueChange={(val: string): void => setEase(val as never)}
          defaultValue={ease}
          placeholder={ease}
        />

        <Slider
          propName="Resolution"
          onValueChange={(val) => {
            setResolution(Math.floor((val as never) / 3));
          }}
          direction="column"
          size="2"
          className=""
        />
        <Slider
          propName="Stagger"
          onValueChange={(val) => {
            setStagger((val as never) / 300);
          }}
          direction="column"
          size="2"
          className=""
        />
        <Trigger
          propName="Trigger"
          onClick={(): void => setTrigger(!trigger)}
          className=""
          direction="column"
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
};

const PageTransitionChildrenVariant = (props: Props) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const container = useRef(null);
  const textContainer = useRef(null);
  const ref = useRef(null);
  const text = useRef(null);
  const tl = useRef<GSAPTimeline>(gsap.timeline({ paused: true }));

  const handleTrigger = () => {
    setTrigger(!trigger);
    if (!trigger) {
      tl.current.restart(true);
    } else {
      tl.current?.play();
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(container.current, { x: -100 });
      gsap.set(textContainer.current, { x: -75 });
      tl.current
        .from(ref.current, {
          y: 300,
          ease: "power1",
          onComplete: () => {
            gsap.to(ref.current, {
              y: -100,
              delay: 2.6,
            });
          },
        })
        .from(text.current, {
          x: -300,
          delay: 0.3,
          onComplete: () => {
            gsap.to(text.current, {
              x: -300,
              delay: 2,
              ease: "power1.out",
            });
          },
        });
    }, [container.current]);

    return () => ctx.revert();
  }, []);

  return (
    <ShowcaseWrapper className="w-full h-full flex-col md:flex-row gap-8 justify-between">
      <ShowcaseWrapper.Component className="w-full h-full rounded-xl">
        <PageTransition
          direction="x"
          ease="power2.in"
          resolution={16}
          stagger={0.1}
          delay={2.6}
          trajectory="reversed"
          trigger={trigger}
        >
          <div className="flex items-center">
            <div
              className="text-5xl text-white overflow-hidden "
              ref={container}
            >
              <img
                ref={ref}
                src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1692744161/ButtonIcon-gray_yae3pe.png"
                alt="img"
                style={{ height: "72px" }}
              />
            </div>
            <div className="overflow-hidden" ref={textContainer}>
              <p ref={text} className="text-white text-3xl">
                paperplane-ui
              </p>
            </div>
          </div>
        </PageTransition>
      </ShowcaseWrapper.Component>
      <ShowcaseWrapper.Controllers className="gap-4">
        <Trigger
          propName="Trigger"
          onClick={handleTrigger}
          className=""
          direction="column"
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
};

export { PageTransitionVariant, PageTransitionChildrenVariant };
