# Testing
## Integration Testing

| **Test** | **User Story** | **Description** | **How we test it** | **Expected Outcome** | **Result** |
|--|--|--|--|--|--|
| **Calendar View** |  |  |  |  |  |
| TC001 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Calendar grid aligns the month correctly with the days of the week | Go to calendar view, click the arrow to move over a few months and check the day alignment on each month | Days align properly with day of the week | As expected
| TC002 | []() | Unused grid spaces are lined and greyed out | Go to calendar view, click the arrow to move over a few months and check the start and end of the grid | Days on the grid where the month does not align are lined out | As expected
| TC003 | []() | Days on the month that have passed are greyed out | Go to the calendar view and look at the current month, look at previous days | Previous days are greyed out in comparison to future or current day | As expected
| TC004 | [USER STORY: Current day is highlighted](https://github.com/SemMTM/sems-financial-tracker/issues/27) | The current day is highlighted | Go to calendar view and look at current day. Change your computers date to tomorrow, refresh the app and check the day you set it to is highlighted | The correct day is highlighted | As expected
| TC005 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Each day has the correct month number at the top | Check the top of each box on the calendar grid and check if the number is correct with the month against a calendar. Do this for 2 other months | Each number is correct | As expected
| TC006 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Each month has the correct number of days | Go to calendar view, check 3 months number of days on the grid against a calendar | Each month has correct number of days | As expected
| TC007 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Each day has the correct expenditure total shown | Add 4 expenditures, 2 on the same day, 2 on different days. Check the grid on those days and their totals | Correct expenditure totals shown opn the correct days | As expected
| TC008 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Each day has the correct income total shown | Add 4 incomes, 2 on the same day, 2 on different days. Check the grid on those days and their totals | Correct income totals shown on the correct days | As expected |  |
| TC011 | []() | No number is shown on days with no values | Go to the calendar grid and look at days with no data assigned to them | Days are empty with no values | As expected
| TC012 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Calendar view updates dynamically when an income entry is add/removed/edited | On separate interactions, add, remove and delete an income entry. After each action check the calendar grid has appropriately updated with no refresh | Each action is displayed in the calendar grid with no refresh | As expected
| TC013 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Calendar view updates dynamically when an expenditure entry is add/removed/edited | On separate interactions, add, remove and delete an expenditure entry. After each action check the calendar grid has appropriately updated with no refresh | Each action is displayed in the calendar grid with no refresh | As expected
| TC014 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Calendar view updates dynamically when a disposable spending entry is add/removed/edited | On separate interactions, add, remove and delete a disposable spending entry. After each action check the calendar grid has appropriately updated with no refresh | Each action is displayed in the calendar grid with no refresh | As expected
| TC015 | [User Story: Calendar View](https://github.com/SemMTM/sems-financial-tracker/issues/26) | Calendar view updates when currency is changed | Go to settings dropdown, change the global currency, check the grid | Page refreshes and new currency is displayed on grid | As expected
| TC016 | [USER STORY: Month changes automatically](https://github.com/SemMTM/sems-financial-tracker/issues/28) | When month is changed, the correct months data is shown | Add some repeated entires to the current month. Go to the next month and wait for grid to load. Check 2 other months. | The repeated entires should be displayed | As expected
| TC017 | [USER STORY: Month changes automatically](https://github.com/SemMTM/sems-financial-tracker/issues/28) | When month is changed, the grid regenerates with days of the month aligned correctly | Go to the next month, check the days of the month and days of the week align with the actual month. Do this for 2 more months | Grid is generated properly and months align | As expected
| TC018 | [USER STORY: Month changes automatically](https://github.com/SemMTM/sems-financial-tracker/issues/28) | When month is changed, the loading overlay is displayed until new data is shown | Go to new month | Loading overlay displayed then data shown | As expected
| TC019 | []() | On days with just one entry, only that entry is shown on the day | Add one income entry to a few different days | Those days on the grid display only those entires | As expected
| TC020 | []() | The user can see 5 months in front or behind the current month | Use the date changer and click the arrows to go as far forwards and backwards as possible | User can go forward or back 5 months | As expected
| TC021 | [USER STORY: Month changes automatically](https://github.com/SemMTM/sems-financial-tracker/issues/28) | When the current month changes the calendar grid automatically updates to display the new month | Change the month on your device and reload the tracker | The new month is automatically displayed | As expected
| TC023 | [USER STORY: Month changes automatically](https://github.com/SemMTM/sems-financial-tracker/issues/28) | The current month is always automatically displayed to the user on load | Load the app, change the month, close it, reload it. Change the month on your device and reload the app. | In both instances, the current month is displayed. | As expected
| **Monthly Summary View** |  |  |  |  |  |  |
| TC024 | [USER STORY: Switch between monthly and weekly summaries](https://github.com/SemMTM/sems-financial-tracker/issues/18) | Monthly summary is displayed when "change to summary view" button is pressed | Click "change to summary view" button | Monthly summary is displayed | As expected
| TC025 | []() | Monthly summary shows the correct categories | Click to change to monthly summary, check for the following categories: Monthly income, Bills, Savings, Investment, Disposable Income Spending, Summary, Disposable income budget, remaining disposable income | All categories are displayed | As expected
| TC026 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when an income is added | Add an income entry, check the summary has updated without page reload | Summary updates with no reload | As expected
| TC027 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when an expenditure (type bill) is added/removed/updated | Add/remove/update a bill expenditure entry as separate interactions, check the summary has updated on each one without page reload | Summary updates with no reload | As expected
| TC028 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when an expenditure (type Saving) is added/removed/updated | Add/remove/update a savings expenditure entry as separate interactions, check the summary has updated on each one without page reload | Summary updates with no reload | As expected
| TC029 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when an expenditure (type investment) is added/removed/updated | Add/remove/update an investment expenditure entry as separate interactions, check the summary has updated on each one without page reload | Summary updates with no reload | As expected
| TC030 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when disposable income spending is added/removed/updated | Add/remove/update an disposable income spending entry as separate interactions, check the summary has updated on each one without page reload | Summary updates with no reload | As expected
| TC031 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when disposable budget is changed | Edit the current months disposable budget | Monthly summary updates dynamically with no page refresh | As expected
| TC033 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly income is calculated correctly | Add multiple income entires in the same month and add them up. Check the total against the summary views total | The summary views total is correct | As expected
| TC034 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Bills summary is calculated correctly | Add multiple bill entires in the same month and add them up. Check the total against the summary views total | The summary views total is correct | As expected
| TC035 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Savings summary is calculated correctly | Add multiple savings entires in the same month and add them up. Check the total against the summary views total | Savings summary is calculated correctly | As expected
| TC036 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Investment summary is calculated correctly | Add multiple investment entires in the same month and add them up. Check the total against the summary views total | Investment summary is calculated correctly | As expected
| TC037 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Disposable income spending summary is calculated correctly | Add multiple Disposable income spending entires in the same month and add them up. Check the total against the summary views total | Disposable income spending summary is calculated correctly | As expected
| TC038 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Total summary is calculated correctly | Add multiple income and expenditure entires and check the summary total | Summary total is correct | As expected
| TC039 | []() | Total summary changed colour if positive or negative | Add income entires, check the summary. Add expenditures greater then incomes, check the summary. | When just income entries are added, summary value should be green. After expenditures are added, summary should be red | As expected
| TC040 | []() | Disposable income budget is the selected months budget | Go to 3 months and change the budget for each month. Refresh the app and check the months budgets in the summary. | Each month budget is the one set by the user | As expected
| TC041 | []() | Remaining disposable income is the selected months remaining | In the 3 months, add different disposable spending entires, refresh the app, check each month remaining | Each months remaining is its own and it correctly calculated | As expected
| TC042 | []() | Monthly summary changes to reflect the selected month when month is changed | Add entires on 3 different months, refresh the app, check the summaries on each month | Summary should display the correct information for each month | As expected
| TC043 | []() | Monthly summary updates when currency is changed | Go into the settings modal, change the global currency and check the summary view | The currency is changed | As expected
| **Weekly Summary View** |  |  |  |  |  |  |
| TC044 | [USER STORY: Switch between monthly and weekly summaries](https://github.com/SemMTM/sems-financial-tracker/issues/18) | Weekly summary view is displayed when user presses "Change to weekly button" | Go to summary view and press "change to weekly button | Weekly summary view is displayed | As expected
| TC045 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Week ranges (Mon-Sun) are displayed with the correct dates for the specific months | In summary view, click through 3 different months and check the "week" sections dates for the week break downs. Compare to a calendar and check id they are correct | All week breakdowns are correct | As expected
| TC046 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Partial weeks are calculated and displayed correctly | In summary view, click through 3 different months and check the "week" sections dates for the week break downs. Compare to a calendar and check if the partial weeks are correct | Partial weeks are calculated correctly | As expected
| TC047 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Income calculations for each week are correct | Add income data to different weeks for different months, in the weekly summary check those weeks and months | All income calculations are correct | As expected
| TC048 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Expenditure calculations for each week are correct | Add expenditure data to different weeks for different months, in the weekly summary check those weeks and months | Expenditure calculations for each week are correct | As expected
| TC049 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Summary calculations for each week are correct | Add income and expenditure data to different weeks and months, in weekly summary check the summary section calculations | All summary calculations are correct | As expected
| TC050 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Income calculation updates dynamically if a new income is added/removed/updated | In separate interactions, add/remove/update income entires in different weeks and months then check those weeks and months | Actions are shown in weekly summary without page refresh | As expected
| TC051 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Expenditure calculation updates dynamically if a new expenditure is added/removed/updated | In separate interactions, add/remove/update expenditure entires in different weeks and months then check those weeks and months | Actions are shown in weekly summary without page refresh | As expected
| TC052 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Summary calculation updates dynamically if an income or expenditure calculation changes | In separate interactions, add/remove/update income and expenditure entires in different weeks and months then check those weeks and months | Actions are shown in weekly summary without page refresh | As expected
| TC053 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | When selected month is changed, Weekly summary view updates to show the correct months summaries | In separate interactions, add income and expenditure entires in different weeks and months. Check each month and its data are correct | Each month shows the correct data | As expected
| **Expenditure/Income List** | All tests should be done for both income and expenditure entries |  |  |  |  |  |
| TC054 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | An entry can be added to the list and is displayed | Add multiple expenditure entires | They have been appended to the list | As expected
| TC055 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | The recently added entry is on the list after page refresh | Add multiple expenditure entires to the list then refresh the page | The previously added entry is visible on the list | As expected
| TC056 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | All details added about the entry are displayed on the list | Add an expenditure entry and check the list | All details and the entry can be seen on the list | As expected
| TC057 | []() | Entrys are organised in date order | Add multiple entrys with different dates | The entrys have been organised in date order | As expected
| TC058 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | The list is updated dynamically when an entry is added | Add an expenditure entry | After the entry is added it is appended the list with no page refresh | As expected
| TC059 | []() | Entry's older than todays date are greyed out | Add multiple entrys for this month, ones before todays date and ones after | Entires with dates before todays date are greyed out | As expected
| TC060 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | The entry's date is displayed correctly formatted | Add multiple entries and check the entires dates on the list | The dates have been correctly formatted as Day, 7 Mon | As expected
| TC061 | [USER STORY: Delete expenditure entry](https://github.com/SemMTM/sems-financial-tracker/issues/7) | An entry can be deleted | Delete an entry | The entry is deleted | As expected
| TC062 | [USERS STORY: Edit incomes](https://github.com/SemMTM/sems-financial-tracker/issues/4) - [USER STORY: Edit expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/5) | The list updates dynamically after any changes to an entry | Edit multiple entries | The lists are updated dynamically after each edit | As expected
| TC063 | [USER STORY: Delete expenditure entry](https://github.com/SemMTM/sems-financial-tracker/issues/7) | Entry's are dynamically removed from the list upon deletion | Delete entires | Entries are dynamically removed from their lists | As expected
| TC064 | [USER STORY: Repeat an income payment ](https://github.com/SemMTM/sems-financial-tracker/issues/24) - [USER STORY: Repeat an expenditure payment](https://github.com/SemMTM/sems-financial-tracker/issues/25) | Entrys can be repeated weekly | Add entries to the first week of the month with a weekly repeat | The entires are duplicated onto each week and are added to the list after form submission | As expected
| TC065 | [USER STORY: Repeat an income payment ](https://github.com/SemMTM/sems-financial-tracker/issues/24) - [USER STORY: Repeat an expenditure payment](https://github.com/SemMTM/sems-financial-tracker/issues/25) | Entrys can be repeated monthly | Add entries to the month with a monthly repeat, then check 3 months forwards from the date set | Each entry has been repeated on the same day and has been added to each months list | As expected
| TC066 | [USER STORY: Repeat an income payment ](https://github.com/SemMTM/sems-financial-tracker/issues/24) - [USER STORY: Repeat an expenditure payment](https://github.com/SemMTM/sems-financial-tracker/issues/25) | Repeated entrys that are deleted also delete all future versions of that entry | Go to the second of the previously added repeated entires and delete it. Check 3 month forwards | The first added entry remains but all future versions of it are deleted | As expected
| TC067 | [USERS STORY: Edit incomes](https://github.com/SemMTM/sems-financial-tracker/issues/4) - [USER STORY: Edit expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/5) | Repeated entrys that are edited propagate changes to all future versions of that entry | Add a few weekly and monthly repeat entries, then edit them and check future entires | All future entires have been successfully edited | As expected
| TC070 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | When the users global current is updated, all entrys are updated to show this | In the settings drop down, change the currency setting and check both lists | Selected currency is displayed on the lists | As expected
| TC071 | []() | An entry must have a title | Try and add an entry with no title | Warning is shown and form can not be submitted | As expected
| TC072 | []() | An entry must have an amount | Try and add an entry with no amount | Warning is shown and form can not be submitted | As expected
| TC073 | [USER STORY: Set category on expenditure](https://github.com/SemMTM/sems-financial-tracker/issues/36) | An entry must have a type | Try and add an entry with no type | The entry has a default type of bill so its not possible for the user to submit one without a type | As expected
| TC074 | []() | An entry must have a date | Add an entry and press clear on the date picker | A warning is thrown and the form is not submitted | As expected
| TC075 | []() | The date is auto selected to today | Add an entry and check the date picker is todays date | The date picker is todays date | As expected
| TC076 | []() | An entrys title has a character limit | Add an entry and hold a | User cannot type for than 50 characters | Failed - User can type more than 100 characters but submission fails
| TC076 #2 | []() | An entrys title has a character limit | Add an entry and hold a | User cannot type for than 50 characters | PASS - Added Char limit on all titles
| TC077 | []() | An entrys amount must be greater than 0 | Add and entry with a negative value | Warning will be shown and form will not be submitted | As expected
| TC078 | []() | An entry amount can only be a number | As separate interactions add an entry with letters, special characters and nothing | Warning is thrown and form is not submitted or only numbers can be typed | As expected
| TC081 | []() | The submit button is disabled until the form has finished its post request | Add an entry and try to press the submit button multiple times on for submission | Button can only be pressed once and only 1 entry is created | As expected
| TC082 | []() | When deleting an entry, a confirmation is first shown | Add an entry then delete it | A confirmation alert is displayed, after clicking yesm the entry is deleted | As expected
| TC083 | []() | An entrys amount cannot be more than 1,000,000 | Add an entry with an amount of 100000000000 | A warning is thrown and the form is not submitted | As expected
| TC084 | []() | When the edit button is pressed, a modal is displayed | Press the edit button next to an entry | The edit modal is shown | As expected
| **Disposable Income Budget Section** |  |  |  |  |  |  |
| TC085 | [USER STORY: Remaining disposable income reset each month](https://github.com/SemMTM/sems-financial-tracker/issues/32) | Budget is automatically created at 0 for each month |  |  |  |  |
| TC086 | []() | Budget can not be a negative value |  |  |  |  |
| TC087 | []() | Budget can only be a number |  |  |  |  |
| TC088 | []() | Budget has an upper limit |  |  |  |  |
| TC089 | [USER STORY: Remaining disposable income](https://github.com/SemMTM/sems-financial-tracker/issues/13) | Remaining budget is displayed |  |  |  |  |
| TC090 | [USER STORY: Remaining disposable income](https://github.com/SemMTM/sems-financial-tracker/issues/13) | Remaining budget is calculated correctly after disposable spending is added |  |  |  |  |
| TC091 | [USER STORY: Edit disposable income budget](https://github.com/SemMTM/sems-financial-tracker/issues/33) | Budget and remaining update dynamically when budget is edited |  |  |  |  |
| TC092 | [USER STORY: Remaining disposable income](https://github.com/SemMTM/sems-financial-tracker/issues/13) | Remaining updates dynamically when a disposable spending entry is changed/added/deleted |  |  |  |  |
| TC093 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | When users currency is changed, this is reflected in the budget and remaining |  |  |  |  |
| TC094 | []() | When the edit button is pressed, a modal is displayed |  |  |  |  |
| TC094 | [USER STORY: Edit disposable income budget](https://github.com/SemMTM/sems-financial-tracker/issues/33) | User can edit and set the disposable budget |  |  |  |  |
| **Disposable Income Spending Section** |  |  |  |  |  |  |
| TC095 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | An entry can be added to the list and is displayed |  |  |  |  |
| TC096 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | The recently added entry is on the list after page refresh |  |  |  |  |
| TC097 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | All detail added about the entry are displayed on the list |  |  |  |  |
| TC098 | []() | Entrys are organised in date order |  |  |  |  |
| TC099 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | The list is updated dynamically when an entry is added |  |  |  |  |
| TC100 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | The entry's date is displayed correctly formatted |  |  |  |  |
| TC101 | [USER STORY: Delete disposable income spending entry](https://github.com/SemMTM/sems-financial-tracker/issues/8) | An entry can be deleted |  |  |  |  |
| TC102 | [USER STORY: Delete disposable income spending entry](https://github.com/SemMTM/sems-financial-tracker/issues/8) | The list updates dynamically after any changes to an entry |  |  |  |  |
| TC103 | [USER STORY: Delete disposable income spending entry](https://github.com/SemMTM/sems-financial-tracker/issues/8) | Entry's are dynamically removed from the list upon deletion |  |  |  |  |
| TC104 | [USER STORY: Edit disposable income spending entries](https://github.com/SemMTM/sems-financial-tracker/issues/6) | Entrys can be edited |  |  |  |  |
| TC105 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | When an entry is added it is dynamically appended to the list in the correct position |  |  |  |  |
| TC106 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | When the users global current is updated, all entrys are updated to show this |  |  |  |  |
| TC107 | []() | An entry must have a title |  |  |  |  |
| TC108 | []() | An entry must have an amount |  |  |  |  |
| TC109 | []() | An entry must have a date |  |  |  |  |
| TC110 | []() | The date is auto selected to today |  |  |  |  |
| TC111 | []() | An entrys title has a character limit |  |  |  |  |
| TC112 | []() | An entrys amount must be greater than 0 |  |  |  |  |
| TC113 | []() | An entry amount can only be a number |  |  |  |  |
| TC114 | []() | An entrys titles must only be letters |  |  |  |  |
| TC115 | []() | Entrys older than 6 months are deleted |  |  |  |  |
| TC116 | []() | The submit button is disabled until the form has finished its post request |  |  |  |  |
| TC117 | []() | When deleting an entry, a confirmation is first shown |  |  |  |  |
| TC118 | []() | An entrys amount has an upper limit |  |  |  |  |
| TC119 | []() | When the edit button is pressed, a modal is displayed |  |  |  |  |
| TC120 | [USER STORY: Remaining disposable income](https://github.com/SemMTM/sems-financial-tracker/issues/13) | After an entry is added, the remaining amount is correctly updated |  |  |  |  |
| **Month Selector** |  |  |  |  |  |  |
| TC121 | []() | The currently selected month is displayed in the centre |  |  |  |  |
| TC122 | []() | The month move forward or backwards when the user presses the arrows |  |  |  |  |
| TC123 | []() | All lists and views change to the selected month when the month is changed |  |  |  |  |
| TC124 | []() | When at the end of the visible month window (-5 or +5 months from the current), the arrow disappears |  |  |  |  |
| TC125 | []() | When the month is changed, the data for the selected month is correctly shown |  |  |  |  |
| **Settings Dropdown** |  |  |  |  |  |  |
| TC126 | [USER STORY: Access a setting page](https://github.com/SemMTM/sems-financial-tracker/issues/19) | When the settings button is pressed, a drop down is shown |  |  |  |  |
| TC127 | [USER STORY: Access a setting page](https://github.com/SemMTM/sems-financial-tracker/issues/19) | All menu opens open their relevant modal |  |  |  |  |
| TC128 | [USER STORY: Dark/Light mode](https://github.com/SemMTM/sems-financial-tracker/issues/49) | When pressing dark mode/light mode, the app changes its display mode and colors |  |  |  |  |
| TC129 | []() | The users selected mode is present after log out or page refresh |  |  |  |  |
| TC130 | [USER STORY: Change username](https://github.com/SemMTM/sems-financial-tracker/issues/21) | A users username is displayed in the change username modal |  |  |  |  |
| TC131 | [USER STORY: Change username](https://github.com/SemMTM/sems-financial-tracker/issues/21) | A user can successfully change their username |  |  |  |  |
| TC132 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username must be unique |  |  |  |  |
| TC133 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username can not have forbidden characters |  |  |  |  |
| TC134 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username has a length limit |  |  |  |  |
| TC135 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username cannot be blank |  |  |  |  |
| TC136 | []() | A user can log in with their new username after changing |  |  |  |  |
| TC137 | [USER STORY: Change/add email address](https://github.com/SemMTM/sems-financial-tracker/issues/22) | A user can change their email address |  |  |  |  |
| TC138 | []() | The new email address cannot be one that another user is using |  |  |  |  |
| TC139 | []() | The new email address must be in the correct format |  |  |  |  |
| TC140 | [USER STORY: Change/add email address](https://github.com/SemMTM/sems-financial-tracker/issues/22) | The users current email address is displayed in the modal |  |  |  |  |
| TC141 | []() | The user receives a success message after successfully changing their username |  |  |  |  |
| TC142 | []() | The user receives a success message after successfully changing their email address |  |  |  |  |
| TC143 | []() | A user can close any modal by pressing the x |  |  |  |  |
| TC144 | []() | A user can close any modal by pressing esc |  |  |  |  |
| TC145 | [https://github.com/SemMTM/sems-financial-tracker/issues/20](https://github.com/SemMTM/sems-financial-tracker/issues/20) | A user can successfully change their password |  |  |  |  |
| TC145 | [Add validation to username and password change forms](https://github.com/SemMTM/sems-financial-tracker/issues/46) | An error is thrown if the new password fails validation |  |  |  |  |
| TC146 | [https://github.com/SemMTM/sems-financial-tracker/issues/20](https://github.com/SemMTM/sems-financial-tracker/issues/20) | A user can log in with their new password after a successful change |  |  |  |  |
| TC147 | [Add validation to username and password change forms](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new password must match to be changed |  |  |  |  |
| TC148 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | A user can change their currency |  |  |  |  |
| TC149 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | The users chosen currency is displayed in the selector |  |  |  |  |
| TC150 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | Currency changes propagate across the entire app |  |  |  |  |
| TC151 | []() | A user can log out by pressing the log out button |  |  |  |  |
| **Sign In Modal** |  |  |  |  |  |  |
| TC152 | [USER STORY: Sign In](https://github.com/SemMTM/sems-financial-tracker/issues/15) | A user can successfully sign in with their username and password |  |  |  |  |
| TC153 | []() | After signing in a user is automatically redirected to the home page |  |  |  |  |
| TC154 | []() | Errors are displayed if a users sign in fails validation |  |  |  |  |
| TC155 | []() | After the access token expires, a new token is automatically refreshed using the refresh token |  |  |  |  |
| TC156 | []() | A user is automatically redirected to the log in modal(if not logged in)/homepage(if logged in) if they try to access a non existent  |  |  |  |  |
| TC157 | []() | The Sign-up link takes the user to the sign up modal |  |  |  |  |
| TC158 | []() | The Forgot Password button takes the user to the pass reset modal |  |  |  |  |
| **Sign Up Modal** |  |  |  |  |  |  |
| TC159 | [USER STORY: Account creation](https://github.com/SemMTM/sems-financial-tracker/issues/14) | A user can create an account |  |  |  |  |
| TC160 | [USER STORY: Account creation](https://github.com/SemMTM/sems-financial-tracker/issues/14) | A user can log in with their new credentials after account creation |  |  |  |  |
| TC161 | []() | Usernames must be unique |  |  |  |  |
| TC162 | []() | Usernames cannot be blank |  |  |  |  |
| TC163 | []() | Usernames cannot have forbidden characters |  |  |  |  |
| TC164 | []() | A user does not need to add an email address to sign up |  |  |  |  |
| TC165 | []() | A users password must pass the validation rules to be used |  |  |  |  |
| TC166 | []() | The passwords must match for the account to be created |  |  |  |  |
| TC167 | []() | After signing up the user is automatically signed in and redirected to the homepage |  |  |  |  |
| TC168 | []() | The sign in link redirects the user to the sign in modal |  |  |  |  |


## Unit Tests
Extensive unit tests were created for all serializers, views and util file in the backend. 