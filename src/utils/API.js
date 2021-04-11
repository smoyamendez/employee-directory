import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

function randomUser() {
    return axios.get(BASEURL);
  };

export default randomUser;

