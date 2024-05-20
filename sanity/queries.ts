import { client } from "./lib/client";

export const getDestinations = `*[_type == "destination"] {
  title,
  slug,
  _updatedAt,
  _id
}`;

// export const getDestination = `*[_type == "destination" && slug.current == $slug] {
//   title,
//     slug,
//     _updatedAt,
//     _id
// }`;

