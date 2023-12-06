export function roundToStep(value: number, step: number): number {
  return step === 1 
    ? Math.round(value)
    : Math.round(value / step) * step;
}