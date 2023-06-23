import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  Input,
} from "@mui/material";
import { useContext } from "react";
import dataContext from "../context/Create";

const ITEM_HEIGHT = 46;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function getStyles(name, BatchName, theme) {
  return {
    fontWeight:
      BatchName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectBatch() {
  const theme = useTheme();

  const kushi = useContext(dataContext);
  const data = kushi.name;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    kushi.setMonth(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ m: 0.5, width: 300 }}>
      <InputLabel id="demo-multiple-chip-label">batch</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={kushi.month}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {data.map((e) => (
          <MenuItem
            key={e._id}
            value={e.name}
            style={getStyles(e, kushi.month, theme)}
          >
            {e.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
