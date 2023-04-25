export async function attemptLogin(inputEmail, inputPassword) {
  const key = "loggedUser";
  let answer;
  console.log(inputEmail, inputPassword);

  await fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
      const attempt = users.some(function (u) {
        if (u.email === inputEmail && u.password === inputPassword) {
          let content;
          let storage = localStorage.getItem(key);

          content = {
            nickname: u.login,
            email: u.email,
            name: u.name,
            age: u.age,
            logged: true,
          };
          console.log("był w attempt");
          localStorage.setItem(key, JSON.stringify(content));
          return (answer = {
            [u.login]: { email: u.email, name: u.name, age: u.age },
            answer: true,
          });
        } else {
          return (answer = {
            answer: false,
          });
        }
      });
    });
  console.log(answer);
  return answer;
}
