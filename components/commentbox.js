/*
 * A comment left by a user.
 */

const CommentBoxTemplate =
`<div class="commentbox-container">
  <div class="commentbox-author">
    <div class="commentbox-status commentbox-tooltip" :style="{ backgroundColor: statusColor }">
      <div class="commentbox-tooltip-text">
        Sentiment: {{ roundedSentiment }}
      </div>
    </div>
    {{ author }}
  </div>
  <div class="commentbox-date"> {{ date }} UTC</div>
  <div class="commentbox-body">
    <slot></slot>
  </div>
</div>`;

const CommentBox = {
  template: CommentBoxTemplate,
  props: ['author', 'date', 'sentiment'],
  computed: {
      statusColor() {
        const colors = ['#f75d5d', '#f3885d', '#efb15d', '#ebd75d', 
          '#d3e75d', '#a9e25e', '#a9e25e'];

        if (this.sentiment >= -1 && this.sentiment <= 1) {
          // Map the range of -1, 1 to the indices in colors (0 to 6)
          // and retrieve the color that corresponds to the sentiment value.
          return colors[Math.floor((this.sentiment + 1)/(2/7))];
        }
        else {
          return '#d5d5d5';
        }
      },
      roundedSentiment() {
        return Math.round((this.sentiment + Number.EPSILON) * 100) / 100;
      }
  }
};

export {CommentBox};
