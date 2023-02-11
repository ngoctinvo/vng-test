import React from "react";
import Button from "../Button";
import * as XLSX from "xlsx";

const ExportExcel = ({ data, file }) => {
  const handleExport = () => {
    let header = ["Name", "City"];
    const ws = XLSX.utils.book_new();
    XLSX.utils.sheet_add_aoa(ws, [header]);
    XLSX.utils.sheet_add_json(ws, data, { origin: "A2", skipHeader: true });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, {
      type: "array",
      cellStyles: true,
    });
    const finalData = new Blob([excelBuffer]);
    XLSX.write(finalData, "Data.xlsx");
  };
  return <Button onClick={handleExport}>Export Excel</Button>;
};

export default ExportExcel;
