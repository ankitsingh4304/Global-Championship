import React, { useState } from "react";
import SportsSection from "../../components/SportsSection";
import TableComponent from "../../components/table";
import "../../App.css";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Divider,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import getSportsData from "./utils/sports";
export default function Sports() {
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [selectedSportData, setSelectedSportData] = useState(null);
	const [selectedSportName, setSelectedSportName] = useState("");

	/////////////////////////////
	const data = getSportsData();
	console.log(data);
	/////////////////////////////

	// --- Click Handlers ---

	const handleSportClick = async (sport) => {
		try {
			const module = await import(`../../data/${sport.id}.js`);
			setSelectedSportData(module.default);
			setSelectedSportName(sport.name);
			setPopupOpen(true);
		} catch (error) {
			alert(`Could not find data for ${sport.name}.`);
		}
	};

	const handleClosePopup = () => {
		setPopupOpen(false);
	};

	return (
		<div className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#c7eae6] adjust-top p-3 mx-auto">
			<h1
				className="text-5xl font-bold mb-6 text-center font-[Brave81] text-black mt-5 tracking-widest">
				SPORTS
			</h1>
			<SportsSection handleSportClick={handleSportClick} />
			<Dialog
				open={isPopupOpen}
				onClose={handleClosePopup}
				fullWidth={true}
				maxWidth='sm'
				sx={{ backdropFilter: "blur(2px)", m: 0 }}
				PaperProps={{
					sx: (theme) => ({
						borderRadius: "40px",
						[theme.breakpoints.down("sm")]: {
							margin: 0,
							width: "96%",
						},
					}),
				}}>
				<IconButton
					aria-label='close'
					onClick={handleClosePopup}
					sx={{
						position: "absolute",
						right: 12,
						top: 12,
						color: "#946F2C",
						zIndex: 2,
					}}>
					<CloseIcon />
				</IconButton>
				<div className='popup-container'>
					<DialogTitle><h1 className=" font-[Brave81]">{selectedSportName} Table</h1></DialogTitle>
					<Divider
						sx={{
							borderColor: "#946F2C",
							borderBottomWidth: 2,
							margin: "0 0 10px 0",
						}}
					/>

					<DialogContent>
						{<TableComponent teams={selectedSportData} />}
					</DialogContent>
				</div>
			</Dialog>
		</div>
	);
}
