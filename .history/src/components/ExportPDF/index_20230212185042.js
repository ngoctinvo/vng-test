import React from "react";
import Button from "../Button";
import ExportIcon from "../../icons/export";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ExportPDF = ({ data, file, count }) => {
  const handleExport = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const headers = [Object.keys(data[0])];
    const records = data.map((object) => Object.values(object));

    let content = {
      startY: 50,
      head: headers,
      body: records,
    };

    doc.text("", marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };
  return (
    <Button onClick={handleExport}>
      <ExportIcon /> &nbsp; Export PDF({count}){" "}
    </Button>
  );
};

export default ExportPDF;
