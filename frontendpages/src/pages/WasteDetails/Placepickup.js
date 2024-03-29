import { useAppContext } from '../../AppContext';
import { useState } from 'react';
import { useConfirmContext } from '../../ConfirmContext';

const Placepickup = () => {
  const { plasticData, paperData, clothesData, ewasteData, woodData } = useAppContext();
  const [pickupConfirmed, setPickupConfirmed] = useState(false);
  const { wasteData, setWasteData, totalCoins, updateTotalCoins } = useConfirmContext();
  
  const getCoins = (weight, costPerKg) => {
    return Math.round(weight * costPerKg);
  };

  const renderCategory = (data, category, costPerKg) => {
    if (data && data.items && data.weight) {
      const items = data.items.split(',').map(item => item.trim());
      const categoryText = (
        <>
          <strong>{category}:</strong> {items.join(', ')}
        </>
      );
      const weightText = `Weight(in Kg): ${data.weight}`;
      const coinsText = `Coins: ${getCoins(data.weight, costPerKg)}`;

      return (
        <div key={category}>
          <p>{categoryText}</p>
          <p>{weightText}</p>
          <p>{coinsText}</p>
        </div>
      );
    } else {
      return null; // Render nothing if data is missing or incomplete
    }
  };

  const getCoinsPerKg = (wasteType) => {
    switch (wasteType) {
      case 'Plastic':
        return 14;
      case 'Paper':
        return 10;
      case 'Ewaste':
        return 30;
      case 'Clothes':
        return 14;
      case 'Wood':
        return 10;
      default:
        return 0;
    }
  };
  
  const handleConfirmPickup = () => {
    const data = {
      category: '',
      weight: 0,
    };
    const categories = [
      { data: plasticData, type: 'Plastic', costPerKg: 14 },
      { data: paperData, type: 'Paper', costPerKg: 10 },
      { data: clothesData, type: 'Clothes', costPerKg: 14 },
      { data: ewasteData, type: 'Ewaste', costPerKg: 30 },
      { data: woodData, type: 'Wood', costPerKg: 10 },
    ];
   // let totalWeight = 0;
    //let totalCoins = 0;
    categories.forEach((categoryInfo,index) => {
      const categoryData = categoryInfo.data;
      const categoryType = categoryInfo.type;

      if (categoryData && categoryData.items && categoryData.weight) {
        const items = (categoryData.items || '').split(',').map(item => item.trim());
        const categoryText = `${categoryType}:`;
        //const weightText = `Weight(in Kg): ${categoryData.weight}`;
        //const coinsText = `Coins: ${getCoins(categoryData.weight, categoryInfo.costPerKg)}`;
       
        data.category += categoryText;
        if (items.length > 0) {
          items.forEach((item, index) => {
            if (index > 0) {
              data.category += `,${item}`;
            } else {
              data.category += `${item}`;
            }
          });
        }
        data.category += ' ';
        data.weight += parseFloat(categoryData.weight);
        const coinsPerKg = getCoinsPerKg(categoryType); // Assuming you have a function to get coinsPerKg
        updateTotalCoins(categoryData.weight, coinsPerKg);
      }
    });
   
    setWasteData(data);
    setPickupConfirmed(true);
  };

  return (
    <div className="border border-dark rounded p-4 mb-4">
      <h2 className="mb-3">Pickup Details</h2>
      {renderCategory(plasticData, 'Plastic', 14)}
      {renderCategory(paperData, 'Paper', 10)}
      {renderCategory(clothesData, 'Clothes', 14)}
      {renderCategory(ewasteData, 'Ewaste', 30)}
      {renderCategory(woodData, 'Wood', 10)}
     {pickupConfirmed && (
        <p className="success-message mb-4">Pickup confirmed successfully!</p>
      )}
      <button className="btn btn-primary confirmpickup " id="pp" onClick={handleConfirmPickup}>
        Confirm Pickup
      </button>
    </div>
  );
 
};

export default Placepickup;











