import Link from 'next/link';

export default function FoodCard({ food }) {
  return (
    <div className="food-card">
      <h2>{food.name}</h2>
      <img src={food.imageUrl} alt={food.name} width="150" />
      <p>{food.description}</p>
      <Link href={`/foods/${food.id}`} legacyBehavior>
        <a className="text-blue-500">View Details</a>
      </Link>
    </div>
  );
}
