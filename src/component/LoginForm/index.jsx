import React from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { LockIcon, PersonIcon } from '../../svg';
import { useFormContext, Controller } from 'react-hook-form';
import UserAPI from '../../api/UserAPI';

function LoginForm({ goToSignup, onComplete }) {
  const { handleSubmit } = useFormContext();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data) => {
        UserAPI.login(data).then((res) => {
          localStorage.setItem('token', res.data.data.jwt);
          onComplete();
        });
      })}
      sx={{
        position: 'relative',
        width: 1,
        height: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.light',
      }}
    >
      <Grid
        container
        justifyContent="space-around"
        alignItems="stretch"
        direction="column"
        flexWrap="nowrap"
        px={2}
        py={4}
        sx={{
          right: 0,
          width: 0.4,
          height: 0.4,
          maxWidth: 400,
          minWidth: 230,
        }}
      >
        <Grid item>
          <Typography
            fontFamily="'Slabo 27px'"
            variant="h1"
            align="left"
            color="background.default"
            fontSize={[36, 36, 54]}
            mb={[1, 1, 3]}
          >
            LOGIN
          </Typography>
        </Grid>
        <Grid item>
          <Controller
            rules={{ required: 'Please enter your email' }}
            render={({ field, fieldState }) => (
              <TextField
                type="email"
                {...field}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="standard"
                label={
                  <Typography fontFamily="'Slabo 27px'" color="primary.dark">
                    Email
                  </Typography>
                }
                margin="dense"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: <PersonIcon css={{ width: 22 }} />,
                }}
                inputProps={{
                  style: {
                    fontFamily: '"Slabo 27px"',
                    color: 'white',
                  },
                }}
                sx={{
                  width: 1,
                }}
              />
            )}
            name="email"
          />
        </Grid>
        <Grid item>
          <Controller
            rules={{ required: 'Password is required' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                variant="standard"
                type="password"
                label={
                  <Typography fontFamily="'Slabo 27px'" color="primary.dark">
                    Password
                  </Typography>
                }
                margin="dense"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: <LockIcon css={{ width: 22 }} />,
                }}
                inputProps={{
                  style: {
                    fontFamily: '"Slabo 27px"',
                    color: 'white',
                  },
                }}
                sx={{
                  width: 1,
                }}
              />
            )}
            name="password"
          />
        </Grid>
        <Grid item position="relative">
          <Typography
            variant="button"
            sx={{
              fontFamily: '"Slabo 27px"',
              color: 'background.default',
              cursor: 'pointer',
              ml: 'auto',
              position: 'absolute',
              right: 0,
            }}
            onClick={goToSignup}
          >
            Create Account
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            disableElevation
            fullWidth
            sx={{
              backgroundColor: 'primary.dark',
              height: 42,
              borderRadius: '21px',
              width: 1,
              mt: 6,
              fontSize: 24,
              fontFamily: '"Slabo 27px"',
            }}
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
