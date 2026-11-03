"use client";

export default function CodeNewspaperBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        userSelect: "none",
        opacity: 0.18,
      }}
      aria-hidden="true"
    >
      {/* VIGNETTE MASK AGAR TENGAH TETAP BERSIH & FOKUS PADA FOTO & NAMA */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 55% at 50% 42%, rgba(7, 9, 14, 0.98) 0%, rgba(7, 9, 14, 0.6) 50%, rgba(7, 9, 14, 0.1) 100%)",
          zIndex: 2,
        }}
      />

      {/* NEWSPAPER INNER CONTAINER */}
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "24px 32px",
          fontFamily: "'Courier New', Courier, monospace, 'Google Sans', monospace",
          fontSize: "0.72rem",
          lineHeight: 1.45,
          color: "#94a3b8",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* NEWSPAPER TOP HEADER BANNER */}
        <div
          style={{
            borderBottom: "2px solid rgba(255, 255, 255, 0.35)",
            borderTop: "2px solid rgba(255, 255, 255, 0.35)",
            padding: "8px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontSize: "0.75rem",
            fontWeight: 800,
            color: "#f8fafc",
          }}
        >
          <span>THE DAILY CODE CHRONICLE</span>
          <span style={{ fontSize: "0.68rem", opacity: 0.75 }}>
            VOL. XXVI NO. 11 · CIKARANG INDUSTRIAL HUB · ASTRA OTOPARTS ARCHITECTURE
          </span>
          <span>EDITION: DEV // 2026</span>
        </div>

        {/* SUB-HEADER / EDITORIAL LINE */}
        <div
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
            paddingBottom: "6px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            opacity: 0.8,
            color: "#38bdf8",
          }}
        >
          <span>BREAKING: 40 PRODUCTION LINES DIGITIZED</span>
          <span>ISO 10816-3 VIBRATION STANDARD COMPLIANCE: 100%</span>
          <span>CAPEX RESOLUTION: Rp 1.000.000.000 APPROVED</span>
        </div>

        {/* 4-COLUMN NEWSPAPER CODING GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            flex: 1,
            overflow: "hidden",
          }}
        >
          {/* COLUMN 1: TELEMETRY & JINGDUAN 630T SENSORS */}
          <div
            style={{
              borderRight: "1px solid rgba(255, 255, 255, 0.15)",
              paddingRight: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 900,
                color: "#f97316",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(249, 115, 22, 0.3)",
                paddingBottom: 4,
              }}
            >
              [COL 1] JINGDUAN_630T.TS
            </div>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
{`// IoT Telemetry Stream v3.4
import { MQTTClient } from 'astra/iot';
import { ISO_VIB } from 'standards/iso';

export class JingduanWatcher {
  private client: MQTTClient;
  private readonly ISO_THRESHOLD = 4.5; // mm/s

  constructor(brokerUri: string) {
    this.client = new MQTTClient(brokerUri);
    this.initTelemetryHooks();
  }

  private initTelemetryHooks() {
    this.client.subscribe('mtm/line3/630t/sensors', (data) => {
      const { temp_bushing, rms_vib_z } = data;
      if (rms_vib_z >= this.ISO_THRESHOLD) {
        this.emitAlarm({
          level: 'CRITICAL',
          axis: 'CROWN_FRAME_Z',
          action: 'MACHINE_INTERLOCK',
          timestamp: Date.now()
        });
      }
    });
  }
}`}
            </pre>
            <div style={{ borderTop: "1px dashed rgba(255,255,255,0.15)", paddingTop: 6, fontSize: "0.65rem" }}>
              {"/* EDITORIAL: Bearing & bushing degradation monitored via multi-axis FFT spectral analysis with 99.8% precision. */"}
            </div>
          </div>

          {/* COLUMN 2: ANDON QUALITY 40-LINE CLIENT */}
          <div
            style={{
              borderRight: "1px solid rgba(255, 255, 255, 0.15)",
              paddingRight: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 900,
                color: "#38bdf8",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(56, 189, 248, 0.3)",
                paddingBottom: 4,
              }}
            >
              [COL 2] ANDON_QC_CLIENT.RS
            </div>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
{`// Real-time Shopfloor Dispatcher
pub struct LineMonitor {
    active_lines: u32,
    running: u32,
    idle: u32,
    stopped: u32,
}

impl LineMonitor {
    pub fn poll_active_lines() -> Self {
        Self {
            active_lines: 40,
            running: 24,
            idle: 10,
            stopped: 6,
        }
    }

    pub fn audit_defects(&self) -> u32 {
        let total_reject: u32 = 258;
        if total_reject > 200 {
            trigger_leader_call(
                "MPI/Visual/Assy",
                "IMMEDIATE_ACTION"
            );
        }
        total_reject
    }
}`}
            </pre>
            <div style={{ borderTop: "1px dashed rgba(255,255,255,0.15)", paddingTop: 6, fontSize: "0.65rem" }}>
              {"/* DISPATCH: Shopfloor operators synchronize instant breakdown notifications via WebSocket broadcast. */"}
            </div>
          </div>

          {/* COLUMN 3: CAPEX & BODR WORKFLOW MATRIX */}
          <div
            style={{
              borderRight: "1px solid rgba(255, 255, 255, 0.15)",
              paddingRight: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 900,
                color: "#22c55e",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(34, 197, 94, 0.3)",
                paddingBottom: 4,
              }}
            >
              [COL 3] CAPEX_BODR_MODEL.PY
            </div>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
{`# Financial Feasibility & ROI Model
class CapexBudgetEngine:
    def __init__(self, budget_cap=1_000_000_000):
        self.budget_cap = budget_cap
        self.matrix = ["SectionHead", "DeptHead", "DivHead", "BOD"]

    def compute_payback(self, capex_cost, annual_savings):
        roi = (annual_savings / capex_cost) * 100
        payback = capex_cost / annual_savings
        return {
            "roi_percent": round(roi, 2),
            "payback_years": round(payback, 1),
            "status": "APPROVED_BY_BODR"
        }

engine = CapexBudgetEngine()
res = engine.compute_payback(1e9, 4.8e8)
print("Investment Status:", res["status"])`}
            </pre>
            <div style={{ borderTop: "1px dashed rgba(255,255,255,0.15)", paddingTop: 6, fontSize: "0.65rem" }}>
              {"/* FINANCE: Capital Expenditure authorization workflow with automated multi-tier matrix routing. */"}
            </div>
          </div>

          {/* COLUMN 4: QUALITY CLAIM 8D & ROOT CAUSE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 900,
                color: "#c084fc",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(192, 132, 252, 0.3)",
                paddingBottom: 4,
              }}
            >
              [COL 4] QUALITY_CLAIM_8D.SQL
            </div>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
{`-- Customer Complaint Registry
SELECT 
    c.no_register,
    c.customer_name,
    c.part_name,
    c.defect_type,
    c.claim_value_idr,
    r.status_approval
FROM quality_claims c
JOIN approval_matrix r ON c.id = r.claim_id
WHERE c.customer_name IN ('AHM', 'TOYOTA', 'ADM', 'HINO')
  AND c.status = 'CLOSED_8D_VERIFIED'
ORDER BY c.claim_value_idr DESC;

-- TOTAL RECOVERY: Rp 215.700.000
-- SLA RESOLUTION: < 48 HOURS`}
            </pre>
            <div style={{ borderTop: "1px dashed rgba(255,255,255,0.15)", paddingTop: 6, fontSize: "0.65rem" }}>
              {"/* SUMMARY: 8D defect resolution with FMEA/ECN documentation and Confirmation Letter dispatch. */"}
            </div>
          </div>
        </div>

        {/* NEWSPAPER BOTTOM FOOTER BAR */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.25)",
            paddingTop: "6px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            opacity: 0.75,
            color: "#94a3b8",
          }}
        >
          <span>TYPESCRIPT · PYTHON · NEXT.JS · MQTT · POSTGRESQL · ESP32</span>
          <span>PRINTED & DEPLOYED AUTOMATICALLY AT PRODUCTION RUNTIME</span>
          <span>© 2026 RICKY ALFIAN SAPUTRA ARCHIVES</span>
        </div>
      </div>
    </div>
  );
}
