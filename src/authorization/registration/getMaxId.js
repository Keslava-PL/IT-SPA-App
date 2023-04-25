export async function getMaxId() {
  
  let id;

  await fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
      id = Math.max.apply(
        Math,
        users.map(function (e) {
          return e.id;
        })
      );

      return id;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  return id;
}
