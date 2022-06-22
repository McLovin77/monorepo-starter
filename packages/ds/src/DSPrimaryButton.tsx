import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";

const DSPrimaryButton: React.FC<ButtonProps> = (props) => (
	<Button variant='contained' color='primary' {...props} />
);

export default DSPrimaryButton;
