import styled from "styled-components";
import theme from "./../theme";
import { Link } from "react-router-dom";

const Formulario = styled.form`
	padding: 0 2.5rem; /* 40px */

	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	input {
		width: 100%;
		text-align: center;
		padding: 2.5rem 0;
		font-family: 'Work Sans', sans-serif;
		&::placeholder {
			color: rgba(0,0,0,.2);
		}
	}

	@media(max-width: 60rem){ /* 950px */
		justify-content: start;
	}
`;

const ContenedorHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media(max-width: 60rem){ /* 950px */
		display: flex;
		flex-direction: column-reverse;
		align-items: center;

		& > div {
			display: flex;
			margin-bottom: 1.25rem; /* 20px */
			justify-content: end;
		}
	}
`;

const Titulo = styled.h1`
	font-weight: normal;
	text-transform: uppercase;
	font-size: 2.5rem; /* 40px */
	

	@media(max-width: 60rem){ /* 950px */
		font-size: 2rem; /* 32px */
	}
`;
const ContenedorBoton = styled.div`
	display: flex;
	justify-content: center;
	margin: 2.5rem 0;  /* 40px */
`;
const ContenedorBotones = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Input = styled.input`
	font-size: 2.5rem; /* 40px */
	text-transform: uppercase;
	border: none;
	border-bottom: 2px solid ${theme.grisClaro};
	outline: none;

	@media(max-width: 30rem){ /* 950px */
		font-size: 1.5rem; /* 24px */
	}
`;

const Boton = styled(Link)`
	background: ${(props) => props.primario ? '#5B69E2' : '#000'};
	width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
	margin-left: 1.25rem; /* 20px */
	border: none;
	border-radius: 0.625rem; /* 10px */
	color: #fff;
	font-family: 'Work Sans', sans-serif;
	height: 3.75rem; /* 60px */
	padding: 1.25rem 1.87rem; /* 20px 30px */
	font-size: 1.25rem; /* 20px */
	font-weight: 500;
	cursor: pointer;
	text-decoration: none;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	outline: none;
`;
export {Boton,Input,ContenedorBotones,ContenedorBoton,Titulo,ContenedorHeader,Formulario};