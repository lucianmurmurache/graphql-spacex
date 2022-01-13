import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  {
    launchesPast {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
        mission_patch
      }
      rocket {
        rocket_name
        rocket_type
        rocket {
          active
          description
          first_flight
          success_rate_pct
        }
      }
      ships {
        name
        home_port
        image
      }
      launch_year
    }
  }
`;
