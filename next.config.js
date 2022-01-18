const isProd = process.env.NODE_ENV === "production";

module.exports = {
    basePath: isProd ? "/morelia_website" : "",
    assetPrefix: isProd ? "/morelia_website/" : "",
};