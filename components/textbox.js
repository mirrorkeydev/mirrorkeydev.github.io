/*
 * A centered box intended to contain large amounts of text.
 * May also contain other content, such as images.
 */

const TextBoxTemplate =
`<div>
  <div class="textbox-title"> {{ title }} </div>
  <div class="textbox">
    <slot></slot>
  </div>
</div>`;

const TextBox = {
  template: TextBoxTemplate,
  props: ['title'],
};

export {TextBox};
