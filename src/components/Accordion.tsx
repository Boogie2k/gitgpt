import * as React from "react";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AccordionText from "./AccordionText";

export default function AccordionUsage() {
  return (
    <div className="overflow-y-auto mt-2.5">
      <Accordion style={{ background: "transparent" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>📘 Need help? Heres how to get your GitHub Token </p>
        </AccordionSummary>
        <AccordionDetails style={{ background: "transparent" }}>
          <AccordionText />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
