import React, { useState } from "react";
import Table from "../components/Table";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { getState, addItem, editItem, deleteItem } from "../state.js";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const Calcas = () => {
  const type = "calcas";
  const [rows, setData] = useState(getState(type));
  const [open, setOpenState] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  const columns = [
    { name: "Nome", key: "name" },
    { name: "Código", key: "code" },
  ];
  function createItem() {
    const newItem = { name, code };
    if (edit) editItem({ ...newItem, index: editIndex }, type);
    else addItem(type, newItem);
    setData(getState(type));
    handleCancel();
  }
  function erase(i) {
    if (window.confirm("Deseja realmente excluir o registro?")) {
      deleteItem(type, i);
      setData(getState(type));
    }
  }
  function editHandle(i) {
    setOpenState(true);
    setName(rows[i].name);
    setCode(rows[i].code);
    setEdit(true);
    setEditIndex(i);
  }
  function handleClick(id) {
    setOpenState(true);
  }
  function handleCancel(id) {
    setOpenState(false);
    setCode("");
    setName("");
  }

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handleClick} variant="contained">
          <Add />
        </Button>
      </div>
      <Table
        editHandle={editHandle}
        deleteHandle={erase}
        type={type}
        title={type}
        columns={columns}
        rows={rows}
      />
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Nova camisa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            value={code}
            margin="dense"
            label="Código"
            onChange={(event) => setCode(event.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={createItem}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Calcas;
