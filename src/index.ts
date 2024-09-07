export const omit = <T, K extends Array<keyof T>>(obj: T, keys: K) => {
  const newObj = { ...obj }
  keys.forEach((key) => {
    delete newObj[key]
  })
  return newObj as Omit<T, K[number]>
}

export const pick = <T, K extends Array<keyof T>>(obj: T, keys: K) => {
  const newObj: any = {}
  keys.forEach((key) => {
    newObj[key] = obj[key]
  })
  return newObj as Pick<T, K[number]>
}
