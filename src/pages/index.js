import axios from 'axios';
import FoodCard from '@/components/FoodCard';
import BaseLayout from '@/layouts/BaseLayout';

export async function getServerSideProps() {
  const resp = await axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
    headers: {
      apiKey: 'w05KkI9AWhKxzvPFtXotUva-',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q',
    },
  });
  const foods = resp.data.data;
  return { props: { foods } };
}

export default function HomePage({ foods }) {
  return (
    <BaseLayout>
      <ul className="flex flex-wrap gap-4 space-y-2">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </ul>
    </BaseLayout>
  );
}
