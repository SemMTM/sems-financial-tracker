# Finance Tracker - Personal Finance Dashboard
## Project Overview
Monthly Finance Tracker is a secure, real-time, full-stack web application that empowers users to take full control of their personal finances. Designed with a strong focus on usability, performance, and data privacy, the app provides a streamlined one-page dashboard for tracking income, expenditures, and disposable income in a clear, calendar-driven format.

This project was built as both a portfolio piece and a production-grade system, emphasizing strong frontend architecture, secure backend API design, and real-world performance considerations.

Built using React (frontend), Django REST Framework (backend) and PostgreSQL, the system supports full CRUD operations on all financial entries and intelligently handles recurring transactions. It also includes features like monthly budgeting, weekly and monthly financial summaries, and dynamic currency symbol formatting — all personalized per user.

![Website - Desktop](src/readme_images/Screenshot_3.png)

![Website - Mobile](src/readme_images/Screenshot_1.png)

### Key Features
- One-Page Dashboard
    - Toggle between calendar, weekly, and monthly summaries with real-time financial insights.
- Dynamic Calendar View
    - Interactive financial calendar with accurate date alignment, showing income and expenditure breakdowns per day.
- Income and Expense Tracking
  - Log and manage both one-time and recurring income/expenditures, with automatic generation of future instances based on repeat frequency.
  - Create, edit, and delete financial entries with support for recurring transactions (weekly & monthly). Repeats are automatically generated with logic to avoid duplicate or outdated entries.
- Disposable Income Budgeting
  - Set and track monthly disposable income budgets. Each new month resets automatically and can be adjusted by the user.
- Data Privacy and Security
  - Each user’s data is completely isolated and protected. Every financial endpoint is protected by ownership-based permissions — ensuring users can only access their own data. No shared access is possible.
- Currency Personalization
  - Users can choose their preferred currency, which is reflected across all financial data outputs and summaries.
- JWT Authentication
  - Auth flow is powered by dj-rest-auth and SimpleJWT, ensuring secure access to all financial data. Auth state is managed in React context and persists across page reloads.
- Performance Optimized UI
  - Built with reusable React components and minimal re-renders to ensure snappy performance across devices.

### Tech Stack
| **Layer** | **Technology** | **Purpose** |
|--|--|--|
| Frontend | React, React Router, Axios | SPA interface with dynamic component rendering |
| Backend | Django, Django REST Framework | REST API with secure user-specific endpoints |
| Auth | dj-rest-auth, SimpleJWT | JWT-based login, logout, password updates |
| Database | PostgreSQL | Structured, relational financial data |
| Deployment | Heroku (API), Netlify (Frontend) | Full-stack hosting |


