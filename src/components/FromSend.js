import * as React from "react";
import { useTheme } from "@mui/material/styles";
import dataContext from "../context/Create";
import { useContext } from "react";
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  Input,
  styled,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles1(Mail, sendMail, theme) {
  return {
    fontWeight:
      sendMail.indexOf(Mail) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStyles2(Mail, sendMail, theme) {
  return {
    fontWeight:
      sendMail.indexOf(Mail) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FromMail() {
  const kushi = useContext(dataContext);
  const month = kushi.month;
  const data = kushi.name;
  const admin = kushi.admin;

  const arr = [],
    mails = [],
    fromMails = [];

  const theme = useTheme();

  for (let i = 0; i < month.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (month[i] === data[j].name) {
        {
          data.map((e) => {
            if (e.name === month[i]) {
              arr.push(...e.mails);
            }
          });
        }
      }
    }
  }
  for (let i = 0; i < admin.length; i++) {
    fromMails.push(...admin[0].mails);
  }

  mails.push(...arr);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    kushi.setFmail(typeof value === "string" ? value.split(",") : value);
    if (
      kushi.data ==
      ({
        batch: "",
        from: "",
        sub: "",
        text: "",
        to: "",
      } || {
        batch: "",
        from: "",
        sub: "",
        text: "<p><br></p>",
        to: "",
      })
    ) {
      kushi.setVali(false);
    }
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    kushi.setTmail(typeof value === "string" ? value.split(",") : value);
  };
  const StyledBox = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  });

  const SubjectAdd = (e) => {
    kushi.setSub(e.target.value);
    if (
      kushi.data ==
      ({
        batch: "",
        from: "",
        sub: "",
        text: "",
        to: "",
      } || {
        batch: "",
        from: "",
        sub: "",
        text: "<p><br></p>",
        to: "",
      })
    ) {
      kushi.setVali(false);
    }
  };
  return (
    <div>
      <StyledBox className="fromTo">
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">From:</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              limit={1}
              value={kushi.fmail}
              onChange={handleChange1}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {fromMails.map((Mail) => (
                <MenuItem
                  key={Mail}
                  value={Mail}
                  style={getStyles1(Mail, kushi.fmail, theme)}
                >
                  {Mail}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">To:</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              placeholder="please select Batch First"
              value={kushi.tmail}
              onChange={handleChange2}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {month.length == 0 ? (
                <MenuItem disabled value="">
                  <em style={{ color: "red" }}>Please select Batch first!</em>
                </MenuItem>
              ) : (
                ""
              )}
              {mails.map((Mail) => (
                <MenuItem
                  key={Mail}
                  value={Mail}
                  style={getStyles2(Mail, kushi.tmail, theme)}
                >
                  {Mail}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </StyledBox>
      <div>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Subject:</InputLabel>
          <Input
            id="component-helper"
            defaultValue=""
            aria-describedby="component-helper-text"
            style={{ width: "500px" }}
            onChange={(e) => SubjectAdd(e)}
            name="subject"
            value={kushi.sub}
          />
        </FormControl>
      </div>
    </div>
  );
}
