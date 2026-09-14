# Reverse Farm Planner

The Reverse Farm Planner starts with farm requirements and works backward from available water.

## Decision Sequence

**Farm context → seasonal water budget → feasible crop set → allocation signal → expected resilience**

The planner is intended to help users avoid treating revived water as an unlimited resource. It should respect the available seasonal supply and clearly communicate when a plan depends on uncertain or simulated values.

## Expected Inputs

- Seasonal water availability
- Farm area and local context
- Crop water requirements
- Planning period
- Scenario assumptions

## Output

A ranked, explainable planning recommendation that can be reviewed alongside the spring-revival and recharge plan.
