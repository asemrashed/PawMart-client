import CategoryCard from './CategoryCard';
import pets from '../../../assets/category/pets.jpg'
import accessories from '../../../assets/category/accessories.png'
import food from '../../../assets/category/food.png'
import toys from '../../../assets/category/toys.png'

const categories = [
  {
    id: 1,
    name: "Pets",
    image: pets,
  },
  {
    id: 2,
    name: "Accessories",
    image: accessories,
  },
  {
    id: 3,
    name: "Food",
    image: food,
  },
  {
    id: 4,
    name: "Toys",
    image: toys,
  },
];

const Categories = () => {
    return (
        <div className='max-w-[1200px] mx-auto py-5 md:py-15'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center mb-15'>Cathgories</h1>
            {!accessories ? (
                <div>Loading</div>
            ) : (
                <div className='w-full px-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-9'>
                    {categories.map(category => <CategoryCard key={category.id} category={category} />)}
                </div>
            )}
        </div>
    );
};

export default Categories;