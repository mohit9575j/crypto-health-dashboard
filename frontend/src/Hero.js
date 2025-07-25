import React from "react";
import { BackgroundLines } from "./Herosupport.js";

  function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight" style={{lineHeight:1.5}}>
      Crypto Health Tracker, <br />  Real-Time Market Insights.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center" style={{lineHeight:2}}>
      Stay ahead in the crypto world with live price updates, trending coins, interactive charts, and news — all in one place. 
      Track, convert, and analyze your favorite cryptocurrencies with ease.
      </p>
    </BackgroundLines>
  );
}
export default BackgroundLinesDemo;