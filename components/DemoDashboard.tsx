import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  PieChart, 
  Search, 
  Bell, 
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  Filter,
  Download,
  Truck,
  Box,
  DollarSign,
  CheckCircle2
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatusType, ShipmentData } from '../types';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 6890 },
  { name: 'Jun', value: 8390 },
  { name: 'Jul', value: 7490 },
];

const shipments: ShipmentData[] = [
  { id: '003424DFR', customer: 'Eleanor Pena', date: '15/10/2024', amount: 20, status: StatusType.DELIVERED, carrier: 'DHL', weight: '12.5 Kg', destination: 'Maine' },
  { id: '763424NMB', customer: 'Cody Fisher', date: '25/10/2024', amount: 50, status: StatusType.IN_TRANSIT, carrier: 'FedEx', weight: '10.5 Kg', destination: 'Houston' },
  { id: '893424XKR', customer: 'Ralph Edwards', date: '25/10/2024', amount: 40, status: StatusType.PENDING, carrier: 'UPS', weight: '15.0 Kg', destination: 'Los Angeles' },
  { id: '123424JKL', customer: 'Floyd Miles', date: '25/10/2024', amount: 30, status: StatusType.WAITING, carrier: 'Amazon', weight: '11.0 Kg', destination: 'New York' },
];

const StatusBadgeItem: React.FC<{ status: StatusType }> = ({ status }) => {
  let variant: "success" | "info" | "warning" | "waiting" | "destructive" = "info";

  switch (status) {
    case StatusType.DELIVERED: variant = "success"; break;
    case StatusType.IN_TRANSIT: variant = "info"; break;
    case StatusType.PENDING: variant = "warning"; break;
    case StatusType.WAITING: variant = "waiting"; break;
    case StatusType.EXCEPTION: variant = "destructive"; break;
  }

  return (
    <Badge variant={variant} className="px-4 py-1.5">
      {status}
    </Badge>
  );
};

