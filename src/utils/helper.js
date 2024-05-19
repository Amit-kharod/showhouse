export const getFilteredShow = (ShowsData, filters) => {
  const { searchInput, sortByInput, ratingInput } = filters;

  // applying search filter
  let filteredShows = ShowsData.filter((show) =>
    show.Name.toLowerCase().includes(searchInput)
  );

  // applying sort filter
  filteredShows.sort((a, b) => {
    if (sortByInput === "oldest") {
      return (
        Number(a.Period.split("-")[0].slice(1)) >
        Number(b.Period.split("-")[0].slice(1))
      );
    } else if (sortByInput === "newest") {
      return (
        Number(a.Period.split("-")[0].slice(1)) <
        Number(b.Period.split("-")[0].slice(1))
      );
    } else if (sortByInput === "rating") {
      return a.Rating < b.Rating;
    }
    return;
  });

  // applyting rating filter
  if (ratingInput !== "all") {
    filteredShows = filteredShows.filter(
      (show) => show.Rating > Number(ratingInput)
    );
  }

  return filteredShows;
};
