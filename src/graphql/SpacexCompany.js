import { gql } from '@apollo/client';

export const GET_SPACEX_INFO = gql`
   query GET_SPACEX_INFO {   
    company {
        founder
        employees
        founded
        name
        summary
        vehicles
        links {
          elon_twitter
          flickr
          twitter
          website
        }
    }
  }
`;
