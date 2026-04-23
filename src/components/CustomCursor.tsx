import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest('a, button, [data-cursor="hover"]'));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 2.4 : 1})`,
        }}
      >
        <div className="h-3 w-3 rounded-full bg-primary" />
      </div>
      <div
        className="pointer-events-none fixed z-[99] h-10 w-10 rounded-full border border-primary/40 transition-transform duration-500 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.6 : 1})`,
        }}
      />
    </>
  );
};
