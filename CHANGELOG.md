# Changelog

<!-- ### Beta 1.1.0 -->

### Upcoming Changes

- Sort by uncompleted first (also sorts by due-date)
- fix bug of going over 100 by clicking title of a nested benchmark (adding 1 to numDone when should add .2 )
- import project from text
- Clicking notification opens app
- Notification disappears in 30 mins
- Soon meter doesn't show up when project is completed
- Completion of project depends on benchmarks, not a button
- Clicking notification opens app
- Change the benchmark form proportions in addPanel
- add Delay to tooltips
- Archiving benchmarks when deleted so that they can be brought back
- Dark Mode/Light Mode
- Alternative Views
- UserPrefs Config
  - sort_type
  - lightness mode
  - notification frequency
  - type of notifications
    - ONLY project due date notifications
    - ONLY benchmark due date notifications
    - BOTH project + benchmark due date notifications (Default)
  - importance hash menu
  - category manager ???
- Search bar for easier finding of projects
- Full implementation of undo/redo
- OBVIOUSLY fix any other bugs of previous version


### Beta 0.0.0

<details><summary>Click for full info</summary>
<p>

#### FEATURES
- Projects added
  - have a name
  - have a category
  - can be linear and non-linear
  - due on a certain date (which benchmarks inherit on default)
- Progress visualized by interactive progress bar
- Projects can be manually sorted by dragging and dropping
- Projects can be sorted by multiple different settings
  - by custom
    - default sorting system
  - by due date
    - Most recent project is sorted to be at the top
  - by importance (Default)
    - Sorts by a predetermined hash.
    - For now this defaults to sorting the projects by name in alphabetical order
  - by category
    - Sorts by category, in alphabetical order
  - by alpha
    - Sorts projects by name in alphabetical order
  - by rev alpha
    - Sorts projects by name in reverse alphabetical order
- Dropdown to edit the project's contents
  - Benchmarks can be added
    - by clicking between benchmarks, benchmarks can be added infinitely many times
  - Benchmarks can be moved
    - by dragging benchmarks by their handles, the order of the benchmarks can be changed at will
  - Benchmarks can be deleted
  - Each benchmark is purely mutable
    - Due Date can be changed
    - Due Time can be changed
    - Nested sub-parts can be added and removed
    - Benchmark's name can be changed
- Completion toggles via button instead of final benchmarks
- Percent completion is shown on each project
- Changes to each session is stored locally
- Adding benchmarks opens up in a modal window
  - Closes on clicking away
  - Closes on scroll
  - Closes on submit, and packages the data to be made into a project in the main process
- Media Queries semi-adapt the appearance of the application
- Tooltips show information about benchmarks when hovered over
- SoonMeter shows how soon a project or benchmark is due

#### BUGS
- Notification titles
- Help menu sends to wrong place
- Notifications every 30 menu
- Notification criteria
- Question mark on the project adding form is not clear.
  - Delay is too long
  - Doesn't describe linearity well enough
- If a benchmark's subparts are changed, the progress on them is lost

</p>
</details>
