"use client";

import * as React from "react";

const QUERY = "(pointer: coarse)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * True on touch/coarse-pointer devices (phones, most tablets). Used to skip
 * hover-driven and scroll-linked motion that's either inert or janky on touch.
 */
export function useCoarsePointer() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
