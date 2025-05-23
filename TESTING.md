# Testing
## Integration Testing

| **Test** | **User Story** | **Description** | **How we test it** | **Expected Outcome** | **Result** | **Pass/Fail**
|--|--|--|--|--|--|--|
| **Calendar View** |  |  |  |  |  |  |
|  |  | Calendar grid aligns the month correctly with the days of the week |  |  |  |  |
|  |  | Unused grid spaces are lined and greyed out |  |  |  |  |
|  |  | Days on the month that have passed are greyed out |  |  |  |  |
|  |  | The current day is highlighted |  |  |  |  |
|  |  | Each day has the correct month number at the top |  |  |  |  |
|  |  | Each month has the correct number of days |  |  |  |  |
|  |  | Each day has the correct expenditure total shown |  |  |  |  |
|  |  | Each day has the correct income total shown |  |  |  |  |
|  |  | Incomes are displayed on the correct day |  |  |  |  |
|  |  | Expenditures are displayed on the correct day |  |  |  |  |
|  |  | No number is shown on days with no values |  |  |  |  |
|  |  | Calendar view updates dynamically when an income entry is add/removed/edited |  |  |  |  |
|  |  | Calendar view updates dynamically when an expenditure entry is add/removed/edited |  |  |  |  |
|  |  | Calendar view updates dynamically when a disposable spending entry is add/removed/edited |  |  |  |  |
|  |  | Calendar view updates dynamically when currency is changed |  |  |  |  |
|  |  | When month is changed, the correct months data is shown |  |  |  |  |
|  |  | When month is changed, the grid regenerates with days of the month aligned correctly |  |  |  |  |
|  |  | When month is changed, the loading overlay is displayed until new data is shown |  |  |  |  |
|  |  | On days with just one entry, only that entry is shown on the day |  |  |  |  |
|  |  | The user can see 5 months in front or behind the current month |  |  |  |  |
|  |  | When the current month changes the calendar grid automatically updates to display the new month |  |  |  |  |
|  |  | When a new month starts, all repeated entries are automatically duplicated in the correct positions into the new 6th month |  |  |  |  |
| **Monthly Summary View** |  |  |  |  |  |  |
|  |  | Monthly summary is displayed when "change to summary view" button is pressed |  |  |  |  |
|  |  | Monthly summary shows the correct categories |  |  |  |  |
|  |  | Monthly summary updates dynamically when an income is added |  |  |  |  |
|  |  | Monthly summary updates dynamically when an expenditure (type bill) is added/removed/updated |  |  |  |  |
|  |  | Monthly summary updates dynamically when an expenditure (type Saving) is added/removed/updated |  |  |  |  |
|  |  | Monthly summary updates dynamically when an expenditure (type investment) is added/removed/updated |  |  |  |  |
|  |  | Monthly summary updates dynamically when disposable income spending is added/removed/updated |  |  |  |  |
|  |  | Monthly summary updates dynamically when disposable budget is changed |  |  |  |  |
|  |  | Summary updates dynamically when an entry is added/removed/updated |  |  |  |  |
|  |  | Monthly income is calculated correctly |  |  |  |  |
|  |  | Bills summary is calculated correctly |  |  |  |  |
|  |  | Savings summary is calculated correctly |  |  |  |  |
|  |  | Investment summary is calculated correctly |  |  |  |  |
|  |  | Disposable income spending summary is calculated correctly |  |  |  |  |
|  |  | Total summary is calculated correctly |  |  |  |  |
|  |  | Total summary changed colour if positive or negative |  |  |  |  |
|  |  | Disposable income budget is the selected months budget |  |  |  |  |
|  |  | Remaining disposable income is the selected months remaining  |  |  |  |  |
|  |  | Monthly summary changes to reflect the selected month when month is changed |  |  |  |  |
|  |  | Monthly summary updates when currency is changed |  |  |  |  |
| **Weekly Summary View** |  |  |  |  |  |  |
|  |  | Weekly summary view is displayed when user presses "Change to weekly button" |  |  |  |  |
|  |  | Week ranges (Mon-Sun) are displayed with the correct dates for the specific months |  |  |  |  |
|  |  | Partial weeks are calculated and displayed correctly |  |  |  |  |
|  |  | Income calculations for each week are correct |  |  |  |  |
|  |  | Expenditure calculations for each week are correct |  |  |  |  |
|  |  | Summary calculations for each week are correct |  |  |  |  |
|  |  | Income calculation updates dynamically if a new income is added/removed/updated |  |  |  |  |
|  |  | Expenditure calculation updates dynamically if a new expenditure is added/removed/updated |  |  |  |  |
|  |  | Summary calculation updates dynamically if an income or expenditure calculation changes |  |  |  |  |
|  |  | When selected month is changed, Weekly summary view updates to show the correct months summaries |  |  |  |  |
| **Expenditure/Income List** |  |  |  |  |  |  |
|  |  | An entry can be added to the list and is displayed |  |  |  |  |
|  |  | The recently added entry is on the list after page refresh |  |  |  |  |
|  |  | All detail added about the entry are displayed on the list |  |  |  |  |
|  |  | Entrys are organised in date order |  |  |  |  |
|  |  | The list is updated dynamically when an entry is added |  |  |  |  |
|  |  | Entry's older than todays date are greyed out |  |  |  |  |
|  |  | The entry's date is displayed correctly formatted |  |  |  |  |
|  |  | An entry can be deleted |  |  |  |  |
|  |  | The list updates dynamically after any changes to an entry |  |  |  |  |
|  |  | Entry's are dynamically removed from the list upon deletion |  |  |  |  |
|  |  | Entrys can be repeated weekly |  |  |  |  |
|  |  | Entrys can be repeated monthly |  |  |  |  |
|  |  | Repeated entrys that are deleted also delete all future versions of that entry |  |  |  |  |
|  |  | Repeated entrys that are edited propagate changes to all future versions of that entry |  |  |  |  |
|  |  | Entrys can be edited |  |  |  |  |
|  |  | When an entry is added it is dynamically appended to the list in the correct position |  |  |  |  |
|  |  | When the users global current is updated, all entrys are updated to show this |  |  |  |  |
|  |  | An entry must have a title |  |  |  |  |
|  |  | An entry must have an amount |  |  |  |  |
|  |  | An entry must have a type |  |  |  |  |
|  |  | An entry must have a date |  |  |  |  |
|  |  | The date is auto selected to today |  |  |  |  |
|  |  | An entrys title has a character limit |  |  |  |  |
|  |  | An entrys amount must be greater than 0 |  |  |  |  |
|  |  | An entry amount can only be a number |  |  |  |  |
|  |  | An entrys titles must only be letters |  |  |  |  |
|  |  | Entrys older than 6 months are deleted |  |  |  |  |
|  |  | The submit button is disabled until the form has finished its post request |  |  |  |  |
|  |  | When deleting an entry, a confirmation is first shown |  |  |  |  |
|  |  | An entrys amount has an upper limit |  |  |  |  |
| **Disposable Income Budget Section** |  |  |  |  |  |  |
| **Disposable Budget Spending Section** |  |  |  |  |  |  |
| **Month Selector** |  |  |  |  |  |  |
| **Settings Dropdown** |  |  |  |  |  |  |
| **Sign In Modal** |  |  |  |  |  |  |
| **Sign Up Modal** |  |  |  |  |  |  |
| **Forgot Password Modal** |  |  |  |  |  |  |

## Unit Tests
Extensive unit tests were created for all serializers, views and util file in the backend. 