Web Page Rendering Process
Web pages are fundamentally composed of three components: HTML, CSS, and JavaScript. The process by which these components are interpreted and presented to the user involves several steps, illustrated in the subsequent diagrams:

[![1](https://z1.ax1x.com/2023/10/27/piZs9ot.md.png)](https://imgse.com/i/piZs9ot)


1. HTML Parsing:
The browser takes the HTML content and processes it through an HTML Parser.
This parser transforms the HTML into a Document Object Model (DOM) tree.


2. CSS Parsing:
In parallel, CSS content is interpreted through a CSS Parser.
This results in the creation of the CSS Object Model (CSSOM) tree.


3. Render Tree Construction:
The DOM tree and the CSSOM tree combine to form the Render Tree.
This tree guides the visual display of the page, considering both its structure and style.

[![css2](https://z1.ax1x.com/2023/10/27/piZsiJf.md.png)](https://imgse.com/i/piZsiJf)

4. Final Rendering:
With the Render Tree established, the browser proceeds to render the page, culminating in the visual content users interact with.
Final Web Page Rendering

[![piZsASS.md.png](https://z1.ax1x.com/2023/10/27/piZsASS.md.png)](https://imgse.com/i/piZsASS)


For enhanced accessibility, the Accessibility Object Model (AOM) or Accessible Tree can also be integrated:

AOM Integrated Diagram

[![piZsVyQ.md.png](https://z1.ax1x.com/2023/10/27/piZsVyQ.md.png)](https://imgse.com/i/piZsVyQ)


### Reference

- https://juejin.cn/post/6916310104962760717#heading-0 

