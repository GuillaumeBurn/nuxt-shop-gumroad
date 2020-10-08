export function filterProducts(filter, products) {
  let filteredList = [...products];

  const filtered = filteredList.filter(product => product.subscription_duration === null);
  filteredList = filtered;

  // Filter category
  if(filter.category !== "") {
    const filtered = filteredList.filter(product => product.custom_summary === filter.category);
    filteredList = filtered;
  }

  // Filter status
  if (filter.pricerange <= 100) {
    const filtered = filteredList.filter(
      product => product.price / 100 <= filter.pricerange
    );
    filteredList = filtered;
  }

  // Search
  if (filter.search !== "") {
    const searchList = [];
    const searchTerm = filter.search.toLowerCase();
    for (let i = 0; i < filteredList.length; i++) {
      if (
        filteredList[i].name !== null &&
        filteredList[i].name.toLowerCase().includes(searchTerm)
      ) {
        searchList.push(filteredList[i]);
      }
    }
    filteredList = searchList;
  }

  return filteredList;
}

export function orderProducts(order, products) {
  const orderedList = [...products];

  switch (order) {
    case '2':
		orderedList.sort(function(a, b) {
			return parseFloat(a.price) - parseFloat(b.price)
		});
      break;
    case '3':
		orderedList.sort(function(a, b) {
			return parseFloat(b.price) - parseFloat(a.price)
		});
      break;
    case '4':
		orderedList.sort(function(a, b) {
			return a.sales_count > b.sales_count ? -1 : 1;
		});
      break;
  }
  return orderedList;
}
