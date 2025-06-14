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
| TC055 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | The recently added entry is on the list after page refresh | Add multiple entires to the list then refresh the page | The previously added entry is visible on the list | As expected
| TC056 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | All details added about the entry are displayed on the list | Add an entry and check the list | All details and the entry can be seen on the list | As expected
| TC057 | []() | Entrys are organised in date order | Add multiple entrys with different dates | The entrys have been organised in date order | As expected
| TC058 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | The list is updated dynamically when an entry is added | Add an entry | After the entry is added it is appended the list with no page refresh | As expected
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
| TC082 | []() | When deleting an entry, a confirmation is first shown | Add an entry then delete it | A confirmation alert is displayed, after clicking yes the entry is deleted | As expected
| TC083 | []() | An entrys amount cannot be more than 1,000,000 | Add an entry with an amount of 100000000000 | A warning is thrown and the form is not submitted | As expected
| TC084 | []() | When the edit button is pressed, a modal is displayed | Press the edit button next to an entry | The edit modal is shown | As expected
| **Disposable Income Budget Section** |  |  |  |  |  |  |
| TC085 | [USER STORY: Remaining disposable income reset each month](https://github.com/SemMTM/sems-financial-tracker/issues/32) | Budget is automatically created at 0 for each month | Create a new user, then check all the available forward months budgets | All budgets are at 0 | As expected
| TC086 | []() | Budget can not be a negative value | Edit the budget and set it to a negative value | Warning is thrown and for not submitted | As expected |
| TC087 | []() | Budget can only be a number | Edit budget and try to add letters, special characters or leave it blank | Characters other than letters cannot be added, warning is thrown when leaving field empty and form is not submitted | As expected
| TC088 | []() | Budget has an upper limit | Edit the budget and add a value of 10000000 | A warning is thrown and the form is not submitted | As expected
| TC089 | [USER STORY: Remaining disposable income](https://github.com/SemMTM/sems-financial-tracker/issues/13) | Remaining budget is displayed | Scroll to the budget section | Remaining can be seen | As expected
| TC090 | [USER STORY: Remaining disposable income](https://github.com/SemMTM/sems-financial-tracker/issues/13) | Remaining budget is calculated correctly after disposable spending is added | Add an amount to disposable budget, then add Disposable spending entries. Take the total value of the entries away from the set budget | The remaining calculation matches your calculation | As expected
| TC091 | [USER STORY: Edit disposable income budget](https://github.com/SemMTM/sems-financial-tracker/issues/33) | Budget and remaining update dynamically when budget is edited | Update the disposable budget | Remaining and budget update without page refresh | As expected
| TC092 | [USER STORY: Remaining disposable income](https://github.com/SemMTM/sems-financial-tracker/issues/13) | Remaining updates dynamically when a disposable spending entry is changed/added/deleted | Set a budget amount and add disposable spending items. Edit some and check, delete some and check | Remaining updates dynamically | As expected
| TC093 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | When users currency is changed, this is reflected in the budget and remaining | Change global currency setting in settings drop down and check disposable section | Currency change can be seen in the disposable section | As expected
| TC094 | []() | When the Disposable budget edit button is pressed, a modal is displayed | Press the edit button next to disposable budget | The edit modal is displayed | As expected
| TC094 | [USER STORY: Edit disposable income budget](https://github.com/SemMTM/sems-financial-tracker/issues/33) | User can edit and set the disposable budget | Click the edit button next to the budget and change its value | User can update the value | As expected
| **Disposable Income Spending Section** |  |  |  |  |  |  |
| TC095 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | An entry can be added to the list and is displayed | Add multiple entires | They have been appended to the list | As expected
| TC096 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | The recently added entry is on the list after page refresh | Add multiple entires to the list then refresh the page | The previously added entry is visible on the list | As expected
| TC097 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | All detail added about the entry are displayed on the list | Add ane entry and check the list | All details and the entry can be seen on the list | As expected
| TC098 | []() | Entrys are organised in date order | Add multiple entrys with different dates | The entrys have been organised in date order | As expected
| TC099 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | The list is updated dynamically when an entry is added | Add an entry | After the entry is added it is appended the list with no page refresh | As expected
| TC100 | [USER STORY: Add disposable income to database](https://github.com/SemMTM/sems-financial-tracker/issues/3) | The entry's date is displayed correctly formatted | Add multiple entries and check the entires dates on the list | The dates have been correctly formatted as Day, 7 Mon | As expected|
| TC101 | [USER STORY: Delete disposable income spending entry](https://github.com/SemMTM/sems-financial-tracker/issues/8) | An entry can be deleted | Delete an entry | The entry is deleted | As expected
| TC102 | [USER STORY: Delete disposable income spending entry](https://github.com/SemMTM/sems-financial-tracker/issues/8) | The list updates dynamically after any changes to an entry | Edit multiple entries | The lists are updated dynamically after each edit | As expected
| TC103 | [USER STORY: Delete disposable income spending entry](https://github.com/SemMTM/sems-financial-tracker/issues/8) | Entry's are dynamically removed from the list upon deletion | Delete a previously added entry | The entry is removed from the list without page refresh | As expected
| TC104 | [USER STORY: Edit disposable income spending entries](https://github.com/SemMTM/sems-financial-tracker/issues/6) | Entrys can be edited | Click edit on a previously added entry and change its details | The details of the entry are changed aft6er form submission | As expected
| TC106 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | When the users global currency is updated, all entrys are updated to show this | In the settings drop down, change the currency setting and check the list | Selected currency is displayed on the list | As expected
| TC107 | []() | An entry must have a title | Try and add an entry with no title | Warning is shown and form can not be submitted | As expected
| TC108 | []() | An entry must have an amount | Try and add an entry with no amount | Warning is shown and form can not be submitted | As expected
| TC109 | []() | An entry must have a date | Add an entry and press clear on the date picker | A warning is thrown and the form is not submitted | As expected
| TC110 | []() | The date is auto selected to today | Add an entry and check the date picker is todays date | The date picker is todays date | As expected
| TC111 | []() | An entrys title has a character limit | Add an entry and hold a | User cannot type for than 50 characters | As expected
| TC112 | []() | An entrys amount must be greater than 0 | Add and entry with a negative value | Warning will be shown and form will not be submitted | As expected
| TC113 | []() | An entry amount can only be a number | As separate interactions add an entry with letters, special characters and nothing | Warning is thrown and form is not submitted or only numbers can be typed | As expected
| TC116 | []() | The submit button is disabled until the form has finished its post request | Add an entry and try to press the submit button multiple times on for submission | Button can only be pressed once and only 1 entry is created | As expected
| TC117 | []() | When deleting an entry, a confirmation is first shown | A confirmation alert is displayed, after clicking yes the entry is deleted | As expected
| TC118 | []() | An entrys amount cannot be more than 1,000,000 | Add an entry with an amount of 100000000000 | A warning is thrown and the form is not submitted | As expected
| TC119 | []() | When the edit button is pressed, a modal is displayed | Press the edit button next to an entry | The edit modal is shown | As expected
| TC120 | [USER STORY: Remaining disposable income](https://github.com/SemMTM/sems-financial-tracker/issues/13) | After an entry is added, the remaining amount is correctly updated | Add a budget, then add a few disposable spending entries, then check the remaining | The remaining number adjusts correctly after the entries are added | As expected
| **Month Selector** |  |  |  |  |  |  |
| TC121 | []() | The currently selected month is displayed in the centre | go to the homepage and check the date selector | The current selected month and year are displayed | As expected
| TC122 | []() | The month moves forwards or backwards when the user presses the arrows | go to the homepage and click the forward and backwards arrows | The month changes in the direction of which arrow was pressed | As expected
| TC123 | []() | All lists and views change to the selected month when the month is changed | Add entires in multiple lists to 3 different months, then check each month and the dates on the entires | The lists load and displays the correct calendar grid and entires | As expected
| TC124 | []() | When at the end of the visible month window (-5 or +5 months from the current), the arrow disappears | Click to the end months going forwards and backwards | At each last available month, the arrow disappears | As expected
| **Settings Dropdown** |  |  |  |  |  |  |
| TC126 | [USER STORY: Access a setting page](https://github.com/SemMTM/sems-financial-tracker/issues/19) | When the settings button is pressed, a drop down is shown | Click the settings dropdown | The settings dropdown is shown | As expected
| TC127 | [USER STORY: Access a setting page](https://github.com/SemMTM/sems-financial-tracker/issues/19) | All menu opens open their relevant modal | Open the setting dropdown and click each menu item | Each menus modal is displayed or its action is performed | As expected
| TC128 | [USER STORY: Dark/Light mode](https://github.com/SemMTM/sems-financial-tracker/issues/49) | When pressing dark mode/light mode, the app changes its display mode and colors | Open the settings dropdown and press the "light mode" button | The colour mode of the app changes | As expected
| TC129 | []() | The users selected mode is present after log out or page refresh | Change the colour mode, refresh the page, log out, log back in | The previously set color mode is present | As expected
| TC130 | [USER STORY: Change username](https://github.com/SemMTM/sems-financial-tracker/issues/21) | A users username is displayed in the change username modal | Go to the change username modal and check the current username | Users current username is displayed | As expected
| TC131 | [USER STORY: Change username](https://github.com/SemMTM/sems-financial-tracker/issues/21) | A user can successfully change their username | Go to the "change username" modal and change the username, then reopen the settings modal, and check the username | A success message is shown in the settings modal and the current username shows the new username | As expected
| TC132 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username must be unique | Go to the change username modal and try to change the username to "testuser" (already existing) | An error should be displayed and the username is not changed | FAILED - Form did not submit and returned 400 but no error was displayed
| TC132 #2 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username must be unique | Go to the change username modal and try to change the username to "testuser" (already existing) | An error should be displayed and the username is not changed | PASSED - Updated from to show backend errors
| TC133 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username can not have forbidden characters | Try and add the characters %$£""&** to the new username | Error is thrown and form is not submitted | As expected
| TC134 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username has a length limit | Try to add 60 characters to the username field and submit | No more than 50 characters can be added, an error is thrown and form does not submit | As expected
| TC135 | [https://github.com/SemMTM/sems-financial-tracker/issues/46](https://github.com/SemMTM/sems-financial-tracker/issues/46) | The new username cannot be blank | Try to submit a blank new username | Submit button is disabled | As expected
| TC136 | []() | A user can log in with their new username after changing | Successfully change username, log out then log back in with the new name | User can log in with new username | As expected
| TC137 | [USER STORY: Change/add email address](https://github.com/SemMTM/sems-financial-tracker/issues/22) | A user can change their email address | Go to the change email section and enter a new email address. Once the form has been submitted go back to the email modal and check the current email | SUccess message shown and email address has been changed | As expected
| TC138 | []() | The new email address cannot be one that another user is using | Go to email change modal and try to change email to "test@email.com" | Specific error is thrown and email is not changed | FAILED - The email is not accepted but a generic failure error is thrown, not a specific one
| TC138 #2 | []() | The new email address cannot be one that another user is using | Go to email change modal and try to change email to "test@email.com" | Specific error is thrown and email is not changed | PASSED - Changed ChangeEmailModal to show specific backend errors
| TC139 | []() | The new email address must be in the correct format | In separate interactions try to: add an empty email, add text with no @, add an email with no . | Error is thrown/warning is shown and form is not submitted | As expected
| TC140 | [USER STORY: Change/add email address](https://github.com/SemMTM/sems-financial-tracker/issues/22) | The users current email address is displayed in the modal | Go to the change email modal and check current email | The users current email is displayed | As expected
| TC141 | []() | The user receives a success message after successfully changing their username | go to the change username modal and change the username, then go back to the settings modal | Success message can be seen | As expected
| TC142 | []() | The user receives a success message after successfully changing their email address | go to the change email modal and change the email, then go back to the settings modal | Success message can be seen | As expected
| TC144 | []() | A user can close any modal by pressing esc | Open each modal individually, once open press ESC to close the modal | Modal closes on ESC | As expected
| TC145 | [https://github.com/SemMTM/sems-financial-tracker/issues/20](https://github.com/SemMTM/sems-financial-tracker/issues/20) | A user can successfully change their password | go to the change password modal and change the password. Log out then log back in using the new pass | User can change and log in with their new password | As expected
| TC145 | [Add validation to username and password change forms](https://github.com/SemMTM/sems-financial-tracker/issues/46) | An error is thrown if the new password fails validation | In the pass change modal, try to change the pass without following the validation rules | Error is thrown and pass is not set | As expected
| TC146 | [https://github.com/SemMTM/sems-financial-tracker/issues/20](https://github.com/SemMTM/sems-financial-tracker/issues/20) | A user can log in with their new password after a successful change |  |  |  |  |
| TC148 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | A user can change their currency | Go to the change currency modal and change the currency | Page refreshes and currency change is propagated across the app | As expected
| TC149 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | The users chosen currency is displayed in the selector | After changing the currency, go back to the currency change modal and look at the option displayed | Users previously set currency is displayed | As expected
| TC150 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | Currency changes propagate across the entire app | Go to the currency change modal and change the currency, after refresh check the homepage | All currency symbols have been changed to the newly set one | As expected
| TC151 | []() | A user can log out by pressing the log out button | Open the settings drop down and log out | user is logged out | As expected
| **Sign In Modal** |  |  |  |  |  |  |
| TC152 | [USER STORY: Sign In](https://github.com/SemMTM/sems-financial-tracker/issues/15) | A user can successfully sign in with their username and password | Create a new user, then sign in with the new credentials | User can sign in | As expected
| TC153 | []() | After signing in a user is automatically redirected to the home page | Log in with existing credentials | User is redirected to homepage after signin | As expected
| TC154 | []() | Errors are displayed if a users sign in fails validation | try to log in with non-existent credentials | Errors displayed and user not logged in | As expected
| TC155 | []() | After the access token expires, a new token is automatically refreshed using the refresh token | In the backend, set access token to expire after 5 mins. In front end add a refreshing console log before it tries to refresh access token. Log in wait 6 mins and check console | Console log is shown, user is still logged in | As expected
| TC156 | []() | A user is automatically redirected to the log in modal(if not logged in)/homepage(if logged in) if they try to access a non existent | In the url after the domain name add /1 | The user is shown an error page and auto redirected to the login or homepage | As expected
| TC157 | []() | The Sign-up link takes the user to the sign up modal | Go to the log in modal and press the "Sign-up" link | User is taken to the sign up modal | As expected
| TC158 | []() | The Forgot Password button takes the user to the pass reset modal | Go to the sign in modal and press the forgot password button | User is taken to pass reset modal | As expected
| **Sign Up Modal** |  |  |  |  |  |  |
| TC159 | [USER STORY: Account creation](https://github.com/SemMTM/sems-financial-tracker/issues/14) | A user can create an account | Go to the sign up modal and create an account | The user is able to create an account and they are auto logged in and redirected to the homepage | As expected
| TC160 | [USER STORY: Account creation](https://github.com/SemMTM/sems-financial-tracker/issues/14) | A user can log in with their new credentials after account creation | After account creation, log out then log in with the new details | User can successfully log in | As expected
| TC161 | []() | Usernames must be unique | Go to sign up modal and try to create an account with username "testuser" | Specific error is thrown and sign up fails | FAILED - Sign up fails but no specific error is thrown
| TC161 #2 | []() | Usernames must be unique | Go to sign up modal and try to create an account with username "testuser" | Specific error is thrown and sign up fails | PASSED - Fix error with simple typo in function name
| TC162 | []() | Usernames cannot be blank | Go to sign up modal and create an account with a space for a username | Specific error is thrown and sign up fails | As expected
| TC163 | []() | Usernames cannot have forbidden characters | In sign up modal try to create an account with the character %$^£ | Specific error is thrown and sign up fails | As expected
| TC164 | []() | A user does not need to add an email address to sign up | Go to sign up modal and create an account with no email address | User can create an account | As expected
| TC165 | []() | A users password must pass the validation rules to be used | Go to sign up modal and try to use a password that doesnt follow validation rules | Specific error is thrown and account is not created | As expected 
| TC166 |  | After sign up user is auto logged in a redirected to home page | Go to the sign up modal and create an account | The user is able to create an account and they are auto logged in and redirected to the homepage | As expected
| TC168 | []() | The sign in link redirects the user to the sign in modal | Go to the sign up modal and press the sign in link | User is redirected to the sign in modal | As expected

## Unit Tests
Extensive unit tests were created for all serializers, views and util files in the API. 

### Transactions app:
  - [Serializer unit tests](https://github.com/SemMTM/sems-finance-tracker-api/blob/main/transactions/tests/test_serializers.py) 
  - [Utils unit tests](https://github.com/SemMTM/sems-finance-tracker-api/blob/main/transactions/tests/test_utils.py)
  - [Views unit tests](https://github.com/SemMTM/sems-finance-tracker-api/blob/main/transactions/tests/test_views.py)
### Core app:
  - [Serializer unit tests](https://github.com/SemMTM/sems-finance-tracker-api/blob/main/core/tests/test_serializers.py)
  - [Utils unit tests](https://github.com/SemMTM/sems-finance-tracker-api/blob/main/core/tests/test_utils.py)
  - [Views unit tests](https://github.com/SemMTM/sems-finance-tracker-api/blob/main/core/tests/test_views.py)

## User Tests
4 users were given no instruction on how to use the app and were asked to create an account and use all features.
| User | Result |
|--|--|
| User 1 | I couldn't find any bugs, everything was easy to use. |
| User 3 | I really like the UI. Its really simple and easy to use straight away which is important. |
| User 3 | After creating an account, it said signing in and nothing happened. After refreshing and logging in, everything worked fine and I had to other issues. |
| User 4 | I really like the calendar feature, its very simple to use |

## PageSpeed Insight Testing
PageSpeed insight testing was performed after loading a mock test user and mock data into the finance tracker.

**Desktop**

![PageSpeed Insight Testing Desktop](src/readme_images/Screenshot_22.png)

**Mobile**

![PageSpeed Insight Testing Desktop](src/readme_images/Screenshot_23.png)

## Responsiveness
All pages were tested to ensure responsiveness on screen sizes from 320px and upwards.

**Steps to test:**

- Open browser and navigate to Monthlyfinancetracker.xyz
- Open the developer tools (right click and inspect)
- Set to responsive and decrease width to 320px
- Set the zoom to 50%
- Click and drag the responsive window to maximum width

**Expected:**

- Website is responsive on all screens
- No images are distorted
- No horizontal scroll is present
- There are no issues with modals
- No elements overlap
- Elements are spaced appropriately

**Actual:**

Website behaved as expected. The app was also tested on a number of mobile devices with no issues.

## Validator Testing
### Frontend
All frontend files were run through ESLint, and no significant errors or warnings were found.
- JSX code follows best practices for syntax, indentation, and structure.
- All components, hooks, and utilities adhere to consistent naming conventions and formatting.
- Where necessary, a few safe ESLint rule suppressions were added with comments, but these do not impact functionality or readability.

### Backend
All backend Python files were reviewed and validated to ensure full compliance with the PEP8 style guide.

- Code Formatting:
  - All models, views, serializers, and utility files follow consistent indentation (4 spaces), spacing around operators, and blank line rules.
- Naming Conventions:
  - Functions, variables, and classes use clear and descriptive names that conform to Python standards.
- Line Length:
  - All lines were checked to stay within the recommended character range, improving readability across devices.
- Tooling:
  - Tools such as flake8 were used during development to auto-format and validate code regularly.
- Imports:
  - All imports follow PEP8 import grouping: standard library first, third-party libraries second, and local imports last — with a blank line between each group.