# 🌊 JALCHAKRA AI

### **AI-Based Spring Revival & Recharge Planning for Tribal Areas**

<p align="center">
  <b>Spring → Recharge → Water Security → Farm Planning → Impact</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/SIH%202026-SIH26240-0ea5e9?style=for-the-badge" alt="SIH 2026" />
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Leaflet-Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=22&pause=1200&color=0EA5E9&center=true&vCenter=true&width=700&lines=Spring-to-Farm+Water+Intelligence;Revive+springs+with+data-driven+planning;Turn+water+insights+into+farm+decisions" alt="Typing animation" />
</p>

---

## 💧 What is JALCHAKRA AI?

JALCHAKRA AI is a **software-first water intelligence and planning platform** for spring revival and recharge planning in tribal and rural regions. Instead of treating a spring as an isolated water source, the platform connects the complete planning chain:

**Spring health → recharge zone → water debt → interventions → future scenarios → farm planning → measurable impact**

The prototype is designed for a hackathon setting: it demonstrates the complete decision workflow while keeping live field/IoT integrations and production geospatial datasets as future extensions.

## ✨ Core Innovation

| Module | What it does |
|---|---|
| 🧬 **Spring DNA** | Creates a structured health profile for each spring from observations and indicators. |
| 🗺️ **Recharge Map** | Prioritizes recharge/intervention zones using location-aware planning signals. |
| 💧 **Water Debt** | Compares seasonal demand and available supply to expose water stress. |
| 🌾 **Reverse Farm Planner** | Starts with farm needs and works backward to water availability and feasible crop choices. |
| 🔮 **Future Simulator** | Stress-tests revival scenarios across different rainfall, budget and time assumptions. |
| ⚙️ **Intervention Optimizer** | Ranks intervention strategies against planning constraints. |
| 🔗 **Impact Chain** | Shows how interventions can flow from spring recovery to farm resilience. |
| 📡 **Monitoring** | Tracks observations, discharge/rainfall signals and validation feedback. |
| 📊 **Reports** | Builds a decision-ready planning summary for field and review teams. |

## 🧠 End-to-End System Flow

```mermaid
flowchart LR
    A[Field Observations] --> B[Spring DNA]
    B --> C[Recharge Intelligence]
    C --> D[Water Debt]
    D --> E[Future Simulator]
    E --> F[Intervention Optimizer]
    F --> G[Reverse Farm Planner]
    G --> H[Impact Chain]
    H --> I[Monitoring & Reports]
    I -. feedback .-> B
```

## 🏆 Why this is different

Most water dashboards stop at **measurement and visualization**. JALCHAKRA AI is structured as a **decision loop**:

1. Identify the spring's current health.
2. Locate and rank recharge opportunities.
3. Quantify water stress as a demand-vs-supply gap.
4. Test intervention scenarios before field deployment.
5. Optimize the intervention package.
6. Convert expected water availability into farm decisions.
7. Track impact and feed observations back into the planning cycle.

> **Don't only measure water. Understand its journey.**

## 🎯 SIH 2026 Alignment

- **Organization:** Ministry of Tribal Affairs
- **Problem ID:** **SIH26240**
- **Problem:** AI-Based Spring Revival and Recharge Planning for Tribal Areas
- **Category:** Software
- **Theme:** Agriculture, FoodTech & Rural Development

## 🖥️ Demo Journey

For a hackathon presentation, the recommended click-through is:

```text
Landing Page
   ↓
Dashboard / Spring DNA
   ↓
Recharge Map
   ↓
Water Debt
   ↓
Future Simulator
   ↓
Intervention Optimizer
   ↓
Reverse Farm Planner
   ↓
Impact Chain
   ↓
Monitoring
   ↓
Reports
```

This tells one continuous story instead of presenting the modules as disconnected pages.

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **UI:** Tailwind CSS, Framer Motion, Lucide React
- **Maps:** Leaflet / React Leaflet
- **Charts:** Recharts
- **Data layer:** Drizzle ORM
- **Local development:** PGlite-compatible setup
- **Database architecture:** PostgreSQL-compatible

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/sakshi01-art/jalchakra_ai.git
cd jalchakra_ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Copy `.env.example` to your local environment file and replace placeholder values with your own local configuration.

```bash
# Windows PowerShell
Copy-Item .env.example .env.local

# macOS / Linux
cp .env.example .env.local
```

### 4. Start development server

```bash
npm run dev
```

Open the local URL printed by Next.js.

> **Prototype note:** Demo data and simulated projections are intended for hackathon demonstration. Live field/IoT ingestion, production geospatial layers and model calibration are roadmap items.

## 📁 Project Structure

```text
src/
├── app/
│   ├── (app)/
│   │   ├── farm-planner/
│   │   ├── recharge-map/
│   │   ├── water-debt/
│   │   ├── simulator/
│   │   ├── optimizer/
│   │   ├── impact-chain/
│   │   ├── monitoring/
│   │   ├── reports/
│   │   └── settings/
│   ├── dashboard/
│   ├── spring-dna/
│   └── api/
├── components/
├── db/
└── lib/
```

## 🔌 API Surface

The application includes route handlers for the main planning workflow, including:

- `/api/springs` — spring discovery/selection
- `/api/health` — health signals
- `/api/observations` — field observations
- `/api/recharge-map` — recharge planning data
- `/api/water-debt` — demand/supply stress
- `/api/simulate` — scenario projections
- `/api/optimize` — intervention optimization
- `/api/farm-planner` — farm planning calculations
- `/api/dashboard` — dashboard data

## 🔐 Security & Configuration

Secrets and local environment files are intentionally excluded from version control. Use `.env.example` as the safe configuration template. Never commit `.env.local`, API keys, database credentials or other private secrets.

## 🌱 Roadmap

- [x] Spring health dashboard
- [x] Spring DNA profiles
- [x] Recharge map foundation
- [x] Water debt module
- [x] Scenario simulation foundation
- [x] Intervention optimization foundation
- [x] Reverse farm planning workflow
- [x] Impact-chain visualization
- [x] Monitoring workflow
- [x] Decision-ready report builder
- [ ] Connect to live field/IoT observations
- [ ] Add production-grade geospatial datasets
- [ ] Calibrate models with field observations
- [ ] Add district-level deployment and role-based access

---

<p align="center">
  <b>🌊 JALCHAKRA AI</b><br/>
  <sub>Building a smarter bridge from spring revival to farm resilience.</sub>
</p>
