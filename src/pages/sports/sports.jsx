import React, { useState } from "react";
import SportsSection from "../../components/SportsSection";
import TableComponent from "../../components/table";
import '../../App.css';
import { Dialog, DialogTitle, DialogContent, Divider, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
export default function Sports() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedSportData, setSelectedSportData] = useState(null);
  const [selectedSportName, setSelectedSportName] = useState("");

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
    <div className="sports-container">
      <h1 style={{ textAlign: "center", fontFamily: 'Inter, sans-serif', fontSize: '3rem', fontWeight: '700', color: '#3A1616' }}>
        SPORTS
      </h1>
      <SportsSection handleSportClick={handleSportClick} />
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth={true}
        maxWidth="sm"
        sx={{ backdropFilter: 'blur(2px)', m: 0 }}
        PaperProps={{
          sx: (theme) => ({

            borderRadius: '40px',
            [theme.breakpoints.down('sm')]: {
              margin: 0,
              width: '96%',
            },
          }),
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClosePopup}
          sx={{
            position: 'absolute',
            right: 12,
            top: 12,
            color: "#946F2C",
            zIndex: 2
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="popup-container">
          <DialogTitle >
            {selectedSportName} Table
          </DialogTitle>
          <Divider sx={{ borderColor: '#946F2C', borderBottomWidth: 2, margin: '0 0 10px 0' }} />

          <DialogContent >
            {<TableComponent teams={selectedSportData} />}
          </DialogContent>

        </div>
      </Dialog>
    </div>
  );
}