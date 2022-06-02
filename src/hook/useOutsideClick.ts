import React, { useRef, useEffect, ElementRef } from "react";

export function useOutsideClick(ref: any, setModal: (cb: boolean) => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {

        setModal(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setModal]);
}