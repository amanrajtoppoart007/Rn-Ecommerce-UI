import React from 'react';
import Advertisement from '../assets/svg/Advertisement.svg';
import AllNightDrugStore from '../assets/svg/AllNightDrugStore.svg';
import Art from '../assets/svg/Art.svg';
import BackToSchool from '../assets/svg/BackToSchool.svg';
import BikesByCycle from '../assets/svg/BikesByCycle.svg';
import CareBeauty from '../assets/svg/CareBeauty.svg';
import Cars from '../assets/svg/Cars.svg';
import ConstructionBuilding from '../assets/svg/ConstructionBuilding.svg';
import Decorations from '../assets/svg/Decorations.svg';
import Dietetic from '../assets/svg/Dietetic.svg';
import DryCleaning from '../assets/svg/DryCleaning.svg';
import ElectricianMechanics from '../assets/svg/ElectricianMechanics.svg';
import Electronic from '../assets/svg/Electronic.svg';
import Event from '../assets/svg/Event.svg';
import Fashion from '../assets/svg/Fashion.svg';
import FoodAndFruits from '../assets/svg/FoodAndFruits.svg';
import FoundObjects from '../assets/svg/FoundObjects.svg';
import Furniture from '../assets/svg/Furniture.svg';
import HairSalon from '../assets/svg/HairSalon.svg';
import HandMade from '../assets/svg/HandMade.svg';
import HandPhone from '../assets/svg/HandPhone.svg';
import HealthCare from '../assets/svg/HealthCare.svg';
import HomeAppliance from '../assets/svg/HomeAppliance.svg';
import HomeServices from '../assets/svg/HomeServices.svg';
import Hotel from '../assets/svg/Hotel.svg';
import Insurance from '../assets/svg/Insurance.svg';
import Jobs from '../assets/svg/Jobs.svg';
import LegalServices from '../assets/svg/LegalServices.svg';
import LeisureOutings from '../assets/svg/LiesureOutings.svg';
import Lingerie from '../assets/svg/Lingerie.svg';
import MassMedia from '../assets/svg/MassMedia.svg';
import Meet from '../assets/svg/Meet.svg';
import MotorCycleBike from '../assets/svg/MotorCycleBike.svg';
import OtherServices from '../assets/svg/OtherServices.svg';
import Others from '../assets/svg/Others.svg';
import Phone from '../assets/svg/Phone.svg';
import PrintingPress from '../assets/svg/PrintingPress.svg';
import RealState from '../assets/svg/RealState.svg';
import RestaurantBars from '../assets/svg/RestuarantsBars.svg';
import ShoppingReadyToWear from '../assets/svg/ShoppingReadyToWear.svg';
import ShoppingThriftStore from '../assets/svg/ShoppingThriftStore.svg';
import SportAccessories from '../assets/svg/SportAccessories.svg';
import SuperMarket from '../assets/svg/SuperMarket.svg';
import Tattoo from '../assets/svg/Tatto.svg';
import Towing from '../assets/svg/Towing.svg';
import TradingImportExport from '../assets/svg/TradingImportExport.svg';
import TraditionalMedicine from '../assets/svg/TraditionalMedicine.svg';
import Veterinarians from '../assets/svg/Veternarians.svg';

