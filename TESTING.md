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
| TC022 | [USER STORY: Month changes automatically](https://github.com/SemMTM/sems-financial-tracker/issues/28) | When a new month starts, all repeated entries are automatically duplicated in the correct positions into the new 6th month | Add repeated entires for the current month, go as far forwards on the months as you can. Change the date on your device to the next month. Go into private mode, go back to the tracker and go as far forwards as you can. The new furthest month should display all repeated data correctly | All repeated results are copied and displayed in the new month. | FAIL - new data was not copied
| TC022 #2 |  |  |  |  | 
| TC023 | [USER STORY: Month changes automatically](https://github.com/SemMTM/sems-financial-tracker/issues/28) | The current month is always automatically displayed to the user on load |  |  |  |  |
| **Monthly Summary View** |  |  |  |  |  |  |
| TC024 | [USER STORY: Switch between monthly and weekly summaries](https://github.com/SemMTM/sems-financial-tracker/issues/18) | Monthly summary is displayed when "change to summary view" button is pressed |  |  |  |  |
| TC025 | []() | Monthly summary shows the correct categories |  |  |  |  |
| TC026 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when an income is added |  |  |  |  |
| TC027 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when an expenditure (type bill) is added/removed/updated |  |  |  |  |
| TC028 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when an expenditure (type Saving) is added/removed/updated |  |  |  |  |
| TC029 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when an expenditure (type investment) is added/removed/updated |  |  |  |  |
| TC030 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when disposable income spending is added/removed/updated |  |  |  |  |
| TC031 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly summary updates dynamically when disposable budget is changed |  |  |  |  |
| TC032 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Summary updates dynamically when an entry is added/removed/updated |  |  |  |  |
| TC033 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Monthly income is calculated correctly |  |  |  |  |
| TC034 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Bills summary is calculated correctly |  |  |  |  |
| TC035 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Savings summary is calculated correctly |  |  |  |  |
| TC036 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Investment summary is calculated correctly |  |  |  |  |
| TC037 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Disposable income spending summary is calculated correctly |  |  |  |  |
| TC038 | [USER STORY: Monthly financial summary](https://github.com/SemMTM/sems-financial-tracker/issues/16) | Total summary is calculated correctly |  |  |  |  |
| TC039 | []() | Total summary changed colour if positive or negative |  |  |  |  |
| TC040 | []() | Disposable income budget is the selected months budget |  |  |  |  |
| TC041 | []() | Remaining disposable income is the selected months remaining  |  |  |  |  |
| TC042 | []() | Monthly summary changes to reflect the selected month when month is changed |  |  |  |  |
| TC043 | []() | Monthly summary updates when currency is changed |  |  |  |  |
| **Weekly Summary View** |  |  |  |  |  |  |
| TC044 | [USER STORY: Switch between monthly and weekly summaries](https://github.com/SemMTM/sems-financial-tracker/issues/18) | Weekly summary view is displayed when user presses "Change to weekly button" |  |  |  |  |
| TC045 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Week ranges (Mon-Sun) are displayed with the correct dates for the specific months |  |  |  |  |
| TC046 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Partial weeks are calculated and displayed correctly |  |  |  |  |
| TC047 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Income calculations for each week are correct |  |  |  |  |
| TC048 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Expenditure calculations for each week are correct |  |  |  |  |
| TC049 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Summary calculations for each week are correct |  |  |  |  |
| TC050 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Income calculation updates dynamically if a new income is added/removed/updated |  |  |  |  |
| TC051 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Expenditure calculation updates dynamically if a new expenditure is added/removed/updated |  |  |  |  |
| TC052 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | Summary calculation updates dynamically if an income or expenditure calculation changes |  |  |  |  |
| TC053 | [USER STORY: Weekly financial breakdown](https://github.com/SemMTM/sems-financial-tracker/issues/17) | When selected month is changed, Weekly summary view updates to show the correct months summaries |  |  |  |  |
| **Expenditure/Income List** |  |  |  |  |  |  |
| TC054 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | An entry can be added to the list and is displayed |  |  |  |  |
| TC055 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | The recently added entry is on the list after page refresh |  |  |  |  |
| TC056 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | All detail added about the entry are displayed on the list |  |  |  |  |
| TC057 | []() | Entrys are organised in date order |  |  |  |  |
| TC058 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | The list is updated dynamically when an entry is added |  |  |  |  |
| TC059 | []() | Entry's older than todays date are greyed out |  |  |  |  |
| TC060 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | The entry's date is displayed correctly formatted |  |  |  |  |
| TC061 | [USER STORY: Delete expenditure entry](https://github.com/SemMTM/sems-financial-tracker/issues/7) | An entry can be deleted |  |  |  |  |
| TC062 | [USERS STORY: Edit incomes](https://github.com/SemMTM/sems-financial-tracker/issues/4) - [USER STORY: Edit expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/5) | The list updates dynamically after any changes to an entry |  |  |  |  |
| TC063 | [USER STORY: Delete expenditure entry](https://github.com/SemMTM/sems-financial-tracker/issues/7) | Entry's are dynamically removed from the list upon deletion |  |  |  |  |
| TC064 | [USER STORY: Repeat an income payment ](https://github.com/SemMTM/sems-financial-tracker/issues/24) - [USER STORY: Repeat an expenditure payment](https://github.com/SemMTM/sems-financial-tracker/issues/25) | Entrys can be repeated weekly |  |  |  |  |
| TC065 | [USER STORY: Repeat an income payment ](https://github.com/SemMTM/sems-financial-tracker/issues/24) - [USER STORY: Repeat an expenditure payment](https://github.com/SemMTM/sems-financial-tracker/issues/25) | Entrys can be repeated monthly |  |  |  |  |
| TC066 | [USER STORY: Repeat an income payment ](https://github.com/SemMTM/sems-financial-tracker/issues/24) - [USER STORY: Repeat an expenditure payment](https://github.com/SemMTM/sems-financial-tracker/issues/25) | Repeated entrys that are deleted also delete all future versions of that entry |  |  |  |  |
| TC067 | [USERS STORY: Edit incomes](https://github.com/SemMTM/sems-financial-tracker/issues/4) - [USER STORY: Edit expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/5) | Repeated entrys that are edited propagate changes to all future versions of that entry |  |  |  |  |
| TC068 | [USERS STORY: Edit incomes](https://github.com/SemMTM/sems-financial-tracker/issues/4) - [USER STORY: Edit expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/5) | Entrys can be edited |  |  |  |  |
| TC069 | [USER STORY: List of all expenditure entries](https://github.com/SemMTM/sems-financial-tracker/issues/9) - [USER STORY: List of that months income](https://github.com/SemMTM/sems-financial-tracker/issues/10) | When an entry is added it is dynamically appended to the list in the correct position |  |  |  |  |
| TC070 | [USER STORY: Set currency](https://github.com/SemMTM/sems-financial-tracker/issues/23) | When the users global current is updated, all entrys are updated to show this |  |  |  |  |
| TC071 | []() | An entry must have a title |  |  |  |  |
| TC072 | []() | An entry must have an amount |  |  |  |  |
| TC073 | [USER STORY: Set category on expenditure](https://github.com/SemMTM/sems-financial-tracker/issues/36) | An entry must have a type |  |  |  |  |
| TC074 | []() | An entry must have a date |  |  |  |  |
| TC075 | []() | The date is auto selected to today |  |  |  |  |
| TC076 | []() | An entrys title has a character limit |  |  |  |  |
| TC077 | []() | An entrys amount must be greater than 0 |  |  |  |  |
| TC078 | []() | An entry amount can only be a number |  |  |  |  |
| TC079 | []() | An entrys titles must only be letters |  |  |  |  |
| TC080 | []() | Entrys older than 6 months are deleted |  |  |  |  |
| TC081 | []() | The submit button is disabled until the form has finished its post request |  |  |  |  |
| TC082 | []() | When deleting an entry, a confirmation is first shown |  |  |  |  |
| TC083 | []() | An entrys amount has an upper limit |  |  |  |  |
| TC084 | []() | When the edit button is pressed, a modal is displayed |  |  |  |  |
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