import React from 'react';
import { 
  ChevronDown, 
  AlertCircle, 
  MessageSquarePlus, 
  List, 
  History, 
  Folder, 
  FileText, 
  Users, 
  Clock, 
  AlertTriangle, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Activity, 
  Check 
} from 'lucide-react';

export const WireframeAdaptation: React.FC = () => {
  return (
    <div className="w-full bg-cream p-4 md:p-8 rounded-[3rem] border border-forest/5 relative font-sans">
      
      {/* 1. Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
         <div>
            <h2 className="text-3xl md:text-4xl font-bold text-forest tracking-tight">Welcome back, Test!</h2>
            <p className="text-forest/60 mt-2 font-medium">Here's a snapshot of your projects today.</p>
         </div>
         <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-black/5 cursor-pointer hover:shadow-md transition-all">
            <span className="h-10 w-10 rounded-full bg-forest text-lime flex items-center justify-center font-bold text-sm">TU</span>
            <span className="font-bold text-forest text-sm">Test User</span>
            <ChevronDown className="w-4 h-4 text-forest/50" />
         </div>
      </div>

      {/* 2. Alert Banner */}
      <div className="bg-red-50 border border-red-100 rounded-3xl p-6 md:p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
         <div className="flex gap-4">
            <div className="p-3 bg-white rounded-2xl text-red-500 shadow-sm h-fit">
               <AlertCircle className="w-6 h-6" />
            </div>
            <div>
               <h3 className="text-xl font-bold text-red-600 mb-1">Your trial has expired</h3>
               <p className="text-forest/70 max-w-xl leading-relaxed">Subscribe now to continue using SendStatus and keep your team connected to vital project updates.</p>
            </div>
         </div>
         <button className="w-full md:w-auto bg-red-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-red-700 transition-all whitespace-nowrap">
            Subscribe Now
         </button>
      </div>

      {/* 3. Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         
         {/* Left Column (Main Content) - Spans 8 cols */}
         <div className="lg:col-span-8 space-y-8">
            
            {/* Quick Actions & Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Quick Actions Card */}
               <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col h-full">
                  <h3 className="font-bold text-forest text-lg mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3 h-full">
                     <button className="col-span-1 bg-lime p-4 rounded-3xl flex flex-col items-center justify-center gap-3 text-forest hover:brightness-105 transition-all shadow-lg shadow-lime/20 group">
                        <div className="p-3 bg-forest/10 rounded-full group-hover:scale-110 transition-transform">
                            <MessageSquarePlus className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-sm text-center leading-tight">Start New<br/>Report</span>
                     </button>
                     <div className="col-span-1 flex flex-col gap-3">
                         <button className="flex-1 bg-cream/50 border border-cream-dark p-3 rounded-2xl flex flex-col items-center justify-center gap-1 text-forest/70 hover:bg-cream hover:text-forest transition-all">
                            <List className="w-5 h-5" />
                            <span className="font-bold text-xs">Projects</span>
                         </button>
                         <button className="flex-1 bg-cream/50 border border-cream-dark p-3 rounded-2xl flex flex-col items-center justify-center gap-1 text-forest/70 hover:bg-cream hover:text-forest transition-all">
                            <History className="w-5 h-5" />
                            <span className="font-bold text-xs">History</span>
                         </button>
                     </div>
                  </div>
               </div>

               {/* Quick Stats Card */}
               <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 h-full">
                  <h3 className="font-bold text-forest text-lg mb-6">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-forest/60 text-xs font-bold uppercase tracking-wider mb-1">
                            <Folder className="w-4 h-4" /> Active
                        </div>
                        <p className="text-4xl font-bold text-forest">2</p>
                        <p className="text-xs text-forest/60 font-medium">Projects Ongoing</p>
                     </div>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-forest/60 text-xs font-bold uppercase tracking-wider mb-1">
                            <FileText className="w-4 h-4" /> Reports
                        </div>
                        <p className="text-4xl font-bold text-forest">4</p>
                        <p className="text-xs text-forest/60 font-medium">Created This Week</p>
                     </div>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-forest/60 text-xs font-bold uppercase tracking-wider mb-1">
                            <Users className="w-4 h-4" /> Team
                        </div>
                        <p className="text-4xl font-bold text-forest">5</p>
                        <p className="text-xs text-forest/60 font-medium">Members Connected</p>
                     </div>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-forest/60 text-xs font-bold uppercase tracking-wider mb-1">
                            <Clock className="w-4 h-4" /> Pending
                        </div>
                        <p className="text-4xl font-bold text-forest">2</p>
                        <p className="text-xs text-forest/60 font-medium">Approvals Waiting</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Needs Attention Card (The Detailed Project Card) */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5">
               <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-orange-100 rounded-xl text-orange-600">
                        <AlertTriangle className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-forest">Needs Attention</h3>
                  </div>
                  <span className="bg-cream border border-cream-dark text-forest/60 px-4 py-1.5 rounded-full text-xs font-bold">Draft reports awaiting review</span>
               </div>

               {/* Inner Card: Miller's Bathroom Surprise */}
               <div className="border border-cream-dark rounded-[2rem] p-6 md:p-8 bg-cream/20 hover:bg-cream/40 transition-colors">
                  {/* Top Row */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                     <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                           <h4 className="text-xl font-bold text-forest">Miller's Bathroom Surprise</h4>
                           <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">1 report</span>
                        </div>
                        <div className="flex items-center gap-2 text-forest/60 text-sm font-medium">
                           <MapPin className="w-4 h-4" />
                           320 S Canal St, Chicago, IL 60606, USA
                        </div>
                     </div>
                     <button className="hidden md:flex bg-white border border-gray-200 p-2 rounded-full hover:bg-gray-50 transition-colors">
                        <ChevronDown className="w-5 h-5 text-forest/40" />
                     </button>
                  </div>

                  {/* Status Bar */}
                  <div className="flex flex-wrap items-center gap-3 text-sm mb-6 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
                     <div className="flex items-center gap-2 text-forest/60">
                         <Clock className="w-4 h-4" />
                         <span className="font-semibold text-xs">Tue, Nov 18, 12:04 PM</span>
                     </div>
                     <span className="hidden sm:block text-gray-200">|</span>
                     <div className="flex items-center gap-2 text-green-600">
                         <CheckCircle2 className="w-4 h-4" />
                         <span className="font-bold text-xs uppercase">On Track</span>
                     </div>
                     <span className="hidden sm:block text-gray-200">|</span>
                     <span className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-xs font-bold ml-auto sm:ml-0">
                        8 days - OVERDUE
                     </span>
                  </div>

                  {/* Issue Content Block */}
                  <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 mb-6 relative overflow-hidden">
                     <div className="relative z-10">
                        <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Critical Issue Detected</p>
                        <p className="text-base text-forest/90 leading-relaxed font-medium">
                           "Discovered moisture damage behind existing shower tile during demolition. Subfloor repair is required before proceeding with tile installation."
                        </p>
                     </div>
                     {/* Decorative bg icon */}
                     <AlertTriangle className="absolute -right-4 -bottom-4 w-24 h-24 text-red-100 z-0" />
                  </div>

                  {/* Image Gallery */}
                  <div className="flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
                     {[10, 11, 12].map(i => (
                        <div key={i} className="h-24 w-24 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
                           <img src={`https://picsum.photos/300/300?random=${i}`} className="w-full h-full object-cover" alt="Site photo" />
                        </div>
                     ))}
                     <div className="h-24 w-24 rounded-2xl bg-white border-2 border-gray-100 border-dashed flex items-center justify-center text-forest/40 font-bold text-sm hover:border-lime hover:text-lime hover:bg-lime/5 transition-all cursor-pointer">
                        <div className="flex flex-col items-center gap-1">
                            <Plus className="w-5 h-5" />
                            <span>Add</span>
                        </div>
                     </div>
                  </div>

                  {/* Action Footer */}
                  <div className="h-px w-full bg-forest/5 mb-4"></div>
                  <button className="w-full flex justify-between items-center text-forest hover:text-lime transition-colors group p-2 rounded-xl hover:bg-forest/5">
                     <span className="text-sm text-forest/40 font-medium pl-2">Click to review and send this report</span>
                     <span className="flex items-center gap-2 font-bold pr-2">
                        Review Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </span>
                  </button>
               </div>
            </div>
         </div>

         {/* Right Column (Sidebar) - Spans 4 cols */}
         <div className="lg:col-span-4 space-y-8">
            
            {/* Team Connections */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="font-bold text-forest text-lg">Team Connections</h3>
                  <button className="text-forest text-xs font-bold flex items-center gap-1 hover:bg-forest/10 bg-forest/5 px-3 py-1.5 rounded-full transition-colors">
                     <Plus className="w-3 h-3" /> Add Member
                  </button>
               </div>
               <div className="space-y-6">
                  {[
                     {name: 'Test User', role: 'company_admin', color: 'bg-lime'},
                     {name: 'Bubba Jones', role: 'user', color: 'bg-blue-200'},
                     {name: 'Chas McFeely', role: 'user', color: 'bg-purple-200'},
                     {name: 'Alice Smith', role: 'user', color: 'bg-orange-200'}
                  ].map((u, i) => (
                     <div key={i} className="flex justify-between items-center group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${u.color} border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-forest`}>
                                {u.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-sm text-forest group-hover:text-lime transition-colors">{u.name}</p>
                                <p className="text-[10px] uppercase tracking-wider font-bold text-forest/40">{u.role}</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold border border-green-100">Connected</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* System Status */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5">
               <h3 className="font-bold text-forest text-lg mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-lime" />
                  System Status
               </h3>
               <div className="space-y-2">
                  {[
                     {name: 'WhatsApp', up: '99.9%'},
                     {name: 'SendStatus', up: '99.8%'},
                     {name: 'Google Cloud', up: '99.95%'},
                     {name: 'AI Engine', up: '99.6%'},
                     {name: 'Email Service', up: '99.9%'},
                  ].map((s, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-cream transition-colors group cursor-default">
                        <div className="flex items-center gap-3">
                           <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
                              <Check className="w-3.5 h-3.5 text-white" />
                           </div>
                           <span className="font-bold text-sm text-forest">{s.name}</span>
                        </div>
                        <span className="text-xs font-mono font-medium text-forest/40 group-hover:text-forest transition-colors">{s.up} uptime</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Recent Activity (Mini) */}
             <div className="bg-forest p-8 rounded-[2.5rem] shadow-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="font-bold text-lg mb-6 relative z-10">Latest Activity</h3>
                <div className="space-y-6 relative z-10">
                   <div className="flex gap-4 items-start">
                      <div className="mt-1 min-w-[8px] h-2 rounded-full bg-lime"></div>
                      <div>
                         <p className="text-sm font-bold">Report Approved</p>
                         <p className="text-xs text-white/50 mt-1">Miller's Bathroom Surprise • 6 hours ago</p>
                      </div>
                   </div>
                   <div className="flex gap-4 items-start">
                      <div className="mt-1 min-w-[8px] h-2 rounded-full bg-orange-500"></div>
                      <div>
                         <p className="text-sm font-bold">Draft Created</p>
                         <p className="text-xs text-white/50 mt-1">Smith Kitchen Remodel • 1 day ago</p>
                      </div>
                   </div>
                   <div className="pt-4 border-t border-white/10">
                      <button className="text-lime text-xs font-bold hover:underline flex items-center gap-2">
                         View All History <ArrowRight className="w-3 h-3"/>
                      </button>
                   </div>
                </div>
             </div>

         </div>

      </div>
    </div>
  );
};