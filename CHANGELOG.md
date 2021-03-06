# Changelog

### Upcoming Changes for Next Patch
- Perma-Delete from archive
  - Confirms before deleting
- New Defaults for Benchmark Names
- Import project from text
- Notification disappears in 30 mins
- Importance
  - implement an actual hash
  - implement a way to change it in the settings page
- Alternate Views
- Full implementation of undo/redo
- File/Edit/View/Help toolbar needs customizing
  - Add more options to the menu bar (Help, View, etc.)
- Archived Projects can be viewed from menu bar
- Settings Page to modify UserPrefs:
  - Default Project Name
  - Default Category Name
  - Default Benchmark Name
  - notification time interval
  - max archived projects number
  - default benchmark names
  - default project name
- Removed "Complete" button
- Add Context Menu (create project from another project)

### Beta 0.1.2
#### October 17, 2020
<details> <summary>Click to Expand</summary>
<p>

#### FEATURES
- Close and minimize automatically closes to tray
  - Always running unless "Quit" through right clicking on tray or File>Quit
- Only one instance of app can be open at once
- No more "Completed" button
- UserPrefs can be changed through preferences
  - When the notification interval is changed through user preferences, the service restarts automatically
</p>
</details>

### Beta 0.1.0
#### July 14, 2020
<details> <summary>Click to Expand</summary>
<p>

#### FEATURES
- Sort by uncompleted first (also sorts by due-date)
- Clicking notification opens app
- Soon meter no longer shows when project is completed
- Completion of project depends on benchmarks, not a button
  - Button now does nothing
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
- Invisible notification service
- Archiving benchmarks when deleted so that they can be brought back
- Archive pop-up


#### BUGS
- Changed the benchmark form proportions in addPanel
- Completion bug fixed
- Fix bug of going over 100 by clicking title of a nested benchmark (adding 1 to numDone when should add .2 )
- Fixed other minor bugs from previous version
- Fixed multi-deleting bug
- Fixed date changing bug

</p>
</details>


### Beta 0.0.0
#### June 12, 2020
<details> <summary>Click to Expand</summary>
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
- Notifications every 30 mins
- Notification criteria
- Question mark on the project adding form is not clear.
  - Delay is too long
  - Doesn't describe linearity well enough
- If a benchmark's subparts are changed, the progress on them is lost

</p>
</details>
