# Data Layers

JALCHAKRA AI separates planning inputs into clear data layers.

| Layer | Examples | Purpose |
|---|---|---|
| Observation | discharge, rainfall, field notes | represent measured or reported conditions |
| Context | location, season, farm information | provide planning context |
| Derived | health score, water gap, priority score | support decisions |
| Scenario | rainfall/budget/intervention assumptions | test possible futures |
| Impact | recovery, water-security and farm signals | evaluate the planning chain |

## Data Quality Rule

Every derived or scenario value should retain enough context to explain how it was produced. Prototype/demo values should never be presented as field-validated measurements.
