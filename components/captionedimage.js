/*
 * An image with a title and caption to the left of it.
 */

const CaptionedImageTemplate =
`<div class="preview-img-w-text">
  <div class="preview-img-text">
    <div class="preview-subtitle">
      <a v-if="captionHrefExists" :href="captionHref">
        {{ caption }}
      </a>
      <div v-else>
        {{ caption }}
      </div>
    </div>
    <div class="preview-img-description">
      <slot></slot>
    </div>
  </div>
  <div class="preview-img-img">
    <a v-if="imgHrefExists" :href="imgHref">
      <img class="preview-img" :src="imgsource" :srcset="imgsrcset" :sizes="imgsizes" alt="Apptract icon">
    </a>
    <div v-else>
      <img class="preview-img" :src="imgsource" :srcset="imgsrcset" :sizes="imgsizes" alt="Apptract icon">
    </div>
  </div>
</div>`;

const CaptionedImage = {
  props: ['caption', 'captionHref', 'imgsource', 'imgHref', 'imgsrcset', 'imgsizes'],
  template: CaptionedImageTemplate,
  computed: {
    captionHrefExists() {
      return this.captionHref.length > 0;
    },
    imgHrefExists() {
      return this.imgHref.length > 0;
    }
  }
};

export {CaptionedImage};
