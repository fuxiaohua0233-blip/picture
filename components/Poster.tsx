
import React, { forwardRef } from 'react';
import { PosterData } from '../types';

interface PosterProps {
  data: PosterData;
}

const ITEM_BG_COLORS = [
  '#75B8FF', // Light Blue
  '#B39DFF', // Light Purple
  '#9BE0A1', // Light Green
  '#70DDF0', // Cyan
  '#F6A6D1', // Pink
];

export const Poster = forwardRef<HTMLDivElement, PosterProps>(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-[600px] min-h-[800px] bg-white flex flex-col select-none pb-12 overflow-hidden"
    >
      {/* Top Banner Background - Multi-layered blue design */}
      <div className="absolute top-0 left-0 w-full h-[250px] z-0 overflow-hidden">
        {/* White Border Layer */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-white transform -skew-y-2 translate-y-2"></div>
        {/* Blue Main Layer */}
        <div className="absolute top-[-20px] left-[-20px] w-[110%] h-[200px] bg-[#0066FF] transform rotate-[-3deg] border-b-[8px] border-white shadow-lg"></div>
        {/* Top Accent Layer */}
        <div className="absolute top-0 left-0 w-full h-[140px] bg-[#0066FF]"></div>
      </div>

      {/* Header Embellishments */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-6">
         <div className="text-white text-4xl transform rotate-12 drop-shadow-lg">✦</div>
         <div className="text-pink-300 text-3xl transform -rotate-12 drop-shadow-lg">✦</div>
      </div>
      <div className="absolute top-6 right-8 z-20 bg-white/20 p-2 rounded-xl flex gap-1.5 items-center backdrop-blur-md border border-white/30">
         <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
      </div>

      {/* Header Content */}
      <header className="relative pt-16 px-6 flex flex-col items-center z-10">
        <div className="flex items-center gap-3 mb-4 no-clip">
          {/* Main Title - Thinner stroke as requested */}
          <div className="relative">
            <span className="absolute inset-0 text-[64px] font-xhs-art text-[#0066FF] text-layer-base whitespace-nowrap">
              {data.mainTitle}
            </span>
            <span className="absolute inset-0 text-[64px] font-xhs-art text-white text-layer-mid whitespace-nowrap">
              {data.mainTitle}
            </span>
            <span className="relative text-[64px] font-xhs-art text-white whitespace-nowrap block">
              {data.mainTitle}
            </span>
          </div>
          
          {/* Subtitle Badge */}
          <div className="relative transform rotate-[5deg] sticker-shadow">
            <div className="bg-white text-[#0066FF] px-6 py-2.5 rounded-[24px] border-[5px] border-[#0066FF] shadow-2xl">
              <span className="font-xhs-art text-5xl leading-none block">{data.subTitle}</span>
            </div>
          </div>
        </div>

        {/* Pill Slogan */}
        <div className="mt-8 transform -rotate-[1deg] relative z-20">
          <div className="bg-[#B3F2D4] border-[4px] border-[#0066FF] px-12 py-2 rounded-full flex items-center gap-5 text-[#0066FF] font-black text-2xl font-xhs-art tracking-wider shadow-[6px_6px_0px_#0044BB]">
            {data.tagline.split('|').map((tag, idx) => (
              <React.Fragment key={idx}>
                <span className="whitespace-nowrap">{tag.trim()}</span>
                {idx < data.tagline.split('|').length - 1 && <span className="opacity-40 font-normal">|</span>}
              </React.Fragment>
            ))}
            {/* Cursor Decoration */}
            <div className="ml-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
               <div className="w-3 h-3 bg-blue-500 rounded-sm rotate-45 transform translate-x-[-1px] translate-y-[-1px]"></div>
            </div>
          </div>
        </div>

        {/* Microscope Ornament */}
        <div className="absolute left-4 top-24 w-20 h-20 bg-white rounded-3xl border-4 border-[#0066FF] flex items-center justify-center p-2 shadow-2xl -rotate-12 z-20">
           <div className="w-full h-full border-2 border-blue-50 rounded-2xl flex flex-col items-center justify-center text-[#0066FF] bg-blue-50/50">
              <div className="w-6 h-8 border-2 border-blue-600 rounded-sm mb-1 bg-white"></div>
              <div className="w-12 h-2 bg-blue-600 rounded-full"></div>
           </div>
        </div>
      </header>

      {/* Intro Question Section */}
      <div className="relative mt-20 mb-10 z-10 text-center px-6">
        <h2 className="text-[#0066FF] font-xhs-art text-[42px] leading-tight drop-shadow-sm">
          {data.questionTitle}
        </h2>
      </div>

      {/* Content Container (Items 1-5) */}
      <main className="px-6 flex-1 flex flex-col items-center z-10">
        <div className="w-full bg-[#E6F7FF] border-[6px] border-[#0066FF] rounded-[52px] p-8 pt-12 shadow-2xl relative mb-14">
          {/* Section Heading Sticker */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 no-clip">
            <div className="bg-white border-[5px] border-[#0066FF] px-14 py-2.5 rounded-full text-[#0066FF] font-xhs-art text-2xl shadow-xl">
              课程内容
            </div>
          </div>

          <div className="mb-8 text-center px-4">
             <h3 className="text-[#0066FF] font-xhs-art text-3xl tracking-tight leading-snug">
                {data.questionSubtitle}
             </h3>
          </div>

          {/* Points List - Layout: [ID] [TITLE BOX] | [CONTENT] */}
          <div className="space-y-4 bg-white border-[4px] border-[#D0EFFF] rounded-[42px] p-4 shadow-inner">
            {data.courseItems.map((item, idx) => (
              <div key={item.id} className="flex items-center gap-4 p-2 item-row-border min-h-[60px]">
                {/* ID Square */}
                <div className="w-9 h-9 bg-[#0066FF] text-white flex items-center justify-center font-number text-2xl rounded-sm flex-shrink-0 shadow-sm pt-1">
                  {idx + 1}
                </div>
                {/* Title Segment */}
                <div 
                  className="px-5 py-2.5 flex items-center justify-center rounded-lg flex-shrink-0 w-[220px] text-white font-black text-sm leading-tight shadow-md text-center"
                  style={{ backgroundColor: ITEM_BG_COLORS[idx % ITEM_BG_COLORS.length] }}
                >
                  {item.title}
                </div>
                {/* Vertical Separator */}
                <div className="w-[2px] h-10 bg-blue-100/80 mx-1 flex-shrink-0"></div>
                {/* Text Segment */}
                <div className="flex-1 text-[14px] text-gray-700 font-bold leading-snug pr-3">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Method Section - Padding added at top to avoid overlap */}
        <div className="w-full bg-[#CCF2FF] border-[6px] border-[#0066FF] rounded-[52px] p-8 pt-12 flex gap-8 items-center shadow-2xl relative mb-10 overflow-visible">
          {/* Section Heading Sticker - Fixed overlapping issues */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 no-clip">
            <div className="bg-white border-[5px] border-[#0066FF] px-14 py-2.5 rounded-full text-[#0066FF] font-xhs-art text-2xl shadow-xl">
              学习方式
            </div>
          </div>

          <div className="flex-1 min-w-0 pt-2">
             <div className="flex items-center gap-2.5 mb-5">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                   <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                   <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                </div>
                <p className="text-[15px] font-black text-gray-800 tracking-tight">扫描右侧海报二维码即可轻松进入学习</p>
             </div>
             
             <div className="space-y-4">
                {data.learningSteps.map((step, idx) => (
                  <div key={step.id} className="flex items-center gap-3.5 text-[15px] font-black text-gray-700">
                    <div className="w-7 h-7 rounded-md bg-[#0066FF] text-white flex items-center justify-center text-[13px] font-number flex-shrink-0 pt-1 shadow-md">{idx + 1}</div>
                    <div className="flex-1">
                      {step.text} 
                      <span className="ml-3 inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border-2 border-blue-200 text-[#0066FF] text-[13px] italic shadow-sm no-clip">
                         <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white font-black">🔍</span>
                         {step.action}
                      </span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
          {/* QR Code Container */}
          <div className="relative flex-shrink-0">
             <div className="w-40 h-40 bg-white rounded-full border-[6px] border-[#0066FF] p-4 flex items-center justify-center shadow-inner relative z-10">
                <div className="w-full h-full rounded-full bg-blue-50 border-[3px] border-dashed border-blue-200 flex flex-col items-center justify-center">
                   <div className="w-16 h-16 bg-[#0066FF] rounded-2xl flex items-center justify-center text-white text-5xl font-black shadow-xl">✚</div>
                   <div className="mt-3 flex gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                   </div>
                </div>
             </div>
             {/* Badge Accent */}
             <div className="absolute top-0 right-[-10px] w-12 h-12 bg-pink-500 rounded-full border-[4px] border-white flex items-center justify-center text-white text-3xl font-black sticker-shadow rotate-12 z-20">✦</div>
          </div>
        </div>
      </main>

      {/* Footer / Branding */}
      <footer className="pt-8 pb-10 flex flex-col items-center justify-center px-10 mt-auto bg-white">
        <h2 className="text-[#0066FF] font-xhs-art text-5xl tracking-tighter text-center leading-tight mb-8 drop-shadow-sm flex flex-wrap justify-center gap-x-6 px-6 no-clip">
          {data.footerTitle.split(' ').map((word, i) => (
             <span key={i} className="whitespace-nowrap">{word}</span>
          ))}
        </h2>
        
        <div className="transform rotate-[-1deg] relative z-10">
          <div className="bg-[#B3F2D4] border-[5px] border-[#0066FF] px-20 py-3 rounded-full text-[#0066FF] font-xhs-art text-[32px] shadow-[8px_8px_0px_rgba(0,102,255,0.12)]">
            {data.footerSlogan}
          </div>
        </div>

        {/* Small Legal text */}
        <div className="mt-10 w-full text-[10px] text-gray-400 font-black flex justify-between px-6 opacity-60">
           <span>审批码AST0041015-90455 有效期至2026-03-04</span>
           <span>资料过期，视同作废。</span>
        </div>
      </footer>
    </div>
  );
});

Poster.displayName = 'Poster';
