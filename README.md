# Must Archive — Cloud Sync Version

## Before uploading

In Supabase:

1. Open SQL Editor.
2. Create a new query.
3. Paste the contents of `supabase-setup.sql`.
4. Click Run.

## Replace the old website

1. Extract this ZIP.
2. In your GitHub repository, delete or overwrite the old `index.html`.
3. Upload this new `index.html`.
4. Commit the change.
5. Wait about 1–2 minutes for GitHub Pages to update.

## Using the site

1. Click **Sign in**.
2. Choose **Create account**.
3. Confirm the email Supabase sends you.
4. Return to the site and sign in.
5. Add entries normally.

The same archive will appear on every device after signing into the same account.


## Starter anime importer

After signing in, click **Import starter anime** in the top navigation.

The importer:
- assigns the signed-in user's ID automatically;
- looks up portrait cover artwork;
- saves the records into Supabase;
- skips existing titles to avoid duplicates.

The artwork lookup uses Jikan's public MyAnimeList metadata API. If an artwork
lookup temporarily fails, the title is still imported and its cover can be edited later.
