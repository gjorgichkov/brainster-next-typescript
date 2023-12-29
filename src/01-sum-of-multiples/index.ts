export function sumOfMultiples(multiple: number, max: number): number {
  if (multiple < max) {
    let suma: number = 0
    let i: number = 1
    while (multiple * i <= max) {
      suma += multiple * i
      i += 1
    }
    return suma
  } else {
    return 0
  }
}
