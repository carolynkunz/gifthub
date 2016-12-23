const api = {

  getUsers() {
    let headers = new Headers();
    let myInit =
      { method: 'GET',
        headers: headers
      };

    headers.append("Accept", "application/json");
    fetch('http://localhost:8000/api/users', myInit)
      .then((res) => res.json())
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
  },

  // getRecipientsByFirstname(first_name) {
  //
  //   let headers = new Headers();
  //   let myInit =
  //     { method: 'GET',
  //       headers: headers
  //     };
  //
  //   headers.append("Accept", "application/json");
  //
  //   fetch(`http://localhost:8000/recipients/${first_name}`, myInit)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

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
