import React from 'react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Switch } from './ui/switch';
import { Checkbox } from './ui/checkbox';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Settings, User, ArrowRight, Zap, Code, Bell } from 'lucide-react';

export const ArchitectureDemo: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* Explanation */}
      <div className="flex items-start gap-4 p-6 bg-blue-50 text-blue-900 rounded-3xl border border-blue-100">
        <div className="p-3 bg-white rounded-full shadow-sm">
            <Code className="w-5 h-5 text-blue-600" />
        </div>
        <div>
            <h3 className="text-lg font-bold mb-1">Production Architecture</h3>
            <p className="text-sm opacity-80 leading-relaxed">
                This section demonstrates the <strong>complete shadcn-like primitive set</strong> available for the SendStatus design system. 
                All components below use <code>cva</code> and <code>tailwind-merge</code> for maximum scalability.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Buttons Demo */}
        <div className="space-y-6">
            <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider">Button Component</h4>
            <div className="p-8 border border-dashed border-gray-300 rounded-3xl space-y-8">
                
                <div className="space-y-2">
                    <p className="text-xs font-mono text-gray-400">variant="default"</p>
                    <div className="flex flex-wrap gap-4">
                        <Button>Primary Action</Button>
                        <Button disabled>Disabled</Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-xs font-mono text-gray-400">variant="secondary"</p>
                    <div className="flex flex-wrap gap-4">
                         <Button variant="secondary">
                            <Settings className="mr-2 w-4 h-4" /> 
                            Settings
                        </Button>
                    </div>
                </div>

                 <div className="space-y-2">
                    <p className="text-xs font-mono text-gray-400">variant="outline" & "ghost"</p>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="outline">Secondary Action</Button>
                        <Button variant="ghost">Cancel</Button>
                    </div>
                </div>
            </div>
        </div>

        {/* Form Primitives */}
        <div className="space-y-6">
             <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider">Form Primitives</h4>
             <Card>
                 <CardHeader>
                     <CardTitle>Notifications</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-6">
                     
                     <div className="flex items-center justify-between">
                         <div className="space-y-0.5">
                             <label className="text-sm font-bold text-forest">Push Notifications</label>
                             <p className="text-xs text-forest/50">Receive alerts on your mobile device</p>
                         </div>
                         <Switch defaultChecked />
                     </div>

                     <div className="h-px bg-gray-100"></div>

                     <div className="flex items-center gap-3">
                         <Checkbox id="terms" />
                         <label htmlFor="terms" className="text-sm font-medium text-forest cursor-pointer">
                             I accept the terms and conditions
                         </label>
                     </div>

                 </CardContent>
             </Card>
        </div>

        {/* Tabs & Layout */}
        <div className="space-y-6 md:col-span-2">
            <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider">Tabs & Data Display</h4>
            <Card padding="default">
                <Tabs defaultValue="overview">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                         <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="team">Team Members</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                         </TabsList>
                         
                         <div className="flex items-center -space-x-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                             <Avatar>
                                <AvatarFallback className="bg-lime text-forest">JD</AvatarFallback>
                            </Avatar>
                             <Avatar>
                                <AvatarFallback className="bg-forest text-white">+3</AvatarFallback>
                            </Avatar>
                         </div>
                    </div>

                    <TabsContent value="overview" className="bg-cream rounded-2xl p-6 border border-black/5">
                        <h3 className="text-lg font-bold text-forest mb-2">Project Overview</h3>
                        <p className="text-forest/70 leading-relaxed">
                            This entire content block is rendered inside a <code>TabsContent</code> component. 
                            The animation and state management are handled automatically.
                        </p>
                        <div className="mt-4 flex gap-4">
                            <Button size="sm">Download Report</Button>
                            <Button size="sm" variant="outline">View History</Button>
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="team" className="p-12 text-center text-forest/40 font-bold bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        Team Content Placeholder
                    </TabsContent>

                    <TabsContent value="settings" className="p-12 text-center text-forest/40 font-bold bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        Settings Content Placeholder
                    </TabsContent>
                </Tabs>
            </Card>
        </div>

      </div>
    </div>
  );
};