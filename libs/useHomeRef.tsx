import { useRef } from 'react';

export function useHomeRef() {
  const homeRefs = {
    section1Ref: useRef(null),
    section2Ref: useRef(null),
    section3Ref: useRef(null),
  };
  return homeRefs;
}
