const api = {
  userSignin(user) {
    let headers = new Headers();
    let myInit =
      { method: 'POST',
        headers: headers,
        user: {username: `${username}`, password: `${password}`}
      };

    // const user = {username: this.state.username, password: this.state.password}

console.log(myInit);

    headers.append("Accept", "application/json");

    fetch('http://localhost:8000/api/token', myInit)
      .then((res) => res.json())
      return res;
  },


  getUsers() {
    let headers = new Headers();
    let myInit =
      { method: 'GET',
        headers: headers
      };

    headers.append("Accept", "application/json");

    fetch('http://localhost:8000/api/users', myInit)
      .then((res) => res.json())
      return res;
  },

  getUsersByUsername(username) {
    username = username.toLowerCase().trim();

    let headers = new Headers();
    let myInit =
      { method: 'GET',
        headers: headers
      };

    headers.append("Accept", "application/json");

    fetch(`http://localhost:8000/api/users/${username}`, myInit)
      .then((res) => res.json())

      return res;
  },

  getRecipients() {
    let headers = new Headers();
    let myInit =
      { method: 'GET',
        headers: headers
      };

    headers.append("Accept", "application/json");
    fetch('http://localhost:8000/recipients', myInit)
      .then((res) => res.json())

      return res;
  },


  getRecipientsByFirstname(first_name) {

    let headers = new Headers();
    let myInit =
      { method: 'GET',
        headers: headers
      };

    headers.append("Accept", "application/json");

    let url = `http://localhost:8000/recipients/${first_name}`;
    let res =
      fetch(url, myInit)
        .then((res) => res.json());

        return res;
  }
};

module.exports = api;
