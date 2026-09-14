# JALCHAKRA AI — AI Risk Guardrails

JALCHAKRA AI is a decision-support system. Its recommendations should remain explainable, auditable, and subject to local validation before physical intervention.

## Guardrails

1. **Confidence-aware recommendations** — show prediction confidence with every major recommendation.
2. **Human approval** — recharge and crop-allocation actions require field-level validation.
3. **Water-budget protection** — never recommend an allocation that exceeds the modeled sustainable supply.
4. **Uncertainty visibility** — scenario results must expose assumptions and uncertainty ranges.
5. **Fallback mode** — when data quality is poor, prefer conservative rules over unsupported AI predictions.
6. **Audit trail** — store the input signals, model version, recommendation, and final decision.

## Principle

> AI should recommend the safest high-impact option, not simply the most aggressive intervention.

These guardrails make the platform more suitable for real-world deployment in data-sparse tribal regions.
