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
|  |  | The current month is always automatically displayed to the user on load |  |  |  |  |
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
|  |  | When the edit button is pressed, a modal is displayed |  |  |  |  |
| **Disposable Income Budget Section** |  |  |  |  |  |  |
|  |  | Budget is automatically created at 0 for each month |  |  |  |  |
|  |  | Budget can not be a negative value |  |  |  |  |
|  |  | Budget can only be a number |  |  |  |  |
|  |  | Budget has an upper limit |  |  |  |  |
|  |  | Remaining budget is displayed |  |  |  |  |
|  |  | Remaining budget is calculated correctly after disposable spending is added |  |  |  |  |
|  |  | Budget and remaining update dynamically when budget is edited |  |  |  |  |
|  |  | Remaining updates dynamically when a disposable spending entry is changed/added/deleted |  |  |  |  |
|  |  | When users currency is changed, this is reflected in the budget and remaining |  |  |  |  |
|  |  | When the edit button is pressed, a modal is displayed |  |  |  |  |
| **Disposable Income Spending Section** |  |  |  |  |  |  |
|  |  | An entry can be added to the list and is displayed |  |  |  |  |
|  |  | The recently added entry is on the list after page refresh |  |  |  |  |
|  |  | All detail added about the entry are displayed on the list |  |  |  |  |
|  |  | Entrys are organised in date order |  |  |  |  |
|  |  | The list is updated dynamically when an entry is added |  |  |  |  |
|  |  | The entry's date is displayed correctly formatted |  |  |  |  |
|  |  | An entry can be deleted |  |  |  |  |
|  |  | The list updates dynamically after any changes to an entry |  |  |  |  |
|  |  | Entry's are dynamically removed from the list upon deletion |  |  |  |  |
|  |  | Entrys can be edited |  |  |  |  |
|  |  | When an entry is added it is dynamically appended to the list in the correct position |  |  |  |  |
|  |  | When the users global current is updated, all entrys are updated to show this |  |  |  |  |
|  |  | An entry must have a title |  |  |  |  |
|  |  | An entry must have an amount |  |  |  |  |
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
|  |  | When the edit button is pressed, a modal is displayed |  |  |  |  |
|  |  | After an entry is added, the remaining amount is correctly updated |  |  |  |  |
| **Month Selector** |  |  |  |  |  |  |
|  |  | The currently selected month is displayed in the centre |  |  |  |  |
|  |  | The month move forward or backwards when the user presses the arrows |  |  |  |  |
|  |  | All lists and views change to the selected month when the month is changed |  |  |  |  |
|  |  | When at the end of the visible month window (-5 or +5 months from the current), the arrow disappears |  |  |  |  |
|  |  | When the month is changed, the data for the selected month is correctly shown |  |  |  |  |
| **Settings Dropdown** |  |  |  |  |  |  |
|  |  | When the settings button is pressed, a drop down is shown |  |  |  |  |
|  |  | All menu opens open their relevant modal |  |  |  |  |
|  |  | When pressing dark mode/light mode, the app changes its display mode and colors |  |  |  |  |
|  |  | The users selected mode is present after log out or page refresh |  |  |  |  |
|  |  | A users username is displayed in the change username modal |  |  |  |  |
|  |  | A user can successfully change their username |  |  |  |  |
|  |  | The new username must be unique |  |  |  |  |
|  |  | The new username can not have forbidden characters |  |  |  |  |
|  |  | The new username has a length limit |  |  |  |  |
|  |  | The new username cannot be blank |  |  |  |  |
|  |  | A user can log in with their new username after changing |  |  |  |  |
|  |  | A user can change their email address |  |  |  |  |
|  |  | The new email address cannot be one that another user is using |  |  |  |  |
|  |  | The new email address must be in the correct format |  |  |  |  |
|  |  | The users current email address is displayed in the modal |  |  |  |  |
|  |  | The user receives a success message after successfully changing their username |  |  |  |  |
|  |  | The user receives a success message after successfully changing their email address |  |  |  |  |
|  |  | A user can close any modal by pressing the x |  |  |  |  |
|  |  | A user can close any modal by pressing esc |  |  |  |  |
|  |  | A user can successfully change their password |  |  |  |  |
|  |  | An error is thrown if the new password fails validation |  |  |  |  |
|  |  | A user can log in with their new password after a successful change |  |  |  |  |
|  |  | The new password must match to be changed |  |  |  |  |
|  |  | A user can change their currency |  |  |  |  |
|  |  | The users chosen currency is displayed in the selector |  |  |  |  |
|  |  | Currency changes propagate across the entire app |  |  |  |  |
|  |  | A user can log out by pressing the log out button |  |  |  |  |
| **Sign In Modal** |  |  |  |  |  |  |
|  |  | A user can successfully sign in with their username and password |  |  |  |  |
|  |  | After signing in a user is automatically redirected to the home page |  |  |  |  |
|  |  | Errors are displayed if a users sign in fails validation |  |  |  |  |
|  |  | After the access token expires, a new token is automatically refreshed using the refresh token |  |  |  |  |
|  |  | A user is automatically redirected to the log in modal(if not logged in)/homepage(if logged in) if they try to access a non existent  |  |  |  |  |
|  |  | The Sign-up link takes the user to the sign up modal |  |  |  |  |
|  |  | The Forgot Password button takes the user to the pass reset modal |  |  |  |  |
| **Sign Up Modal** |  |  |  |  |  |  |
|  |  | A user can create an account |  |  |  |  |
|  |  | A user can log in with their new credentials after account creation |  |  |  |  |
|  |  | Usernames must be unique |  |  |  |  |
|  |  | Usernames cannot be blank |  |  |  |  |
|  |  | Usernames cannot have forbidden characters |  |  |  |  |
|  |  | A user does not need to add an email address to sign up |  |  |  |  |
|  |  | A users password must pass the validation rules to be used |  |  |  |  |
|  |  | The passwords must match for the account to be created |  |  |  |  |
|  |  | After signing up the user is automatically signed in and redirected to the homepage |  |  |  |  |
|  |  | The sign in link redirects the user to the sign in modal |  |  |  |  |


## Unit Tests
Extensive unit tests were created for all serializers, views and util file in the backend. 