import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import * as newsService from "../../services/news";
import { useSelector } from "react-redux";
import config from "../../config";
import { interpolate } from "../../utils/string";
import NewsListing from "./newsListing";

function DeletePosts(props) {
  const history = useHistory();

  const { id } = props.match.params;

  const url = `${config.apiUrl}${config.endpoints.eachNews}`;

  useEffect(() => {
    const deleteNews = async () => {
      axios
        .delete(interpolate(url, { id }))
        .then((response) => {
          const { data } = response;

          if (data.message === "Record removed successfully") {
            toast.success("Deleted!");
            setTimeout(() => {
              history.push("/");
            }, 1000);
          } else {
            toast.error(response);
            console.log('toat', response);
          }
        })
        .catch((err) => {
          console.log('err', err);
          toast.error("Something is wrong!");
          
        });
    };

    deleteNews();
  }, []);

  return (
    <>
      <NewsListing />
      <ToastContainer limit={1} />
    </>
  );
}

export default DeletePosts;
