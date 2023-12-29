export function getPascalsTriangleRow(rowIndex: number): number[] {
  const pascalArray: number[][] = []

  for (let i = 0; i <= rowIndex; i++) {
    if (i == 0) {
      pascalArray.push([1])
    } else if (i == 1) {
      pascalArray.push([1, 1])
    } else {
      const tempArr: number[] = []
      tempArr.push(1)
      const prevArr: number[] = pascalArray[i - 1]
      for (let j = 0; j < prevArr.length - 1; j++) {
        tempArr.push(prevArr[j] + prevArr[j + 1])
      }
      tempArr.push(1)
      pascalArray.push(tempArr)
    }
  }

  return pascalArray[rowIndex]
}
