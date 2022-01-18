import { gql } from '@apollo/client';

export const GET_ROCKETS = gql`
query GET_ROCKETS {
    rockets {
      id
      name
      country
      company
      description
      cost_per_launch
      height {
        meters
      }
      diameter {
        meters
      }
      mass {
        kg
      }
      }
    }
`;

export const GET_ROCKET_INFO = gql`
    query GET_ROCKET_INFO($rocketId: ID!) {
        rocket(id: $rocketId) {
          country
          name
          id
          height {
            meters
          }
          diameter {
            meters
          }
          description
          stages
          cost_per_launch
          engines {
            number
          }
        }
    }
`;
