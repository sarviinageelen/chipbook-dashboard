# Semianalysis Chipbook Dashboard - Agent Guide

## Project Overview

A world-class semiconductor supply chain analytics dashboard built with **strict adherence to shadcn/ui** design system.

## Design System: shadcn/ui Only

### ⚠️ CRITICAL: shadcn/ui Exclusive Policy

**ALL UI components MUST come from shadcn/ui.** No custom styling, no external UI libraries.

Allowed sources:
- `@/components/ui/*` - shadcn/ui components
- `https://ui.shadcn.com/blocks` - Official shadcn/ui blocks
- `https://ui.shadcn.com/charts` - Official shadcn/ui charts
- `https://ui.shadcn.com/examples/dashboard` - Dashboard layout reference

### Layout Pattern

Use the official shadcn/ui Dashboard layout structure:

```
<SidebarProvider>
  <AppSidebar />
  <SidebarInset>
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        ...
      </Breadcrumb>
    </header>
    <main className="flex flex-1 flex-col gap-4 p-4">
      {content}
    </main>
  </SidebarInset>
</SidebarProvider>
```

### Theme Configuration

**Base Color:** `neutral` (was slate, changing to neutral for true shadcn/ui default)

**CSS Variables (shadcn/ui Default):**
```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}
```

### Component Usage Guide

#### Cards
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

#### Charts
Use `@/components/ui/chart` with Recharts:
```tsx
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
```

#### Sidebar Navigation
```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
```

### Typography

Use shadcn/ui's default typography scale:
- `text-sm` - Small text, labels
- `text-base` - Body text
- `text-lg` - Large text
- `text-xl` - Headings
- `text-2xl` - Section titles
- `font-medium` - Emphasis
- `font-semibold` - Strong emphasis
- `font-bold` - Headings

### Color Usage

**Strict color palette from CSS variables only:**
- Background: `bg-background` | `bg-card` | `bg-muted`
- Text: `text-foreground` | `text-muted-foreground`
- Borders: `border-border`
- Primary: `bg-primary` | `text-primary-foreground`
- Accent: `bg-accent` | `text-accent-foreground`

**NO custom colors** like `text-slate-100`, `bg-slate-800`, etc.

### Spacing

Use shadcn/ui standard spacing:
- `gap-4` - Standard gap
- `p-4` - Standard padding
- `px-4` - Horizontal padding
- `py-4` - Vertical padding
- `h-16` - Header height

### Icon Library

**Lucide React only:**
```tsx
import { IconName } from "lucide-react";
```

## Skills Reference

When working on this project, reference these installed skills:

1. **shadcn-ui** - Component library guidance
2. **vercel-react-best-practices** - Performance optimization
3. **web-design-guidelines** - UI/UX compliance checking
4. **vercel-composition-patterns** - Component composition patterns
5. **frontend-design** - Frontend design best practices from Anthropic

## File Structure

```
my-app/
├── app/
│   ├── layout.tsx          # Root layout with SidebarProvider
│   ├── page.tsx            # Dashboard page
│   ├── globals.css         # shadcn/ui theme variables
│   └── sections/           # Dashboard sections
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── app-sidebar.tsx     # Sidebar navigation
│   └── chart-components/   # Chart wrappers
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Adding New Components

Always use shadcn CLI:
```bash
npx shadcn add <component-name>
```

Available components: https://ui.shadcn.com/docs/components

## Reference Links

- Dashboard Example: https://ui.shadcn.com/examples/dashboard
- Blocks Library: https://ui.shadcn.com/blocks
- Charts: https://ui.shadcn.com/charts
- Components: https://ui.shadcn.com/docs/components
