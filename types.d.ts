interface ErrorPageProps {
    error: Error;
    reset: () => void
}

type ProductImage  = {
    id: string;
    src: string
}

type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    images: Array<ProductImage>;
    quantity: number;
    handle: string;
    tags: string;
    gql_id: string;
  };

type SmartCollectionType = {
    id: 474981040444,
    handle: 'movilidad-electrica-y-vehiculos-autonomos',
    title: 'Vehículos',
    updated_at: '2023-12-18T14:37:40-05:00',
    body_html: '',
    published_at: '2023-12-18T14:35:35-05:00',
    sort_order: 'best-selling',
    template_suffix: '',
    disjunctive: false,
    rules: [Array],
    published_scope: 'global',
    admin_graphql_api_id: 'gid://shopify/Collection/474981040444',

};

type CollectionType = {
    id: string;
    title: string;
    handle: string;
};

type CartItem = {
    title: string;
    price: number;
    quantity: number;
    id: string;
    image: string;
    merchandiseId: string;
  }