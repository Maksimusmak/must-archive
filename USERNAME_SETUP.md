# Username personalisation setup

## Included changes

- Sign-up now includes a required Username field.
- The username controls the branding throughout the site.
- Example: username `Andos` becomes `ANDOS ARCHIVES`.
- Archiva uses the signed-in user's name in her messages.
- Existing accounts fall back to the first part of their email address.
- Users can rename their archive from the Settings panel.

## Supabase update required

No SQL update is required for this version.

The username is stored in Supabase Auth metadata:

```js
client.auth.signUp({
  email,
  password,
  options: {
    data: { username }
  }
});
```

To view it:

1. Open your Supabase project.
2. Go to Authentication.
3. Open Users.
4. Select a user.
5. Look under User Metadata for `username`.

## Username uniqueness

This version treats usernames as display names, so duplicates are allowed.

If you want every username to be globally unique later, run the included:

`optional_unique_usernames.sql`

That table is optional and is not required for this website build.

## Uploading the update

1. Extract the ZIP.
2. Replace the existing GitHub Pages files with everything from the extracted folder.
3. Commit the changes.
4. Wait for GitHub Pages to redeploy.
5. Create a new test account and enter a username.
