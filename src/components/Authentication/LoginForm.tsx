import { Box, FormControl, FormHelperText, Input, InputLabel, Stack } from '@mui/material';

export const LoginForm = () => {
    return (
        <Box
            component="form"
          >
            <Stack>
            <FormControl>
              <InputLabel htmlFor="email-login">Email address</InputLabel>
              <Input id="email-login" aria-describedby="my-helper-text" />
              <FormHelperText id="email-footer">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password-login">Password</InputLabel>
              <Input id="password-login" aria-describedby="my-helper-text" />
            </FormControl>
            </Stack>
          </Box>
    )
}