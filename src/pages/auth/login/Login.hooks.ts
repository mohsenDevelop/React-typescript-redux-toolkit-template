import {useState, SyntheticEvent} from 'react';
import {useNavigate} from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };
  return {
    navigate,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};

export const useLoginSubmit = () => {
  const handleSubmit = (valuse: {mobile: string; password: string}) => {
    console.log(valuse);
  };
  return {
    handleSubmit,
  };
};
