import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch : "master",

  // Get this from tina.io
  clientId: "25e9a320-b343-42cd-9c01-a6b05f635ce4",
  // Get this from tina.io
  token: "c8bdaa247c56b4247552957bad953a95107c2573",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [


      {
        name: "About",
        label: "Caplove",
        path: "content/about",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },

          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
          },

          {
            type: "string",
            name: "heading",
            label: "Titre",
            description: "Grand titre",
            // list: true,
            // ui: {
            //   component: 'tags',
            // }
        
          },

          {
            type: "string",
            name: "description",
            label: "Description",
            description: "donne une description au titre",
            // list: true,
            // ui: {
            //   component: 'tags',
            // }
        
          },

          {
            type: "string",
            name: "expertise_title",
            label: "Description de l'expertise",
            description: "donne une description",
            // list: true,
            // ui: {
            //   component: 'tags',
            // }
        
          },

          {
            type: "string",
            name: "expertise_sectors",
            label: "secteur de l'expertise",
            description: "quel type de projet",
            list: true,
            ui: {
              component: 'tags',
            }
        
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "blog",
        label: "Monblog",
        path: "content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "Contact",
        label: "Contact",
        path: "content/contact",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "portfolio",
        label: "Nos Services",
        path: "content/portfolio",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      
      
      
    ],


  },
});
