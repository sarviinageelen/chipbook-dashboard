# Semianalysis Chipbook Dashboard

A world-class semiconductor supply chain analytics dashboard built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [shadcn/ui](https://ui.shadcn.com/).

![Dashboard Screenshot](https://ui.shadcn.com/og.jpg)

## Features

- **9 Analytics Sections**: Smartphones, Automotive, Memory, PCB, WFE, China, Data Center, Memory IC, and NEV/ICE
- **Interactive Charts**: Line charts, stacked bar charts, and dual-axis charts using Recharts
- **Responsive Design**: Built with shadcn/ui components and Tailwind CSS
- **Sidebar Navigation**: Collapsible sidebar with breadcrumb navigation
- **Data Sources**: All data sources linked to official customs and trade databases

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chipbook-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
.
├── app/
│   ├── components/       # Chart components
│   ├── data/            # Mock data for charts
│   ├── sections/        # Dashboard section components
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main dashboard page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── app-sidebar.tsx  # Sidebar navigation
│   ├── nav-main.tsx     # Navigation menu
│   └── nav-user.tsx     # User menu
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
└── AGENTS.md            # Design system documentation
```

## Data Sources

The dashboard uses data from various official sources:

- [US Census Bureau - International Trade Database](https://www.census.gov/foreign-trade/data/)
- [China Customs](http://www.customs.gov.cn/)
- [Korea Customs Service](https://unipass.customs.go.kr/)
- [Japan Customs](https://www.customs.go.jp/)
- [Taiwan Ministry of Finance](https://web02.mof.gov.tw/)
- [UN Comtrade](https://comtrade.un.org/)
- [FRED - Federal Reserve Economic Data](https://fred.stlouisfed.org/)

## Design System

This project strictly follows the [shadcn/ui](https://ui.shadcn.com/) design system. See `AGENTS.md` for detailed design guidelines.

## License

MIT
