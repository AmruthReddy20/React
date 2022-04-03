import React from "react";
import Banner from "../../Organisms/Banner/Banner/Banner";
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import BooksGroup from "../../Organisms/Banner/BookGroup/BookGroup";
import Template from "../Template";

const LandingPage = () => {
	return (
		<Template>
			<Banner />
			<SearchBar />
			<BooksGroup title="Trending Blinks" />
		</Template>
	);
};

export default LandingPage;
