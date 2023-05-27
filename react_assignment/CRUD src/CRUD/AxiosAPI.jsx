import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
      });
}

//GetData
const GetAPIdetails = () => {
  const headers = {
    "content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3000/details", "GET", headers, {});
};

//PostData
const PostAPIDetails = (data) => {
  return axios.post("http://localhost:3000/details", data);
};

// DeleteData
const DeleteAPIdetails = (id) => {
  const headers = {
    "content-Type": "application/json",
  };
  return AxiosRequest(
    "http://localhost:3000/details/" + id,
    "DELETE",
    headers,
    {}
  );
};

//EditData
const EditAPIdetails = (id) => {
  const headers = {
    "content-Type": "application/json",
  };
  return AxiosRequest(
    "http://localhost:3000/details/" + id,
    "GET",
    headers,
    {}
  );
};

//UpdateData
const UpdateAPIdetails = (data, id) => {
  const headers = {
    "content-Type": "application/json",
  };
  return AxiosRequest(
    "http://localhost:3000/details/" + id,
    "PUT",
    headers,
    data
  );
};

export {
  GetAPIdetails,
  PostAPIDetails,
  DeleteAPIdetails,
  EditAPIdetails,
  UpdateAPIdetails,
};
