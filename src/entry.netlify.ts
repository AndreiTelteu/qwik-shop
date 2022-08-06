import { StreamWriter } from '@builder.io/qwik/server';
import render from './entry.ssr';

const handler = async (request: Request) => {
  try {
    // Handle static files
    if (/\.\w+$/.test(request.url)) {
      return;
    }

    let ssrHtml = '';
    const writableStream = {
      write: (chunk) => {
        ssrHtml += chunk;
      },
    } as StreamWriter;

    const ssrResult = await render({
      stream: writableStream,
      url: request.url,
      base: '/build/',
    });

    const response = new Response(ssrHtml, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
    
    return response;
  } catch (e) {
    // 500 Error
    return new Response(String(e), { status: 500 });
  }
};

export default handler;
