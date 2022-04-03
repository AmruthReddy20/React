import React from "react";
import Header from "../Organisms/Banner/Header/Header";
import Footer from "../Organisms/Banner/Footer/Footer";

interface Props {
	children: React.ReactNode;
}

const Template = ({ children }: Props) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Template;
