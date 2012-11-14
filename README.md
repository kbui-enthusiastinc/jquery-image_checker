# jQuery Image Checker

A simple jQuery plugin to determine if any images on your page aren't loading
properly.

## Usage

```javascript
$(".container").imageChecker({
  onSuccess: function($img) {
    // Image $img loaded successfully
  },
  onError: function($img) {
    // Image $img failed to load
  }
});
```

You can initialize on a container with multiple images in it or on a single
image.