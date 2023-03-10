import React from "react";
import Button from "../Button";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
import ExportIcon from "../../icons/export";

const ExportExcel = ({ data, file, count }) => {
  const handleExport = () => {
    let header = ["Name", "City"];
    const ws = XLSX.utils.book_new();
    XLSX.utils.sheet_add_aoa(ws, [header]);
    XLSX.utils.sheet_add_json(ws, data, { origin: "A2", skipHeader: true });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { type: "array", cellStyles: true });
    const finalData = new Blob([excelBuffer]);
    FileSaver.saveAs(finalData, "Data.xlsx");
  };
  return (
    <Button onClick={handleExport}>
      <ExportIcon />
      &nbsp; Export Excel ({count})
    </Button>
  );
};

export default ExportExcel;
