import React, { useState, useRef, useEffect, ReactNode } from "react";
import styles from "./ToggleSection.module.css";

interface ToggleSectionProps {
  title: string;
  children: ReactNode;
}

const ToggleSection: React.FC<ToggleSectionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        {title}
      </div>
      <div
        className={styles.content}
        ref={contentRef}
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ToggleSection;


