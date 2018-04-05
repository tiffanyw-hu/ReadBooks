export const signin = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: 'api/user',
    data: {user}
  })
);

export const signout = user => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
