
CSS elements are rendered as boxes. The arrangement of these boxes on the screen follows the CSS Visual Formatting Model.

![](https://github.com/AbdullA-Ababakre/blog_images/blob/main/tech/css/BFC/bfc1.png?raw=true)

Different boxes utilize distinct formatting contexts for layout, with each context having its own rendering rules. These rules determine how elements within the context are arranged and how they interact with other elements.

## Formatting Contexts

There are two primary formatting contexts:

### Block Formatting Context (BFC):

Elements with a CSS display property value of block, list-item, table, flex, or grid are considered block-level elements. Examples include div, p, ul, and li.
Each block-level element generates at least one block-level box that participates in the BFC, rendering as a distinct new line.

#### Rendering Rules for BFC:

The root element (typically the HTML element) creates a BFC, and its block-level box elements are arranged as follows:
They stack vertically, with each box expanding horizontally to fill its container's width.
Vertical spacing between boxes is determined by their margins. Adjacent margins of two or more block-level boxes within the same BFC will overlap.
A BFC acts as an independent container, meaning its child elements won't affect elements outside of it and vice versa.
When calculating a BFC's height, floating elements are also considered.
Other methods, like using flexbox and grid layouts, can also initiate a new BFC.


## Inline Formatting Context (IFC):

Elements with a CSS display property value of inline, inline-block, inline-flex, or inline-grid are inline-level elements. Examples include span and img. These elements visually align content with other inline elements in a line until it's filled, and then move to the next line.
Inline-level elements generate inline-level boxes, which are rendered horizontally until the line is full and then wrap to the next line.

### Rendering Rules for IFC:

An inline formatting context (IFC) is created when a block container box doesn't contain any block-level boxes.
The boxes are placed horizontally, wrapping to the next line when the container's width is exceeded.
Horizontally, the space occupied by the margins, borders, and padding of these boxes is taken into account. However, an inline box's vertical borders, padding, and margins won't expand the line box's height.
Other Formatting Contexts:

Table Layout: A table wrapper box can be created, encompassing the table box and any caption boxes.

Multi-column Layout: Column boxes can be established between the container box and its content.

Flex Layout: A flex container box is created.

Grid Layout: A grid container box is introduced.