# Table of Contents
- [Project Overview](#project-overview)
- [UX Strategy & Goals](#the-strategy-plane)
    - [Site Goals](#site-goals)
- [Project Scope & User Stories](#project-scope--user-stories)
    - [Agile Planning](#agile-planning)
    - [Epics](#epics--user-stories)
- [Application Features & Functionality](#application-features--functionality)
    - [Features](#features)
    - [Unimplemented Features](#unimplemented-features)
    - [Future Features](#future-features)
- [The Skeleton Frame](#the-skeleton-plane)
    - [Wireframes](#wireframes)
    - [Database Design](#database-design)
    - [Security](#security)
- [The Surface Plane](#the-surface-plane)
    - [Design](#design)
    - [Colour Scheme](#color-scheme)
    - [Typography](#typography)
- [Technologies](#technologies)
    - [Technology Used](#technology-used)
    - [Python Modules Used](#python-standard-modules)
    - [External Python Modules Used](#external-python-modules)
- [Testing](#testing)
- [Bugs](#bugs)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
    - [Version Control](#version-control)
    - [Heroku Deployment](#heroku-deployment)
    - [Run Locally](#run-locally)
    - [Fork Project](#fork-project)
- [Credits](#credits)

# UX Strategy & Goals
> The Strategy Plane

## Site Goals
The primary site goal is to provide users with a clear, responsive, and efficient dashboard for managing their personal finances — including income, expenses, and disposable income — through an interactive, data-driven interface that simplifies financial awareness and planning.

### Functional Goals
- Allow users to securely register, log in, and log out
- Enable users to add, edit, and delete income and expenditure records
- Support repeatable transactions (weekly and monthly) that automatically generate future entries
- Provide a monthly and weekly summary view with aggregated totals
- Present a dynamic calendar view that reflects financial activity per day
- Allow users to set and track a monthly disposable income budget
- Let users track discretionary spending against their budget
- Enable users to set and store their preferred currency symbol
- Display financial data consistently and responsively across devices
- Deliver user feedback on actions (form validation, success messages, error handling)

### User-Centric Goals
- Understand where their money is going at a glance
- Track how much they’ve spent or saved in a specific time period
- Identify spending habits or recurring costs over time
- Set and stay within a self-defined spending limit (budgeting)
- Access their financial data securely from any device
- Experience a fast, mobile-friendly, intuitive interface
- Avoid repetitive data entry through smart automation (repeat logic)
- Trust that their data is private, accurate, and never shared
- Have a clear and visual representation of their finances

### Business & Technical Goals
- Build a modular, maintainable codebase following component-based design
- Ensure full CRUD functionality and secure user authentication
- Adhere to accessibility best practices and responsive design  principles
- Follow DRY, KISS, and separation-of-concerns coding practices
- Use Django REST Framework to expose a secure, structured API
- Enforce strict data permissions so users can only access their own records
- Implement environment variable-based secret handling for deployment security
- Deploy both frontend and backend to cloud platforms
- Protect all user-specific data using secure cookie-based authentication and CSRF safeguards

# Project Scope & User Stories
> The Scope Plane

## Agile Planning
This project was managed using an Agile approach with GitHub Projects to break the work into prioritized user stories and organize them into epics. 

The total time for all features to be implemented was 7 weeks, with an additional 2 weeks for refactoring, testing and documentation.
This project was split up into 4 sprints, each being just over 2 weeks.

Each card represents a feature or task, and progress was tracked using a Kanban board with the following columns:
- Backlog – New user stories and ideas
- To Do – Selected for development in the next sprint
- In Progress – Features actively being built
- Done – Completed and tested tasks

This approach allowed me to remain flexible throughout development, prioritize based on core user needs, and continuously deliver working features. All user stories were tagged with their relevant epic and updated throughout the build.

[View the GitHub Kanban Board](https://github.com/users/SemMTM/projects/3/views/1)

## Epics & User Stories
This project had 8 epics that user stories were categorised into:

### Authentication
Enable secure user login and logout using session-based cookie authentication. Required for accessing any user-specific financial data.

<details>
<summary>Click to view user stories</summary>

- As a developer, I can implement JWT Auth, so that my users are more secure and don't have to log in every time to use the app.
- As a user, I can create an account using social logins, so that creating an account is faster
- As a developer, I can verify users emails with email verification so users can secure their accounts better
- As a user, I can sign in to my account, so that I can access my finance tracker
- As a user, I can create an account, so that I can use the app and all of its features

</details>

### Budgeting
Ability to set and track monthly disposable income budgets and disposable spending. 

<details>
<summary>Click to view user stories</summary>

- As a user, I can edit my disposable income budget, so I can make changes when needed
- As a dev, the disposable income remaining resets each month
- As a user, I can see my remaining disposable income for the month, so I can easily manage my spending
- As a user, I can set a monthly disposable income budget, so that I can manage my spending
- As a user, I can see a list of all of my disposable income spending entries with details, so that I can see my spending
- As a user, I can delete a disposable income spending entry, so that I can keep my financial tracking accurate
- As a user, I can edit my disposable income spending entries, so that I can make changes if needed
- As a user, I can add my disposable income spending to the list, so that I can manage my finances.

</details>


### Documentation & Testing
Create clear README documentation, manually test all frontend and backend features, write extensive backend unit tests.

<details>
<summary>Click to view user stories</summary>

- As a developer, I will manually test all frontend and backend features, to ensure no bugs are present in the app
- As a developer, I will write a full suite of unit tests for all backend views, serializers and utility file, so that I can ensure everything functions as intended.
- As a developer, I will create the README documentation structure, I that I can ensure the app is well documented
- As a developer, I will add all content to the README, so the app is properly documented.

</details>

### Income & Expenditure Management
Allow users to add, edit, delete, and repeat income and expenditure records. Ensure permissions and repeat logic work as expected.

<details>
<summary>Click to view user stories</summary>

- As a user, I can set a category on an expenditure, so that I can categorise my spending
- As a user, I can repeat an expenditure payment, so I don't have to enter it again every month
- As a user, I can repeat an income payment, so I don't have to enter it again every month
- As a user, I can see a list of this months incomes with details, so that I can manage my income
- As a user, I can see a list of all of my expenditure entries with details, so that I can see my spending easier
- As a user, I can delete an expenditure entry, so that I can keep my financial tracking accurate
- As a user, I can edit my expenditure entries, so that I can make changes if needed
- As a user, I can edit my incomes, so that I can make changes if needed
- As a user, I can add my income to the list, so that I can manage my finances
- As a user, I can add my expenditure, so that I can manage my finances

</details>

### Setup
Initial setup of the project structure, authentication configuration, CORS, environment variables, and deployment settings.

<details>
<summary>Click to view user stories</summary>

- Purchase a domain and set up the API and Front end on the same top level domain so cookies work on mobile
- Create views to return data from API
- Create serializers for all models
- Connect the frontend to the API
- Set up database and relationships
- Set up API and connect it to the database so receive new entries

</details>

### Summary Views
Calendar, weekly, and monthly summaries showing financial activity at a glance.

<details>
<summary>Click to view user stories</summary>

- As a user, the month on the calendar view changes automatically, so that I don't have to manually change it each month
- As a user, I can easily see which day we are on as it is highlighted
- As a user, I can see a calendar view with all of my monthly finances plotted on it by day, so that I can visually see my finances
- As a user, I can switch between weekly and monthly summaries, so that I can see more detailed breakdowns of my finances
- As a user, I can see a weekly breakdown of all finances for the month, so that I can manage my weekly spending
- As a user, I can see a monthly financial summary view of that months finances, so that I can easily manage my finances

</details>

### User Settings
Enable users to update their username, email, password, and preferred currency, with all changes reflected throughout the app.

<details>
<summary>Click to view user stories</summary>

- As a user, I can reset my password via email if i forget it, so I do not lose access to my account
- As a user I can toggle dark or light mode so that I can customise the appearance of my financial tracker
- As a user I can set/change the currency on my tracker
- As a user, I can change/add an email on my account, so that I can secure my account
- As a user, I can change my username, so I can edit my account log in info
- As a user, I can change my account password
- As a user, I can access a settings page, so I can change details about my account

</details>


[Back to Table of Contents](#table-of-contents)

# Application Features & Functionality
> The Structure Plane

## Feature: Calendar Grid View
### Overview
The Calendar Grid View provides users with a clear, visual layout of their financial activity across the selected month. It aligns each day to its correct weekday and displays total income and expenditure per day, helping users spot trends, plan ahead, and track spending at a glance.

![Calendar Grid](src/readme_images/Screenshot_2.png)

### Technical Breakdown
**Frontend Implementation**
- The `CalendarView` component generates a 5 or 6-row calendar layout using the `generateCalendarGrid()` utility. The utility calculates the correct start day of the month and fills in the grid to ensure five full rows are always rendered (35 cells).
- This function accounts for:
    - The weekday index of the first day of the selected month
    - The number of days in the month
    - Leading and trailing blank cells to ensure proper weekday alignment
- The `CalendarView` component maps over this grid to render each day in the correct position using a responsive CSS Grid layout.
- Each day is represented as a tile with date, income, and expenditure displayed using colored badges.
- The current day is highlighted, providing instant visual orientation no matter which month the user is viewing.
- Days outside the selected month are visually greyed out, maintaining structure while helping users focus only on current-month data.
- Data is fetched from the `/calendar-summary/` API via Axios and rendered dynamically when the user navigates between months using prev/next controls.
- `useCalendar()` context manages the selected date and navigation logic (previous/next month), ensuring global state sync.

**Backend Implementation**
- `CalendarSummaryView` receives year and month as query parameters and returns a dictionary of day-by-day totals for the authenticated user.
- Values are raw integers in pence, with currency symbols handled client-side for consistency and formatting flexibility.
- Permissions restrict access to the user’s own income and expenditure records.

**Data Flow & Interactivity**
- On mount or month change, the frontend sends a GET request with the selected year and month.
- The backend aggregates financial data per day and returns it to the client.
- The calendar updates reactively, and the grid always renders 5 rows regardless of month length or start weekday, preserving layout stability.

### UX & Performance Benefits
- Maintains a consistent 5-row layout regardless of month length or starting weekday, preventing layout shifts and improving predictability
- Helps users build month-to-month memory of their financial rhythm by keeping tiles aligned
- Allows users to see daily financial activity at a glance with minimal scrolling
- Responsive across devices via CSS Grid
- Optimized rendering ensures only necessary re-renders and minimal DOM updates on month change
- Highlighted current day improves usability and time awareness during navigation

## Feature: Month Navigation & Change Handling
### Overview
The month navigation system allows users to move backward or forward in time to view their financial data for -5 or +5 months from the current month. 

This interaction updates not only the calendar grid, but also synchronizes all financial components — including expenditure lists, income, budget, and summaries — to reflect the selected period. It acts as the global time controller for the entire application.

![Month Changer](src/readme_images/Screenshot_4.png)

### Technical Breakdown
**Frontend Implementation**
- Centralized in the custom `useCalendar()` context, which exposes:
    - selectedDate — the currently viewed month/year
    - `goToPreviousMonth()` and `goToNextMonth()` — handlers to shift month state
    - `isAtStart` and `isAtEnd` — booleans to limit navigation bounds
- When navigation is triggered:
    1. The `selectedDate` is updated across the app
    2. All components that consume selectedDate (via `useCalendar()`) re-fetch data for the new month
 3. These components include:
    - `CalendarView`
    - `ExpenditureList`
    - `IncomeList`
    - `DisIncomeBudget`
    - `DisIncomeSpendList`
    - `MonthlySummary` and `WeeklySummary`
- This keeps the entire UI in sync with the selected month with minimal duplication of logic or state.

**Backend Implementation**
- Each financial endpoint receives the selected month as a single string in YYYY-MM format (e.g. "2025-04"). This is parsed server-side to filter the user's records for that month only.
- For example:
    - `/calendar-summary/?month=2025-05`
    - `/expenditure/?month=2025-05`
- These endpoints return only the data relevant to the current month, improving performance and clarity.

**Data Flow & Interactivity**
- When a user changes the month:
    - The context date updates globally
    - All consuming components re-fetch their data based on the new date
    - The entire dashboard then reflects one unified time window

### UX & Performance Benefits
- Creates a seamless, intuitive way to explore historical financial data without navigating away from the dashboard
- Reduces user error and confusion by ensuring all components reflect the same time period
- Avoids unnecessary re-renders by centralizing month logic in a context provider
- Improves maintainability by decoupling date state from individual components
- Enables scalable future enhancements, like yearly views or date range comparisons

## Feature: Monthly Summary View
### Overview
The Monthly Summary View gives users a high-level overview of their income, expenditures, and remaining disposable income for the selected month. This view enables users to evaluate their financial position without having to interpret individual transactions — supporting better budgeting and financial awareness at a glance.

![Monthly summary view](src/readme_images/Screenshot_5.png)

### Technical Breakdown
**Frontend Implementation**
- The `MonthlySummary` component consumes the globally shared `selectedDate` from `useCalendar()`.
- On mount or when the month changes, the component triggers a request to the `/calendar-summary/` API with the current month formatted as `YYYY-MM` (e.g., "2025-04").
- The returned summary data includes:
    - Total income for the month
    - Total expenditure, broken down by type
    - Remaining disposable income
    - Disposable income budget
    - Currency symbol (e.g., £)
    - A summary of income - expenditures
- The component displays this data in a styled summary card.
- A button inside the summary view allows users to toggle to the weekly summary view (`WeeklySummary`), which uses the same data source but breaks it down by week.

**Backend Implementation**
- The CalendarSummaryView endpoint handles GET requests and extracts the month parameter (formatted as YYYY-MM).
- The view filters the authenticated user’s `Income` and `Expenditure` entries for the selected month using `date__year` and `date__month`.
- The raw values (stored as integers in pence) are returned along with the user’s currency symbol, which is resolved using the user’s preference and the `get_currency_symbol()` utility.

**Data Flow & Interactivity**
- The summary data is updated dynamically every time the month is changed using the calendar navigation arrows.
- The values are displayed using local component state and are re-rendered automatically via `useEffect()` when the data is fetched.
- The `MonthlySummary` view passes control to the `WeeklySummary` component when toggled, using a shared `viewMode` state in the parent component (`Home`).

### UX & Performance Benefits
- Offers users an immediate understanding of their financial balance for the selected month
- Encourages budgeting discipline by surfacing disposable income as a single, focused value
- Reactively updates when the month is changed, ensuring a seamless and predictable experience
- Minimizes DOM updates and improves performance by re-rendering only the summary card

## Feature: Weekly Summary View
### Overview
The Weekly Summary View allows users to view a breakdown of their income and expenditure on a week-by-week basis within the selected month. It intelligently includes partial weeks as long as they fall within the selected month’s boundaries — ensuring no financial data is missed due to alignment quirks in the calendar. This enables more granular tracking of spending patterns, especially useful for users paid weekly or budgeting with short-term goals.

![Weekly summary view](src/readme_images/Screenshot_6.png)

**Partial Week Logic**
- Weeks in the calendar don’t always align perfectly with the start or end of a month. For example:
    - May 2025 starts on a Thursday → the week starting Monday, April 28, partially belongs to May.
    - May 2025 ends on a Saturday → the week starting Monday, May 26, extends into June.
- Instead of excluding these weeks entirely or returning their full 7-day span, the system returns a partial summary:
    - Only the subset of days within the selected month is included in calculations.
    - This allows weeks like 2025-04-28 – 2025-05-04 to be shown, but only the transactions from May 1 to May 4 are counted.
    - Likewise, the week of 2025-05-26 – 2025-06-01 only includes May 26 to May 31.

**Frontend Implementation**
- The `WeeklySummary` component is conditionally rendered when the user toggles from the `MonthlySummary` using the `summaryMode` state in the parent `Home` component.
- It consumes the globally shared `selectedDate` from `useCalendar()` and calculates the current week’s start date using a utility function (e.g. based on ISO week rules or first visible week).
- A GET request is sent to the `/weekly-summary/` API with the selected week start date passed in YYYY-MM-DD format as a query parameter (?week_start=2025-05-06).
- The response includes:
    - Total weekly income
    - Total weekly expenditure
    - Currency symbol

**Backend Implementation**
- The `WeeklySummaryView` accepts the week_start parameter and computes the 7-day range:
`week_start <= date < week_start + 7 days`
- Before aggregating values, the backend further filters to ensure that only records within the selected month are included.
- For example, if `week_start = "2025-04-28"`, the backend excludes `2025-04-28, 2025-04-29, and 2025-04-30` when summarizing for May.
- This logic prevents misleading data when weeks straddle two months.

**Why This Filtering Matters**
- Prevents confusion caused by partial overlaps (e.g. a user selecting May shouldn’t see income from April 30th in the summary)
- Ensures data integrity — each week’s total aligns strictly with the active calendar month
- Aligns with the calendar grid and monthly summary to give a coherent user experience

**Data Flow & Interactivity**
- The summary data is updated dynamically every time the month is changed using the calendar navigation arrows.
- The values are displayed using local component state and are re-rendered automatically via `useEffect()` when the data is fetched.
- The `MonthlySummary` view passes control to the `WeeklySummary` component when toggled, using a shared viewMode state in the parent component (`Home`).

### UX & Performance Benefits
- Gives users a more granular view of their financial activity, perfect for tracking short-term trends or weekly goals
- Complements the Monthly Summary by providing more focused insight without requiring manual filtering
- Keeps the interface clean by toggling summaries instead of showing both at once
- Optimized for mobile and desktop with minimal render overhead
- Ensures consistency by sharing context and formatting logic with the Monthly Summary

## Feature: Monthly Expenditures List
### Overview
The Monthly Expenditures List displays a scrollable, filterable view of all user expenses for the selected month. It forms the core of the app’s transaction tracking system, showing amounts, titles, dates and expenditure types — all in the user’s chosen currency. Each expenditure is interactively linked to the calendar view and supports editing, deletion, and intelligent repeat logic across months.

![Monthly expenditures list](src/readme_images/Screenshot_7.png)

### Technical Breakdown
**Frontend Implementation**
-  Component: `ExpenditureList`
- Fetches and renders all user expenditures for the currently selected month, using context from `useCalendar()` to construct the query.
- Data Fetching
    - Sends a request to `/expenditures/?month=2025-05` (e.g.) to retrieve entries.
    - Returned results are ordered by date (earliest to latest) for easy readability.
- Repeat Entry Handling
    - When a repeating expenditure is created, the backend pre-generates entries for the next 6 months (weekly or monthly based on interval).
    - These repeats are stored in the database with a shared `repeat_group_id`, enabling grouped edits or deletions.
- Calendar Plotting
    - Each expenditure is visually plotted on the `CalendarView`, where:
        - Days with one or more expenses show a total amount indicator
        - This view dynamically reflects expenditure changes via React state sync and backend filtering by day.
- Editing Logic
    - Each list item includes an edit icon which opens a modal.
    - Users can modify title, amount and date.
    - On submit, a PUT request updates the entry — and if part of a repeat group, users are prompted whether to update just this entry or all future entries in the group.
    - Edits propagate across repeat entries based on date and group ID, updating future items only (preserving historical accuracy).

**Backend Implementation**
- ViewSet: `ExpenditureViewSet`
    - Uses custom `get_queryset()` logic to filter data by month string (YYYY-MM) and user.
    - Expenditures are ordered by date, and only the requesting user’s records are accessible.
- Repeat Generation
    - Repeat entries are generated at creation time using a utility function.
    - The function pre-generates dates up to 6 months ahead, excluding past or duplicate records.
    - On edit/delete, future records in the repeat group (`repeat_group_id`) are updated or removed using bulk query logic.
- Calendar Data Sync
    - The `/calendar-summary/` endpoint receives the same month string (`?month=2025-05`) and calculates daily totals for display.
    - This data directly powers the plotting logic on the calendar view using income/expenditure aggregation.

### UX & Functional Benefits
- Intuitive and Immediate: Changes to expenditure entries reflect across all areas of the app.
- Smart Repeat Management: Users have full control over recurring expenses, reducing data entry while maintaining accuracy.
- Financial Clarity: The combination of list and calendar visibility gives a clear breakdown of when and how money is spent.
- Secure by Design: Only the authenticated user can view, edit, or delete their records. All repeat logic is scoped to ownership and future dates.
- Real-world Practicality: Partial updates to recurring bills, mid-month cancellations, and adjustments are handled without data loss or conflict.

## Feature: Monthly Income List
### Overview
The Monthly Income List displays all income entries for the selected month in a clean, scrollable format. It allows users to view, add, edit, and delete recurring or one-time income items while reflecting changes instantly in both the summary and calendar views.

![Monthly income list](src/readme_images/Screenshot_8.png)

### Technical Breakdown
**Frontend Implementation**
- Implemented in the `IncomeList` component, this section fetches income data using the current month from the global `CalendarContext`.
- Each income entry is rendered as a list item showing:
    - Title
    - Date
    - Amount (formatted with currency symbol)
    - Edit button
- A button allows users to open a modal to add a new income item. The modal supports specifying:
    - Title
    - Amount (auto-converted to pence)
    - Date
    - Repeat interval (none, weekly, or monthly)
- Edit and delete operations are also handled via modals, with updates propagated across the UI through the central state refresh context.
- The repeat interval is pre-filled when editing an existing recurring income.

**Backend Implementation**
- The `IncomeViewSet` exposes full CRUD functionality for authenticated users.
- When a new income with a repeat interval is created:
    - A repeat group ID is assigned
    - All future repeat entries (weekly or monthly) are auto-generated for the next 6 months
- The backend filters income records by owner and selected month, parsed from the `?month=YYYY-MM` query parameter.
- If a recurring income is updated, the backend adjusts all future instances within the repeat group.
- Deleting a recurring income removes all future occurrences.

**Data Flow & Integration**
- When the month changes, a new request is made to `/income/?month=YYYY-MM`, returning all relevant records for that period.
- Income updates trigger a global state refresh using a React context, ensuring:
    - The monthly summary recalculates all summaries
    - Calendar view updates daily income tiles
    - The income list reflects current data without page reloads

### UX & Performance Benefits
- Enables granular control over income records with editable repeat schedules
- Visualizes recurring income patterns month-to-month
- Synchronizes with all other views (summary and calendar) for real-time accuracy
- Modal-based interaction ensures smooth UX with no full-page transitions
- Currency formatting improves clarity, with data stored in pence for precision
- Centralized data context keeps the UI reactive and avoids redundant fetches

## Feature: Disposable Income Budget
### Overview
The Disposable Income Budget section allows users to define how much flexible spending money they want to allocate for the selected month. It acts as a planning and constraint mechanism, helping users measure their actual spending against a self-imposed limit. This budget then integrates into the monthly and weekly summaries for clear comparisons.

![Disposable income budget](src/readme_images/Screenshot_9.png)

### Technical Breakdown
**Frontend Implementation**
- Handled in the `DisIncomeBudget` component, which:
- Fetches the budget for the currently selected month on mount (via `?month=YYYY-MM`)
- Displays the current budget amount with a currency symbol
- Offers a button to open a modal where the user can edit or reset the monthly budget
- The edit modal:
    - Defaults to the current budget value
    - Allows updating the amount
- All updates trigger a global context refresh that updates:
    - Monthly summary
    - Weekly summary
    - Any disposable income spending displays
- User input is stored in pounds but auto-converted to pence before being sent to the API

**Backend Implementation**
- Managed via the `DisposableIncomeBudgetViewSet`, which:
- Allows only one entry per user per month
- Enforces uniqueness through queryset filtering and validation
- Creates a new entry at the start of each month (default amount: 0) via a monthly check
- Validates that only the owner can view or edit their own budget
- `PUT` requests allow updating the current month’s value
- Resetting is handled by submitting 0 as the new value

**Data Flow & Integration**
- The component listens to month changes from the global `CalendarContext` and re-fetches budget data on each change
- All changes update the centralized refresh context, ensuring:
    - Summary components reflect updated available budget
    - Disposable income spending comparisons remain accurate
    - Budget editing always targets the correct month entry
- API endpoint: `/disposable-income-budget/?month=YYYY-MM`

### UX & Performance Benefits
- Gives users a clear self-defined spending cap each month
- Editable via intuitive modal with pre-filled values
- Synchronized with all summary views to show remaining budget after spending
- Lightweight data model ensures quick fetches with no pagination needed
- Monthly auto-generation ensures continuity with no gaps or missing data
- Encourages better financial planning without needing to define formal categories

## Feature: Disposable Income Spending List
### Overview
This section tracks flexible, non-essential purchases that count against the user's monthly disposable income budget. It provides transparency over where discretionary money is going, helping users stay within self-set limits while still enjoying their budgeted spending freedom.

Displayed in a list below the budget section, it enables fast add/edit/delete actions with real-time updates to the remaining balance in both monthly and weekly summaries.

### Technical Breakdown
**Frontend Implementation**
- The `DisIncomeSpendList` component:
    - Fetches all spending entries for the currently selected month on mount or when the calendar date changes
    - Displays each item’s title, date, and amount in a clean vertical list
    - Automatically refreshes when a new entry is added or deleted
- Add/Edit Modal:
    - Opens via a button
    - Form includes title, amount (entered in pounds, auto-converted to pence), and date
    - Validates for non-blank title and valid numeric input
    - Uses the same modal component system as other financial sections (consistent UX)
- When an item is added or edited:
    - A POST or PUT request is sent to the API
    - The global context is refreshed, ensuring:
    - Updated summary views (monthly/weekly)
    - Accurate remaining budget calculation
    - Calendar view remains consistent
- No repeat functionality is present in this section — every entry is standalone and user-defined

**Backend Implementation**
- Managed by the `DisposableIncomeSpendingViewSet`:
    - Supports full CRUD operations
    - Automatically filters entries by the authenticated user
    - Accepts optional `?month=YYYY-MM` query to return filtered data per month
    - Converts and stores amount values in pence for precision, regardless of how input is submitted
    - Enforces permissions: users can only interact with their own records
    - Does not include any repetition logic, aligning with its "ad-hoc expense" nature

**Data Flow & Integration**
- Triggered by month selection in the global `CalendarContext`
- When the month changes, spending entries are refetched to reflect the new period
- Adding, editing, or deleting a spending entry triggers:
    - UI update of the spending list
    - Context refresh to update:
        - Disposable Income Budget summary
        - Calendar tile amounts
        - Weekly and Monthly summary totals
- API endpoint: `/disposable-income-spending/?month=YYYY-MM`

### UX & Performance Benefits
- Allows users to track personal, lifestyle-oriented spending distinct from fixed expenses
- Fully integrated with remaining budget display — gives users an instant sense of spending freedom or overuse
- Fast, reactive UI with no full-page reloads
- Consistent modal and button styling across all sections builds user familiarity
- Easy to manage: no repeat logic to worry about, just add what you spent and when
- Minimalist design prevents visual clutter and supports focus on meaningful patterns

## Feature: Settings Dropdown
### Overview
The Settings Dropdown, accessible via a button in the top-left corner of the homepage, provides users with quick access to essential account management tools. Each action is handled within a dedicated modal, preserving context while avoiding unnecessary navigation. These settings support user customization and account maintenance, improving long-term app usability and retention.

### Technical Breakdown
**Frontend Implementation**
- The `SettingsDropdown` component:
    - Renders a settings button that toggles a dropdown menu on click
    - Dropdown includes options:
        - Change Username
        - Change Email
        - Change Password
        - Select Currency
    - Each item opens a modal powered by a shared modal system that dynamically loads the correct form
- Global modal context ensures modals stack correctly and close independently without interfering with other components
- Every modal:
    - Validates user input
    - Displays success/error feedback based on API response
    - Updates user context state if needed (e.g., after username or email change)

**Backend Integration**
- All modals interact with Django views secured by authentication
- Updates reflect in `/dj-rest-auth/user/` immediately after a successful change
- Currency changes update financial formatting across the app
- All endpoints return clear error messages which are parsed and displayed in the frontend

**Change Username Modal**
- Allows the user to update their username while preserving uniqueness and input format
- Frontend validates:
    - Non-empty input
    - Max 40 characters
    - Letters, numbers, hyphens, and underscores only
    - USername is unique
- Backend returns field-level validation errors if format/uniqueness is violated
- On success:
    - Updates user context
    - Modal closes with a success message
- Feedback is immediate and visible without refreshing the page

**Change Email Modal**
- Enables users to update their email address securely
- Validates that:
    - Email is in a valid format
    - New email is not the same as the current one
    - Email is not linked to another account
- Backend processes email change and returns success/failure response
    - On success:
    - Modal closes and success message appears
    - Email in user context is updated


[Back to Table of Contents](#table-of-contents)

# The Skeleton Plane

## Wireframes

#### Desktop


#### Mobile


## Database Design


### Key Models & Their Purpose


## Security


[Back to Table of Contents](#table-of-contents)

# The Surface Plane


[Back to Table of Contents](#table-of-contents)

# Technologies

## Technology Used



[Back to Table of Contents](#table-of-contents)

# Testing
All testing can be found in the TESTING.md file [HERE.](/TESTING.md)

# Bugs
### Fixed Bugs

| **Bug** | **Fix** |



### Unfixed Bugs

| **Bug** | **Reason for being unfixed** |
|---|---|
|  |  |
|  |  |

[Back to Table of Contents](#table-of-contents)

# Deployment

### Version Control

The website was created using Visual Studio Code editor. The webpage was deployed on Heroku and can be visisted [HERE]().

Git was used to push changes in the local enviroment to the remote repository using the following commands:

`git add .` - This command is used to add any changed files to the staging area before they are commited.

`git commit -m "message"` - This command was used to commit changes to the local repository queue ready to be pushed.
- Commits were made after every small and incremental change to enhance maintainability with a clear commit history.
- Commit messages were made in alignment with the EU Commissions [Commit guidelines](https://ec.europa.eu/component-library/v1.15.0/eu/docs/conventions/git/) for clear and readable message.

`git push` - This command was used to push all committed code to the remote repository on Github.

### Initial Deployment
#### Getting Set Up
These are the steps for inital deployment after you have created your Github repository and set up your chosen IDE. 

1. Install Django `pip3 install Django`
2. Add a requirements.txt file `pip3 freeze --local > requirements.txt`
3. Create a Django project `django-admin startproject project_name .`
4. Create an app `python manage.py startapp app_name`
5. Next, you need to add your app to the INSTALLED_APPS list in your setting.py file in your newly created project
6. Create an env.py file with the following variables:
    - os.environ.setdefault(
        "DATABASE_URL", "your_database_url")
    - os.environ.setdefault(
        "CLOUDINARY_URL", "your_cloudinary_url")
    - os.environ.setdefault(
        "SECRET_KEY", "your_secret_key"
    )
7. Go back to your settiings.py file, import your env.py file and add the following:
    - `SECRET_KEY = {'default': os.environ.get("SECRET_KEY")}`
    - `DEBUG = True`
    - `DATABASES = {'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))}`
8. Install the packages required to connect to your database of choice, as this project uses PostgreSQL you need to install the following:
    - `pip3 install dj-database-url psycopg2`
9. Add them to your requirements file `pip3 freeze --local > requirements.txt`
10. In your projects settings.py file import the following:
```
import os
import dj_database_url
if os.path.isfile('env.py'):
    import env
```
11. Create database tables with the following command `python manage.py migrate`
12. Create a superuser `python manage.py createsuperuser`
13. Set ALLOWED_HOST for your local server
14. Create a .gitingore file and add your env.py as well as other sensetive files that should not be deployed
15. Run the following git commands:
```
git add .
git commit -m "inital commit"
git push
```

### Heroku (Production) Deployment
The site was deployed to Heroku. The steps to deploy are al follows:
1. Run the following command `pip3 install gunicorn`. This will allow for Heroku deployment
2. Add this to your requirements.txt file: `pip3 freeze --local > requirements.txt`
3. In the root directory of your project add a file with the name `Procfile` with no file extension
4. In the Procfile, declare this is a web process followed by the command to execute your Django project.
    - `web: gunicorn my_project.wsgi`
    - Note: Always set DEBUG to FALSE before deploying a project to a production enviroment
5. In your settings.py files ALLOWED_HOSTS list, append the Heroku host name to the list `,'.herokuapp.com'`
6. In your Heroku dashboard, create a new app
7. Once in your app dashboard, click on the `Settings` tab. It is important to get the settings set up before attemping to deploy the app
8. Since your env.py file will not be pushed to Github, Heroku cannot read it. This means we need to set them up in Heroku manually:
    - Navigate to the `Config Vars` section and click `Reveal config vars`
    - Add the following Keys and their values:
        - `CLOUDINARY_URL`
        - `DATABASE_URL`
        - `SECRET_KEY`
9. Navigate to the `Deploy` tab and select `GitHub`
10. Click `Connect to Github` and log in to your GitHub account
11. Search for your GitHub repository in the `Connect to GitHub section`
12. Once found click `connect` then click `Deploy`
13. Once deployment is complete, click `View` to see your deployed project

### Run Locally
Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal
The project will now have been cloned on your local machine for use.

### Fork Project
To fork the repository, follow the steps bellow:
- Go to the GitHub repository
- Click on `Fork`
- This will create a duplicate of the full project in your GitHub Repository

[Back to Table of Contents](#table-of-contents)

# Credits

### Credits:
