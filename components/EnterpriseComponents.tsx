import React from 'react';
import { 
  ChevronRight, 
  Home, 
  Settings, 
  User, 
  Check, 
  UploadCloud, 
  X, 
  Bold, 
  Italic, 
  List, 
  Link as LinkIcon, 
  File,
  Search,
  Calendar,
  MoreVertical,
  GripVertical,
  Clock,
  Flag,
  PlusCircle,
  ChevronLeft,
  ChevronDown,
  Hash,
  UserPlus,
  Layout,
  Columns
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';

export const EnterpriseComponents: React.FC = () => {
  return (
    <div className="space-y-20">
      
      {/* Navigation Group */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">11. Navigation Components</h3>
        
        {/* Breadcrumbs */}
        <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
            <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-4">Breadcrumbs</h4>
            <nav className="flex items-center gap-2 text-sm text-forest/60">
                <a href="#" className="hover:text-forest flex items-center gap-1"><Home className="w-4 h-4" /> Home</a>
                <ChevronRight className="w-4 h-4 text-forest/30" />
                <a href="#" className="hover:text-forest">Projects</a>
                <ChevronRight className="w-4 h-4 text-forest/30" />
                <a href="#" className="hover:text-forest">Miller Kitchen</a>
                <ChevronRight className="w-4 h-4 text-forest/30" />
                <span className="font-bold text-forest bg-lime/20 px-2 py-0.5 rounded-md">Settings</span>
            </nav>
        </div>

        {/* Tabs & Segments */}
        <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
             <div>
                <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-4">Segmented Control</h4>
                <div className="bg-cream p-1.5 rounded-2xl inline-flex relative">
                    <button className="px-6 py-2 rounded-xl text-sm font-bold text-forest bg-white shadow-sm transition-all">Daily</button>
                    <button className="px-6 py-2 rounded-xl text-sm font-medium text-forest/60 hover:text-forest transition-all">Weekly</button>
                    <button className="px-6 py-2 rounded-xl text-sm font-medium text-forest/60 hover:text-forest transition-all">Monthly</button>
                </div>
             </div>
             <div>
                <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-4">Underline Tabs</h4>
                <Tabs defaultValue="overview">
                    <TabsList variant="underline">
                        <TabsTrigger value="overview" variant="underline">Overview</TabsTrigger>
                        <TabsTrigger value="team" variant="underline">Team</TabsTrigger>
                        <TabsTrigger value="files" variant="underline">Files</TabsTrigger>
                        <TabsTrigger value="settings" variant="underline">Settings</TabsTrigger>
                    </TabsList>
                </Tabs>
             </div>
        </div>

        {/* Stepper */}
        <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
             <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Progress Stepper</h4>
             <div className="flex items-center w-full">
                {/* Step 1: Complete */}
                <div className="flex items-center gap-3 relative">
                    <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center text-forest font-bold shadow-md shadow-lime/20">
                        <Check className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-forest absolute -bottom-6 w-max left-1/2 -translate-x-1/2">Details</span>
                </div>
                <div className="h-1 flex-1 bg-lime mx-4 rounded-full"></div>
                
                {/* Step 2: Active */}
                <div className="flex items-center gap-3 relative">
                    <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold border-4 border-lime/30">
                        2
                    </div>
                     <span className="text-sm font-bold text-forest absolute -bottom-6 w-max left-1/2 -translate-x-1/2">Configuration</span>
                </div>
                <div className="h-1 flex-1 bg-gray-100 mx-4 rounded-full"></div>
                
                {/* Step 3: Pending */}
                 <div className="flex items-center gap-3 relative">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 text-gray-300 flex items-center justify-center font-bold">
                        3
                    </div>
                     <span className="text-sm font-medium text-forest/30 absolute -bottom-6 w-max left-1/2 -translate-x-1/2">Review</span>
                </div>
             </div>
             <div className="h-4"></div>{/* Spacing for labels */}
        </div>
      </section>


      {/* Data Display Group */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">12. Data Display & Utilities</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* File Upload / Attachments */}
             <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-6">
                <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider">File Upload</h4>
                
                {/* Upload Zone */}
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-lime hover:bg-lime/5 transition-all cursor-pointer group">
                    <div className="p-3 bg-forest/5 rounded-full text-forest mb-3 group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-forest">Click to upload or drag and drop</p>
                    <p className="text-xs text-forest/40 mt-1">SVG, PNG, JPG or GIF (max. 3MB)</p>
                </div>

                {/* File Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-cream border border-cream-dark">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-500 shadow-sm">
                        <File className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-forest truncate">project_requirements_v2.pdf</p>
                        <p className="text-xs text-forest/50">2.4 MB • Uploaded just now</p>
                    </div>
                    <button className="p-2 hover:bg-white rounded-full transition-colors text-forest/60 hover:text-forest">
                        <X className="w-4 h-4" />
                    </button>
                </div>
             </div>

             {/* Rich Text Editor Mock */}
             <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-6">
                <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider">Rich Text Area</h4>
                
                <div className="rounded-2xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-lime/50 transition-all">
                    <div className="bg-gray-50 border-b border-gray-200 p-2 flex gap-1">
                        <button className="p-1.5 rounded hover:bg-white text-forest/70"><Bold className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded hover:bg-white text-forest/70"><Italic className="w-4 h-4" /></button>
                        <div className="w-px h-4 bg-gray-300 mx-1 self-center"></div>
                        <button className="p-1.5 rounded hover:bg-white text-forest/70"><List className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded hover:bg-white text-forest/70"><LinkIcon className="w-4 h-4" /></button>
                    </div>
                    <div className="p-4 min-h-[140px] text-sm text-forest leading-relaxed">
                        <p className="text-forest/40">Start typing your project description...</p>
                    </div>
                </div>
             </div>
        </div>

        {/* Loading States */}
        <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
            <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Loading & Empty States</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Skeleton */}
                <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-gray-100 rounded-full"></div>
                        <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                    </div>
                    <div className="flex gap-4 pt-2">
                         <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                         <div className="flex-1 space-y-2 py-1">
                            <div className="h-3 bg-gray-100 rounded-full w-1/2"></div>
                            <div className="h-3 bg-gray-100 rounded-full w-1/4"></div>
                         </div>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-6 flex flex-col justify-center">
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-forest">
                            <span>Uploading...</span>
                            <span>45%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-lime w-[45%] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                         <div className="w-8 h-8 border-4 border-forest/10 border-t-lime rounded-full animate-spin"></div>
                    </div>
                </div>

                {/* Empty State Mini */}
                <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-cream/50 border border-dashed border-cream-dark">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-forest/30 mb-3">
                        <Search className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-forest">No Results</p>
                    <p className="text-xs text-forest/50">Try adjusting your filters</p>
                </div>
            </div>
        </div>
      </section>

      {/* Overlays */}
       <section className="space-y-8">
        <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">13. Overlays & Modals</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Modal Example */}
            <div className="relative bg-forest/5 rounded-3xl p-8 flex items-center justify-center min-h-[300px]">
                <Dialog>
                    <DialogTrigger>
                        <Button variant="secondary">Open Delete Modal</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <div className="mb-4">
                             <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 mb-4 mx-auto sm:mx-0">
                                <UploadCloud className="w-6 h-6" />
                            </div>
                            <DialogHeader>
                                <DialogTitle>Delete Project?</DialogTitle>
                                <DialogDescription>This action cannot be undone. All associated reports will be permanently removed.</DialogDescription>
                            </DialogHeader>
                        </div>
                        <DialogFooter>
                             <Button variant="ghost" className="rounded-full">Cancel</Button>
                             <Button variant="destructive" className="rounded-full shadow-lg shadow-red-200">Delete</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <p className="absolute bottom-4 text-xs font-mono text-forest/30">Click button to test Dialog</p>
            </div>

            {/* Tooltip & Popover Examples */}
             <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col items-center justify-center gap-12">
                 
                 {/* Tooltip */}
                 <div className="relative group cursor-help">
                     <span className="text-forest font-bold underline decoration-dashed decoration-forest/30 underline-offset-4">Hover me for info</span>
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-forest text-white text-xs rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                         <p className="font-semibold mb-1">Information</p>
                         <p className="opacity-80">Tooltips provide context without cluttering the UI.</p>
                         <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-forest"></div>
                     </div>
                 </div>

                 {/* Dropdown Menu */}
                 <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 font-bold text-sm text-forest">
                        Options <ChevronRight className="w-4 h-4 rotate-90" />
                    </button>
                    {/* Simulated Open State */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-black/5 p-1.5 z-10">
                        <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-cream text-sm font-medium text-forest flex items-center gap-2">
                            <Settings className="w-4 h-4 opacity-50" /> Settings
                        </button>
                        <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-cream text-sm font-medium text-forest flex items-center gap-2">
                            <User className="w-4 h-4 opacity-50" /> Members
                        </button>
                         <div className="h-px bg-gray-100 my-1"></div>
                        <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-red-50 text-sm font-medium text-red-600 flex items-center gap-2">
                            <X className="w-4 h-4 opacity-50" /> Delete
                        </button>
                    </div>
                 </div>

             </div>
        </div>
       </section>

       {/* New Section: 14. Task & Project Management */}
      <section className="space-y-8">
          <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">14. Task & Project Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Kanban Card */}
              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm md:col-span-1">
                  <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Kanban Card</h4>
                  {/* Card Component */}
                  <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-lime transition-all cursor-grab active:cursor-grabbing group">
                      <div className="flex justify-between items-start mb-2">
                          <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">High Priority</span>
                          <button className="text-gray-300 hover:text-forest"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                      <p className="font-bold text-forest text-sm mb-3 group-hover:text-lime-700 transition-colors">Finalize Q3 Financial Report</p>
                      <div className="flex items-center justify-between mt-4">
                          <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-700">JD</div>
                              <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-700">AS</div>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                              <Clock className="w-3 h-3" />
                              <span>2d left</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Task List Item */}
              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm md:col-span-2">
                  <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Task Row Item</h4>
                  <div className="space-y-2">
                      {/* Item 1 */}
                      <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-cream transition-colors group">
                          <button className="text-gray-300 hover:text-forest cursor-move"><GripVertical className="w-4 h-4" /></button>
                          <div className="relative flex items-center justify-center">
                              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded cursor-pointer checked:bg-lime checked:border-lime transition-colors" />
                              <Check className="w-3.5 h-3.5 text-forest absolute pointer-events-none opacity-0 peer-checked:opacity-100" />
                          </div>
                          <div className="flex-1">
                              <p className="text-sm font-bold text-forest">Review vendor contracts</p>
                              <p className="text-xs text-forest/50">Legal Team • Due Tomorrow</p>
                          </div>
                          <span className="hidden sm:inline-block px-2 py-1 bg-cream-dark text-forest/60 rounded text-xs font-medium">In Progress</span>
                          <div className="w-8 h-8 rounded-full bg-forest text-lime flex items-center justify-center text-xs font-bold border border-white shadow-sm">TU</div>
                      </div>
                       {/* Item 2 */}
                       <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-cream transition-colors group">
                          <button className="text-gray-300 hover:text-forest cursor-move"><GripVertical className="w-4 h-4" /></button>
                          <div className="relative flex items-center justify-center">
                              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded cursor-pointer checked:bg-lime checked:border-lime transition-colors" defaultChecked />
                              <Check className="w-3.5 h-3.5 text-forest absolute pointer-events-none opacity-0 peer-checked:opacity-100" />
                          </div>
                          <div className="flex-1 opacity-50">
                              <p className="text-sm font-bold text-forest line-through">Update site metadata</p>
                              <p className="text-xs text-forest/50">Completed yesterday</p>
                          </div>
                          <span className="hidden sm:inline-block px-2 py-1 bg-status-green/10 text-status-green rounded text-xs font-medium">Done</span>
                          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs font-bold border border-white">BJ</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* New Section: 15. Advanced Content Utilities */}
      <section className="space-y-8">
           <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">15. Advanced Content Utilities</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Accordion */}
               <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                   <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Accordion Group</h4>
                   <div className="space-y-3">
                       {/* Item 1 (Open) */}
                       <div className="border border-lime rounded-2xl overflow-hidden">
                           <button className="w-full flex justify-between items-center p-4 bg-lime/10 text-left">
                               <span className="font-bold text-forest text-sm">Project Specifications</span>
                               <ChevronDown className="w-4 h-4 text-forest rotate-180 transition-transform" />
                           </button>
                           <div className="p-4 bg-white text-sm text-forest/70 leading-relaxed border-t border-lime/20">
                               All deliverables must meet the WCAG 2.1 AA accessibility standards. Primary colors should be validated against the style guide before implementation.
                           </div>
                       </div>
                       {/* Item 2 (Closed) */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden">
                           <button className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 text-left transition-colors">
                               <span className="font-bold text-forest text-sm">Timeline & Milestones</span>
                               <ChevronDown className="w-4 h-4 text-forest/40 transition-transform" />
                           </button>
                       </div>
                   </div>
               </div>

               {/* Pagination & Tags */}
               <div className="space-y-8">
                   {/* Pagination */}
                   <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                       <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Pagination</h4>
                       <div className="flex items-center justify-between">
                           <button className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-forest/60 disabled:opacity-50"><ChevronLeft className="w-4 h-4" /></button>
                           <div className="flex items-center gap-2">
                               <button className="w-8 h-8 rounded-lg bg-lime text-forest font-bold text-sm shadow-sm">1</button>
                               <button className="w-8 h-8 rounded-lg hover:bg-cream text-forest/60 font-medium text-sm transition-colors">2</button>
                               <button className="w-8 h-8 rounded-lg hover:bg-cream text-forest/60 font-medium text-sm transition-colors">3</button>
                               <span className="text-forest/30">...</span>
                               <button className="w-8 h-8 rounded-lg hover:bg-cream text-forest/60 font-medium text-sm transition-colors">8</button>
                           </div>
                           <button className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-forest/60"><ChevronRight className="w-4 h-4" /></button>
                       </div>
                   </div>

                   {/* Tags Input */}
                    <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                       <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Tag Input</h4>
                       <div className="flex flex-wrap gap-2 p-2 border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-lime/50 focus-within:border-lime transition-all bg-white">
                           <span className="flex items-center gap-1 bg-forest text-white px-2 py-1 rounded-lg text-xs font-bold">
                               <Hash className="w-3 h-3 opacity-50" /> Design
                               <button className="hover:text-lime"><X className="w-3 h-3" /></button>
                           </span>
                           <span className="flex items-center gap-1 bg-cream-dark text-forest px-2 py-1 rounded-lg text-xs font-bold">
                               <Hash className="w-3 h-3 opacity-50" /> Urgent
                               <button className="hover:text-red-500"><X className="w-3 h-3" /></button>
                           </span>
                           <input type="text" placeholder="Add tag..." className="text-sm bg-transparent outline-none flex-1 min-w-[80px] px-1" />
                       </div>
                   </div>
               </div>
           </div>
      </section>

      {/* New Section: 16. Date & Calendar */}
       <section className="space-y-8">
           <h3 className="text-2xl font-bold text-forest border-b border-forest/10 pb-4">16. Date & Calendar</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Mini Calendar Mock */}
               <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                   <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Date Picker</h4>
                   <div className="bg-white rounded-2xl border border-gray-200 p-4 max-w-xs mx-auto">
                       <div className="flex justify-between items-center mb-4">
                           <button className="p-1 hover:bg-cream rounded-full"><ChevronLeft className="w-4 h-4 text-forest/60" /></button>
                           <span className="font-bold text-forest">November 2024</span>
                           <button className="p-1 hover:bg-cream rounded-full"><ChevronRight className="w-4 h-4 text-forest/60" /></button>
                       </div>
                       <div className="grid grid-cols-7 gap-1 text-center mb-2">
                           {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[10px] font-bold text-forest/40">{d}</span>)}
                       </div>
                       <div className="grid grid-cols-7 gap-1 text-center text-sm">
                           <span className="text-gray-300 py-1">29</span><span className="text-gray-300 py-1">30</span>
                           <span className="text-forest hover:bg-cream rounded-lg py-1 cursor-pointer">1</span>
                           <span className="text-forest hover:bg-cream rounded-lg py-1 cursor-pointer">2</span>
                           <span className="text-forest hover:bg-cream rounded-lg py-1 cursor-pointer">3</span>
                           <span className="bg-lime text-forest font-bold rounded-lg py-1 shadow-sm">4</span>
                           <span className="bg-lime/20 text-forest rounded-l-lg py-1">5</span>
                           <span className="bg-lime/20 text-forest rounded-r-lg py-1">6</span>
                           {[7,8,9,10,11,12,13,14,15].map(d => <span key={d} className="text-forest hover:bg-cream rounded-lg py-1 cursor-pointer">{d}</span>)}
                       </div>
                       <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                           <button className="text-xs text-forest/60 font-medium hover:text-forest">Clear</button>
                           <button className="text-xs bg-forest text-white px-3 py-1.5 rounded-lg font-bold hover:bg-forest-light">Apply</button>
                       </div>
                   </div>
               </div>

                {/* Avatar Group & Add User */}
                <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm flex flex-col justify-center gap-8">
                     <div>
                        <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-6">Team Avatars</h4>
                        <div className="flex items-center">
                             {[1,2,3,4].map(i => (
                                 <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 -ml-4 first:ml-0 relative hover:z-10 hover:scale-110 transition-transform shadow-sm">
                                     <img src={`https://picsum.photos/100/100?random=${i}`} className="w-full h-full rounded-full object-cover" alt="User" />
                                 </div>
                             ))}
                             <button className="w-12 h-12 rounded-full border-4 border-white bg-cream-dark text-forest font-bold flex items-center justify-center -ml-4 z-0 hover:bg-lime transition-colors text-xs">
                                 +5
                             </button>
                             <button className="ml-4 w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-lime hover:text-lime hover:bg-lime/5 transition-all">
                                 <UserPlus className="w-5 h-5" />
                             </button>
                        </div>
                     </div>
                     
                     {/* Layout Toggle */}
                     <div>
                        <h4 className="text-sm font-bold text-forest/50 uppercase tracking-wider mb-4">View Toggle</h4>
                        <div className="inline-flex bg-cream p-1 rounded-xl">
                            <button className="p-2 rounded-lg bg-white shadow-sm text-forest"><Layout className="w-4 h-4" /></button>
                            <button className="p-2 rounded-lg text-forest/50 hover:text-forest"><List className="w-4 h-4" /></button>
                            <button className="p-2 rounded-lg text-forest/50 hover:text-forest"><Columns className="w-4 h-4" /></button>
                        </div>
                     </div>
                </div>

           </div>
       </section>
    </div>
  );
};