export const DemoDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Shipment');

  return (
    <div className="w-full bg-forest rounded-[2.5rem] p-4 sm:p-6 shadow-2xl overflow-hidden relative font-sans">
      {/* Organic Top Navigation */}
      <div className="flex flex-col xl:flex-row justify-between items-center mb-8 gap-6">
        {/* Brand & Nav */}
        <div className="bg-forest-light/30 backdrop-blur-md rounded-full p-2 pl-2 pr-2 flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar border border-white/5">
          
          <div className="flex items-center gap-2 pl-3 pr-4 pointer-events-none">
            <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center text-forest font-bold text-lg shadow-lg shadow-lime/20">*</div>
            <span className="font-bold text-white text-lg tracking-tight">SendStatus</span>
          </div>

          <div className="h-8 w-px bg-white/10 mx-1"></div>
          
          <div className="flex items-center gap-1 px-2">
            {[
              { name: 'DASHBOARD', icon: LayoutDashboard },
              { name: 'SHIPMENT', icon: Truck },
              { name: 'TRACKING', icon: MapPin },
              { name: 'CUSTOMERS', icon: Users },
              { name: 'ANALYTICS', icon: PieChart },
            ].map((item) => (
              <Button 
                key={item.name}
                variant={activeTab === item.name ? "default" : "ghost"}
                onClick={() => setActiveTab(item.name)}
                className={`gap-2 text-sm font-semibold transition-all duration-300 ${
                  activeTab === item.name 
                    ? '' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-4 bg-forest-light/30 backdrop-blur-md rounded-full p-2 border border-white/5">
          <div className="flex items-center px-4 gap-2 text-white/60">
            <Search className="w-5 h-5" />
            <span className="text-sm font-medium">Search...</span>
          </div>
          <Button size="icon" className="bg-forest-dark hover:bg-forest text-white rounded-full relative w-12 h-12">
            <Bell className="w-5 h-5" />
            <span className="absolute top-3 right-3 w-2 h-2 bg-lime rounded-full border border-forest-dark"></span>
          </Button>
          <div className="w-12 h-12 rounded-full bg-cream border-2 border-forest overflow-hidden">
            <img src="https://picsum.photos/100/100" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-cream rounded-[2rem] p-6 min-h-[800px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-forest mb-1">Shipment Overview</h1>
            <p className="text-forest/60">Monitor your branded tracking performance and upsells.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="bg-white border-forest/10 hover:bg-forest/5 text-forest gap-2">
              <Download className="w-4 h-4" />
              Export Data
            </Button>
            <Button variant="secondary" className="gap-2">
              <Plus className="w-4 h-4" />
              Add New Shipment
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Shipments', value: '84,456', change: '+10.5%', isPos: true, icon: Truck, color: 'bg-yellow-100 text-yellow-700' },
            { label: 'Total Orders', value: '10,105', change: '-4.2%', isPos: false, icon: Box, color: 'bg-orange-100 text-orange-700' },
            { label: 'Revenue', value: '$59,865', change: '+2.1%', isPos: true, icon: DollarSign, color: 'bg-purple-100 text-purple-700' },
            { label: 'Delivered', value: '40,423', change: '-1.3%', isPos: false, icon: CheckCircle2, color: 'bg-green-100 text-green-700' },
          ].map((stat, i) => (
            <Card key={i} className="hover:translate-y-[-2px] duration-300" padding="default">
              <div className="flex justify-between items-start mb-4">
                <span className="text-forest/60 font-semibold text-sm">{stat.label}</span>
                <div className={`p-2 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-forest mb-2">{stat.value}</h3>
              <div className="flex items-center gap-2">
                <Badge variant={stat.isPos ? 'default' : 'destructive'} className={stat.isPos ? 'bg-lime/20 text-forest hover:bg-lime/30' : 'bg-red-100 text-red-600 hover:bg-red-200'}>
                   {stat.change}
                </Badge>
                <span className="text-xs text-forest/40">vs last month</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Analytics Chart */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Shipment Analytics</CardTitle>
                <p className="text-sm text-forest/50 mt-1">Post-purchase engagement rate</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-full h-8">Monthly</Button>
                <Button variant="outline" size="sm" className="rounded-full h-8">Orders</Button>
              </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-baseline gap-4 mb-6">
                <h4 className="text-4xl font-bold text-forest">0.78%</h4>
                <Badge variant="success" className="bg-status-green/10 text-status-green hover:bg-status-green/20 gap-1 px-2">
                    <ArrowUpRight className="w-3 h-3" /> 16%
                </Badge>
                </div>

                <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#bce455" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#bce455" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#9ca3af', fontSize: 12}} 
                        dy={10}
                    />
                    <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#9ca3af', fontSize: 12}} 
                    />
                    <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#a3cf34" 
                        strokeWidth={3} 
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                    />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card padding="none" className="flex flex-col relative overflow-hidden group min-h-[300px]">
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
              <h3 className="text-xl font-bold text-forest">Live Tracking</h3>
              <Button size="icon" variant="secondary" className="bg-white shadow-md hover:bg-lime h-10 w-10 text-forest">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-blue-50 opacity-50 z-0"></div>
            <img 
              src="https://picsum.photos/seed/map/400/400" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply grayscale-[20%]"
              alt="Map"
            />
            {/* Simulated Route */}
            <div className="relative z-10 mt-auto m-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-status-blue p-2 rounded-full text-white">
                        <Truck className="w-4 h-4" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-forest/50">Tracking ID</p>
                        <p className="text-sm font-bold text-forest">003424DFR</p>
                    </div>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-status-blue w-[65%] rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs font-semibold text-forest/70">
                    <span>California</span>
                    <span>New York</span>
                </div>
            </div>
          </Card>
        </div>

        {/* List Table */}
        <Card padding="default">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h3 className="text-xl font-bold text-forest">Recent Shipments</h3>
                <div className="flex gap-3 w-full sm:w-auto items-center">
                    <div className="relative flex-1 sm:flex-initial w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                        <Input 
                            type="text" 
                            placeholder="Search by ID..." 
                            className="pl-9 rounded-full bg-white"
                        />
                    </div>
                    <Button variant="outline" className="rounded-full gap-2 border-gray-200">
                        <Filter className="w-4 h-4" />
                        Filter
                    </Button>
                </div>
            </div>
            
            <Table>
                <TableHeader>
                    <TableRow className="border-b border-gray-100 hover:bg-transparent">
                        <TableHead className="pl-4">Shipment ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Shipper</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right pr-4">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {shipments.map((shipment, index) => (
                        <TableRow key={index}>
                            <TableCell className="pl-4 font-bold text-forest rounded-l-2xl">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-lime focus:ring-lime accent-lime" />
                                    {shipment.id}
                                </div>
                            </TableCell>
                            <TableCell className="font-medium text-forest/80">{shipment.customer}</TableCell>
                            <TableCell className="text-forest/60">{shipment.date}</TableCell>
                            <TableCell className="text-forest/60">{shipment.destination}</TableCell>
                            <TableCell className="font-bold text-forest">{shipment.carrier}</TableCell>
                            <TableCell className="font-medium text-forest">${shipment.amount}</TableCell>
                            <TableCell>
                                <StatusBadgeItem status={shipment.status} />
                            </TableCell>
                            <TableCell className="pr-4 text-right rounded-r-2xl">
                                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                                    <MoreHorizontal className="w-4 h-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>

      </div>
    </div>
  );
};