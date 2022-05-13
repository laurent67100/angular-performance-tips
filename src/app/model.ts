export interface Character {
  id?: number;
  name?: string;
  height?: number;
  mass?: number;
  gender?: string;
  homeworld?: string | string[];
  wiki?: string;
  image?: string;
  born?: number;
  bornLocation?: string;
  died?: number;
  diedLocation?: string;
  species?: string;
  hairColor?: string;
  eyeColor?: string;
  skinColor?: string;
  cybernetics?: string | string[];
  affiliations?: string | string[];
  masters?: string | string[];
  apprentices?: string | string[];
  formerAffiliations?: string | string[];
  era?: string | string[];
  [key: string]: string | any;
}
