const key = "loggedUser";
export const dataMenager = {
  getLoggedUser() {
    let user;
    const storage = localStorage.getItem(key);

    const content = JSON.parse(storage);

    console.log("content z data-manager", content);
    if (content.logged === true) {
      return (user = {
        nickname: content.nickname,
        email: content.nickname,
      });
    } else {
      user = [];
    }

    return user;
  },
  getAuthGuard() {
    const storage = localStorage.getItem(key);
   //first page loading
    if(storage === null){
      const setLogged = {logged: false};

      localStorage.setItem(key, JSON.stringify(setLogged));
    }


    let content = JSON.parse(storage);

    let loggedInfo = content.logged;
    let guard;

    if (loggedInfo === true) {
      guard = 1;
    } else {
      guard = 0;
    }
    return guard;
  }
};
