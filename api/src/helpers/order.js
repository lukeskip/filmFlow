module.exports = (type, order, movies) => {
  if (order === "asc") {
    switch (type) {
      case "Name":
        return movies.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Duration":
        return movies.sort((a, b) => a.duration - b.duration);
      default:
        return movies;
    }
  } else if (order === "desc") {
    switch (type) {
      case "Name":
        return movies.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Duration":
        return movies.sort((a, b) => b.duration - a.duration);
      default:
        return movies;
    }
  }
};
