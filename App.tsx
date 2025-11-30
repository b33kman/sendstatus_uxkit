import React from 'react';
import { KitSection } from './components/KitSection';
import { IconLibrary } from './components/IconLibrary';
import { DemoDashboard } from './components/DemoDashboard';
import { WireframeAdaptation } from './components/WireframeAdaptation';
import { EnterpriseComponents } from './components/EnterpriseComponents';
import { UniversalComponents } from './components/UniversalComponents';
import { DesktopStructure } from './components/DesktopStructure';
import { MobileComponents } from './components/MobileComponents';
import { DeveloperResources } from './components/DeveloperResources';
import { ArchitectureDemo } from './components/ArchitectureDemo';
import { ProfileSettingsDemo } from './components/ProfileSettingsDemo';
import { Badge } from './components/ui/badge';

// Helper components for the palette section
const ColorCard = ({ name, hex, tw, usage }: { name: string, hex: string, tw: string, usage: string }) => (
  <div className="flex flex-col gap-3 group">
    <div className={`h-28 rounded-2xl shadow-sm border border-black/5 flex items-end p-4 transition-transform group-hover:scale-[1.02] ${tw}`}>
      <span className="font-mono text-xs opacity-90 font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">{hex}</span>
    </div>
    <div>
      <p className="font-bold text-forest">{name}</p>
      <p className="text-xs text-forest/60 leading-relaxed mt-1">{usage}</p>
    </div>
  </div>
);

const StatusCard = ({ name, hex, tw, usage }: { name: string, hex: string, tw: string, usage: string }) => (
  <div className="space-y-2 group">
    <div className={`h-20 rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-white font-mono text-xs font-bold transition-transform group-hover:scale-105 ${tw}`}>
      {hex}
    </div>
    <div>
      <p className="font-bold text-xs text-forest">{name}</p>
      <p className="text-[10px] text-forest/50">{usage}</p>
    </div>
  </div>
);