const categories = [
  {
    title: 'Advertisement',
    Svg: <Advertisement width={100} height={60} />,
  },
  {
    title: 'All Night Drug Store',
    Svg: <AllNightDrugStore width={100} height={60} />,
  },
  {
    title: 'Art',
    Svg: <Art width={100} height={60} />,
  },
  {
    title: 'Back To School',
    Svg: <BackToSchool width={100} height={60} />,
  },
  {
    title: 'Bikes By Cycle',
    Svg: <BikesByCycle width={100} height={60} />,
  },
  {
    title: 'Care Beauty',
    Svg: <CareBeauty width={100} height={60} />,
  },
  {
    title: 'Cars',
    Svg: <Cars width={100} height={60} />,
  },
  {
    title: 'Construction Building',
    Svg: <ConstructionBuilding width={100} height={60} />,
  },
  {
    title: 'Back to School',
    Svg: <BackToSchool width={100} height={60} />,
  },
  {
    title: 'Bikes by Cycle',
    Svg: <BikesByCycle width={100} height={60} />,
  },
  {
    title: 'Care & Beauty',
    Svg: <CareBeauty width={100} height={60} />,
  },
  {
    title: 'Cars',
    Svg: <Cars width={100} height={60} />,
  },
  {
    title: 'Construction & Building',
    Svg: <ConstructionBuilding width={100} height={60} />,
  },
  {
    title: 'Decorations',
    Svg: <Decorations width={100} height={60} />,
  },
  {
    title: 'Dietetic',
    Svg: <Dietetic width={100} height={60} />,
  },
  {
    title: 'Dry Cleaning',
    Svg: <DryCleaning width={100} height={60} />,
  },
  {
    title: 'Electrician & Mechanics',
    Svg: <ElectricianMechanics width={100} height={60} />,
  },
  {
    title: 'Electronic',
    Svg: <Electronic width={100} height={60} />,
  },
  {
    title: 'Event',
    Svg: <Event width={100} height={60} />,
  },
  {
    title: 'Fashion',
    Svg: <Fashion width={100} height={60} />,
  },
  {
    title: 'Food & Fruits',
    Svg: <FoodAndFruits width={100} height={60} />,
  },
  {
    title: 'Found Objects',
    Svg: <FoundObjects width={100} height={60} />,
  },
  {
    title: 'Furniture',
    Svg: <Furniture width={100} height={60} />,
  },
  {
    title: 'Hair Salon',
    Svg: <HairSalon width={100} height={60} />,
  },
  {
    title: 'Hand Made',
    Svg: <HandMade width={100} height={60} />,
  },
  {
    title: 'Hand Phone',
    Svg: <HandPhone width={100} height={60} />,
  },
  {
    title: 'Health Care',
    Svg: <HealthCare width={100} height={60} />,
  },
  {
    title: 'Home Appliance',
    Svg: <HomeAppliance width={100} height={60} />,
  },
  {
    title: 'Home Services',
    Svg: <HomeServices width={100} height={60} />,
  },
  {
    title: 'Hotel',
    Svg: <Hotel width={100} height={60} />,
  },
  {
    title: 'Insurance',
    Svg: <Insurance width={100} height={60} />,
  },
  {
    title: 'Jobs',
    Svg: <Jobs width={100} height={60} />,
  },
  {
    title: 'Legal Services',
    Svg: <LegalServices width={100} height={60} />,
  },
  {
    title: 'Leisure & Outings',
    Svg: <LeisureOutings width={100} height={60} />,
  },
  {
    title: 'Lingerie',
    Svg: <Lingerie width={100} height={60} />,
  },
  {
    title: 'Mass Media',
    Svg: <MassMedia width={100} height={60} />,
  },
  {
    title: 'Meet',
    Svg: <Meet width={100} height={60} />,
  },
  {
    title: 'Motorcycle & Bike',
    Svg: <MotorCycleBike width={100} height={60} />,
  },
  {
    title: 'Other Services',
    Svg: <OtherServices width={100} height={60} />,
  },
  {
    title: 'Others',
    Svg: <Others width={100} height={60} />,
  },
  {
    title: 'Phone',
    Svg: <Phone width={100} height={60} />,
  },
  {
    title: 'Printing Press',
    Svg: <PrintingPress width={100} height={60} />,
  },
  {
    title: 'Real Estate',
    Svg: <RealState width={100} height={60} />,
  },
  {
    title: 'Restaurants & Bars',
    Svg: <RestaurantBars width={100} height={60} />,
  },
  {
    title: 'Shopping - Ready to Wear',
    Svg: <ShoppingReadyToWear width={100} height={60} />,
  },
  {
    title: 'Shopping - Thrift Store',
    Svg: <ShoppingThriftStore width={100} height={60} />,
  },
  {
    title: 'Sport Accessories',
    Svg: <SportAccessories width={100} height={60} />,
  },
  {
    title: 'Supermarket',
    Svg: <SuperMarket width={100} height={60} />,
  },
  {
    title: 'Tattoo',
    Svg: <Tattoo width={100} height={60} />,
  },
  {
    title: 'Towing',
    Svg: <Towing width={100} height={60} />,
  },
  {
    title: 'Trading - Import & Export',
    Svg: <TradingImportExport width={100} height={60} />,
  },
  {
    title: 'Traditional Medicine',
    Svg: <TraditionalMedicine width={100} height={60} />,
  },
  {
    title: 'Veterinarians',
    Svg: <Veterinarians width={100} height={60} />,
  },
];

export default categories;
