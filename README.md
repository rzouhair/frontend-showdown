# Nuxt 3 Vue school Frontend showdown

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Sanity project setup

### Using my deployed version
Setup the local Nuxt project

1- Create a `.env` file in the root directory of the project

2- Copy the following environment variables:
```bash
NUXT_SANITY_PROJECT_ID=ljsq0mh4
NUXT_SANITY_DATASET=production
```

3- Start the development server (follow the instructions below)
4- Head to `http://localhost:3000`

#### Access

### Setting up a new project
1- Follow [this guide](https://www.sanity.io/docs/installation) to create a new project
2- Create the following files in `your-sanity-project/schemaTypes`:

- `your-sanity-project/schemaTypes/homePage.ts`
```ts
import { defineType } from "sanity";

export const pageType = defineType({
  name: 'HomePage',
  title: 'Landing Page Content',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'h1', title: 'H1 Heading', type: 'array', of: [{ type: 'block' }] },
        { name: 'paragraph', title: 'Paragraph Text', type: 'text' },
        { name: 'callToAction', title: 'Call to Action Text', type: 'string' },
      ],
    },
    {
      name: 'lessonsAndCourses',
      title: 'Lessons & Courses',
      type: 'object',
      fields: [
        { name: 'videos', title: 'Video lessons', type: 'number' },
        { name: 'courses', title: 'Courses', type: 'number' },
        { name: 'hours', title: 'Total hours', type: 'number' },
      ]
    },
  ],
})
```

- `your-sanity-project/schemaTypes/plans.ts`
```ts
import { defineType } from "sanity";

export const plansType = defineType({
  name: 'plan',
  title: 'Plans',
  type: 'document',
  fields: [
    { name: 'title', title: 'Card Title', type: 'string' },
    { name: 'price', title: 'Price per seat $', type: 'number' },
    {
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      of: [{
        title: 'Bullet Point',
        type: 'object',
        fields: [
          { name: 'text', title: 'Text', type: 'string' },
          {
            name: 'included',
            title: 'Included',
            type: 'boolean',
            description: 'Is this feature included in this plan?',
          },
          {
            name: 'highlighted',
            title: 'Highlighted',
            type: 'boolean',
            description: 'Highlight this bullet point?',
          },
        ],
      },],
    },
    { name: 'suggestedCourse', title: 'Suggested Course', type: 'string' },
  ],
})

```

3- Export the schema types in your `your-sanity-project/schemaTypes/index.ts` as follows:
```ts
import { plansType } from "./plans";
import { pageType } from "./homePage";

export const schemaTypes = [pageType, plansType]
```

4- To access the dashboard, feel free to use editor account I created:
```bash
zouhairrouika25@gmail.com
ddGd4@qEv5M3s4-
```


4- Head to your local Sanity server `http://localhost:3333` and create new records

## Records examples

### Home Page data (Hero section and Courses Stats):

To achieve the result of the highlighted/colored text in the Hero H1, bold it in the blocks editor as follows:
<img width="637" alt="image" src="https://github.com/rzouhair/frontend-showdown/assets/66704928/3f86a6d3-5251-4762-b382-5f23378b44cd">

---

The rest fields are pretty straightforward:
<img width="687" alt="image" src="https://github.com/rzouhair/frontend-showdown/assets/66704928/c51e3759-3ca6-4451-b823-347e43d4b332">

### Pricing section (Plans)

The plans section is as well pretty straightforward, you create the plans by filling in the form:

<span style="color: red"> *Please note that the frontend will only show the first 3 plans* </span>

<img width="666" alt="image" src="https://github.com/rzouhair/frontend-showdown/assets/66704928/8ef32a3e-4aaa-4d0f-830c-ffc172e77290">




## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
