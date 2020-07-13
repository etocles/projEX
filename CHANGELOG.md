# Changelog

### Upcoming Changes for Next Patch
- Import project from text
- Notification disappears in 30 mins
- Importance; change how importance is figured out
- Alternate Views
- Full implementation of undo/redo
- File/Edit/View/Help toolbar needs customizing
- Archiving benchmarks when deleted so that they can be brought back
- Settings Page to modify UserPrefs
- Max amount of archived projects can be changed


### Beta 0.1.0
- Sort by uncompleted first (also sorts by due-date)
- Fix bug of going over 100 by clicking title of a nested benchmark (adding 1 to numDone when should add .2 )
- Clicking notification opens app
- Soon meter doesn't show up when project is completed
- Completion of project depends on benchmarks, not a button
- Clicking notification opens app
- Change the benchmark form proportions in addPanel
- File/Edit/View/Help bar begins implementation
- Added Delay to tooltips
- Dark Mode/Light Mode
- UserPrefs Config
  - sort_type
  - lightness mode
  - notification frequency
  - type of notifications
    - ONLY project due date notifications
    - ONLY benchmark due date notifications
    - BOTH project + benchmark due date notifications (Default)
- Search bar for easier finding of projects
- Fixed other minor bugs from previous version
- Invisible notification service
- Archive pop-up



### Beta 0.0.0
<details><summary></summary>
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
