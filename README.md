# [mirrorkey.dev](https://mirrorkey.dev)

> My personal website, showcasing my projects and art.

This site was [formerly implemented in Vue](https://github.com/mirrorkeydev/mirrorkeydev.github.io-vue), but was ported to React (Hooks) both as an exercise in porting applications and in order to use [react-pig](https://github.com/nickmcmillan/react-pig), a wonderful progressive-loading image grid.
_An aside: `react-pig` was based on [`pig.js`](https://github.com/schlosser/pig.js/), whose approach is described in this [article](https://medium.com/@danrschlosser/building-the-image-grid-from-google-photos-6a09e193c74a#.n90ccpr8r) that I encourage you to check out if you're interested in how image grids like Google Photos are implemented._

## Technologies/Resources
- [React.js](https://reactjs.org/) with [Create React App](https://github.com/facebook/create-react-app)
- [Google Fonts](https://fonts.google.com/), specifically Rubik and Roboto
- [react-pig](https://github.com/nickmcmillan/react-pig) for the progressive image grid on the `art` page
- [Cloudinary free tier](https://cloudinary.com/) for hosting/on-demand resizing images
- [GitHub Pages](https://pages.github.com/) for hosting site itself, with [GitHub Actions](https://github.com/features/actions) managing the deployment

## Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Pushing to master will automatically deploy the new site.
