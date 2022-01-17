import { gql } from '@apollo/client';

export const GET_LAUNCHES_INFO = gql`
   query GET_LAUNCHES_INFO {   
   launchesPast(limit: 10) {
        links {
            article_link
            flickr_images
        }
        id
        mission_name
        rocket {
            rocket {
              id
              name
            }
          }
        launch_year
    }
}
`;
