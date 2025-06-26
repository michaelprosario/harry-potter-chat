import { HarryPotterIcon, HermioneGrangerIcon, RonWeasleyIcon, DracoMalfoyIcon } from '@/components/icons';
import type { SVGProps } from 'react';

export type Character = {
  name: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export const characters: Character[] = [
  {
    name: 'Harry Potter',
    description: 'The Boy Who Lived',
    icon: HarryPotterIcon,
  },
  {
    name: 'Hermione Granger',
    description: 'Brightest Witch of Her Age',
    icon: HermioneGrangerIcon,
  },
  {
    name: 'Ron Weasley',
    description: "King of the Gryffindor chess set",
    icon: RonWeasleyIcon,
  },
  {
    name: 'Draco Malfoy',
    description: 'The boy who had no choice',
    icon: DracoMalfoyIcon,
  },
];
