/*
 * A vertical box that contains a header image and
 * some text describing the box.
 */

const ImageBoxTemplate =
`<div class="imagebox">
  <a :href="link" class="imagebox-title"> {{ title }} </a>
  <div class="imagebox-subtitle"> {{ subtitle }} </div>
  <a :href="link">
    <img class="imagebox-img" :src="img" alt="Project image/logo">
  </a>
  <slot></slot>
</div>`;

const ImageBox = {
  props: ['title', 'link', 'subtitle', 'img'],
  template: ImageBoxTemplate,
};

export {ImageBox};
