import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=15&inc=name,email,dob,phone,id,picture,nat&nat=us";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};

