# Testing
## Integration Testing

| **Test** | **User Story** | **Description** | **How we test it** | **Expected Outcome** | **Result** | **Pass/Fail**
|--|--|--|--|--|--|--|
| **Calendar View** |  |  |  |  |  |  |
| TC001 |  | Calendar grid aligns the month correctly with the days of the week |  |  |  |  |
| TC002 |  | Unused grid spaces are lined and greyed out |  |  |  |  |
| TC003 |  | Days on the month that have passed are greyed out |  |  |  |  |
| TC004 |  | The current day is highlighted |  |  |  |  |
| TC005 |  | Each day has the correct month number at the top |  |  |  |  |
| TC006 |  | Each month has the correct number of days |  |  |  |  |
| TC007 |  | Each day has the correct expenditure total shown |  |  |  |  |
| TC008 |  | Each day has the correct income total shown |  |  |  |  |
| TC009 |  | Incomes are displayed on the correct day |  |  |  |  |
| TC010 |  | Expenditures are displayed on the correct day |  |  |  |  |
| TC011 |  | No number is shown on days with no values |  |  |  |  |
| TC012 |  | Calendar view updates dynamically when an income entry is add/removed/edited |  |  |  |  |
| TC013 |  | Calendar view updates dynamically when an expenditure entry is add/removed/edited |  |  |  |  |
| TC014 |  | Calendar view updates dynamically when a disposable spending entry is add/removed/edited |  |  |  |  |
| TC015 |  | Calendar view updates dynamically when currency is changed |  |  |  |  |
| TC016 |  | When month is changed, the correct months data is shown |  |  |  |  |
| TC017 |  | When month is changed, the grid regenerates with days of the month aligned correctly |  |  |  |  |
| TC018 |  | When month is changed, the loading overlay is displayed until new data is shown |  |  |  |  |
| TC019 |  | On days with just one entry, only that entry is shown on the day |  |  |  |  |
| TC020 |  | The user can see 5 months in front or behind the current month |  |  |  |  |
| TC021 |  | When the current month changes the calendar grid automatically updates to display the new month |  |  |  |  |
| TC022 |  | When a new month starts, all repeated entries are automatically duplicated in the correct positions into the new 6th month |  |  |  |  |
| TC023 |  | The current month is always automatically displayed to the user on load |  |  |  |  |
| **Monthly Summary View** |  |  |  |  |  |  |
| TC024 |  | Monthly summary is displayed when "change to summary view" button is pressed |  |  |  |  |
| TC025 |  | Monthly summary shows the correct categories |  |  |  |  |
| TC026 |  | Monthly summary updates dynamically when an income is added |  |  |  |  |
| TC027 |  | Monthly summary updates dynamically when an expenditure (type bill) is added/removed/updated |  |  |  |  |
| TC028 |  | Monthly summary updates dynamically when an expenditure (type Saving) is added/removed/updated |  |  |  |  |
| TC029 |  | Monthly summary updates dynamically when an expenditure (type investment) is added/removed/updated |  |  |  |  |
| TC030 |  | Monthly summary updates dynamically when disposable income spending is added/removed/updated |  |  |  |  |
| TC031 |  | Monthly summary updates dynamically when disposable budget is changed |  |  |  |  |
| TC032 |  | Summary updates dynamically when an entry is added/removed/updated |  |  |  |  |
| TC033 |  | Monthly income is calculated correctly |  |  |  |  |
| TC034 |  | Bills summary is calculated correctly |  |  |  |  |
| TC035 |  | Savings summary is calculated correctly |  |  |  |  |
| TC036 |  | Investment summary is calculated correctly |  |  |  |  |
| TC037 |  | Disposable income spending summary is calculated correctly |  |  |  |  |
| TC038 |  | Total summary is calculated correctly |  |  |  |  |
| TC039 |  | Total summary changed colour if positive or negative |  |  |  |  |
| TC040 |  | Disposable income budget is the selected months budget |  |  |  |  |
| TC041 |  | Remaining disposable income is the selected months remaining  |  |  |  |  |
| TC042 |  | Monthly summary changes to reflect the selected month when month is changed |  |  |  |  |
| TC043 |  | Monthly summary updates when currency is changed |  |  |  |  |
| **Weekly Summary View** |  |  |  |  |  |  |
| TC044 |  | Weekly summary view is displayed when user presses "Change to weekly button" |  |  |  |  |
| TC045 |  | Week ranges (Mon-Sun) are displayed with the correct dates for the specific months |  |  |  |  |
| TC046 |  | Partial weeks are calculated and displayed correctly |  |  |  |  |
| TC047 |  | Income calculations for each week are correct |  |  |  |  |
| TC048 |  | Expenditure calculations for each week are correct |  |  |  |  |
| TC049 |  | Summary calculations for each week are correct |  |  |  |  |
| TC050 |  | Income calculation updates dynamically if a new income is added/removed/updated |  |  |  |  |
| TC051 |  | Expenditure calculation updates dynamically if a new expenditure is added/removed/updated |  |  |  |  |
| TC052 |  | Summary calculation updates dynamically if an income or expenditure calculation changes |  |  |  |  |
| TC053 |  | When selected month is changed, Weekly summary view updates to show the correct months summaries |  |  |  |  |
| **Expenditure/Income List** |  |  |  |  |  |  |
| TC054 |  | An entry can be added to the list and is displayed |  |  |  |  |
| TC055 |  | The recently added entry is on the list after page refresh |  |  |  |  |
| TC056 |  | All detail added about the entry are displayed on the list |  |  |  |  |
| TC057 |  | Entrys are organised in date order |  |  |  |  |
| TC058 |  | The list is updated dynamically when an entry is added |  |  |  |  |
| TC059 |  | Entry's older than todays date are greyed out |  |  |  |  |
| TC060 |  | The entry's date is displayed correctly formatted |  |  |  |  |
| TC061 |  | An entry can be deleted |  |  |  |  |
| TC062 |  | The list updates dynamically after any changes to an entry |  |  |  |  |
| TC063 |  | Entry's are dynamically removed from the list upon deletion |  |  |  |  |
| TC064 |  | Entrys can be repeated weekly |  |  |  |  |
| TC065 |  | Entrys can be repeated monthly |  |  |  |  |
| TC066 |  | Repeated entrys that are deleted also delete all future versions of that entry |  |  |  |  |
| TC067 |  | Repeated entrys that are edited propagate changes to all future versions of that entry |  |  |  |  |
| TC068 |  | Entrys can be edited |  |  |  |  |
| TC069 |  | When an entry is added it is dynamically appended to the list in the correct position |  |  |  |  |
| TC070 |  | When the users global current is updated, all entrys are updated to show this |  |  |  |  |
| TC071 |  | An entry must have a title |  |  |  |  |
| TC072 |  | An entry must have an amount |  |  |  |  |
| TC073 |  | An entry must have a type |  |  |  |  |
| TC074 |  | An entry must have a date |  |  |  |  |
| TC075 |  | The date is auto selected to today |  |  |  |  |
| TC076 |  | An entrys title has a character limit |  |  |  |  |
| TC077 |  | An entrys amount must be greater than 0 |  |  |  |  |
| TC078 |  | An entry amount can only be a number |  |  |  |  |
| TC079 |  | An entrys titles must only be letters |  |  |  |  |
| TC080 |  | Entrys older than 6 months are deleted |  |  |  |  |
| TC081 |  | The submit button is disabled until the form has finished its post request |  |  |  |  |
| TC082 |  | When deleting an entry, a confirmation is first shown |  |  |  |  |
| TC083 |  | An entrys amount has an upper limit |  |  |  |  |
| TC084 |  | When the edit button is pressed, a modal is displayed |  |  |  |  |
| **Disposable Income Budget Section** |  |  |  |  |  |  |
| TC085 |  | Budget is automatically created at 0 for each month |  |  |  |  |
| TC086 |  | Budget can not be a negative value |  |  |  |  |
| TC087 |  | Budget can only be a number |  |  |  |  |
| TC088 |  | Budget has an upper limit |  |  |  |  |
| TC089 |  | Remaining budget is displayed |  |  |  |  |
| TC090 |  | Remaining budget is calculated correctly after disposable spending is added |  |  |  |  |
| TC091 |  | Budget and remaining update dynamically when budget is edited |  |  |  |  |
| TC092 |  | Remaining updates dynamically when a disposable spending entry is changed/added/deleted |  |  |  |  |
| TC093 |  | When users currency is changed, this is reflected in the budget and remaining |  |  |  |  |
| TC094 |  | When the edit button is pressed, a modal is displayed |  |  |  |  |
| **Disposable Income Spending Section** |  |  |  |  |  |  |
| TC095 |  | An entry can be added to the list and is displayed |  |  |  |  |
| TC096 |  | The recently added entry is on the list after page refresh |  |  |  |  |
| TC097 |  | All detail added about the entry are displayed on the list |  |  |  |  |
| TC098 |  | Entrys are organised in date order |  |  |  |  |
| TC099 |  | The list is updated dynamically when an entry is added |  |  |  |  |
| TC100 |  | The entry's date is displayed correctly formatted |  |  |  |  |
| TC101 |  | An entry can be deleted |  |  |  |  |
| TC102 |  | The list updates dynamically after any changes to an entry |  |  |  |  |
| TC103 |  | Entry's are dynamically removed from the list upon deletion |  |  |  |  |
| TC104 |  | Entrys can be edited |  |  |  |  |
| TC105 |  | When an entry is added it is dynamically appended to the list in the correct position |  |  |  |  |
| TC106 |  | When the users global current is updated, all entrys are updated to show this |  |  |  |  |
| TC107 |  | An entry must have a title |  |  |  |  |
| TC108 |  | An entry must have an amount |  |  |  |  |
| TC109 |  | An entry must have a date |  |  |  |  |
| TC110 |  | The date is auto selected to today |  |  |  |  |
| TC111 |  | An entrys title has a character limit |  |  |  |  |
| TC112 |  | An entrys amount must be greater than 0 |  |  |  |  |
| TC113 |  | An entry amount can only be a number |  |  |  |  |
| TC114 |  | An entrys titles must only be letters |  |  |  |  |
| TC115 |  | Entrys older than 6 months are deleted |  |  |  |  |
| TC116 |  | The submit button is disabled until the form has finished its post request |  |  |  |  |
| TC117 |  | When deleting an entry, a confirmation is first shown |  |  |  |  |
| TC118 |  | An entrys amount has an upper limit |  |  |  |  |
| TC119 |  | When the edit button is pressed, a modal is displayed |  |  |  |  |
| TC120 |  | After an entry is added, the remaining amount is correctly updated |  |  |  |  |
| **Month Selector** |  |  |  |  |  |  |
| TC121 |  | The currently selected month is displayed in the centre |  |  |  |  |
| TC122 |  | The month move forward or backwards when the user presses the arrows |  |  |  |  |
| TC123 |  | All lists and views change to the selected month when the month is changed |  |  |  |  |
| TC124 |  | When at the end of the visible month window (-5 or +5 months from the current), the arrow disappears |  |  |  |  |
| TC125 |  | When the month is changed, the data for the selected month is correctly shown |  |  |  |  |
| **Settings Dropdown** |  |  |  |  |  |  |
| TC126 |  | When the settings button is pressed, a drop down is shown |  |  |  |  |
| TC127 |  | All menu opens open their relevant modal |  |  |  |  |
| TC128 |  | When pressing dark mode/light mode, the app changes its display mode and colors |  |  |  |  |
| TC129 |  | The users selected mode is present after log out or page refresh |  |  |  |  |
| TC130 |  | A users username is displayed in the change username modal |  |  |  |  |
| TC131 |  | A user can successfully change their username |  |  |  |  |
| TC132 |  | The new username must be unique |  |  |  |  |
| TC133 |  | The new username can not have forbidden characters |  |  |  |  |
| TC134 |  | The new username has a length limit |  |  |  |  |
| TC135 |  | The new username cannot be blank |  |  |  |  |
| TC136 |  | A user can log in with their new username after changing |  |  |  |  |
| TC137 |  | A user can change their email address |  |  |  |  |
| TC138 |  | The new email address cannot be one that another user is using |  |  |  |  |
| TC139 |  | The new email address must be in the correct format |  |  |  |  |
| TC140 |  | The users current email address is displayed in the modal |  |  |  |  |
| TC141 |  | The user receives a success message after successfully changing their username |  |  |  |  |
| TC142 |  | The user receives a success message after successfully changing their email address |  |  |  |  |
| TC143 |  | A user can close any modal by pressing the x |  |  |  |  |
| TC144 |  | A user can close any modal by pressing esc |  |  |  |  |
| TC145 |  | A user can successfully change their password |  |  |  |  |
| TC145 |  | An error is thrown if the new password fails validation |  |  |  |  |
| TC146 |  | A user can log in with their new password after a successful change |  |  |  |  |
| TC147 |  | The new password must match to be changed |  |  |  |  |
| TC148 |  | A user can change their currency |  |  |  |  |
| TC149 |  | The users chosen currency is displayed in the selector |  |  |  |  |
| TC150 |  | Currency changes propagate across the entire app |  |  |  |  |
| TC151 |  | A user can log out by pressing the log out button |  |  |  |  |
| **Sign In Modal** |  |  |  |  |  |  |
| TC152 |  | A user can successfully sign in with their username and password |  |  |  |  |
| TC153 |  | After signing in a user is automatically redirected to the home page |  |  |  |  |
| TC154 |  | Errors are displayed if a users sign in fails validation |  |  |  |  |
| TC155 |  | After the access token expires, a new token is automatically refreshed using the refresh token |  |  |  |  |
| TC156 |  | A user is automatically redirected to the log in modal(if not logged in)/homepage(if logged in) if they try to access a non existent  |  |  |  |  |
| TC157 |  | The Sign-up link takes the user to the sign up modal |  |  |  |  |
| TC158 |  | The Forgot Password button takes the user to the pass reset modal |  |  |  |  |
| **Sign Up Modal** |  |  |  |  |  |  |
| TC159 |  | A user can create an account |  |  |  |  |
| TC160 |  | A user can log in with their new credentials after account creation |  |  |  |  |
| TC161 |  | Usernames must be unique |  |  |  |  |
| TC162 |  | Usernames cannot be blank |  |  |  |  |
| TC163 |  | Usernames cannot have forbidden characters |  |  |  |  |
| TC164 |  | A user does not need to add an email address to sign up |  |  |  |  |
| TC165 |  | A users password must pass the validation rules to be used |  |  |  |  |
| TC166 |  | The passwords must match for the account to be created |  |  |  |  |
| TC167 |  | After signing up the user is automatically signed in and redirected to the homepage |  |  |  |  |
| TC168 |  | The sign in link redirects the user to the sign in modal |  |  |  |  |


## Unit Tests
Extensive unit tests were created for all serializers, views and util file in the backend. 