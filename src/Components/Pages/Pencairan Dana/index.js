import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Table from "./Table/Table";
import moment from "moment";
import { addDetailListPencairan } from "../../../redux/actionsPencairan/AddDetailPencairan";
import { fetchTablePencairanList } from "../../../redux/actionsPencairan/ListPencairanDana";
import { useDispatch } from "react-redux";

const Index = () => {
  let today = moment().format("YYYY-MM-DD");
  const dispatch = useDispatch();

  const [formPencairan, setFormPencairan] = useState({
    tglPencairan: "2021-06-28",
    batchPencairan: "B1",
    jam: "",
    bank: "",
    note: "",
  });
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchedDataList, setFetchedDataList] = useState([]);
  const [render, setRender] = useState(false);

  const { tglPencairan, batchPencairan } = formPencairan;

  const fetchAPI = async () => {
    setFetchedData(
      await dispatch(
        addDetailListPencairan(
          localStorage.getItem("userId"),
          localStorage.getItem("auth"),
          tglPencairan,
          batchPencairan
        )
      )
    );
    setFetchedDataList(
      await dispatch(
        fetchTablePencairanList(
          localStorage.getItem("userId"),
          localStorage.getItem("auth")
        )
      )
    );
  };

  useEffect(() => {
    fetchAPI();
  }, [dispatch, tglPencairan, batchPencairan, render]);

  console.log(fetchedData);

  const props = {
    formPencairan,
    setFormPencairan,
    fetchedData,
    fetchedDataList,
    setRender,
    render,
  };

  return (
    <div>
      <Header {...props} />
      <Table {...props} />
    </div>
  );
};

export default Index;
