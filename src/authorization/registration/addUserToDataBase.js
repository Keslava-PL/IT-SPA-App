export async function addUserToDataBase(inputEmail, nick, password, maxId) {
  let answer;
  const user = {
    id: maxId + 1,
    login: nick,
    password: password,
    email: inputEmail,
    name: "",
    age: "",
  };

  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("SUCCESS:", "Zarejestrowano!");
      answer = true;
    })
    .catch((error) => {
      console.error("Error:", error);
      answer = false;
    });
}
