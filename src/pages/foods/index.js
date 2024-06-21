import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
      headers: { 'api-key': 'w05KKI9AWhKxzvPFtXotUva-' }
    }).then(response => {
      setFoods(response.data.data);
    });
  }, []);

  return (
    <div className="food-list">
      <h1>List of Foods</h1>
      <Link href="/foods/create" legacyBehavior>
        <a>Create Food</a>
      </Link>
      <div>
        {foods.map(food => (
          <div key={food.id} className="food-item">
            <Link href={`/foods/${food.id}`} legacyBehavior>
              <a>
                <img src={food.imageUrl} alt={food.name} />
                <h2>{food.name}</h2>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
