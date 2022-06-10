import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

function Form() {
  return (
    <Box sx={{display: 'flex',flexDirection:"column", maxWidth:"100%",alignItems: 'center',justifyContent: 'center'}}>
      <FormControl>
        <InputLabel htmlFor="my-email">Email address</InputLabel>
        <Input id="my-email" aria-describedby="my-email-text" />
        <FormHelperText id="my-email-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-password">Password</InputLabel>
        <Input id="my-password" a aria-describedby="my-password-text" />
        <FormHelperText id="my-password-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <Button variant="contained" aria-label="Login" type='submit'>submit</Button>
    </Box>
  );
}

export default Form