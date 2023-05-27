import { useEffect, useState } from "react";
import {
  GetAPIdetails,
  PostAPIDetails,
  DeleteAPIdetails,
  EditAPIdetails,
  UpdateAPIdetails,
} from "../CRUD/AxiosAPI";

//GetAPIdetails
export const GetAPIAction = () => {
  return function(dispatch) {
    return GetAPIdetails().then((res) => {
      console.log(res);
      dispatch({
        type: "GET_DETAILS",
        payload: res.data,
      });
    });
  };
};

//PostAPIDetails
export const PostAPIAction = (data) => {
  return function(dispatch) {
    return PostAPIDetails(data).then((res) => {
      dispatch({
        type: "POST_DETAILS",
        payload: "",
      });
    });
  };
};

//DeleteAPIdetails
export const DeleteAPIAction = (id) => {
  return function(dispatch) {
    return DeleteAPIdetails(id).then((res) => {
      console.log("Delete data response...", res);
      dispatch({
        type: "DELETE_DETAILS",
        payload: true,
      });
    });
  };
};

//EditData
export default (props) => {
  const [detailsbyId, setdetailsbyId] = useState({});
  const GetDetailsId = (requestId) => {
    return EditAPIdetails(requestId).then((res) => {
      console.log(res.id);
      setdetailsbyId(res);
    });
  };

  useEffect(() => {
    GetDetailsId(props);
  }, []);
  return [detailsbyId];
};

//UpadteData
export const UpdateAPIAction = (request, id) => {
  return function(dispatch) {
    dispatch({
      type: "UPDATE_DETAILS",
      payload: false,
    });
    return UpdateAPIdetails(request, id).then((res) => {
      console.log("update data...", res);
      dispatch({
        type: "UPDATE_DETAILS",
        payload: true,
      });
    });
  };
};
