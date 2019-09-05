/**
 * Returns the string which represents a GraphQL query or mutation.
 *
 * No substitutions are allowed.
 *
 * @example
 *  graphql`query MyQuery { example }` // => 'query MyQuery { example }'
 */
export function graphql(
  literals: readonly string[],
  ...substitutions: never[]
): string {
  if (literals.length === 1 && substitutions.length === 0) {
    return literals[0];
  }
  throw new TypeError(
    `Expected graphql to be called as a template function with no substitutions`,
  );
}

export const CLIENT_ID = '8bcdec13-837a-40be-a867-4bd744631cb3';
