import { Download, Share2, CheckCircle2, Globe, MessageCircle, Instagram, Youtube, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const PLATFORMS = [
  { id: 'tiktok', name: '抖音 TikTok', icon: Youtube, color: 'bg-black text-white' },
  { id: 'wechat', name: '微信 视频号', icon: MessageCircle, color: 'bg-[#07C160] text-white' },
  { id: 'xhs', name: '小红书', icon: Instagram, color: 'bg-[#FF2442] text-white' },
  { id: 'bilibili', name: '哔哩哔哩', icon: Youtube, color: 'bg-[#00A1D6] text-white' },
];

export default function PublishStep() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['tiktok']);

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Success Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-3xl font-bold font-headline">视频已生成成功！</h1>
        <p className="text-on-surface-variant max-w-lg mx-auto">您的视频已准备就绪，现在可以下载或直接发布到您喜爱的社交平台。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Video Preview */}
        <div className="md:col-span-7">
          <div className="glass-panel rounded-3xl overflow-hidden aspect-video relative group border-0 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/final/1280/720" 
              alt="Final Video" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                <Youtube size={32} fill="currentColor" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 glass-panel p-6 rounded-3xl border-0 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Globe size={24} />
              </div>
              <div>
                <div className="text-sm font-bold">在线预览链接</div>
                <div className="text-xs text-on-surface-variant truncate max-w-[200px]">infinitetalk.ai/v/7zqo7ysr2ttx...</div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/30 border border-white/50 text-xs font-bold hover:bg-white/50 transition-all">
              <Copy size={14} /> 复制链接
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="md:col-span-5 space-y-6">
          {/* Download Card */}
          <div className="glass-panel p-6 rounded-3xl border-0 space-y-4">
            <h3 className="font-bold font-headline flex items-center gap-2">
              <Download size={18} className="text-primary" /> 本地保存
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-primary text-white hover:opacity-90 transition-all shadow-lg group">
                <div className="flex items-center gap-3">
                  <Download size={20} />
                  <div className="text-left">
                    <div className="text-sm font-bold">下载 4K 超清视频</div>
                    <div className="text-[10px] opacity-80">MP4 (H.264) • 128MB</div>
                  </div>
                </div>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/30 border border-white/50 hover:bg-white/50 transition-all group">
                <div className="flex items-center gap-3 text-on-surface">
                  <Download size={20} className="text-on-surface-variant" />
                  <div className="text-left">
                    <div className="text-sm font-bold">下载 1080P 高清视频</div>
                    <div className="text-[10px] text-on-surface-variant">MP4 (H.264) • 45MB</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Social Share Card */}
          <div className="glass-panel p-6 rounded-3xl border-0 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold font-headline flex items-center gap-2">
                <Share2 size={18} className="text-primary" /> 平台分发
              </h3>
              <span className="text-[10px] font-bold text-on-surface-variant">已选择 {selectedPlatforms.length} 个平台</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {PLATFORMS.map((platform) => {
                const isSelected = selectedPlatforms.includes(platform.id);
                return (
                  <button 
                    key={platform.id} 
                    onClick={() => togglePlatform(platform.id)}
                    className={cn(
                      "relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all active:scale-95 border-2",
                      isSelected 
                        ? cn(platform.color, "border-transparent ring-2 ring-primary ring-offset-2") 
                        : "bg-white/30 border-white/50 text-on-surface-variant grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                    )}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-white text-primary rounded-full p-0.5">
                        <Check size={10} strokeWidth={4} />
                      </div>
                    )}
                    <platform.icon size={24} className="mb-2" />
                    <span className="text-[10px] font-bold">{platform.name}</span>
                  </button>
                );
              })}
            </div>

            <button className="w-full py-4 rounded-2xl bg-primary text-white font-bold shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <Send size={18} />
              一键发布到已选平台
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
