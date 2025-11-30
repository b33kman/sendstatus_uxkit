import React, { useState } from 'react';
import { 
  LayoutGrid, 
  FileText, 
  Folder, 
  Users, 
  Bell, 
  User, 
  Settings, 
  Asterisk,
  LifeBuoy,
  LogOut,
  ChevronLeft
} from 'lucide-react';

export const MobileComponents: React.FC = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  // Reusable Nav Component to ensure consistency
  const BottomNav = ({ activeTab }: { activeTab: 'dashboard' | 'reports' | 'projects' | 'team' }) => (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-forest text-white p-2 rounded-full flex items-center shadow-2xl border border-white/5 ring-1 ring-black/20 gap-2">
        
        {/* Dashboard (Active State Demo) */}
        {activeTab === 'dashboard' ? (
            <button className="bg-white/10 text-white px-5 py-3 rounded-full flex items-center gap-2 transition-all">
                <LayoutGrid className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wide uppercase">Dashboard</span>
            </button>
        ) : (
            <button className="p-3 text-white/40 hover:text-white transition-colors">
                <LayoutGrid className="w-6 h-6" />
            </button>
        )}

        {/* Reports */}
        {activeTab === 'reports' ? (
            <button className="bg-white/10 text-white px-5 py-3 rounded-full flex items-center gap-2 transition-all">
                <FileText className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wide uppercase">Reports</span>
            </button>
        ) : (
            <button className="p-3 text-white/40 hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
            </button>
        )}

        {/* Projects */}
        {activeTab === 'projects' ? (
            <button className="bg-white/10 text-white px-5 py-3 rounded-full flex items-center gap-2 transition-all">
                <Folder className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wide uppercase">Projects</span>
            </button>
        ) : (
            <button className="p-3 text-white/40 hover:text-white transition-colors">
                <Folder className="w-6 h-6" />
            </button>
        )}

        {/* Team */}
        {activeTab === 'team' ? (
             <button className="bg-white/10 text-white px-5 py-3 rounded-full flex items-center gap-2 transition-all">
                <Users className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wide uppercase">Team</span>
            </button>
        ) : (
            <button className="p-3 text-white/40 hover:text-white transition-colors">
                <Users className="w-6 h-6" />
            </button>
        )}

      </div>
    </div>
  );

  return (
    <div className="space-y-20">
      <section className="space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* 1. Mobile Viewport Simulation (Dashboard View) */}
            <div className="col-span-1 border-[12px] border-forest rounded-[3rem] overflow-hidden h-[800px] bg-cream relative shadow-2xl flex flex-col">
                {/* System Status Bar */}
                <div className="h-10 bg-forest text-white flex justify-between items-end px-6 pb-2 text-[10px] font-bold z-20 shrink-0">
                    <span>9:41</span>
                    <div className="flex gap-1 mb-0.5">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Dashboard Header (Logo Visible + Profile Dropdown) */}
                <div className="bg-cream/90 backdrop-blur-xl sticky top-0 z-30 px-6 py-4 flex justify-between items-center border-b border-forest/5 shrink-0 transition-all duration-300">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-lime rounded-lg flex items-center justify-center text-forest font-bold shadow-sm">
                            <Asterisk className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-forest text-lg tracking-tight">SendStatus</span>
                    </div>
                    
                    {/* Profile Dropdown Container */}
                    <div className="relative">
                         <button 
                            onClick={() => setProfileOpen(!isProfileOpen)}
                            className="w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm hover:scale-105 transition-transform"
                        >
                            TU
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 origin-top-right">
                                <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                                    <p className="text-sm font-bold text-forest">Test User</p>
                                    <p className="text-xs text-forest/50">test@beekman.com</p>
                                </div>
                                <div className="p-2 space-y-1">
                                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-cream text-left transition-colors text-sm font-medium text-forest">
                                        <User className="w-4 h-4 text-forest/50" /> Profile
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-cream text-left transition-colors text-sm font-medium text-forest">
                                        <Settings className="w-4 h-4 text-forest/50" /> Settings
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-cream text-left transition-colors text-sm font-medium text-forest">
                                        <LifeBuoy className="w-4 h-4 text-forest/50" /> Help & Support
                                    </button>
                                    <div className="h-px bg-gray-100 my-1"></div>
                                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-left transition-colors text-sm font-medium text-red-600">
                                        <LogOut className="w-4 h-4" /> Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Overlay for closing dropdown */}
                {isProfileOpen && (
                    <div className="absolute inset-0 z-20" onClick={() => setProfileOpen(false)}></div>
                )}

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 relative pb-32">
                    
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-forest leading-tight">Good Morning,<br/>Test User.</h2>
                        <p className="text-forest/60 text-sm">You have 3 shipments arriving today.</p>
                    </div>

                    {/* Scrollable Horizontal Cards */}
                    <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-4">
                         <div className="min-w-[240px] h-[320px] bg-forest rounded-[2rem] p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-lg shadow-forest/20 group">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-lime opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 transition-transform group-hover:scale-110"></div>
                            <div className="flex justify-between items-start">
                                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10">In Transit</span>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Bell className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <p className="text-3xl font-bold mb-1">Nike Air</p>
                                <p className="text-sm text-white/60 mb-6">Arriving by 2:00 PM</p>
                                <button className="w-full bg-lime text-forest py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all">Track Now</button>
                            </div>
                         </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <h3 className="font-bold text-lg text-forest">Recent Orders</h3>
                            <button className="text-xs font-bold text-forest/50">View All</button>
                        </div>
                        {[1,2,3].map(i => (
                            <div key={i} className="bg-white p-4 rounded-2xl flex gap-4 items-center shadow-sm border border-forest/5">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-forest/20">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-forest text-sm">Wireless Headphones</p>
                                    <p className="text-xs text-forest/50">Processing • 2 items</p>
                                </div>
                                <span className="font-bold text-sm text-forest">$129</span>
                            </div>
                        ))}
                         {[4,5].map(i => (
                            <div key={i} className="bg-white p-4 rounded-2xl flex gap-4 items-center shadow-sm border border-forest/5">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-forest/20">
                                    <Folder className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-forest text-sm">Archived Project</p>
                                    <p className="text-xs text-forest/50">Completed • {i} items</p>
                                </div>
                                <span className="font-bold text-sm text-forest">$89</span>
                            </div>
                        ))}
                    </div>
                </div>

                <BottomNav activeTab="dashboard" />

            </div>

            {/* 3. Sub-page View (Project View Demo) */}
            <div className="col-span-1 border-[12px] border-forest rounded-[3rem] overflow-hidden h-[800px] bg-cream relative shadow-2xl flex flex-col">
                 {/* System Status Bar */}
                 <div className="h-10 bg-forest text-white flex justify-between items-end px-6 pb-2 text-[10px] font-bold z-20 shrink-0">
                    <span>9:41</span>
                    <div className="flex gap-1 mb-0.5">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Sub-page Header (No Logo, Back Button) */}
                <div className="bg-cream/90 backdrop-blur-xl sticky top-0 z-10 px-6 py-4 flex items-center justify-between border-b border-forest/5 shrink-0">
                     <button className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors text-forest">
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <span className="font-bold text-forest text-lg absolute left-1/2 -translate-x-1/2">Shipment Details</span>
                     <button className="text-sm font-bold text-forest hover:text-lime-hover transition-colors">
                        Edit
                     </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center opacity-40 pb-32">
                    <Folder className="w-16 h-16 text-forest mb-4" />
                    <p className="text-forest font-bold">Content Area</p>
                    <p className="text-sm text-forest/60 max-w-[200px]">
                        The bottom nav updates to show the active section context.
                    </p>
                </div>

                {/* Demoing 'Projects' as active in the second screen */}
                <BottomNav activeTab="projects" />
            </div>

        </div>
      </section>
    </div>
  );
};