import {Link} from 'react-router-dom';

// material-ui
import {Grid, Stack, Typography} from '@mui/material';

// project import
import {useAuth} from '@hooks';
import {AuthWrapper} from '@components';
import LoginForm from './LoginForm';

// ================================|| LOGIN ||================================ //

const Login = () => {
  const {isLoggedIn} = useAuth();

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='baseline'
            sx={{mb: {xs: -0.5, sm: 0.5}}}
          >
            <Typography variant='h3'>ورود</Typography>
            <Typography
              component={Link}
              to={isLoggedIn ? '/auth/register' : '/register'}
              variant='body1'
              sx={{textDecoration: 'none'}}
              color='primary'
            >
              حساب کاربری ندارید؟
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
