
import React from 'react';
import { PosterData, CourseItem } from '../types';

interface EditorProps {
  data: PosterData;
  onChange: (data: PosterData) => void;
}

export const Editor: React.FC<EditorProps> = ({ data, onChange }) => {
  const updateData = (key: keyof PosterData, value: any) => {
    onChange({ ...data, [key]: value });
  };

  const updateCourseItem = (id: number, field: keyof CourseItem, value: string) => {
    const newItems = data.courseItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );
    updateData('courseItems', newItems);
  };

  return (
    <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-3 custom-scrollbar">
      {/* Visual Hierarchy: Segmented Groups */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
           <h3 className="font-black text-gray-800 text-sm">核心标题区域</h3>
        </div>
        <div className="bg-blue-50/40 p-5 rounded-3xl border-2 border-blue-100/50 space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest ml-1">主标题文字</label>
            <input 
              type="text" 
              value={data.mainTitle} 
              onChange={(e) => updateData('mainTitle', e.target.value)}
              className="w-full px-4 py-2 bg-white border-2 border-blue-100 rounded-2xl text-sm focus:border-blue-500 outline-none transition-all font-bold"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest ml-1">浮窗贴纸</label>
              <input 
                type="text" 
                value={data.subTitle} 
                onChange={(e) => updateData('subTitle', e.target.value)}
                className="w-full px-4 py-2 bg-white border-2 border-blue-100 rounded-2xl text-sm outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest ml-1">核心口号</label>
              <input 
                type="text" 
                value={data.tagline} 
                onChange={(e) => updateData('tagline', e.target.value)}
                className="w-full px-4 py-2 bg-white border-2 border-blue-100 rounded-2xl text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
           <h3 className="font-black text-gray-800 text-sm">课程详细清单</h3>
        </div>
        <div className="space-y-3">
          {data.courseItems.map((item, idx) => (
            <div key={item.id} className="group relative p-4 bg-white rounded-[24px] border-2 border-gray-100 transition-all hover:border-blue-300 hover:shadow-md">
              <span className="absolute -top-3 -left-2 w-8 h-8 bg-[#0066FF] text-white rounded-xl flex items-center justify-center font-black text-sm shadow-lg rotate-[-10deg] group-hover:rotate-0 transition-transform">
                {idx + 1}
              </span>
              <div className="space-y-3 pt-2">
                <input 
                  type="text" 
                  value={item.title} 
                  onChange={(e) => updateCourseItem(item.id, 'title', e.target.value)}
                  className="w-full bg-transparent font-black text-blue-600 placeholder-blue-200 outline-none text-base"
                  placeholder="请输入标题..."
                />
                <textarea 
                  value={item.description} 
                  onChange={(e) => updateCourseItem(item.id, 'description', e.target.value)}
                  className="w-full bg-gray-50/50 text-xs text-gray-500 border border-transparent rounded-xl p-3 h-20 outline-none resize-none focus:bg-white focus:border-gray-100 transition-all leading-relaxed"
                  placeholder="请输入详细描述..."
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
           <h3 className="font-black text-gray-800 text-sm">底部品牌语</h3>
        </div>
        <div className="bg-gray-100/50 p-5 rounded-3xl border-2 border-gray-100 space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">总结标题</label>
            <textarea 
              value={data.footerTitle} 
              onChange={(e) => updateData('footerTitle', e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-100 rounded-2xl text-sm focus:border-blue-500 outline-none h-20 resize-none font-bold"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">高亮口号</label>
            <input 
              type="text" 
              value={data.footerSlogan} 
              onChange={(e) => updateData('footerSlogan', e.target.value)}
              className="w-full px-4 py-2 bg-white border-2 border-gray-100 rounded-2xl text-sm focus:border-blue-500 outline-none font-bold text-green-600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
