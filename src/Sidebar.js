import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PaidIcon from '@mui/icons-material/Paid';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import NfcIcon from '@mui/icons-material/Nfc';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import PolicyIcon from '@mui/icons-material/Policy';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CampaignIcon from '@mui/icons-material/Campaign';


function Sidebar() {
  return (
    <div className='sidebar'>
    <SidebarRow Icon={WhatshotIcon} title="Hot Scoops"></SidebarRow> 
    <SidebarRow Icon={PaidIcon} title="Earning"></SidebarRow>
    <SidebarRow Icon={EmojiEventsIcon} title="Award"></SidebarRow>
    <SidebarRow Icon={ArrowUpwardIcon} title="Open position"></SidebarRow>
    <SidebarRow Icon={PeopleOutlineIcon} title="New Hire"></SidebarRow>
    <SidebarRow Icon={DataThresholdingIcon} title="Analytics"></SidebarRow>
    <SidebarRow Icon={PaidIcon} title="Budgeting"></SidebarRow>
    <SidebarRow Icon={NfcIcon} title="Communication"></SidebarRow>
    <SidebarRow Icon={LaptopChromebookIcon} title="Technology"></SidebarRow>
    <SidebarRow Icon={PolicyIcon} title="Legal"></SidebarRow>
    <SidebarRow Icon={HomeWorkIcon} title="Infrastructure"></SidebarRow>
    <SidebarRow Icon={CampaignIcon} title="Marketing"></SidebarRow>
    </div>
  )
}

export default Sidebar