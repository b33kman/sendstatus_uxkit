import React, { useState } from 'react';
import { 
  Search,
  Settings,
  User,
  CreditCard,
  LogOut,
  ChevronRight,
  MoreHorizontal,
  ArrowUpDown,
  Filter,
  X,
  Check,
  Calendar,
  SlidersHorizontal,
  Command,
  MessageSquare,
  Truck,
  Users,
  CheckCircle2
} from 'lucide-react';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export const UniversalComponents: React.FC = () => {
  const [volume, setVolume] = useState(75);

  return (
    <div className="space-y-20">
      
      {/* 17. Command Palette */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">17. Command Menu & Spotlight</h3>
        
        <div className="p-8 bg-forest/5 rounded-3xl border border-black/5 flex justify-center">
            {/* Command Menu Mockup */}
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="flex items-center border-b border-gray-100 px-4 py-3 gap-2">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Type a command or search..." 
                        className="flex-1 text-sm outline-none text-forest placeholder:text-gray-400 font-medium"
                    />
                    <kbd className="hidden sm:inline-block px-2 py-0.5 bg-gray-100 border border-gray-200 rounded text-[10px] font-bold text-gray-500">ESC</kbd>
                </div>
                <div className="p-2">
                    <div className="text-[10px] font-bold text-gray-400 px-2 py-2 uppercase tracking-wider">Suggestions</div>
                    <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-cream text-left group transition-colors">
                        <Calendar className="w-4 h-4 text-gray-500 group-hover:text-forest" />
                        <span className="text-sm font-medium text-forest/80 group-hover:text-forest">Calendar</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-cream text-left group transition-colors">
                        <MessageSquare className="w-4 h-4 text-gray-500 group-hover:text-forest" />
                        <span className="text-sm font-medium text-forest/80 group-hover:text-forest">Search Messages</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg bg-lime/20 text-left group transition-colors">
                        <CreditCard className="w-4 h-4 text-forest" />
                        <span className="text-sm font-bold text-forest">Billing</span>
                        <span className="ml-auto text-[10px] font-bold bg-white px-1.5 py-0.5 rounded text-forest/60">⌘B</span>
                    </button>
                    
                    <div className="text-[10px] font-bold text-gray-400 px-2 py-2 uppercase tracking-wider mt-2">Settings</div>
                    <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-cream text-left group transition-colors">
                        <User className="w-4 h-4 text-gray-500 group-hover:text-forest" />
                        <span className="text-sm font-medium text-forest/80 group-hover:text-forest">Profile</span>
                    </button>
                     <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-cream text-left group transition-colors">
                        <LogOut className="w-4 h-4 text-gray-500 group-hover:text-forest" />
                        <span className="text-sm font-medium text-forest/80 group-hover:text-forest">Log out</span>
                    </button>
                </div>
                <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-400">Search for apps, commands, and more</span>
                    <Command className="w-4 h-4 text-gray-300" />
                </div>
            </div>
        </div>
      </section>

      {/* 18. Form Primitives */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">18. Advanced Form Primitives</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sliders & Switches */}
            <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-10">
                {/* Range Slider */}
                <div>
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-bold text-forest">Volume Capacity</label>
                        <span className="text-sm font-mono text-gray-500">{volume}%</span>
                    </div>
                    <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
                </div>

                {/* Range Slider (Dual) */}
                 <div>
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-bold text-forest">Price Range</label>
                        <span className="text-sm font-mono text-gray-500">$20 - $80</span>
                    </div>
                    {/* Note: Dual range slider needs a complex component, keeping simpler version for now or using two sliders */}
                     <div className="relative w-full h-2 bg-gray-100 rounded-full">
                        <div className="absolute top-0 left-[20%] right-[20%] h-full bg-lime rounded-full opacity-50"></div>
                        <div className="absolute top-1/2 left-[20%] w-5 h-5 bg-white border-2 border-forest shadow-sm rounded-full -translate-y-1/2 -translate-x-1/2 cursor-grab"></div>
                        <div className="absolute top-1/2 right-[20%] w-5 h-5 bg-white border-2 border-forest shadow-sm rounded-full -translate-y-1/2 translate-x-1/2 cursor-grab"></div>
                    </div>
                </div>

                <div className="h-px bg-gray-100"></div>

                {/* Switches */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <label className="text-sm font-bold text-forest block">Airplane Mode</label>
                            <span className="text-xs text-gray-500">Disable all network connections</span>
                        </div>
                        <div className="w-12 h-7 bg-forest rounded-full relative cursor-pointer shadow-inner">
                            <div className="absolute top-1 right-1 w-5 h-5 bg-lime rounded-full shadow-sm transition-all"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <label className="text-sm font-bold text-forest block">Bluetooth</label>
                            <span className="text-xs text-gray-500">Allow connections nearby</span>
                        </div>
                        <div className="w-12 h-7 bg-gray-200 rounded-full relative cursor-pointer hover:bg-gray-300 transition-colors">
                            <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Radio & Checkbox Groups */}
            <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-8">
                
                {/* Visual Radio Group */}
                <div>
                    <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-4">Select Plan</h4>
                    <div className="space-y-3">
                        <label className="flex items-start gap-4 p-4 border-2 border-lime bg-lime/5 rounded-2xl cursor-pointer transition-all relative">
                            <div className="mt-1 w-5 h-5 rounded-full border-2 border-forest bg-white flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-forest rounded-full"></div>
                            </div>
                            <div>
                                <span className="block font-bold text-forest">Pro Plan</span>
                                <span className="block text-xs text-forest/60 mt-1">Up to 20 users • 100GB Storage</span>
                            </div>
                            <span className="absolute top-4 right-4 font-bold text-forest">$20/mo</span>
                        </label>

                        <label className="flex items-start gap-4 p-4 border border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-all relative opacity-60 hover:opacity-100">
                             <div className="mt-1 w-5 h-5 rounded-full border-2 border-gray-300 bg-white"></div>
                            <div>
                                <span className="block font-bold text-forest">Starter</span>
                                <span className="block text-xs text-forest/60 mt-1">Up to 3 users • 10GB Storage</span>
                            </div>
                             <span className="absolute top-4 right-4 font-bold text-forest">$0/mo</span>
                        </label>
                    </div>
                </div>

                {/* Checkbox Group */}
                 <div>
                    <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-4">Notifications</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="flex items-center gap-3 cursor-pointer group">
                             <div className="w-5 h-5 rounded border-2 border-forest bg-forest flex items-center justify-center text-white">
                                 <Check className="w-3.5 h-3.5" />
                             </div>
                             <span className="text-sm font-medium text-forest">Emails</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                             <div className="w-5 h-5 rounded border-2 border-forest bg-forest flex items-center justify-center text-white">
                                 <Check className="w-3.5 h-3.5" />
                             </div>
                             <span className="text-sm font-medium text-forest">SMS</span>
                        </label>
                         <label className="flex items-center gap-3 cursor-pointer group">
                             <div className="w-5 h-5 rounded border-2 border-gray-300 bg-white group-hover:border-forest transition-colors"></div>
                             <span className="text-sm font-medium text-forest/60 group-hover:text-forest">Push</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 19. Drawer / Sheet */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">19. Drawers & Sheets</h3>
        
        <div className="relative h-[600px] w-full bg-gray-100 rounded-3xl border border-black/5 overflow-hidden flex">
            
            {/* Background Content (Simulated) */}
            <div className="flex-1 p-8 opacity-20 pointer-events-none">
                <div className="h-8 bg-gray-300 w-1/3 rounded-lg mb-8"></div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="h-32 bg-gray-300 rounded-2xl"></div>
                    <div className="h-32 bg-gray-300 rounded-2xl"></div>
                    <div className="h-32 bg-gray-300 rounded-2xl"></div>
                </div>
            </div>

            {/* The Sheet */}
            <div className="absolute top-2 bottom-2 right-2 w-[400px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 transform transition-transform">
                {/* Header */}
                <div className="px-6 py-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h4 className="text-xl font-bold text-forest">Edit Profile</h4>
                        <p className="text-sm text-gray-500">Make changes to your profile here.</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-forest transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-forest">Username</label>
                        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-lime/50">
                            <span className="text-gray-400 text-sm">@</span>
                            <input type="text" defaultValue="johndoe" className="flex-1 outline-none text-sm text-forest font-medium" />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-forest">Bio</label>
                        <textarea className="w-full h-32 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime/50 text-sm text-forest resize-none" defaultValue="Product designer based in San Francisco."></textarea>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-gray-50 border-t border-gray-100 rounded-b-2xl flex justify-end gap-3">
                    <button className="px-6 py-2.5 rounded-full border border-gray-200 font-bold text-forest text-sm hover:bg-white transition-colors">Cancel</button>
                    <button className="px-6 py-2.5 rounded-full bg-forest text-white font-bold text-sm shadow-lg hover:bg-forest-light transition-colors">Save Changes</button>
                </div>
            </div>

            {/* Backdrop Label */}
            <div className="absolute bottom-4 left-4 bg-forest/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                Right-aligned Sheet / Drawer
            </div>
        </div>
      </section>

       {/* 20. Advanced Data Table */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">20. Advanced Data Table</h3>
        
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
            {/* Toolbar */}
            <div className="p-4 border-b border-gray-100 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex items-center gap-2">
                     <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Filter emails..." 
                            className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm w-64 focus:outline-none focus:border-lime"
                        />
                    </div>
                    <button className="px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm font-medium text-forest/70 hover:border-forest hover:text-forest flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4" />
                        View
                    </button>
                </div>
                <div className="flex items-center gap-2">
                     <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-forest">
                        Reset
                    </button>
                     <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-forest shadow-sm hover:bg-gray-50 flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Columns
                    </button>
                </div>
            </div>

            {/* Table */}
            <Table>
                <TableHeader className="bg-gray-50/50">
                    <TableRow className="border-b border-gray-100 hover:bg-transparent">
                        <TableHead className="w-12 p-4">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-forest focus:ring-forest" />
                        </TableHead>
                        <TableHead className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center gap-1 cursor-pointer hover:text-forest">
                                Status <ArrowUpDown className="w-3 h-3" />
                            </div>
                        </TableHead>
                        <TableHead className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center gap-1 cursor-pointer hover:text-forest">
                                Email <ArrowUpDown className="w-3 h-3" />
                            </div>
                        </TableHead>
                        <TableHead className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</TableHead>
                        <TableHead className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Created</TableHead>
                        <TableHead className="p-4 w-10"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100">
                    {[
                        {id: 1, status: 'Success', email: 'ken99@yahoo.com', amount: '$316.00', date: 'Feb 20, 2024', sel: false},
                        {id: 2, status: 'Processing', email: 'abe.lincoln@gmail.com', amount: '$242.00', date: 'Feb 18, 2024', sel: true},
                        {id: 3, status: 'Success', email: 'monserrat44@gmail.com', amount: '$837.00', date: 'Feb 14, 2024', sel: false},
                        {id: 4, status: 'Failed', email: 'silas22@hotmail.com', amount: '$87.00', date: 'Feb 10, 2024', sel: false},
                    ].map((row) => (
                        <TableRow key={row.id} data-state={row.sel ? "selected" : undefined} className={row.sel ? 'bg-lime/5' : ''}>
                            <TableCell className="p-4">
                                <input type="checkbox" checked={row.sel} className="w-4 h-4 rounded border-gray-300 text-forest focus:ring-forest" />
                            </TableCell>
                            <TableCell className="p-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                    ${row.status === 'Success' ? 'bg-green-100 text-green-800' : 
                                      row.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                                      'bg-red-100 text-red-800'}`}>
                                    {row.status}
                                </span>
                            </TableCell>
                            <TableCell className="p-4">
                                <div className="font-bold text-forest text-sm">{row.email}</div>
                            </TableCell>
                            <TableCell className="p-4 text-sm font-medium text-forest/70">{row.amount}</td>
                            <TableCell className="p-4 text-sm text-gray-500">{row.date}</TableCell>
                            <TableCell className="p-4">
                                <button className="p-1 rounded-md text-gray-400 hover:text-forest hover:bg-gray-100">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                    1 of 10 row(s) selected.
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50">Previous</button>
                    <button className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">Next</button>
                </div>
            </div>
        </div>
      </section>

       {/* 27. Notification Center */}
       <section className="space-y-8">
           <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">27. Notification Center</h3>
           <div className="p-12 bg-cream-dark rounded-3xl border border-black/5 flex justify-center items-start min-h-[400px]">
                
                {/* Popover */}
                <div className="bg-white rounded-2xl shadow-2xl border border-black/5 w-full max-w-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0">
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