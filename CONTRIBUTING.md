## Contributing

We are primarily looking for contributions from designers and developers. If you can design logos or improve the website, please do!

### Adding your logo 

We're always looking to add more logos to our collection. If you can design an original, beautiful logo, we invite you to submit your design(s). Take a look at https://www.librelogos.org/all/ to view examples of what we're looking for. 

We won't tell you how to style your logo or what software to use. We will be happy with anything you deliver, as long as it fulfills the following criteria:
- Original and unique: That is, not copied from someone or too similar to an existing brand. It should be your own work.
- Unused: Not being used by another company or project.
- Beautiful: Nice to look at.

#### Files required

You are required to submit your logo in two formats -- PNG and SVG. Both of them should be named following the format `number-short-name`. "Number" is the position relative to the last-added logo. For instance, if the latest addition was named `40-something-something`, you can name your files something like `41-something-something`. 
- For PNG: The logo itself should be around 250 pixels wide, on a square white background with dimensions 400 x 400 pixels.
- For SVG: It should be around 250 pixels wide.

If you are still not sure about how to go about it, take a look at [existing logo images](src/images/logos) for guidance.

#### How to add a logo
You don't need to know a lot of git to add your logo to the collection. It can be done directly from the GitHub interface. Here's how to do it:
1. Fork this repository.
2. Create a new branch in your fork and enter into the branch.
3. Upload a PNG image of your logo to [src/images/logos](src/images/logos).  
4. Upload the editable SVG format of your logo to [src/images/logos/svg](src/images/logos). 
5. For your logo to display on the website, details about it should be added to the logo list. Navigate to [src/data/logos.js](src/data/logos.js). It is difficult to explain how exactly to edit this file. We hope that by looking at the existing values, it is intuitive enough for you to know what to do. Here's some additional guidance:
    - First, at the top of the file, import the PNG image of your logo. It can be done with something like this: 
    ```
    import imageName from "../images/logos/number-something-something.png"
    ```
    - At the bottom of the file, before the ending square bracket (`]`), copy and paste the following template, and then replace the values after each colon (`:`) with custom information about your logo:

    ```
    {
        id: "imageNumber",
        description: `Unique, elegant geometric pineapple fruit cube logo composed of several shapes. This mark is works for projects/organisations in any industry.`,
        availability: "Available",
        name: "Logo name",
        img: imageName,
    },
    ```
6. Return to this repository and [create a pull request](https://github.com/enjeck/libre-logos/pulls).

If you find the above process too lengthy or confusing, you can bypass it. Simply create an issue containing the PNG and SVG files. Someone else will perform the above procedure for you. 

#### Copyright

Once a logo is added to the collection, copyright belongs to you (the designer) until the logo is claimed, at which point, copyright then tranfers to project that claimed the logo. 

### Contributing to the website

If you intend to make changes to the website, here are some things you should know:

#### Technical details

The [librelogos.org](https://www.librelogos.org/) website is built with Gatsby, a site generator based on React.

The main code responsible for the website's design and functionality is found at [src/components](src/components), [src/helpers](src/helpers) and [src/pages](src/page). The logos files, both PNG and SVG, are held at [src/images/logos](src/images/logos). Data about all logos can be found at [src/data/logos.js](src/data/logos.js). This is where to indicate whether a logo is claimed or not, using the `availability` key.

The `logo` route is dynamically generated using the Gatsby createPage API. To stop the client side router serving the 404 page on `/logo` requests, there is a [conditional check](./src/pages/404.js).

In the future, this website may be rewritten and architected to use of Gatsby's new [File System Router API](https://www.gatsbyjs.com/docs/reference/routing/creating-routes/#using-the-file-system-route-api).

#### Building a local version:

1. Clone the repository

    ``` 
    git clone https://github.com/enjeck/libre-logos.git
    ```
2. Enter the project folder and install node modules

    ``` 
    cd libre-logos
    npm install 
    ```
3. Run
    - `npm start` to develop
    - `npm run build` to build
    - `npm run serve` to serve built site

### Other ways to contribute

Aside from submitting a logo or adding to the codebase, there are other things you can do. The easiest way to contribute is to [create an issue](https://github.com/enjeck/libre-logos/issues/new) reporting a bug or requesting a feature. For example, if there's a spelling error, broken link, something that doesn't work as expected, let me know. It's okay to suggest improvements to existing logos, but asking for custom logo will likely not be addressed. 