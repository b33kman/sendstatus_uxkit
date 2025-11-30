import React from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  LogOut, 
  Camera, 
  Save,
  CreditCard,
  Users, 
  Link,
  Download,
  Plus,
  Trash2,
  Check
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './ui/table';

export const ProfileSettingsDemo: React.FC = () => {
  return (
    <div className="space-y-8">
       {/* Page Header */}
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
              <h2 className="text-3xl font-bold text-forest">Settings</h2>
              <p className="text-forest/60 mt-1">Manage your account, billing, and team preferences.</p>
          </div>
          <div className="flex gap-3">
              <Button variant="outline" className="rounded-full">Discard</Button>
              <Button className="rounded-full shadow-lg shadow-lime/20">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
              </Button>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3 space-y-6">
                <Card padding="sm" className="sticky top-6">
                    <nav className="flex flex-col gap-1">
                        <Button variant="ghost" shape="rounded" className="justify-start text-forest bg-forest/5 font-bold">
                            <User className="w-4 h-4 mr-3" /> Profile
                        </Button>
                        <Button variant="ghost" shape="rounded" className="justify-start text-forest/60 hover:text-forest">
                            <CreditCard className="w-4 h-4 mr-3" /> Billing & Plan
                        </Button>
                        <Button variant="ghost" shape="rounded" className="justify-start text-forest/60 hover:text-forest">
                            <Users className="w-4 h-4 mr-3" /> Team Members
                        </Button>
                         <Button variant="ghost" shape="rounded" className="justify-start text-forest/60 hover:text-forest">
                            <Link className="w-4 h-4 mr-3" /> Integrations
                        </Button>
                        <Button variant="ghost" shape="rounded" className="justify-start text-forest/60 hover:text-forest">
                            <Bell className="w-4 h-4 mr-3" /> Notifications
                        </Button>
                        <Button variant="ghost" shape="rounded" className="justify-start text-forest/60 hover:text-forest">
                            <Shield className="w-4 h-4 mr-3" /> Security
                        </Button>
                        <div className="h-px bg-gray-100 my-2 mx-2"></div>
                        <Button variant="ghost" shape="rounded" className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                            <LogOut className="w-4 h-4 mr-3" /> Log Out
                        </Button>
                    </nav>
                </Card>

                {/* Plan Summary Widget */}
                <Card className="bg-forest text-white border-none" padding="none">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-white text-base">Current Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-2xl font-bold">Pro</span>
                            <span className="text-lime font-bold">$29/mo</span>
                        </div>
                        <div className="space-y-3 mb-6">
                             <div>
                                <div className="flex justify-between text-xs mb-1 opacity-80">
                                    <span>Projects</span>
                                    <span>8 / 10</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-lime w-[80%]"></div>
                                </div>
                            </div>
                             <div>
                                <div className="flex justify-between text-xs mb-1 opacity-80">
                                    <span>Storage</span>
                                    <span>12GB / 50GB</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-lime w-[24%]"></div>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white h-9">Upgrade Plan</Button>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-10">
                
                {/* 1. Profile Information */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <div className="p-2 bg-cream-dark rounded-xl">
                            <User className="w-5 h-5 text-forest" />
                        </div>
                        <h3 className="text-xl font-bold text-forest">Public Profile</h3>
                    </div>

                    <Card padding="none" className="overflow-hidden">
                        <div className="h-32 bg-gradient-to-r from-forest to-forest-light relative">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                        </div>
                        <div className="px-8 pb-8">
                            <div className="relative flex justify-between items-end -mt-10 mb-6">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
                                        <Avatar className="w-full h-full rounded-none border-none">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <button className="absolute bottom-0 right-0 p-1.5 bg-forest text-white rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform">
                                        <Camera className="w-3 h-3" />
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    <Badge variant="success" className="h-7 px-3">Active</Badge>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" defaultValue="shadcn" />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" defaultValue="admin@sendstatus.com" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea id="bio" className="h-[120px]" placeholder="Tell us a little about yourself" defaultValue="Product Designer based in Melbourne. Specializing in UI/UX and Design Systems." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* 2. Billing & Subscription */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <div className="p-2 bg-cream-dark rounded-xl">
                            <CreditCard className="w-5 h-5 text-forest" />
                        </div>
                        <h3 className="text-xl font-bold text-forest">Billing & Subscription</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {/* Payment Method */}
                        <Card padding="none">
                            <CardHeader>
                                <CardTitle>Payment Method</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-8 bg-forest text-white rounded flex items-center justify-center font-bold text-xs shadow-sm">
                                        VISA
                                    </div>
                                    <div>
                                        <p className="font-bold text-forest text-sm">•••• •••• •••• 4242</p>
                                        <p className="text-xs text-forest/50">Expires 12/2025</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="outline" size="sm" className="rounded-lg h-9">Update Card</Button>
                                    <Button variant="ghost" size="sm" className="rounded-lg h-9 text-red-600 hover:text-red-700 hover:bg-red-50">Remove</Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Invoice History */}
                        <Card padding="none">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Invoice History</CardTitle>
                                <Button variant="ghost" size="sm" className="h-8 text-xs">View All</Button>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="p-1.5 bg-green-100 text-green-700 rounded-lg"><Check className="w-3 h-3" /></div>
                                            <span className="font-medium text-forest">Oct 01, 2024</span>
                                        </div>
                                        <span className="font-bold text-forest">$29.00</span>
                                        <button className="text-gray-400 hover:text-forest"><Download className="w-4 h-4" /></button>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="p-1.5 bg-green-100 text-green-700 rounded-lg"><Check className="w-3 h-3" /></div>
                                            <span className="font-medium text-forest">Sep 01, 2024</span>
                                        </div>
                                        <span className="font-bold text-forest">$29.00</span>
                                        <button className="text-gray-400 hover:text-forest"><Download className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* 3. Team Members */}
                <section className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-cream-dark rounded-xl">
                                <Users className="w-5 h-5 text-forest" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-forest">Team Members</h3>
                                <p className="text-xs text-forest/50">Manage who has access to your workspace.</p>
                            </div>
                        </div>
                        <Button size="sm" className="gap-2">
                            <Plus className="w-4 h-4" /> Invite Member
                        </Button>
                    </div>

                    <Card padding="none" className="overflow-hidden">
                         <Table>
                             <TableHeader className="bg-gray-50/50">
                                 <TableRow className="border-b border-gray-100 hover:bg-transparent">
                                     <TableHead className="pl-6">User</TableHead>
                                     <TableHead>Role</TableHead>
                                     <TableHead>Status</TableHead>
                                     <TableHead className="text-right pr-6">Action</TableHead>
                                 </TableRow>
                             </TableHeader>
                             <TableBody>
                                 {[
                                     {name: 'Sarah Jenkins', email: 'sarah@example.com', role: 'Admin', status: 'Active', initials: 'SJ', color: 'bg-lime'},
                                     {name: 'Tom Cook', email: 'tom@example.com', role: 'Editor', status: 'Active', initials: 'TC', color: 'bg-blue-200'},
                                     {name: 'Arlene McCoy', email: 'arlene@example.com', role: 'Viewer', status: 'Pending', initials: 'AM', color: 'bg-gray-200'},
                                 ].map((member, i) => (
                                     <TableRow key={i} className="group">
                                         <TableCell className="pl-6">
                                             <div className="flex items-center gap-3">
                                                 <div className={`w-8 h-8 rounded-full ${member.color} text-forest flex items-center justify-center text-xs font-bold border border-white shadow-sm`}>
                                                     {member.initials}
                                                 </div>
                                                 <div>
                                                     <p className="font-bold text-forest text-sm">{member.name}</p>
                                                     <p className="text-xs text-forest/50">{member.email}</p>
                                                 </div>
                                             </div>
                                         </TableCell>
                                         <TableCell>
                                             <Select value={member.role}>
                                                <SelectTrigger className="h-8 text-xs w-[100px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Admin">Admin</SelectItem>
                                                    <SelectItem value="Editor">Editor</SelectItem>
                                                    <SelectItem value="Viewer">Viewer</SelectItem>
                                                </SelectContent>
                                             </Select>
                                         </TableCell>
                                         <TableCell>
                                             {member.status === 'Active' ? (
                                                 <Badge variant="success" className="h-6 px-2 text-[10px]">Active</Badge>
                                             ) : (
                                                 <Badge variant="warning" className="h-6 px-2 text-[10px]">Pending</Badge>
                                             )}
                                         </TableCell>
                                         <TableCell className="text-right pr-6">
                                             <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50">
                                                 <Trash2 className="w-4 h-4" />
                                             </Button>
                                         </TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                    </Card>
                </section>

                {/* 4. Security */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <div className="p-2 bg-cream-dark rounded-xl">
                            <Shield className="w-5 h-5 text-forest" />
                        </div>
                        <h3 className="text-xl font-bold text-forest">Security</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card padding="none">
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <Label>Current Password</Label>
                                    <Input type="password" placeholder="••••••••" />
                                </div>
                                <div>
                                    <Label>New Password</Label>
                                    <Input type="password" />
                                </div>
                                <Button variant="secondary" className="w-full">Update Password</Button>
                            </CardContent>
                        </Card>

                        <Card padding="none">
                             <CardHeader>
                                <CardTitle>Two-Factor Authentication</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <p className="font-bold text-sm text-forest">Authenticator App</p>
                                        <p className="text-xs text-forest/60">Use an app like Google Authenticator to generate verification codes.</p>
                                    </div>
                                    <Switch />
                                </div>
                                <div className="h-px bg-gray-100"></div>
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <p className="font-bold text-sm text-forest">SMS Recovery</p>
                                        <p className="text-xs text-forest/50">Use your phone number for account recovery.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

            </div>
       </div>
    </div>
  );
};