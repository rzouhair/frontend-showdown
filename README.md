# Nuxt 3 Vue school Frontend showdown

## Setup

After cloning this repository, make sure to install the dependencies:

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

4- Open `http://localhost:3000`

### Setting up a new project

All steps mentioned below can be found applied in this [repository](https://github.com/rzouhair/frontend-showdown-sanity)

1- Follow [this guide](https://www.sanity.io/docs/installation) to create a new project and run it locally

2- Copy the newly created project's information into the nuxt project's `.env` file:
```bash
NUXT_SANITY_PROJECT_ID= your-project-id
NUXT_SANITY_DATASET= your-project-dataset
```

3- Create the following files in `your-sanity-project/schemaTypes`:

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

4- Export the schema types in your `your-sanity-project/schemaTypes/index.ts` as follows:
```ts
import { plansType } from "./plans";
import { pageType } from "./homePage";

export const schemaTypes = [pageType, plansType]
```

5- Head to your local Sanity server `http://localhost:3333` and create new records

---

Alternatively, to access [the deployed dashboard](https://zouhair-vueschool.sanity.studio/), feel free to use editor account I created:
```bash
Studio URL: https://zouhair-vueschool.sanity.studio/

Editor account:
zouhairrouika25@gmail.com
ddGd4@qEv5M3s4-
```

---

## How to Update dynamic data

### Home Page data (Hero section and Courses Stats):

[Example video](https://drive.google.com/file/d/1lTxVyZT6tjFRyY7wvDX4khNEXYD5f70S/view?usp=sharing)

Go to Sanity's Studio -> Landing Page content, and create a new record

#### Please note that only one record will be used in the landing page

To achieve the result of the highlighted/colored text in the Hero H1, bold it in the blocks editor as follows:
<img width="637" alt="image" src="https://github.com/rzouhair/frontend-showdown/assets/66704928/3f86a6d3-5251-4762-b382-5f23378b44cd">

---
The rest fields are pretty straightforward:

You fill in the hero section's paragraph and CTA button text

And change the stats' section data (Courses, Videos, and total hours count)

And finally click on the Publish button on the bottom right of your screen

<img width="687" alt="image" src="https://github.com/rzouhair/frontend-showdown/assets/66704928/c51e3759-3ca6-4451-b823-347e43d4b332">

### Pricing section (Plans)

[Example video](https://drive.google.com/file/d/1GbuYEyfLk6qc5mTIq2KMyeXytkkch6B2/view?usp=sharing)

The plans section is as well pretty straightforward, you create the plans by filling in the form:

## <span style="color: red"> *Please note that the frontend will only show the first 3 plans* </span>

<img width="666" alt="image" src="https://github.com/rzouhair/frontend-showdown/assets/66704928/8ef32a3e-4aaa-4d0f-830c-ffc172e77290">

And finally click on the Publish button on the bottom right of your screen

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
