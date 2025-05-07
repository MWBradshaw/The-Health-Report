import { Box, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

export const LoginForm = () => {
    return (
        <Box
            component="form"
          >

            <FormControl>
              <InputLabel htmlFor="email-login">Email address</InputLabel>
              <Input id="email-login" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
              <InputLabel htmlFor="password-login">Password</InputLabel>
              <Input id="password-login" aria-describedby="my-helper-text" />
            </FormControl>
          </Box>
    )
}