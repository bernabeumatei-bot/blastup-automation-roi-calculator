export function calculateROI(input) {
  const people = Number(input.people);
  const hoursPerWeek = Number(input.hoursPerWeek);
  const hourlyCost = Number(input.hourlyCost);
  const recoveryPercent = Number(input.recoveryPercent);
  const setupCost = Number(input.setupCost);
  const monthlyCost = Number(input.monthlyCost);
  const values = [people, hoursPerWeek, hourlyCost, recoveryPercent, setupCost, monthlyCost];
  if (values.some((value) => !Number.isFinite(value)) ||
      people <= 0 || hoursPerWeek < 0 || hourlyCost < 0 ||
      recoveryPercent < 0 || recoveryPercent > 100 || setupCost < 0 || monthlyCost < 0) {
    throw new Error("Introduce valores válidos y un porcentaje entre 0 y 100.");
  }
  const annualHours = people * hoursPerWeek * 52 * recoveryPercent / 100;
  const annualBenefit = annualHours * hourlyCost;
  const annualCost = setupCost + monthlyCost * 12;
  const yearOneNet = annualBenefit - annualCost;
  const roiPercent = annualCost > 0 ? yearOneNet / annualCost * 100 : null;
  const monthlyMargin = annualBenefit / 12 - monthlyCost;
  const paybackMonths = setupCost > 0 && monthlyMargin > 0 ? setupCost / monthlyMargin : null;
  return {annualHours, annualBenefit, annualCost, yearOneNet, roiPercent, paybackMonths};
}
