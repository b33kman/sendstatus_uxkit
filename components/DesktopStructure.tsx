import React from 'react';
import { 
  LayoutDashboard, 
  Box, 
  Truck, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Calendar, 
  CheckCircle2, 
  X
} from 'lucide-react';

export const DesktopStructure: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* 24. Structural Layouts */}
      <section className="space-y-8">
         <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">24. Structural Layouts</h3>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vertical Sidebar */}
            <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Vertical Sidebar (Collapsible)</h4>
                <div className="flex h-[500px] border border-gray-100 rounded-2xl overflow-hidden bg-cream/30">
                    <div className="w-64 bg-forest text-white flex flex-col p-4">
                        <div className="flex items-center gap-2 mb-8 px-2">
                             <div className="w-8 h-8 bg-lime rounded-lg flex items-center justify-center text-forest font-bold text-xl">*</div>
                             <span className="font-bold text-lg">SendStatus</span>
                        </div>
                        <nav className="space-y-1 flex-1">
                            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/10 text-white font-medium">
                                <LayoutDashboard className="w-5 h-5" /> Dashboard
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                                <Box className="w-5 h-5" /> Projects
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                                <Truck className="w-5 h-5" /> Shipments
                            </button>
                             <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                                <Users className="w-5 h-5" /> Team
                            </button>
                        </nav>
                        <div className="mt-auto pt-4 border-t border-white/10">
                             <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                                <Settings className="w-5 h-5" /> Settings
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 bg-white p-6">
                        <div className="h-8 w-32 bg-gray-100 rounded-lg mb-4"></div>
                        <div className="h-4 w-full bg-gray-50 rounded mb-2"></div>
                        <div className="h-4 w-2/3 bg-gray-50 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Master Detail */}
            <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                 <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Master-Detail View</h4>
                 <div className="flex h-[500px] border border-gray-100 rounded-2xl overflow-hidden bg-white">
                    {/* List (Master) */}
                    <div className="w-1/3 border-r border-gray-100 bg-gray-50 flex flex-col">
                        <div className="p-4 border-b border-gray-100">
                             <div className="relative">
                                <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
                                <input type="text" placeholder="Search..." className="w-full pl-8 pr-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-lime" />
                             </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {[1,2,3,4].map(i => (
                                <div key={i} className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-white transition-colors ${i===2 ? 'bg-white border-l-4 border-l-lime' : ''}`}>
                                    <p className="text-sm font-bold text-forest">ORD-00{90+i}</p>
                                    <p className="text-xs text-forest/60 mt-1">Pending approval</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Detail */}
                    <div className="flex-1 p-6 overflow-y-auto bg-white">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-forest">Order #0092</h3>
                                <p className="text-sm text-forest/50">Placed on Oct 24, 2024</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50"><ChevronLeft className="w-4 h-4 text-gray-500"/></button>
                                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50"><ChevronRight className="w-4 h-4 text-gray-500"/></button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-cream border border-cream-dark">
                                <p className="text-xs font-bold uppercase text-forest/40 mb-2">Customer</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold text-xs">AS</div>
                                    <div>
                                        <p className="text-sm font-bold text-forest">Alice Smith</p>
                                        <p className="text-xs text-forest/60">alice@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl border border-gray-100">
                                <p className="text-xs font-bold uppercase text-forest/40 mb-2">Items</p>
                                <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                                    <span>Premium Plan (Monthly)</span>
                                    <span className="font-bold">$29.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* 25. Logistics Data Display */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">25. Logistics Data Display</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vertical Timeline */}
            <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Vertical Timeline</h4>
                <div className="relative pl-4 space-y-8 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                    
                    {/* Item 1 */}
                    <div className="relative flex gap-4">
                        <div className="w-3 h-3 bg-lime rounded-full border-2 border-white ring-4 ring-lime/20 relative z-10 mt-1.5 ml-[3.5px]"></div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-forest">Delivered</p>
                            <p className="text-xs text-forest/60 mb-1">Package received by front desk</p>
                            <p className="text-[10px] text-gray-400">Oct 26, 2:45 PM • New York, NY</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative flex gap-4">
                        <div className="w-3 h-3 bg-forest rounded-full border-2 border-white relative z-10 mt-1.5 ml-[3.5px]"></div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-forest">Out for Delivery</p>
                             <p className="text-[10px] text-gray-400">Oct 26, 8:30 AM • New York, NY</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative flex gap-4">
                        <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white relative z-10 mt-1.5 ml-[3.5px]"></div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-forest/60">Arrived at Facility</p>
                             <p className="text-[10px] text-gray-400">Oct 25, 6:15 PM • Newark, NJ</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Attribute Grid */}
            <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Description List / Attribute Grid</h4>
                <div className="bg-cream/30 rounded-2xl border border-cream-dark p-6">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-forest/5">
                        <h5 className="font-bold text-forest">Shipment Details</h5>
                        <button className="text-xs text-forest font-bold hover:underline">Edit</button>
                    </div>
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
                        <div>
                            <dt className="text-xs font-bold text-forest/40 uppercase tracking-wide mb-1">Tracking Number</dt>
                            <dd className="text-sm font-bold text-forest font-mono">1Z999AA10123456784</dd>
                        </div>
                         <div>
                            <dt className="text-xs font-bold text-forest/40 uppercase tracking-wide mb-1">Carrier</dt>
                            <dd className="text-sm font-bold text-forest flex items-center gap-2">
                                <Truck className="w-3 h-3" /> UPS Ground
                            </dd>
                        </div>
                         <div>
                            <dt className="text-xs font-bold text-forest/40 uppercase tracking-wide mb-1">Weight</dt>
                            <dd className="text-sm font-medium text-forest">4.5 lbs (2.1 kg)</dd>
                        </div>
                         <div>
                            <dt className="text-xs font-bold text-forest/40 uppercase tracking-wide mb-1">Dimensions</dt>
                            <dd className="text-sm font-medium text-forest">12 x 8 x 6 in</dd>
                        </div>
                         <div className="col-span-2">
                            <dt className="text-xs font-bold text-forest/40 uppercase tracking-wide mb-1">Destination</dt>
                            <dd className="text-sm font-medium text-forest">123 Forest Avenue, Suite 400<br/>Seattle, WA 98101</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
      </section>

      {/* 26. Advanced Inputs */}
      <section className="space-y-8">
         <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">26. Advanced Inputs</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date Range Picker */}
            <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-4">
                 <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider">Date Range Picker</h4>
                 <div className="relative">
                    <div className="flex items-center border border-gray-200 rounded-xl p-3 bg-white hover:border-lime transition-colors cursor-pointer shadow-sm">
                        <Calendar className="w-4 h-4 text-forest/60 mr-3" />
                        <span className="text-sm font-medium text-forest">Oct 1, 2024</span>
                        <span className="mx-2 text-gray-300">→</span>
                        <span className="text-sm font-medium text-forest">Oct 31, 2024</span>
                    </div>
                    {/* Popover mock */}
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 w-[300px] z-10">
                        <div className="flex justify-between mb-4">
                            <button className="text-xs font-bold bg-cream px-2 py-1 rounded hover:bg-lime/20 transition-colors">Last 7 Days</button>
                            <button className="text-xs font-bold bg-lime text-forest px-2 py-1 rounded">Last 30 Days</button>
                            <button className="text-xs font-bold bg-cream px-2 py-1 rounded hover:bg-lime/20 transition-colors">Custom</button>
                        </div>
                        <div className="h-40 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 text-xs">
                            [Calendar Grid Component]
                        </div>
                    </div>
                 </div>
                 <div className="h-40"></div> {/* Spacing for popover */}
            </div>

            {/* Multi-Select Combobox */}
            <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider">Multi-Select Combobox</h4>
                <div className="relative">
                    <div className="border border-lime ring-2 ring-lime/20 rounded-xl p-2 bg-white flex flex-wrap gap-2 min-h-[48px]">
                        <span className="bg-forest text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                            FedEx <button className="hover:text-lime"><X className="w-3 h-3" /></button>
                        </span>
                        <span className="bg-forest text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                            UPS <button className="hover:text-lime"><X className="w-3 h-3" /></button>
                        </span>
                         <input type="text" className="flex-1 min-w-[60px] outline-none text-sm p-1" placeholder="" />
                    </div>
                    {/* Dropdown mock */}
                    <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10">
                        <div className="p-2 border-b border-gray-100 bg-gray-50 text-xs font-bold text-gray-500">
                            Available Carriers
                        </div>
                        <div className="max-h-40 overflow-y-auto p-1">
                            <div className="flex items-center gap-2 px-3 py-2 hover:bg-cream rounded-lg cursor-pointer">
                                <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center"></div>
                                <span className="text-sm text-forest">DHL Express</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 hover:bg-cream rounded-lg cursor-pointer">
                                <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center"></div>
                                <span className="text-sm text-forest">USPS Priority</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="h-32"></div> {/* Spacing for popover */}
            </div>
         </div>
      </section>

       {/* 27. Notification Center */}
       <section className="space-y-8">
           <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">27. Notification Center</h3>
           <div className="p-12 bg-cream-dark rounded-3xl border border-black/5 flex justify-center items-start min-h-[400px]">
                
                {/* Popover */}
                <div className="bg-white rounded-2xl shadow-2xl border border-black/5 w-full max-w-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0">
                        <h4 className="font-bold text-forest text-lg">Notifications</h4>
                        <div className="flex gap-2">
                            <button className="text-xs font-bold text-forest hover:underline">Mark all read</button>
                            <button className="text-gray-400 hover:text-forest"><Settings className="w-4 h-4" /></button>
                        </div>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                        {/* Notif 1 (Unread) */}
                        <div className="p-4 border-b border-gray-50 bg-lime/5 hover:bg-lime/10 transition-colors cursor-pointer relative group">
                            <div className="absolute top-4 right-4 w-2 h-2 bg-lime rounded-full"></div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-status-blue shadow-sm shrink-0">
                                    <Truck className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-forest mb-0.5">Shipment Delayed</p>
                                    <p className="text-xs text-forest/70 leading-relaxed">Order #1234 is held at customs. Action required.</p>
                                    <p className="text-[10px] text-gray-400 mt-2 font-medium">10 mins ago</p>
                                </div>
                            </div>
                        </div>
                         {/* Notif 2 (Read) */}
                        <div className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer group">
                             <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center shrink-0">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-forest mb-0.5">New Team Member</p>
                                    <p className="text-xs text-forest/60 leading-relaxed">Sarah Jenkins joined the "West Coast" project.</p>
                                    <p className="text-[10px] text-gray-400 mt-2 font-medium">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                         {/* Notif 3 (Read) */}
                         <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                             <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-status-green shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-forest mb-0.5">Report Ready</p>
                                    <p className="text-xs text-forest/60 leading-relaxed">Your monthly analytics report is ready to download.</p>
                                    <p className="text-[10px] text-gray-400 mt-2 font-medium">Yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                        <button className="text-xs font-bold text-forest/60 hover:text-forest transition-colors">View All History</button>
                    </div>
                </div>

           </div>
       </section>
    </div>
  );
};