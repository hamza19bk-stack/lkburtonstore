# LK Burton — lkburtonstore.shop

Static brochure site for **LK BURTON LIMITED**, built with Astro and published on
GitHub Pages at <https://lkburtonstore.shop>.

## Registered company details

Every value below comes from the public register and was last checked on
2 October 2026.

| | |
|---|---|
| Registered name | LK BURTON LIMITED |
| Company number | 13460176 |
| Registered in | England and Wales |
| Registered office | 84 Dover Road, Horninglow, Burton-On-Trent, England, DE13 0TB |
| Company type | Private limited company |
| Incorporated | 16 June 2021 |
| Register status | Active |
| Director | Chun Him Yeung |
| Public record | https://find-and-update.company-information.service.gov.uk/company/13460176 |

### Nature of business (SIC)

| Code | Description |
|---|---|
| 98000 | Residents property management |

Section 82 of the Companies Act 2006 requires the registered name, company
number, place of registration and registered office to appear on the website.
The footer does this on every page, and `npm run check` fails if any of the
three is missing from a built page.

## What still needs filling in

`src/data/site.ts` > `contact` and `social` are deliberately empty. Nothing is
invented, so an empty value simply removes its card or line from the page. Run
`npm run check` for the current checklist.

## Commands

| Command | What it does |
|---|---|
| `npm install` | install dependencies |
| `npm run dev` | local dev server |
| `npm run build` | build to `dist/` |
| `npm run check` | build, then the full quality check (contrast, dead links, statutory disclosure, forbidden claims) |

## Editing the content

| File | Holds |
|---|---|
| `src/data/site.ts` | facts: register details, contact, navigation, SEO |
| `src/data/overrides.ts` | this site's page copy |
| `src/data/copy.ts` | the shared base copy that overrides are merged over |
| `src/styles/theme.css` | the whole visual identity (colours, fonts, radii) |

Theme: `dark`, layout family `default`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: quality check, build,
then deploy to GitHub Pages. A failing check blocks the deploy.
