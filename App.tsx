
import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Poster } from './components/Poster';
import { Editor } from './components/Editor';
import { INITIAL_DATA } from './constants';
import { PosterData } from './types';
import { Download, Edit3, Image as ImageIcon } from 'lucide-react';

const App: React.FC = () => {
  const [data, setData] = useState<PosterData>(INITIAL_DATA);
  const posterRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = async () => {
    if (!posterRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(posterRef.current, {
        scale: 3, // Ultra-high quality for professional printing/sharing
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const link = document.createElement('a');
      link.download = `xhs-poster-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Failed to export image', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col md:flex-row gap-8 justify-center items-start">
      {/* Left Side: Editor */}
      <div className="w-full md:w-1/3 max-w-lg order-2 md:order-1">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 sticky top-10">
          <div className="flex items-center gap-3 mb-8 border-b pb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Edit3 className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-black text-gray-800">海报内容编辑</h1>
          </div>
          
          <Editor data={data} onChange={setData} />
          
          <button
            onClick={handleDownload}
            disabled={isExporting}
            className="w-full mt-10 flex items-center justify-center gap-3 bg-[#0066FF] hover:bg-blue-700 text-white font-black text-lg py-4 px-8 rounded-2xl transition-all shadow-xl shadow-blue-200 active:scale-[0.98] disabled:opacity-50"
          >
            {isExporting ? (
              <span>正在渲染高品质海报...</span>
            ) : (
              <>
                <Download size={24} />
                <span>生成并下载海报</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Right Side: Preview */}
      <div className="w-full md:w-[600px] order-1 md:order-2 flex flex-col items-center">
        <div className="mb-6 flex items-center gap-3 text-gray-400 font-bold bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100">
          <ImageIcon size={18} className="text-blue-500" />
          <span className="text-sm">实时预览 · 自动适配内容高度</span>
        </div>
        
        <div className="shadow-[0_40px_100px_-20px_rgba(0,102,255,0.15)] rounded-[48px] overflow-hidden border-[12px] border-white bg-white">
          <Poster data={data} ref={posterRef} />
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-2 text-gray-400">
           <p className="text-xs italic font-medium">
             💡 提示：海报宽度固定为 600px，高度会随文案内容自动延展
           </p>
           <p className="text-[10px] opacity-60 uppercase tracking-widest font-black">
             XiaoHongShu Professional Design System
           </p>
        </div>
      </div>
    </div>
  );
};

export default App;
