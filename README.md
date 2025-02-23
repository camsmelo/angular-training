---
difficulty: 2
training: true
chapter: "Chapter 9: Challenge roundup"
tags: angular
---

# Car Configurator: Model and Color

# Challenge Description

The app you have to build is a simplified version of https://www.tesla.com/modelx/design.
You can use that website for inspiration if you want, but our API and possible configurations are a lot simpler.
In this challenge, we focus on selecting a car model and color.

## Requirements

- Models and colors must be retrieved from the API included in the project and accessible at the http://localhost:4200/models endpoint.
- Data types are pre-generated for you in `src/app/models.type.ts`
- A `configurator.service` has been started with a Signal that holds all available car models.
- Images for all models and colors can be found at https://interstate21.com/tesla-app/images/
- Complete the `step1.component` to display the right information in the two select dropdowns.
- When a Model and Color are selected, the proper image should be displayed on the screen as illustrated below.
  > 💡 HINT: Use Signals as much as possible in `configurator.service` to store the current state of your configuration (selected model, selected color)
tags: angular, bug fixing
---

# Car Configurator: Bug Fixes

# Challenge Description

Our application is now completed, but we identified a couple of bugs in it.

Bug #1: If the user creates a Cybertruck config and selects "tow hitch" as an option,
then the option remains active if the user switches to a different model.
Here is an example where Model 3 has a tow hitch package, which shouldn't be possible:

![bug1.png](https://images.certificates.dev/roundup-4-bug1.png)

Bug #2: After selecting a new model, another bug is present on step 2. Step 3 is clickable before selecting a car config:

![bug2.png](https://images.certificates.dev/roundup-4-bug2.png)

Bug #3: When going back to step 1, the current car model and color do not show as selected. Here Cybertruck should be selected with the right color:

![bug3.png](https://images.certificates.dev/roundup-4-bug3.png)

## Requirements

- Fix the three bugs described above. Selecting a new model should properly reset all configs and colors associated to the previous model.
- Ensure step 3 is only enabled when a config is selected in step 2.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.
- The project has `mini.css` as a dependency for basic styling.

## Example of Finished Application

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://images.certificates.dev/roundup-1-screenshot.gif)

## Example of Fixed Application

This is an example of what the functionality should look like for the completed exercise.

![Finished app in this challenge](https://images.certificates.dev/roundup-4-screenshot.gif)
