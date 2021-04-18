import { InMemoryCache, makeVar } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const favoritesVar = makeVar({});
export const searchTermVar = makeVar({ value: "", ready: false });
export const cache = new InMemoryCache({
  typePolicies: {
    SearchQuery: {
      fields: {
        // Keep searches separated by args.query (but not by any other
        // arguments, since the field policy will handle them).
        artists: relayStylePagination(["query"]),
      },
    },
    Query: {
      fields: {
        favorites: {
          read() {
            return favoritesVar();
          },
        },
        searchTerm: {
          read() {
            return searchTermVar();
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
        search: relayStylePagination(),
      },
    },
  },
});
