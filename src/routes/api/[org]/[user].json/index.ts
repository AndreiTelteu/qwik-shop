import type { EndpointHandler } from '@builder.io/qwik-city';

export const onGet: EndpointHandler = ({ request, params }) => {
  return {
    timestamp: Date.now(),
    method: request.method,
    url: request.url,
    params,
    node: process.versions.node,
  };
};

export const onPost: EndpointHandler = async ({ request, response }) => {
  response.headers.set('Content-Type', 'text/plain');
  return `Platform: s, Node: s, HTTP Method: ${
    request.method
  }`;
};