const TypographyRow = ({ role, size, weight, sample, usage }: { role: string, size: string, weight: string, sample: React.ReactNode, usage: string }) => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-gray-100 last:border-0 items-baseline">
        <div className="md:col-span-3">
            <p className="font-bold text-forest">{role}</p>
            <p className="text-xs font-mono text-forest/40 mt-1">{size} • {weight}</p>
            <p className="text-xs text-forest/60 mt-2 pr-4">{usage}</p>
        </div>
        <div className="md:col-span-9">
            {sample}
        </div>
    </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-[1600px] mx-auto">
      
      {/* Header */}
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-forest mb-6 tracking-tight">
          SendStatus <span className="text-lime">UX Kit</span>
        </h1>
        <p className="text-xl text-forest/60 max-w-2xl mx-auto leading-relaxed">
          A comprehensive design system for the SendStatus post-purchase platform. 
          Defining "Organic Modernism" through deep forest tones, energetic accents, and fluid layouts.
        </p>
      </header>

      {/* 01. Identity */}
      <KitSection title="01. Identity & Palette" description="A deep forest green provides a sophisticated foundation, offset by a high-energy lime accent for primary actions. The palette is designed for high contrast and accessibility while maintaining a distinct 'organic' feel.">
        <div className="space-y-16">
            
            {/* Primary: Forest */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Primary: Forest Green</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ColorCard 
                        name="Forest Deep (Default)" 
                        hex="#0F3825" 
                        tw="bg-forest text-white" 
                        usage="The primary brand color. Used for main backgrounds, body text, and primary navigation elements." 
                    />
                    <ColorCard 
                        name="Forest Light" 
                        hex="#1A4D35" 
                        tw="bg-forest-light text-white" 
                        usage="Used for hover states on dark buttons and active states in navigation menus." 
                    />
                    <ColorCard 
                        name="Forest Dark" 
                        hex="#082015" 
                        tw="bg-forest-dark text-white" 
                        usage="Used for sidebars, footer backgrounds, and areas requiring maximum contrast." 
                    />
                </div>
            </div>

            {/* Accent: Lime */}
            <div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Accent: Electric Lime</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ColorCard 
                        name="Lime (Default)" 
                        hex="#BCE455" 
                        tw="bg-lime text-forest" 
                        usage="Primary action buttons (CTAs), active toggles, and key highlight indicators." 
                    />
                    <ColorCard 
                        name="Lime Hover" 
                        hex="#A8D13B" 
                        tw="bg-lime-hover text-forest" 
                        usage="The hover state for all Lime-colored interactive elements." 
                    />
                    <ColorCard 
                        name="Lime Light" 
                        hex="#DCF598" 
                        tw="bg-lime-light text-forest" 
                        usage="Backgrounds for secondary alerts, decorative blobs, and secondary data series in charts." 
                    />
                 </div>
            </div>

            {/* Neutrals */}
             <div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Neutrals & Surfaces</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ColorCard 
                        name="Cream (Default)" 
                        hex="#F2F4EF" 
                        tw="bg-cream text-forest" 
                        usage="The default page background color. Creates a softer, more organic feel than pure white." 
                    />
                    <ColorCard 
                        name="Cream Dark" 
                        hex="#E5E7E1" 
                        tw="bg-cream-dark text-forest" 
                        usage="Used for borders, dividers, and background for secondary buttons." 
                    />
                    <ColorCard 
                        name="Pure White" 
                        hex="#FFFFFF" 
                        tw="bg-white text-forest" 
                        usage="Card surfaces, input fields, and modals to create depth against the Cream background." 
                    />
                 </div>
            </div>

            {/* Semantic Status */}
             <div>
                 <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Semantic Status</h3>
                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <StatusCard name="Blue (Transit)" hex="#3B82F6" tw="bg-status-blue" usage="In Transit, Info, Processing" />
                    <StatusCard name="Green (Success)" hex="#22c55e" tw="bg-status-green" usage="Delivered, Success, Complete" />
                    <StatusCard name="Orange (Warn)" hex="#f97316" tw="bg-status-orange" usage="Pending, Warning, Action Needed" />
                    <StatusCard name="Red (Error)" hex="#ef4444" tw="bg-status-red" usage="Exception, Error, Overdue" />
                    <StatusCard name="Pink (Wait)" hex="#ec4899" tw="bg-status-pink" usage="Waiting, Promotional, Tips" />
                 </div>
            </div>

        </div>
      </KitSection>

      {/* 02. Typography */}
      <KitSection title="02. Typography" description="We use 'Plus Jakarta Sans', a geometric sans-serif that balances modern approachability with high legibility. Text colors are strictly controlled to ensure hierarchy.">
        <div className="space-y-2">
            
            <TypographyRow 
                role="Display Heading" 
                size="60px (5xl)" 
                weight="Bold (700)" 
                usage="Landing page headers and major hero sections."
                sample={<h1 className="text-5xl md:text-6xl font-bold text-forest tracking-tight">SendStatus</h1>}
            />

            <TypographyRow 
                role="Page Heading (H1)" 
                size="36px (4xl)" 
                weight="Bold (700)" 
                usage="Main dashboard page titles."
                sample={<h1 className="text-4xl font-bold text-forest">Shipment Overview</h1>}
            />

            <TypographyRow 
                role="Section Heading (H2)" 
                size="24px (2xl)" 
                weight="Bold (700)" 
                usage="Card titles and major section dividers."
                sample={<h2 className="text-2xl font-bold text-forest">Recent Orders</h2>}
            />

            <TypographyRow 
                role="Subsection (H3)" 
                size="18px (lg)" 
                weight="Bold (700)" 
                usage="Sub-sections within cards or modal titles."
                sample={<h3 className="text-lg font-bold text-forest">Customer Details</h3>}
            />

            <TypographyRow 
                role="Body Regular" 
                size="16px (base)" 
                weight="Regular (400)" 
                usage="Default body text. Use 'text-forest' for standard readability."
                sample={<p className="text-base text-forest leading-relaxed">Your shipment is currently in transit to the destination facility. Please allow 24 hours for tracking updates.</p>}
            />

            <TypographyRow 
                role="Secondary / Caption" 
                size="14px (sm)" 
                weight="Medium (500)" 
                usage="Use 'text-forest/60' for descriptions, meta-data, and helper text."
                sample={<p className="text-sm font-medium text-forest/60">Last updated: Oct 24, 2024 • via FedEx Ground</p>}
            />

             <TypographyRow 
                role="Disabled / Placeholder" 
                size="14px (sm)" 
                weight="Medium (500)" 
                usage="Use 'text-forest/40' for placeholder text or disabled states."
                sample={<p className="text-sm font-medium text-forest/40">Enter tracking number...</p>}
            />

        </div>
      </KitSection>

      {/* 03. Iconography */}
      <KitSection title="03. Iconography" description="Filled and thick-stroke icons provide substantial weight, making them legible against the soft card backgrounds.">
        <IconLibrary />
      </KitSection>

      {/* 04. Buttons */}
      <KitSection title="04. Buttons & Actions" description="Primary actions are high-contrast Lime. Secondary actions recede into the Forest or White backgrounds. Buttons use full rounded corners (pill shape).">
        <div className="flex flex-col gap-8">
          
          <div className="flex flex-wrap gap-6 items-center">
            <div className="space-y-2 text-center">
              <button className="bg-lime text-forest px-8 py-3 rounded-full font-bold shadow-lg hover:brightness-105 transition-all">
                Primary Action
              </button>
              <p className="text-xs font-mono text-gray-400">Default</p>
            </div>
             <div className="space-y-2 text-center">
              <button className="bg-lime text-forest px-8 py-3 rounded-full font-bold shadow-lg opacity-50 cursor-not-allowed">
                Disabled
              </button>
              <p className="text-xs font-mono text-gray-400">Disabled</p>
            </div>
            <div className="space-y-2 text-center">
              <button className="bg-forest text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                Secondary Dark
              </button>
              <p className="text-xs font-mono text-gray-400">Dark</p>
            </div>
             <div className="space-y-2 text-center">
              <button className="bg-white border border-gray-200 text-forest px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all">
                Tertiary / Outline
              </button>
              <p className="text-xs font-mono text-gray-400">Outline</p>
            </div>
            <div className="space-y-2 text-center">
              <button className="text-forest underline font-bold hover:text-lime transition-all">
                Text Link
              </button>
              <p className="text-xs font-mono text-gray-400">Link</p>
            </div>
          </div>

          <div className="h-px bg-gray-100 w-full"></div>

          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Status Indicators</h3>
          <div className="flex flex-wrap gap-3">
               <Badge variant="success">Delivered</Badge>
               <Badge variant="warning">Pending</Badge>
               <Badge variant="info">In Transit</Badge>
               <Badge variant="destructive">Exception</Badge>
               <Badge variant="waiting">Waiting</Badge>
          </div>
        </div>
      </KitSection>

      {/* 05. Live Dashboard Demo */}
      <KitSection title="05. Live Dashboard Demo" description="A fully interactive example demonstrating how the components come together in a production-ready dashboard interface.">
        <DemoDashboard />
      </KitSection>

      {/* 06. Wireframe Adaptation */}
      <KitSection title="06. Wireframe Adaptation" description="Direct translation of high-fidelity wireframes into the SendStatus design system, showcasing real-world component usage.">
        <WireframeAdaptation />
      </KitSection>

      {/* 07. Enterprise Components */}
      <KitSection title="07. Enterprise Components" description="Complex components designed for heavy-duty applications including navigation, data entry, and file management.">
        <EnterpriseComponents />
      </KitSection>

      {/* 08. Universal Components */}
      <KitSection title="08. Universal Components" description="A collection of versatile UI elements that can be used across various contexts, from marketing pages to complex dashboards.">
        <UniversalComponents />
      </KitSection>

      {/* 09. Desktop Structure */}
      <KitSection title="09. Desktop Structure" description="Layout patterns optimized for larger screens, focusing on information density and efficient navigation.">
        <DesktopStructure />
      </KitSection>

      {/* 10. Mobile Components */}
      <KitSection title="10. Mobile Components" description="Responsive adaptations of key interface elements, ensuring a seamless experience on smaller touch devices.">
        <MobileComponents />
      </KitSection>

      {/* 11. Architecture Demo */}
      <KitSection title="11. Architecture Demo (New Primitives)" description="Demonstration of the new standard component primitives including Buttons, Inputs, Checkboxes, Switches, Tabs, and Cards using the shadcn/ui-inspired architecture.">
        <ArchitectureDemo />
      </KitSection>

      {/* 12. Profile & Settings */}
      <KitSection title="12. Profile & Settings" description="A comprehensive profile management interface built using the new atomic primitives (Label, Select, Tabs, etc.) to demonstrate form composition.">
        <ProfileSettingsDemo />
      </KitSection>

      {/* 13. Developer Resources */}
      <KitSection title="13. Developer Resources" description="Configuration files and setup guides to help developers implement the SendStatus design system in their own projects.">
        <DeveloperResources />
      </KitSection>

    </div>
  );
};

export default App;