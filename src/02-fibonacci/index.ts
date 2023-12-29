export function fibonacci(n: number): number[] {
  const niza: number[] = []

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      niza.push(i)
    } else if (i == 1) {
      niza.push(1)
    } else {
      niza.push(niza[i - 1] + niza[i - 2])
    }
  }

  return niza
}
