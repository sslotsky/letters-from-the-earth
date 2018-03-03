export const authenticated = state => {
  return !!state.identity.user;
};
export const user = state => state.identity.user;

const memo = {};

export default function select(transform, ...selectors) {
  return (state, props) => {
    const transformValues = selectors.map(s => s(state, props));
    const changed = transformValues.some((v, i) => {
      const s = selectors[i];
      if (v !== memo[s]) {
        memo[s] = v;
        return true;
      }

      return false;
    });

    if (changed || !memo[transform]) {
      memo[transform] = transform(...transformValues);
    }

    return memo[transform];
  };
}

export const isAuthenticated = select(
  loggedIn => ({ authenticated: loggedIn }),
  authenticated
);

export const userInfo = select(
  (user = {}, authenticated) => ({
    isAdmin: user.role === "admin",
    authenticated
  }),
  user,
  authenticated
);
