/*
 * A FontAwesome icon to the left of a title.
 * Used sequentially, all icons/text are vertically aligned.
 */

const IconTitleTemplate =
`<div class="icontitle-container">
  <div class="icontitle-icon-container">
    <div class="icontitle-icon"><i :class="icon"></i></div>
  </div>
  <h3><slot></slot></h3>
</div>`;

const IconTitle = {
  props: ['icon'],
  template: IconTitleTemplate,
};

export {IconTitle};
