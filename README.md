# Home Breed Puppy — website source (current WhatsApp-button version)

This is a static HTML/CSS/JavaScript project matching the current deployed Home Breed Puppy website structure and the latest WhatsApp + Call button update.

## Project structure

```text
home-breed-puppy/
├── README.md
└── public/
    ├── index.html
    ├── core.css
    ├── styles.css
    ├── script.js
    ├── config.js
    ├── favicon.svg
    └── assets/
        └── images/
            └── README.md
```

## Run locally

Because this is a static site, open `public/index.html` in a browser, or serve the `public` directory with any static web server. For example, from the project root:

```bash
python -m http.server 8000 --directory public
```

Then open `http://localhost:8000`.

## WhatsApp and phone

- WhatsApp CTA: `https://wa.me/9108778596730`
- The pre-filled message asks about current puppy availability.
- Call button: `+91 87785 96730`
- Update `public/config.js` if the business phone or WhatsApp number changes.

The WhatsApp number has been configured according to the link supplied in the request. Please test it on a phone before advertising it publicly.

## Images and fonts

The website currently references its puppy photos from Unsplash URLs and fonts from Google Fonts, so an internet connection is required for those assets to load. The original image files are not embedded in this ZIP; `public/assets/images/README.md` lists the image references and explains how to save local copies if you want a fully offline bundle.

## Deploy

Upload the `public` folder to a static host such as Netlify or Vercel, or push this folder to GitHub and import the repository into your host. Configure the host's publish/output directory as `public`.

## Notes

- Breed cards are labelled as examples, not a live availability list.
- No checkout, payment processing, or database is included.
- The Google review count/rating text is labelled as supplied information and should be verified against the live listing.
