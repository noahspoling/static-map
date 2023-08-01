# Static Map

This is a repository showcasing how to build powerful applications that don't need fancy, feature-rich frameworks like react to build applications

### This uses
* ArrowJS for organizing code into components in native javascript
    * Has 3 functions
        * html for template literals like this:
        ```
        var template = html`
            <h1>Example Code</h1>
        `
        ```
        * reactive for app-wide state management:
        ```
            var data = reactive({
                clicks: 0
            })
        ```
* Bootstrap for quickly developing a professional looking page
* Leaflet to handle mapping features of the application