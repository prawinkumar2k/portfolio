import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorOuterRef.current) {
        // Inner cursor
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";

        // Outer cursor with slight delay
        setTimeout(() => {
          if (cursorOuterRef.current) {
            cursorOuterRef.current.style.left = e.clientX + "px";
            cursorOuterRef.current.style.top = e.clientY + "px";
          }
        }, 50);
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current && cursorOuterRef.current) {
        cursorRef.current.style.opacity = "1";
        cursorOuterRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && cursorOuterRef.current) {
        cursorRef.current.style.opacity = "0";
        cursorOuterRef.current.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-4 h-4 rounded-full bg-neon-blue/80 z-[9999] transition-opacity duration-300 opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px rgba(0, 217, 255, 0.6)",
        }}
      />
      <div
        ref={cursorOuterRef}
        className="pointer-events-none fixed w-10 h-10 rounded-full border border-neon-blue/50 z-[9999] transition-opacity duration-300 opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
