import { HarryPotterIcon, HermioneGrangerIcon, RonWeasleyIcon, DracoMalfoyIcon, AlbusDumbledoreIcon, SeverusSnapeIcon, LunaLovegoodIcon, LordVoldemortIcon } from '@/components/icons';
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
  {
    name: 'Albus Dumbledore',
    description: 'Headmaster of Hogwarts',
    icon: AlbusDumbledoreIcon,
  },
  {
    name: 'Severus Snape',
    description: 'Potions Master',
    icon: SeverusSnapeIcon,
  },
  {
    name: 'Luna Lovegood',
    description: 'Sees the world differently',
    icon: LunaLovegoodIcon,
  },
  {
    name: 'Lord Voldemort',
    description: 'He-Who-Must-Not-Be-Named',
    icon: LordVoldemortIcon,
  },
];
