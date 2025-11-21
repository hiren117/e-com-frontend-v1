type SortOption = {
  name: string;
  href: string;
  current: boolean;
};

type SubCategory = {
  name: string;
  href: string;
};
// multi select filters
type multiFilterOption = {
  value: string;
  label: string;
  checked: boolean;
};
type multiFilterSection = {
  id: string;
  name: string;
  options: multiFilterOption[];
};
//-----------------------

// single select filters
type singleFilterOption = {
  value: string;
  label: string;
};
type singleFilterSection = {
  id: string;
  name: string;
  options: singleFilterOption[];
};
// ------------------------------------

export const sortOptions: SortOption[] = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

{/*const subCategories: SubCategory[] = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
];*/}

export const multiFilters: multiFilterSection[] = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'S', label: 'S', checked: false },
      { value: 'M', label: 'M', checked: false },
      { value: 'L', label: 'L', checked: false },
    ]
  },
  
    ];

export const singleFilters: singleFilterSection[] = [
  {
    id: 'Price',
    name: 'Price',
    options: [
      { value: 'All', label: 'All' },
      { value: 'Under-500', label: 'Under 500'},
      { value: '500-1000', label: '500 - 1000'},
      { value: '1500-2000', label: '1500 - 2000'},
      { value: '1000-1500', label: '1000 - 1500' },
      { value: 'Above-2000', label: 'Above 2000'},
    ],
  },
  {   id: 'Discount Range',
      name: 'Discount Range',
      options: [{ value: 'All', label: 'All' },
                {value: '10-20', label: '10% - 20%'},
                {value: '20-30', label: '20% - 30%'},
                {value: '30-40', label: '30% - 40%'},
                {value: '40-50', label: '40% - 50%'},
                {value: '50-Above', label: '50% & Above'},
              ]
  },
  {    id: 'Availability',
    name: 'Availability',
    options: [
      {value: 'All', label: 'All'}, 
      { value: 'In-Stock', label: 'In Stock'},
      { value: 'Out-of-Stock', label: 'Out of Stock'},
    ],
  }
  
];
