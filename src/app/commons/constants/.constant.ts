/**
 * @deprecated el enum no debe utilizarse
 */
export const InsertPositionArray = <T>(data: Array<T>, index: number, newItem: T) => [
  // part of the array before the specified index
  ...data.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...data.slice(index),
];
