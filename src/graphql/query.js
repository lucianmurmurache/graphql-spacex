import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
    {
        shipsResult {
            data {
                active
                image
                model
                name
                type
                successful_landings
                year_built
                missions {
                    name
                }
            }
        }
    }
`;
