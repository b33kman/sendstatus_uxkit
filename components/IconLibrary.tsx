import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  MapPin, 
  Users, 
  PieChart, 
  Search, 
  Bell, 
  Settings,
  Truck,
  Box,
  CreditCard,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  CheckCircle2
} from 'lucide-react';

export const IconLibrary: React.FC = () => {
  const icons = [
    { icon: LayoutDashboard, name: 'Dashboard' },
    { icon: Package, name: 'Shipment' },
    { icon: MapPin, name: 'Tracking' },
    { icon: Users, name: 'Customers' },
    { icon: PieChart, name: 'Analytics' },
    { icon: Search, name: 'Search' },
    { icon: Bell, name: 'Notification' },
    { icon: Truck, name: 'Delivery' },
    { icon: Box, name: 'Product' },
    { icon: CreditCard, name: 'Payment' },
    { icon: Filter, name: 'Filter' },
    { icon: Download, name: 'Export' },
  ];

  return (
    <div className="space-y-16">
      
      {/* 1. Standard Grid */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Standard Icon Set</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {icons.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3 group cursor-pointer">
              <div className="p-4 rounded-2xl bg-cream group-hover:bg-lime transition-colors duration-300 shadow-sm border border-cream-dark group-hover:border-lime">
                <item.icon className="w-6 h-6 text-forest" />
              </div>
              <span className="text-xs font-medium text-forest/60 group-hover:text-forest transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Interaction Strategy */}
      <div>
         <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Strategy: Interaction Patterns</h3>
         <p className="text-forest/60 mb-6 max-w-2xl text-sm">
            We follow a strict "Forest & Lime" hierarchy. Lime is high-energy for active states, while Cream is neutral for default states. 
            <strong> Never use white text on Lime backgrounds.</strong>
         </p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Default */}
            <div className="flex items-center gap-4 p-5 border border-dashed border-gray-200 rounded-3xl bg-white hover:border-gray-300 transition-colors">
                <div className="p-4 rounded-2xl bg-cream border border-cream-dark">
                    <LayoutDashboard className="w-6 h-6 text-forest" />
                </div>
                <div>
                    <p className="font-bold text-forest">Default / Neutral</p>
                    <code className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 mt-1 block w-fit">bg-cream + text-forest</code>
                </div>
            </div>

            {/* Active */}
            <div className="flex items-center gap-4 p-5 border border-dashed border-gray-200 rounded-3xl bg-white hover:border-gray-300 transition-colors">
                <div className="p-4 rounded-2xl bg-lime shadow-md shadow-lime/20">
                    <LayoutDashboard className="w-6 h-6 text-forest" />
                </div>
                <div>
                    <p className="font-bold text-forest">Active / Hover</p>
                    <code className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 mt-1 block w-fit">bg-lime + text-forest</code>
                </div>
            </div>

            {/* Inverse */}
            <div className="flex items-center gap-4 p-5 border border-dashed border-forest/30 rounded-3xl bg-forest hover:border-forest/50 transition-colors">
                <div className="p-4 rounded-2xl bg-white/10">
                    <LayoutDashboard className="w-6 h-6 text-lime" />
                </div>
                <div>
                    <p className="font-bold text-white">Inverse / Dark</p>
                    <code className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/70 mt-1 block w-fit">bg-forest + text-lime</code>
                </div>
            </div>
         </div>
      </div>

      {/* 3. Semantic Tints */}
      <div>
         <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Strategy: Semantic Soft-Tints</h3>
         <p className="text-forest/60 mb-6 max-w-2xl text-sm">
            Separates "data" from "navigation". Use pastel backgrounds with saturated, dark text for maximum accessibility.
         </p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {/* Info */}
             <div className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-gray-100 bg-white hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                 <div className="p-3 rounded-2xl bg-blue-100 text-blue-800">
                     <Truck className="w-6 h-6" />
                 </div>
                 <div className="text-center">
                    <span className="text-sm font-bold text-forest block">Transit</span>
                    <span className="text-xs text-forest/40">Blue-800 on Blue-100</span>
                 </div>
             </div>
             {/* Success */}
             <div className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-gray-100 bg-white hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                 <div className="p-3 rounded-2xl bg-green-100 text-green-800">
                     <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <div className="text-center">
                    <span className="text-sm font-bold text-forest block">Success</span>
                    <span className="text-xs text-forest/40">Green-800 on Green-100</span>
                 </div>
             </div>
             {/* Warning */}
             <div className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-gray-100 bg-white hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                 <div className="p-3 rounded-2xl bg-orange-100 text-orange-800">
                     <Box className="w-6 h-6" />
                 </div>
                 <div className="text-center">
                    <span className="text-sm font-bold text-forest block">Pending</span>
                    <span className="text-xs text-forest/40">Orange-800 on Orange-100</span>
                 </div>
             </div>
             {/* Error */}
             <div className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-gray-100 bg-white hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                 <div className="p-3 rounded-2xl bg-red-100 text-red-800">
                     <Bell className="w-6 h-6" />
                 </div>
                 <div className="text-center">
                    <span className="text-sm font-bold text-forest block">Alert</span>
                    <span className="text-xs text-forest/40">Red-800 on Red-100</span>
                 </div>
             </div>
         </div>
      </div>

      {/* 4. Shapes */}
      <div>
         <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Strategy: Shape Semantics</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="flex items-start gap-6 p-6 rounded-3xl bg-cream border border-cream-dark hover:border-lime/50 transition-colors">
                 <div className="p-4 rounded-2xl bg-white shadow-sm border border-black/5">
                     <Box className="w-8 h-8 text-forest" />
                 </div>
                 <div>
                     <p className="font-bold text-forest text-lg">Squircle</p>
                     <p className="text-xs font-mono text-forest/40 mb-2">rounded-2xl</p>
                     <p className="text-sm text-forest/70 leading-relaxed">Used for inanimate objects: Products, Files, Categories, Features, and Cards.</p>
                 </div>
             </div>
             <div className="flex items-start gap-6 p-6 rounded-3xl bg-cream border border-cream-dark hover:border-lime/50 transition-colors">
                 <div className="p-4 rounded-full bg-white shadow-sm border border-black/5">
                     <Users className="w-8 h-8 text-forest" />
                 </div>
                 <div>
                     <p className="font-bold text-forest text-lg">Circle</p>
                     <p className="text-xs font-mono text-forest/40 mb-2">rounded-full</p>
                     <p className="text-sm text-forest/70 leading-relaxed">Used for living entities and status: People, Avatars, Notifications, and Status Indicators.</p>
                 </div>
             </div>
         </div>
      </div>

    </div>
  );
};