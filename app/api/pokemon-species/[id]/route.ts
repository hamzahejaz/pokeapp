import { handleApiRequest, fetchExternal } from '@/lib/api-utils';
import { PokemonSpecies } from '@/types';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  return handleApiRequest(async () => {
    const { id } = await params;
    const response = await fetchExternal(`${API_BASE_URL}/pokemon-species/${id}`);
    const data: PokemonSpecies = await response.json();
    return data;
  });
}
