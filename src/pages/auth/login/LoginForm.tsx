// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from '@mui/material';

// third party
import {Formik} from 'formik';

// project import
import {IconButton} from '@uiKits';

// assets
import {EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';
import {PANEL_DASHBOARD_URL, PANEL_URL} from '@configs';
import {useLogin, useLoginSubmit} from './Login.hooks';
import {loginValidation} from './Login.validation';

const LoginForm = () => {
  const {
    showPassword,
    navigate,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useLogin();

  const {handleSubmit} = useLoginSubmit();

  return (
    <>
      <Formik
        initialValues={{
          mobile: '',
          password: '',
          submit: null,
        }}
        validationSchema={loginValidation}
        onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
          try {
            await handleSubmit({
              mobile: values.mobile,
              password: values.password,
            });
            navigate(`${PANEL_URL}/${PANEL_DASHBOARD_URL}`);
            setStatus({success: true});
            setSubmitting(false);
          } catch (err: any) {
            setStatus({success: false});
            setErrors({submit: err.message});
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor='mobile-login'>شماره موبایل</InputLabel>
                  <OutlinedInput
                    id='mobile-login'
                    type='mobile'
                    value={values.mobile}
                    name='mobile'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder=''
                    fullWidth
                    error={Boolean(touched.mobile && errors.mobile)}
                  />
                </Stack>
                {touched.mobile && errors.mobile && (
                  <FormHelperText
                    error
                    id='standard-weight-helper-text-mobile-login'
                  >
                    {errors.mobile}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor='password-login'>رمز عبور</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id='-password-login'
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name='password'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                          color='secondary'
                        >
                          {showPassword ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder=''
                  />
                </Stack>
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id='standard-weight-helper-text-password-login'
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </Grid>

              {/* <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name='checked'
                        color='primary'
                        size='small'
                      />
                    }
                    label={<Typography variant='h6'>
                      مرا به خاطر بسپار
                    </Typography>}
                  />
                  <Link variant='h6' component={RouterLink} to={isDemo ? '/auth/forgot-password' : '/forgot-password'} color='text.primary'>
                    فراموشی رمز عبور
                  </Link>
                </Stack>
              </Grid> */}

              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  ورود
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
