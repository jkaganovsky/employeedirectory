/* eslint-disable import/no-anonymous-default-export */
// Random User Generator API call
import axios from "axios";

export default {

  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/?results=50");
  }

};