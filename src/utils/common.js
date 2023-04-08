export default function filter(searchText, restaurantlist) {
  let filteredData;
  if (searchText === "") {
    filteredData = [...restaurantlist];
  } else {
    filteredData = restaurantlist.filter((res) => {
      if (
        res?.data?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return res;
      }
    });
  }
  return filteredData;
}
