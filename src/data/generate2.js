let cateObj = {};
const categories = [
  {
    advertisement: 'Publicité',
  },
  {
    allNightDrugStore: 'Pharmacie de nuit',
  },
  {
    art: 'Art',
  },
  {
    backToSchool: "Retour à l'école",
  },
  {
    bikesByCycle: 'Vélos par cycle',
  },
  {
    careBeauty: 'Soins & beauté',
  },
  {
    cars: 'Voitures',
  },
  {
    constructionBuilding: 'Construction & bâtiment',
  },
  {
    backToSchool: "Retour à l'école",
  },
  {
    bikesByCycle: 'Vélos par cycle',
  },
  {
    careBeauty: 'Soins & beauté',
  },
  {
    cars: 'Voitures',
  },
  {
    constructionBuilding: 'Construction & bâtiment',
  },
  {
    decorations: 'Décorations',
  },
  {
    dietetic: 'Diététique',
  },
  {
    dryCleaning: 'Nettoyage à sec',
  },
  {
    electricianMechanics: 'Électricien & mécanique',
  },
  {
    electronic: 'Électronique',
  },
  {
    event: 'Événement',
  },
  {
    fashion: 'Mode',
  },
  {
    foodFruits: 'Aliments & fruits',
  },
  {
    foundObjects: 'Objets trouvés',
  },
  {
    furniture: 'Mobilier',
  },
  {
    hairSalon: 'Salon de coiffure',
  },
  {
    handMade: 'Fait à la main',
  },
  {
    handPhone: 'Téléphone portable',
  },
  {
    healthCare: 'Soins de santé',
  },
  {
    homeAppliance: 'Appareils ménagers',
  },
  {
    homeServices: 'Services à domicile',
  },
  {
    hotel: 'Hôtel',
  },
  {
    insurance: 'Assurance',
  },
  {
    jobs: 'Emplois',
  },
  {
    legalServices: 'Services juridiques',
  },
  {
    leisureOutings: 'Loisirs & sorties',
  },
  {
    lingerie: 'Lingerie',
  },
  {
    massMedia: 'Médias de masse',
  },
  {
    meet: 'Rencontre',
  },
  {
    motorcycleBike: 'Moto & vélo',
  },
  {
    otherServices: 'Autres services',
  },
  {
    others: 'Autres',
  },
  {
    phone: 'Téléphone',
  },
  {
    printingPress: 'Imprimerie',
  },
  {
    realEstate: 'Immobilier',
  },
  {
    restaurantsBars: 'Restaurants & bars',
  },
  {
    shoppingReadyToWear: 'Shopping - Prêt-à-porter',
  },
  {
    shoppingThriftStore: "Shopping - Magasin d'occasion",
  },
  {
    sportAccessories: 'Accessoires de sport',
  },
  {
    supermarket: 'Supermarché',
  },
  {
    tattoo: 'Tatouage',
  },
  {
    towing: 'Remorquage',
  },
  {
    tradingImportExport: 'Commerce - Importation et exportation',
  },
  {
    traditionalMedicine: 'Médecine traditionnelle',
  },
  {
    veterinarians: 'Vétérinaires',
  },
];

categories.map(item => {
  cateObj = {
    ...cateObj,
    ...item,
  };
});

const fs = require('fs');
fs.writeFile('categories-fr.json', JSON.stringify(cateObj), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Categories dumped to categories.json');
});
