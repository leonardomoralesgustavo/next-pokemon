import { Text, useTheme, Spacer, Link } from '@nextui-org/react';
import Image from 'next/image';

import NextLink from 'next/link';

export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0x 20px',
      backgroundColor: '#404040'
    }}>

      <NextLink href='/' passHref>
        <Link>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
          />
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okemón</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref> 
        <Link css={{ marginRight:'20px' }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
