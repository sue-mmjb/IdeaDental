"use client";

import { useEffect, useRef } from "react";

/**
 * The assistant's card. It sits beside the FAQ list, where a reader who did not find their
 * question is already looking.
 *
 * CustomGPT's embed writes its own tree into #customgpt_chat, so the script is appended after
 * mount rather than rendered as JSX: React must not own, re-render or tear down that subtree.
 * The ref guard keeps it to one injection under React's double-invoked effects in development.
 * The frame keeps its height whether or not the script answers, so the card never collapses.
 */
const EMBED = {
  src: "https://cdn.customgpt.ai/js/embed.js",
  div_id: "customgpt_chat",
  p_id: "8618",
  p_key: "f283d26df2bbb2ebd89c714ef5a70579",
};

export default function AskIdeaDental() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;

    const script = document.createElement("script");
    script.src = EMBED.src;
    script.defer = true;
    script.setAttribute("div_id", EMBED.div_id);
    script.setAttribute("p_id", EMBED.p_id);
    script.setAttribute("p_key", EMBED.p_key);
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="ask"
      data-reveal
      className="overflow-hidden rounded-card border border-line bg-white text-left shadow-[0_2px_4px_rgba(15,42,51,0.04),0_18px_40px_-16px_rgba(15,42,51,0.22)]"
    >
      <div id={EMBED.div_id} className="min-h-[clamp(400px,52vh,520px)]" />
    </div>
  );
}
