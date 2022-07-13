import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import IconButton from "@mui/material/IconButton";

const MuiButtons = () => {
  const buttons = [
    <Button>one</Button>,
    <Button>two</Button>,
    <Button>three</Button>
  ]
  return (
    <Stack spacing={4}>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Button variant="text">text button</Button>
        <Button variant="contained">contained button</Button>
        <Button variant="outlined">outlined button</Button>
      </Stack>
      
      <Stack spacing={2} direction="row" justifyContent='center'>
      <Button variant="contained" color="primary">primary button</Button>
      <Button variant="contained" color="secondary">Secondary button</Button>
      <Button variant="contained" color="warning">warning button</Button>
      <Button variant="contained" color="success">success button</Button>
      <Button variant="contained" color="error">error button</Button>
      </Stack>
      
      <Stack spacing={2} direction="row" justifyContent='center'>
      <Button variant="contained" size="small">small</Button>
      <Button variant="contained" size="medium">medium</Button>
      <Button variant="contained" size="large">large</Button>
      </Stack>

      <Stack spacing={2} direction="row" justifyContent='center'>
      <Button variant="outlined" size="large" startIcon={<SendIcon/>}>Send</Button>
      <Button variant="outlined" size="small" endIcon={<SendIcon/>}>Send</Button>
      <IconButton>
        <SendIcon/>
      </IconButton>
      </Stack>

      <hr/><h3>Button group</h3><hr/>
      <Stack spacing={2} direction="row" justifyContent='center'>
        <ButtonGroup variant="contained">
          <Button onClick={() => alert("one clicked!")}>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>
      </Stack>

    <Stack spacing={2} direction="row" justifyContent="center">
      <ButtonGroup variant="contained">
        {buttons}
      </ButtonGroup>
      <ButtonGroup variant="text">
        {buttons}
      </ButtonGroup>
      <ButtonGroup variant="outlined" size="small" aria-label="small button group"> 
        {buttons}
      </ButtonGroup>
      <ButtonGroup variant="outlined" size="medium" aria-label="medium button group" color="success">
        {buttons}
      </ButtonGroup>
      <ButtonGroup variant="outlined" size="large" color="warning">
        {buttons}
      </ButtonGroup>
    </Stack>

    <Stack spacing={2} direction="row" justifyContent="center">
      <ButtonGroup orientation="vertical" variant="outlined">{buttons}</ButtonGroup>
      <ButtonGroup orientation="vertical" variant="contained">{buttons}</ButtonGroup>
      <ButtonGroup orientation="vertical" variant="text">{buttons}</ButtonGroup>
    </Stack>

    </Stack>
  );
};

export default MuiButtons;
