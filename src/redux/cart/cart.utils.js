export const addItem = (items, addedItem) => {
  //if the items is already in place in the cart
  const existingItem = items.find((item) => item._id === addedItem._id);

  //add the number of pcs to the cart
  if (existingItem) {
    return items.map((item) =>
      item._id === addedItem._id ? {...item, pcs: item.pcs + 1} : item
    );
  }

  //init the item and add the number of pcs available
  return [...items, {...addedItem, pcs: 1}];
};
