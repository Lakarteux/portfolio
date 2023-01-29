import lightGallery from "../node_modules/lightgallery/lightgallery.umd.js";

lightGallery(document.getElementById("lG"), {
  selector: ".imagenes",
  plugins: [
    lgZoom,
    lgAutoplay,
    lgComment,
    lgFullscreen,
    lgHash,
    lgPager,
    lgRotate,
    lgShare,
    lgThumbnail,
    lgVideo
  ],
  licenseKey: "your_license_key",
  speed: 500
});
