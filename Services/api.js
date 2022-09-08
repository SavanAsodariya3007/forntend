import { create, CancelToken } from "apisauce";

const cancelRequestList = {};

export const api = create({
  baseURL: "http://localhost:8080/",
  headers: {
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

const cancelRequests = (...keys) => {
  keys.forEach((key) => {
    if (cancelRequestList[key]) {
      cancelRequestList[key]();
    }
  });
};

const getErrorMessage = (response) => {
  let errorMessage = response.problem;
  if (errorMessage === "NETWORK_ERROR") {
    errorMessage = "Network error";
  } else if (errorMessage === "TIMEOUT_ERROR") {
    errorMessage = "Something went wrong. Please try again later";
  } else if (errorMessage === "SERVER_ERROR") {
    errorMessage = "Server error";
  }
  return errorMessage;
};

const processResponse = (response) => {
  const status = response.status === 200;
  const data = response.data || {
    status: status,
    message: getErrorMessage(response),
  };
  return { ...data, status, cancel: response.problem === "CANCEL_ERROR" };
};

const get = (data) => {
  const { url, cancelKey, params, headers } = data;
  return api
    .get(url, params, {
      cancelToken: new CancelToken((c) => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then((res) => processResponse(res));
};

const put = (data) => {
  const { url, cancelKey, params, headers } = data;
  return api
    .put(url, params, {
      cancelToken: new CancelToken((c) => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then((res) => processResponse(res));
};

const post = (data) => {
  const { url, cancelKey, params, headers } = data;
  //  console.log("data", data)
  return api
    .post(url, params, {
      cancelToken: new CancelToken((c) => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then((res) => processResponse(res));
};

const del = (pdata) => {
  const { url, cancelKey, params, data, headers } = pdata;
  return api
    .delete(url, params, {
      cancelToken: new CancelToken((c) => (cancelRequestList[cancelKey] = c)),
      headers,
      data: data,
    })
    .then((res) => processResponse(res));
};

export { cancelRequests, get, put, post, del };
