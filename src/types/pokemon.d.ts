export interface Ability2 {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface Move2 {
  name: string;
  url: string;
}

export interface Move {
  move: Move2;
}

export interface Species {
  name: string;
  url: string;
}

export interface DreamWorld {
  front_default: string;
  front_female?: any;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Icons {
  front_default: string;
  front_female?: any;
}

export interface Icons2 {
  front_default: string;
  front_female?: any;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Sprites {
  back_default: string | null;
  front_default: string | null;
}

export interface PokemonInterface {
  abilities: Ability[];
  forms: Form[];
  height: number;
  id: number;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  types: Type[];
  weight: number;
}

export interface getPokemonsResult {
  count: number;
  // next: string | null;
  // previous: string | null;
  status: number;
  pokemons: Array<PokemonInterface>;
}
