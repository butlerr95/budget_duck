# Todo

## Navbar [ ]
The Navbar is used for navigating the application. It has a simple design with only 3 buttons (back, home and settings). The back button will take the user back one page, this should be disabled when no forward steps have been taken. The home button takes the user to the home page/dashboard. The settings button takes the user to a limited settings page (this will contain a theme slider to change between light and dark themes, a currency selector and allow the user to manage categories).

## WeeklyCard Component [ ]

Container to hold all weekly spending information. It will allow the user to choose the week using a date picker input or cycle through weeks use the back and forward arrows. The forward arrow should be disabled when the current week is selected. The current week is selected by default. This should also contain an add button to take the user to the 'Add expense form'.

Contains the following elements:

    <Card title="Weekly Spending">
        <WeekSelector date={weekCommencementDate} />
        <WeekSummary spent={x} remaining={y} />
        <LineGraph data={weekData}/>
        <ExpenseList expenses={weekExpenses} />
    </Card>

### Card [x]

The card is a container to hold the other elements.

### WeekSelector [ ]
The week selector allows selection of the week. This can be done by cycling through the weeks using the arrows or by clicking on the date in the middle and choosing the week from a date picker input. In it's basic form it looks as below:

    <-  29-06-2020  ->

### WeekSummary [ ]
The week summary displays spending information corresponding to the chosen week. On the left the amount spent is displayed and on the right the remaining amount is displayed if the current week is selected. If a previous week is selected the right hand side displays the amount saved. *SHOULD ALSO CONTAIN A BUTTON TO ADD EXPENSE?* See below:

    Spent: £X   Remaining: £Y       ||      Spent: £X   Saved: £Y

### LineGraph [ ]
The line graph element displays a line graph showing the cumulative expenditure throughout the selected week. The area under the curve is shaded. 

### ExpenseList [ ]
The expense list component displays the list of expenses for that week (with a scrollbar on the RHS to scroll through). Each row item should display an icon to edit/delete (pencil/bin icons) when the user hovers over the row. The expenses are displayed in rows in the following format:

    Date    Category    Description    Amount

## Annual Spending Component [ ]
This component consists of a selector element (similar to the weeklySelector?) to allow the user to cycle through years (for which they have data). The choice of year will update the data displayed on the bar chart below, which will show the monthly spending for the specified year. This component will be composed of the following elements:

    <Card title="Annual Spending">
        <YearSelector year={year} />
        <BarChart data={yearData} />
    </Card>

## Monthly Spending Component [ ]
This component consists of a selector element (similar to the weeklySelector?) to allow the user to cycle through month-year combinations (for which they have data) - i.e. Jan-20, Feb-20, Mar-20, etc. The choice of month/year will update the data displayed on the line graph below, which will show the spending for the specified month. This component will be composed of the following elements:

    <Card title="Monthly Spending">
        <MonthSelector month={month} year={year} />
        <LineGraph data={monthData} />
    </Card>

## Add Expense Form
Seperate page/window that displays a form to allow the user to add an expense.

## Additional Items
- Specify the port in the config so that electron and react are always on the same port - 8090.
- Replace electron window frame with custom one - including minimise, maximise and close buttons.
-  Components should be refactored to take colour/font style as props in order to allow for the theme change slider.
- *USER SHOULD BE ABLE TO ADD AND UPDATE THEIR BUDGET (MONTHLY OR ANNUAL)*. Can be done from the add button in weekly spending (drop down to allow the user to an an expense, fixed expense or a new budget, which overrides the previous one).
- Allow a user to add fixed expenses - that is, expenses which remain the same each month (i.e. direct debits). These expenses should be omitted from the weekly expenses list and can be viewed in a separate section/page. Each fixed expense will have a tracked history so when it is 'deleted' it will be made inactive by assigning an end date.
- Ability to view full list/table of expenses in seperate page by clicking 'View all expenses' or similar.
- Loading screen when opening electron app?
- Extension to the Navbar element whereby the leftmost element becomes a user element and a login screen is added to allow a user to login.
- Allow user to assign a colour to each category, use that colour as the background when referencing that category