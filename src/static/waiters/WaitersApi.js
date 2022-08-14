class WaitersApi {
  static URL = 'https://6207d30f22c9e90017d32f1f.mockapi.io/api/todo/';


  static getList() {
    return fetch(this.URL).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Can not get list');
    });
  }

  static getOne(id) {
    return fetch(this.URL + id).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(`Can not get list with id '${id}'.`);
    });
  }

  static create(todo) {
    return fetch(this.URL, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(`Can not create list`);
    });
  }

  static update(id, todo) {
    return fetch(this.URL + id, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(`Can not update line`);
    });
  }

  static delete(id) {
    return fetch(this.URL + id, {
      method: 'DELETE',
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }

      throw new Error(`Can not delete line`);
    });
  }
}

export default WaitersApi;
