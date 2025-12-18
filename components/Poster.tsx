
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
      className="relative w-[600px] min-h-[800px] bg-white flex flex-col select-none pb-8 overflow-hidden"
    >
      {/* Refined Header Background: Layered Blue Banner */}
      <div className="absolute top-0 left-0 w-full h-[240px] z-0 overflow-hidden">
        {/* Main Blue Slope */}
        <div className="absolute top-0 left-0 w-full h-[180px] bg-[#0066FF] border-b-[6px] border-white shadow-lg"></div>
        {/* Decorative Skewed shape at bottom of banner */}
        <div className="absolute bottom-[20px] left-[-20px] w-[110%] h-[100px] bg-[#0066FF] -rotate-[3deg] border-b-[10px] border-white shadow-2xl"></div>
        {/* Light Blue Accent */}
        <div className="absolute top-[40px] right-[-50px] w-[200px] h-[200px] bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Header Ornaments */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-6">
         <div className="text-white text-4xl transform rotate-12 drop-shadow-sm">✦</div>
         <div className="text-pink-300 text-3xl transform -rotate-12 drop-shadow-sm">✦</div>
      </div>
      <div className="absolute top-6 right-8 z-10 bg-white/20 p-1.5 rounded-xl flex gap-1.5 items-center backdrop-blur-sm">
         <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
      </div>

      {/* Main Header Content */}
      <header className="relative pt-16 px-6 flex flex-col items-center z-10">
        <div className="flex items-center gap-2 mb-2 no-clip">
          {/* Title with thinner strokes */}
          <div className="relative">
            <span className="absolute inset-0 text-6xl font-xhs-art text-[#0066FF] text-layer-base whitespace-nowrap">
              {data.mainTitle}
            </span>
            <span className="absolute inset-0 text-6xl font-xhs-art text-white text-layer-mid whitespace-nowrap">
              {data.mainTitle}
            </span>
            <span className="relative text-6xl font-xhs-art text-white whitespace-nowrap block">
              {data.mainTitle}
            </span>
          </div>
          
          {/* Subtitle Sticker */}
          <div className="relative transform rotate-3 sticker-shadow ml-2">
            <div className="bg-white text-[#0066FF] px-6 py-2 rounded-[22px] border-[5px] border-[#0066FF] shadow-xl">
              <span className="font-xhs-art text-5xl leading-none">{data.subTitle}</span>
            </div>
          </div>
        </div>

        {/* Pill Slogan */}
        <div className="mt-8 transform -rotate-1 relative group z-20">
          <div className="bg-[#B3F2D4] border-[4px] border-[#0066FF] px-10 py-1.5 rounded-full flex items-center gap-4 text-[#0066FF] font-black text-2xl font-xhs-art tracking-widest shadow-[4px_4px_0px_#0044BB]">
            {data.tagline.split('|').map((tag, idx) => (
              <React.Fragment key={idx}>
                <span>{tag.trim()}</span>
                {idx < data.tagline.split('|').length - 1 && <span className="opacity-40">|</span>}
              </React.Fragment>
            ))}
            {/* Mouse Cursor */}
            <div className="ml-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
               <div className="w-2.5 h-2.5 bg-blue-500 rounded-sm rotate-45 transform translate-x-[-1px] translate-y-[-1px]"></div>
            </div>
          </div>
        </div>

        {/* Floating Microscope Card */}
        <div className="absolute left-6 top-28 w-18 h-18 bg-white rounded-2xl border-4 border-[#0066FF] flex items-center justify-center p-2 shadow-2xl -rotate-6 z-20 overflow-hidden">
           <div className="w-full h-full border-2 border-blue-50 rounded-xl flex flex-col items-center justify-center text-[#0066FF] bg-blue-50/30">
              <div className="w-5 h-7 border-2 border-blue-600 rounded-sm mb-1 bg-white"></div>
              <div className="w-10 h-1.5 bg-blue-600 rounded-full"></div>
           </div>
        </div>
      </header>

      {/* Intro Message - Spacing fixed */}
      <div className="relative mt-20 mb-8 z-10 text-center px-4">
        <h2 className="text-[#0066FF] font-xhs-art text-4xl tracking-tight leading-tight">
          {data.questionTitle}
        </h2>
      </div>

      {/* Course List Card */}
      <main className="px-6 flex-1 flex flex-col items-center z-10">
        <div className="w-full bg-[#E6F7FF] border-[5px] border-[#0066FF] rounded-[48px] p-8 pt-10 shadow-xl relative mb-12">
          {/* Section Heading Sticker */}
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white border-[5px] border-[#0066FF] px-12 py-2 rounded-full text-[#0066FF] font-xhs-art text-2xl shadow-md no-clip">
              课程内容
            </div>
          </div>

          <div className="mb-6 text-center">
             <h3 className="text-[#0066FF] font-xhs-art text-3xl tracking-tight flex justify-center gap-2">
                {data.questionSubtitle.split(' ').map((q, i) => (
                   <span key={i} className={i % 2 === 0 ? "font-black" : ""}>{q}</span>
                ))}
             </h3>
          </div>

          {/* Point Rows: Color Title on Left, Text on Right */}
          <div className="space-y-3 bg-white border-[3px] border-[#D0EFFF] rounded-[36px] p-3 shadow-inner">
            {data.courseItems.map((item, idx) => (
              <div key={item.id} className="flex items-center gap-3 p-2 item-row-border min-h-[50px]">
                {/* ID Square */}
                <div className="w-8 h-8 bg-[#0066FF] text-white flex items-center justify-center font-number text-2xl rounded-sm flex-shrink-0 shadow-sm pt-1">
                  {idx + 1}
                </div>
                {/* Title Box */}
                <div 
                  className="px-4 py-2 flex items-center rounded-md flex-shrink-0 w-[200px] text-white font-black text-[13px] leading-tight shadow-sm"
                  style={{ backgroundColor: ITEM_BG_COLORS[idx % ITEM_BG_COLORS.length] }}
                >
                  {item.title}
                </div>
                {/* Visual Separator */}
                <div className="w-[1.5px] h-8 bg-blue-100/60 mx-1 flex-shrink-0"></div>
                {/* Content Text */}
                <div className="flex-1 text-[13px] text-gray-700 font-bold leading-snug pr-2">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Method Card - Fixed overlapping title */}
        <div className="w-full bg-[#CCF2FF] border-[5px] border-[#0066FF] rounded-[48px] p-8 pt-10 flex gap-8 items-center shadow-xl relative mb-8 overflow-visible">
          {/* Fixed "Learning Method" Title Sticker */}
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white border-[5px] border-[#0066FF] px-12 py-2 rounded-full text-[#0066FF] font-xhs-art text-2xl shadow-md no-clip">
              {data.learningMethodTitle}
            </div>
          </div>

          <div className="flex-1 min-w-0 pt-2">
             <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-blue-300"></div>
                </div>
                <p className="text-[14px] font-black text-gray-800 tracking-tight">扫描右侧海报二维码即可轻松进入学习</p>
             </div>
             
             <div className="space-y-3.5">
                {data.learningSteps.map((step, idx) => (
                  <div key={step.id} className="flex items-center gap-3 text-[14px] font-black text-gray-700">
                    <div className="w-6 h-6 rounded-md bg-[#0066FF] text-white flex items-center justify-center text-[12px] font-number flex-shrink-0 pt-0.5 shadow-sm">{idx + 1}</div>
                    <div className="flex-1 truncate">
                      {step.text} 
                      <span className="ml-2 inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border-2 border-blue-200 text-[#0066FF] text-[12px] italic shadow-sm">
                         <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[9px] text-white font-black">🔍</span>
                         {step.action}
                      </span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
          {/* Circular QR Section */}
          <div className="relative flex-shrink-0">
             <div className="w-36 h-36 bg-white rounded-full border-[6px] border-[#0066FF] p-3 flex items-center justify-center shadow-inner relative z-10">
                <div className="w-full h-full rounded-full bg-blue-50 border-[3px] border-dashed border-blue-300 flex flex-col items-center justify-center">
                   <div className="w-14 h-14 bg-[#0066FF] rounded-2xl flex items-center justify-center text-white text-4xl font-black shadow-xl">✚</div>
                   <div className="mt-2 flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                   </div>
                </div>
             </div>
             {/* Small Accent Badge */}
             <div className="absolute top-0 right-0 w-10 h-10 bg-pink-500 rounded-full border-[3px] border-white flex items-center justify-center text-white text-2xl font-black sticker-shadow rotate-12 z-20">✦</div>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="pt-6 pb-6 flex flex-col items-center justify-center px-10 mt-auto bg-blue-50/20 backdrop-blur-sm">
        <h2 className="text-[#0066FF] font-xhs-art text-5xl tracking-tighter text-center leading-none mb-6 drop-shadow-sm flex flex-wrap justify-center gap-x-4 px-4">
          {data.footerTitle.split(' ').map((word, i) => (
             <span key={i} className="whitespace-nowrap">{word}</span>
          ))}
        </h2>
        
        <div className="transform -rotate-1 relative group z-10">
          <div className="bg-[#B3F2D4] border-[5px] border-[#0066FF] px-16 py-2 rounded-full text-[#0066FF] font-xhs-art text-3xl shadow-[6px_6px_0px_rgba(0,102,255,0.15)]">
            {data.footerSlogan}
          </div>
        </div>

        {/* Small Print disclaimer */}
        <div className="mt-8 w-full text-[9px] text-gray-400 font-black flex justify-between px-4 opacity-60">
           <span>审批码AST0041015-90455 有效期至2026-03-04</span>
           <span>资料过期，视同作废。</span>
        </div>
      </footer>
    </div>
  );
});

Poster.displayName = 'Poster';
