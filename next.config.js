/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  env: {
    GOOGLE_ID:
      "502643690957-i9m9gnvu455eit28drf22hmgi0qj4gkc.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    FIREBASE: "AIzaSyCIkVWjW1eMpmoWNZNlyOYiMHyH3FOeVGM",
  },
};

module.exports = nextConfig;
