import { NextResponse } from 'next/server';

export interface ApiError {
  error: string;
  status: number;
  message?: string;
}

export interface ApiSuccess<T> {
  data: T;
  status: number;
}

// Common error response formatter
export function errorResponse(message: string, status: number = 500): NextResponse {
  return NextResponse.json(
    { error: message, status },
    { status }
  );
}

// Common success response formatter
export function successResponse<T>(data: T, status: number = 200): NextResponse {
  return NextResponse.json(data, { status });
}

// Error handler wrapper for API routes
export async function handleApiRequest<T>(
  handler: () => Promise<T>
): Promise<NextResponse> {
  try {
    const data = await handler();
    return successResponse(data);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return errorResponse(error.message, 404);
      }
      if (error.message.includes('Network error')) {
        return errorResponse('Failed to fetch data from external API', 502);
      }
      return errorResponse(error.message, 500);
    }
    return errorResponse('An unexpected error occurred', 500);
  }
}

// Fetch with error handling for external APIs
export async function fetchExternal(url: string, options?: RequestInit): Promise<Response> {
  try {
    const response = await fetch(url, {
      ...options,
      next: { revalidate: 3600 }, // 1 hour cache
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Resource not found');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error occurred');
  }
}
