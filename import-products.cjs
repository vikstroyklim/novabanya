const { createClient } = require('@sanity/client');

// --- Конфигурация ---
const SANITY_PROJECT_ID = 'efy5t3gr';
const SANITY_DATASET = 'production';
const SANITY_API_TOKEN = 'skRW01pmTvgK09vY83mYV3LMoja5WfeNE3iT2WqRVZnjTdw4yLvCKEt6BESvU0DWqwPcRakKF7zaE5ElkEU6dp2W8jmqbYcMPNPuGtgkJe1Jyqtc7Em2knmIjVIEyRrgLyPwzgfzLp19xPKBjjBEPqYYHfftX0NWvB6R7TOR6bvHozRewbyj';
const PRICE_INCREASE = 84000;

// --- Данные из прайс-листа ---
const productsData = [
  { name: 'Парус 6х2,4х2,4', price: 371000, category: 'Парус' },
  { name: 'Парус 5х2,4х2,4', price: 343000, category: 'Парус' },
  { name: 'Парус 4х2,4х2,4', price: 314000, category: 'Парус' },
  { name: 'Квадро 6х2,2х2,2', price: 341000, category: 'Квадро' },
  { name: 'Квадро 5х2,2х2,2', price: 329000, category: 'Квадро' },
  { name: 'Квадро 4х2,2х2,2', price: 295000, category: 'Квадро' },
  { name: 'Квадро 3х2,2х2,2', price: 249000, category: 'Квадро' },
  { name: 'Квадроовал 6х6х2,4', price: 610000, category: 'Квадро овал' },
  { name: 'Квадроовал 6х5х2,4', price: 568000, category: 'Квадро овал' },
  { name: 'Квадроовал 6х4х2,4', price: 530000, category: 'Квадро овал' },
  { name: 'Квадроовал 5х4х2,4', price: 489000, category: 'Квадро овал' },
  { name: 'Квадроовал 4х4х2,4', price: 456000, category: 'Квадро овал' },
  { name: 'Квадроовал 5х2,4х2,4', price: 335000, category: 'Квадро овал' },
  { name: 'Викинг 4х2,4х2,7', price: 324000, category: 'Викинг' },
  { name: 'Викинг 5х2,4х2,7', price: 354000, category: 'Викинг' },
  { name: 'Викинг 6х2,4х2,7', price: 404000, category: 'Викинг' },
  { name: 'Тамбур для Викинг 1,5х2,4х2,7', price: 133000, category: 'Викинг' },
  { name: 'Бочка 210 (диаметр 2,1)', price: 186000, category: 'Бочка' },
  { name: 'Бочка 300 (диаметр 2,1)', price: 214000, category: 'Бочка' },
  { name: 'Бочка 400 (диаметр 2,1)', price: 248000, category: 'Бочка' },
  { name: 'Бочка 500 (диаметр 2,1)', price: 282000, category: 'Бочка' },
  { name: 'Бочка 600 (диаметр 2,1)', price: 314000, category: 'Бочка' },
];

// --- Логика скрипта ---
const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-04-07'
});

async function importProducts() {
  console.log('Начинаю импорт товаров...');

  // 1. Получаем ID существующих категорий
  const categories = await client.fetch(`*[_type == "category"]{_id, title}`);
  const categoryMap = categories.reduce((acc, cat) => {
    acc[cat.title] = cat._id;
    return acc;
  }, {});

  console.log('Найдены категории:', Object.keys(categoryMap));

  // 2. Готовим транзакцию для создания товаров
  const transaction = client.transaction();

  for (const product of productsData) {
    const finalPrice = product.price + PRICE_INCREASE;
    const formattedPrice = `от ${finalPrice.toLocaleString('ru-RU')} ₽`;
    const categoryId = categoryMap[product.category];

    if (!categoryId) {
      console.warn(`Внимание: Категория "${product.category}" не найдена в Sanity. Товар "${product.name}" будет создан без категории.`);
    }

    const newProduct = {
      _type: 'product',
      title: product.name,
      slug: { _type: 'slug', current: product.name.toLowerCase().replace(/\s+/g, '-').slice(0, 95) },
      price: formattedPrice,
      categories: categoryId ? [{ _type: 'reference', _ref: categoryId }] : [],
      // Поля ниже можно будет заполнить позже в админке
      description: 'Описание для этой бани будет добавлено позже.',
      specs: {
        _type: 'object',
        capacity: '-',
        length: '-',
        time: '-',
        material: '-',
        diameter: '-'
      },
      features: []
    };

    transaction.create(newProduct);
  }

  // 3. Выполняем транзакцию
  try {
    const result = await transaction.commit();
    console.log(`\nУспешно создано ${result.results.length} товаров!`)
    console.log('Теперь вы можете зайти в админ-панель и добавить к ним фотографии.');
  } catch (error) {
    console.error('\nОшибка при импорте:', error.message);
  }
}

importProducts();
