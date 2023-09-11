"use client";

import "../../docs/styles.css";
import React from "react";
import { PageTransition, Button } from "ui";

export default function Page(): JSX.Element {
  const [trigger, setTrigger] = React.useState(false);
  return (
    <div>
      <Button
        className="absolute"
        onClick={():void => setTrigger(!trigger)}
        variant="secondary"
      >
        Trigger
      </Button>
      <PageTransition
        className="bg-red-900 m-2"
        direction="y"
        ease="sine.inOut"
        resolution={10}
        stagger={0.2}
        trajectory="reversed"
        trigger={trigger}
      >
        <div className="text-2xl text-secondary">Paul Vachon</div>
      </PageTransition>
    </div>
  );
}
