import { Grid, Card } from '@nextui-org/react'
import React, {FC} from 'react'
import { FavoriteCardPokemon } from './';

interface Props {
    pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    return (

        // <FavoriteCardPokemon pokemonId={ id } />

        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map(id => (
                    <FavoriteCardPokemon key={ id } pokemonId={ id } />
                ))
            }
        </Grid.Container>

    )
}
