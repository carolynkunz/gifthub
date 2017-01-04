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

    fetch('https://carolynkunz-gifthub.herokuapp.com/api/token', myInit)
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

    fetch('https://carolynkunz-gifthub.herokuapp.com/api/users', myInit)
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

    fetch(`https://carolynkunz-gifthub.herokuapp.com/api/users/${username}`, myInit)
      .then((res) => res.json())

      return res;
  },

  getUserRecipients() {
    let headers = new Headers();
    let myInit =
      { method: 'GET',
        headers: headers
      };

    headers.append("Accept", "application/json");
    fetch(`https://carolynkunz-gifthub.herokuapp.com/user/recipients/${userId}`, myInit)
      .then((res) => res.json())

      return res;
  },

  getRecipients(token) {
    let headers = new Headers();
    let myInit =
      { method: 'GET',
        headers: headers
      };
    headers.append('Authorization', `Bearer ${this.state.token}`);
    headers.append("Accept", "application/json");
    fetch('https://carolynkunz-gifthub.herokuapp.com/recipients', myInit)
      .then((res) => res.json())

      return res;
  },

  getRecipientsById(id) {

    let headers = new Headers();
    let myInit =
      { method: 'GET',
        headers: headers
      };

    headers.append("Accept", "application/json");

    let url = `https://carolynkunz-gifthub.herokuapp.com/recipients/${id}`;
    let res =
      fetch(url, myInit)
        .then((res) => {
          return res.json()
        });

        return res;
  },


  getRecipientsByFirstname(first_name, token) {

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    let myInit =
      { method: 'GET',
        headers: headers
      };

    headers.append("Accept", "application/json");

    let url = `https://carolynkunz-gifthub.herokuapp.com/recipients/${first_name}`;
    let res =
      fetch(url, myInit)
        .then((res) => res.json());

        return res;
  }
};

module.exports = api;
