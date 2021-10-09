import axios from "axios";
import { baseUrl, createLinkUrl } from "../config/backendUrl.config";
import { usersUrl } from "../config/frontendUrl.config";

export const createLinkRequestSubmit = (title, url, toggle, token) => {
  return axios({
    method: "post",
    url: baseUrl + createLinkUrl,
    data: {
      title,
      url,
      toggle,
    },
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const createLinkHandler = async (title, url, toggle, token, history) => {
  return createLinkRequestSubmit(title, url, toggle, token)
    .then((data) => {
      alert("Created New Link Successfully");
      history.go(0);
      return null;
    })
    .catch((error) => alert(error));
};

export const updateLinkRequestSubmit = (link_id, title, url, toggle, token) => {
  return axios({
    method: "put",
    url: baseUrl + createLinkUrl,
    data: {
      title,
      url,
      toggle,
      id: link_id,
    },
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateLinkHandler = async (
  link_id,
  title,
  url,
  toggle,
  token,
  history
) => {
  return updateLinkRequestSubmit(link_id, title, url, toggle, token)
    .then((data) => {
      alert("Updated Link Successfully");
      history.go(0);
      return null;
    })
    .catch((error) => alert(error));
};

export const deleteLinkRequestSubmit = (link_id, token) => {
  return axios({
    method: "delete",
    url: baseUrl + createLinkUrl,
    data: {
      id: link_id,
    },
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteLinkHandler = async (link_id, token, history) => {
  return deleteLinkRequestSubmit(link_id, token)
    .then((data) => {
      alert("Link Deleted");
      history.go(0);
      return null;
    })
    .catch((error) => alert(error));
};

export const getUserFromMyLinkTreeRequestSubmit = async (myLinkTree) => {
  return axios({
    method: "post",
    url: baseUrl + "/links/mylinktree",
    data: {
      myLinkTree: myLinkTree,
    },
  })
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      throw error;
    });
};

export const getUserFromMyLinkTreeHandler = async (myLinkTree) => {
  return getUserFromMyLinkTreeRequestSubmit(myLinkTree)
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error.message));
};

export const linkClickRequestSubmit = (id) => {
  return axios({
    method: "put",
    url: baseUrl + "/links/clicks",
    data: {
      id: id,
    },
  })
    .then((response) => {
      return console.log(response);
    })
    .catch((error) => {
      throw error;
    });
};
