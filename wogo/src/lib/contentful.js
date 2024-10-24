import fetch from 'node-fetch';

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export const fetchGraphQLData = async (query) => {
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${ujjnpzbu47yu}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${'CgGJdRcykhP8nVcS1XTiF9yzouz6ZHqLuk6yK3_QVfc'}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const json = await response.json();
  return json.data; 
};

