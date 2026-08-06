# Account email and password-reset setup

## Included in Build 103

- Forgot password link on the login form
- Supabase password-reset email request
- New-password form after the user opens the recovery link
- Joined Date and Account Email in Settings

## Supabase redirect URL

In Supabase Dashboard:

1. Open **Authentication → URL Configuration**.
2. Set **Site URL** to your live GitHub Pages site.
3. Add the same live URL under **Redirect URLs**.

Example:

`https://your-username.github.io/your-repository/`

The password-reset link must be allowed to return to this URL.

## Email branding

Open:

**Supabase Dashboard → Authentication → Email Templates**

Edit the **Confirm signup** and **Reset password** templates.

Recommended subject lines:

- Confirm signup: `Confirm your MAKS Archives account`
- Reset password: `Reset your MAKS Archives password`

Use the Supabase template variables already shown in the dashboard, especially the confirmation URL variable. Keep the message short, branded and clear.

For full control over the sender name, sender address and delivery reputation, configure custom SMTP under:

**Project Settings → Authentication → SMTP Settings**

Do not remove the confirmation or recovery link variable from the templates.
