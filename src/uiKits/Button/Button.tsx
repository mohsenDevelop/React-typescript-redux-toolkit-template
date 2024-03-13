import classes from './Button.module.css';
import { FC } from 'react';
import { Button as MantineButton } from '@mantine/core';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = (props) => {
    return (
        <MantineButton className={
            classes.root
        }
            {...props} />
    );
};