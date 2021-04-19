import { InMemoryCache, makeVar } from "@apollo/client";

//Since the graphbrainz database is relay-like, relayStylePagination makes it easier to handle pagination (for infinte scrolling)
import { relayStylePagination } from "@apollo/client/utilities";

//local state variables
export const favoritesVar = makeVar({});
export const searchTermVar = makeVar("");
export const submittedSearchTermVar = makeVar("");
export const sidebarExpandedVar = makeVar(false);

/*
Notes: The queries to get search suggestions and to make the actual search are different (number of requested results, fields..) so there are two 'similar' variables searchTerm and submittedSearchTerm. The first one will be used to track the value in the search input whereas submittedSearchTerm will keep the value upon which a complete search was performed. 
*/
export const cache = new InMemoryCache({
  typePolicies: {
    SearchQuery: {
      fields: {
        // Keep searches separated by args.query (but not by any other arguments (e.g endCurosr), since the field policy will handle them).
        artists: relayStylePagination(["query"]),
      },
    },
    Query: {
      search: relayStylePagination(),
      fields: {
        favorites: {
          read() {
            return favoritesVar();
          },
        },
        sidebarExpanded: {
          read() {
            return sidebarExpandedVar();
          },
        },
        searchTerm: {
          read() {
            return searchTermVar();
          },
        },
        submittedSearchTerm: {
          read() {
            return submittedSearchTermVar();
          },
        },
        lookup: {
          merge(existing, incoming) {
            if (!incoming) return existing;
            if (!existing) return incoming; // existing will be empty the first time

            return {
              ...incoming,
              ...existing,
            };
          },
        },
      },
    },
  },
});
