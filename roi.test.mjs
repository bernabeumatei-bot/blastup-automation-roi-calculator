import test from "node:test";
import assert from "node:assert/strict";
import {calculateROI} from "./roi.mjs";
test("calcula beneficio, coste y retorno del primer año", () => {
  const result = calculateROI({people:2,hoursPerWeek:5,hourlyCost:30,recoveryPercent:50,setupCost:1500,monthlyCost:100});
  assert.equal(result.annualHours,260);
  assert.equal(result.annualBenefit,7800);
  assert.equal(result.annualCost,2700);
  assert.equal(result.yearOneNet,5100);
  assert.ok(Math.abs(result.roiPercent - 188.8888889) < 0.001);
});
test("rechaza supuestos inválidos", () => {
  assert.throws(() => calculateROI({people:1,hoursPerWeek:2,hourlyCost:20,recoveryPercent:150,setupCost:0,monthlyCost:0}));
});
