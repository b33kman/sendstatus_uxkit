import React, { useState } from 'react';
import { Copy, Terminal, FileJson, Bot, Check, Package as PackageIcon, FileCode } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

export const DeveloperResources: React.FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        forest: {
          DEFAULT: '#0f3825',
          light: '#1a4d35',
          dark: '#082015',
        },
        lime: {
          DEFAULT: '#bce455',
          hover: '#a8d13b',
          light: '#dcf598',
        },
        cream: {
          DEFAULT: '#f2f4ef',
          dark: '#e5e7e1',
        },
        status: {
          blue: '#3b82f6',
          orange: '#f97316',
          red: '#ef4444',
          green: '#22c55e',
          pink: '#ec4899',
        }
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    }
  },
  plugins: [],
}`;

  const globalCss = `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-cream text-forest antialiased selection:bg-lime selection:text-forest;
  }
}
`;

  const dependencies = `npm install lucide-react recharts clsx tailwind-merge class-variance-authority`;

  const aiRules = `You are an expert Frontend Engineer specializing in the "SendStatus Organic Modernism" design system.

# Core Principles
- **Organic Modernism**: Fluid layouts, soft corners (\`rounded-3xl\`+), and nature-inspired colors.
- **Forest & Lime**: High contrast. Deep forest green (#0F3825) text on Cream (#F2F4EF) backgrounds. Lime (#BCE455) for primary actions.
- **Accessibility**: All text must meet WCAG AA. Use soft tints for backgrounds (e.g. \`bg-green-100\`) with dark text (e.g. \`text-green-800\`).

# Iconography
- Library: \`lucide-react\`
- Style: Use standard icons. For active states, consider filling or using heavier weights if available, or wrapping in a circle container.

# Component Architecture (Shadcn-like)
All components are in \`components/ui/\`. Imports should be relative (e.g. \`./ui/button\`).

- **Card**: \`<Card padding="default" variant="default">\`.
  - Variants: \`default\` (white bg), \`flat\` (transparent/cream), \`forest\` (dark), \`outline\`.
  - Radius: Always \`rounded-[2rem]\` (handled by component).
- **Button**: \`<Button variant="default" shape="pill">\`.
  - Variants: \`default\` (Lime), \`secondary\` (Forest), \`outline\`, \`ghost\`, \`destructive\`.
  - Shapes: \`pill\` (default), \`rounded\` (rounded-xl).
- **Badge**: \`<Badge variant="success">\`.
  - Variants: \`success\`, \`warning\`, \`info\`, \`waiting\`, \`destructive\`.
- **Inputs**: \`<Input>\` (rounded-xl), \`<Select>\`, \`<Switch>\`, \`<Checkbox>\`.

# Shape Semantics
- **Squircle (rounded-2xl)**: Inanimate objects (Files, Products, Cards, Input fields).
- **Circle (rounded-full)**: Living things (Users), Status, Buttons, Icon containers.

# Tailwind Tokens
- Colors: \`bg-forest\`, \`bg-cream\`, \`bg-lime\`, \`text-forest\`.
- Spacing: generous padding (\`p-6\`, \`p-8\`).
- Shadows: \`shadow-sm\` for cards, \`shadow-lg\` for floating elements.
`;

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const CodeBlock = ({ code, id, language = 'javascript' }: { code: string, id: string, language?: string }) => (
    <div className="relative group">
       <div className="absolute top-3 right-3 z-10">
          <Button 
            size="sm" 
            variant="secondary" 
            onClick={() => copyToClipboard(code, id)}
            className="h-8 w-8 p-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
          >
            {copiedSection === id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </Button>
       </div>
       <div className="bg-forest-dark rounded-xl p-4 overflow-x-auto border border-white/10 font-mono text-xs leading-relaxed text-cream/80 max-h-[400px] no-scrollbar">
         <pre>{code}</pre>
       </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-forest rounded-2xl text-lime">
            <Terminal className="w-6 h-6" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-forest">Developer Resources</h3>
            <p className="text-forest/60">Configuration and guidelines for implementing the design system.</p>
        </div>
      </div>

      <Card padding="default">
        <Tabs defaultValue="config" className="w-full">
            <TabsList className="mb-8 w-full md:w-auto">
                <TabsTrigger value="config" className="gap-2"><FileJson className="w-4 h-4"/> Config</TabsTrigger>
                <TabsTrigger value="styles" className="gap-2"><FileCode className="w-4 h-4"/> Styles</TabsTrigger>
                <TabsTrigger value="ai" className="gap-2"><Bot className="w-4 h-4"/> AI Rules</TabsTrigger>
            </TabsList>

            <TabsContent value="config" className="space-y-8 animate-in fade-in-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-forest mb-2">
                             <FileJson className="w-4 h-4 opacity-50" />
                             <span className="font-bold">tailwind.config.js</span>
                        </div>
                        <CodeBlock code={tailwindConfig} id="tailwind" />
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-center gap-2 text-forest mb-2">
                             <PackageIcon className="w-4 h-4 opacity-50" />
                             <span className="font-bold">Dependencies</span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 font-mono text-xs text-forest">
                            {dependencies}
                        </div>
                        <div className="p-4 bg-blue-50 text-blue-900 rounded-xl text-sm border border-blue-100 leading-relaxed">
                            <strong>Note:</strong> We use <code className="font-bold">lucide-react</code> for all icons. Ensure you have the latest version installed to avoid import errors.
                        </div>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="styles" className="animate-in fade-in-50">
                 <div className="space-y-4">
                        <div className="flex items-center gap-2 text-forest mb-2">
                             <FileCode className="w-4 h-4 opacity-50" />
                             <span className="font-bold">globals.css</span>
                        </div>
                        <CodeBlock code={globalCss} id="css" language="css" />
                </div>
            </TabsContent>

            <TabsContent value="ai" className="animate-in fade-in-50">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-2 text-forest mb-2">
                             <Bot className="w-4 h-4 opacity-50" />
                             <span className="font-bold">.cursorrules / Prompt Context</span>
                        </div>
                        <CodeBlock code={aiRules} id="ai" />
                    </div>
                    <div className="space-y-6">
                        <div className="p-6 bg-lime/10 border border-lime/20 rounded-2xl">
                            <h4 className="font-bold text-forest mb-2">Why use this?</h4>
                            <p className="text-sm text-forest/70 leading-relaxed mb-4">
                                Providing this context to your AI coding assistant ensures it generates components that match the "Organic Modernism" aesthetic immediately, reducing refactoring time.
                            </p>
                            <Button size="sm" onClick={() => copyToClipboard(aiRules, 'ai-btn')} className="w-full">
                                {copiedSection === 'ai-btn' ? 'Copied!' : 'Copy Rules'}
                            </Button>
                        </div>
                    </div>
                 </div>
            </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};