import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const imageBuffer = await response.arrayBuffer();
    
    // Récupérer le Content-Type et définir une valeur par défaut si c'est null
    const contentType = response.headers.get('Content-Type') || 'application/octet-stream';

    const imageBlob = new Blob([imageBuffer], { type: contentType });

    return new Response(imageBlob, {
      status: 200,
      headers: {
        'Content-Type': contentType,
      },
    });
  } catch (error) {
    console.error('Image fetch error:', error);
    return NextResponse.json({ error: 'Error fetching image' }, { status: 500 });
  }
}
