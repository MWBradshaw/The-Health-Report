import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';

export const LoginForm = () => {
    return (
        <Box
            component="form"
          >
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
          </Box>
    )
}