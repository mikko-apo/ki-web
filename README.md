# ki-web

Lightweight browser framework for implementing SPAs. domBuilder, object and form validation, router

# Features and status

* domBuilder - _wrapper for document.createElement() to create DOM trees fluently_
    * Configure createElement partial attribute types with JSX.IntrinsicElements[T]
* validator - _lightweight zod clone for validating objects_
    * work has not started
* processor - _lightweight reactive programming_
    * values come from input node value changes or async processes and changes are reflected on multiple outputs
    * work has not started
* router - initialize application based on route parameters
  * port of https://github.com/mikko-apo/ki-router.js
  * work has not started
* headless testing
  * testing should be possible without a browser
