# Gruum UI Test

Follow the [typography](docs/design/typography.md) guidelines when setting type.

## Color

Always color with these tokens. Do not paste a hex or invent a new color.

- The page background is `--color-bg-canvas`. Raised panels, cards, and nested fills step up through `--color-bg-surface-1`, `--color-bg-surface-2`, then `--color-bg-surface-3`. Do not use a surface as the page canvas, and do not skip a step for a nested fill.
- Default dividers and outlines use `--color-border-subtle`. Use `--color-border-strong` when a control or card needs a clearer edge. Do not use a border token as a fill.
- Titles and primary labels use `--color-text-primary`. Body and supporting copy use `--color-text-secondary`. Placeholders and quiet chrome use `--color-text-tertiary`. Text on an accent fill uses `--color-text-inverse`. Do not put `--color-text-inverse` on the canvas, and do not use secondary or tertiary for the main sentence.
- Accent actions, kickers, and selected marks use `--color-accent-default`. Hover on those actions uses `--color-accent-hover`. Soft accent fills use `--color-accent-soft`. Do not paint large backgrounds with `--color-accent-default`.
- `--amber-400`, `--amber-500`, and `--amber-900` only feed the accent tokens. Use `--color-accent-hover`, `--color-accent-default`, and `--color-accent-soft` in UI instead of the amber tokens.
- Secondary emphasis uses `--color-secondary-default` with `--color-secondary-soft` as the fill. Positive status uses `--color-success-default` with `--color-success-soft`. Destructive actions and errors use `--color-danger-default`, `--color-danger-hover`, and `--color-danger-soft`. Do not mix accent, secondary, success, and danger roles.
- Tag chrome uses `--color-tag-accent-border`, `--color-tag-success-border`, and `--color-tag-secondary-text` with the matching soft fills. Do not use tag tokens on buttons, inputs, or page backgrounds.

## Buttons and links

Use the contract looks. Do not invent a new variant or skip a defined state.

- Primary is the one main action on a screen or form (Talk to sales in the header, Get started → in the hero, submit on a form). Do not place two Primary actions side by side.
- Secondary sits next to Primary as the other choice (See the platform). Do not use Secondary as the only call to action.
- Ghost is a quiet action that should not compete (Reset defaults). Do not use Ghost for the main action.
- Destructive is for irreversible harm (Freeze desk). Do not use Destructive for cancel or navigation.
- Link is for destinations in the header and in copy. Do not use Link for a shaped CTA.
- Book demo and Get Help are the contact tabs: Book demo to schedule a walkthrough, Get Help to ask a question. Do not style those tabs as Primary.
- Select a country is the country picker trigger. Do not restyle it as Primary, Secondary, or Ghost.
- Keep default, hover, focus, active, and disabled as the contract defines them. Do not drop a state or add a new one.

## When to use each input style

- Use Field input (`InputField`) for a short single-line value such as work email or company. Do not use Field input for a long question or multi-line note.
- Use TextArea for a longer freeform message such as a help question. Do not use TextArea for a short single-line value like email or company.

## Radius

Always set corner radius with these tokens. Do not hard-code a radius.

- Compact controls (buttons, inputs, checkboxes, nav links, menus) use `--radius-md`.
- Cards, panels, and other large grouped surfaces use `--radius-lg`.
- Tags, radios, and fully rounded chips use `--radius-pill`.
- Do not mix radius tokens on one control, use `--radius-pill` on a card, or use `--radius-lg` on a small control.
