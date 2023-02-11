import React from "react";
import Button from "../Button";
import * as XLSX from "xlsx";

const ExportExcel = ({ data, file }) => {
  const handleExport = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, "sheetjs.xlsx");
  };
  return <Button onClick={handleExport}>Export Excel</Button>;
};

export default ExportExcel;
