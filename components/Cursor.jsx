'use client';

import '@/styles/cursor.css'
import {useEffect, useRef, useState} from "react";

const Cursor = () => {
  const cursorRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    if (cursorRef.current == null) {
      return;
    }
    const mouseMoveHandler = (event) => {
      if (cursorRef.current == null) {
        return;
      }
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    const mouseClickHandler = () => {
      if (cursorRef.current == null) {
        return;
      }
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
           if (cursorRef.current == null) {
             return;
           }
           cursorRef.current.classList.remove("expand");
      }, 500);
    }
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener('click', mouseClickHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener('click', mouseClickHandler);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className='hidden md:flex cursor'
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    />
  );
};

export default Cursor;