import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import 'react-day-picker/lib/style.css';
import styles from '../../styles/DatePicker.css';

class DatePicker extends React.Component {

    parseDate = (str, format, locale) => {
        const parsed = dateFnsParse(str, format, new Date(), { locale });
        if (DateUtils.isDate(parsed)) {
          return parsed;
        }
        return undefined;
    }

    formatDate = (date, format, locale) => {
        return dateFnsFormat(date, format, { locale });
    }

    render() {
        const FORMAT = "dd/MM/yyyy";
        return (
            <DayPickerInput
                keepFocus={false}
                value={this.props.date}
                formatDate={this.formatDate}
                format={FORMAT}
                parseDate={this.parseDate}
                inputProps={{
                    readonly: 'readonly'
                }}
                dayPickerProps={{
                    firstDayOfWeek: 1,
                    disabledDays: [date => date.getDay() != 1, date => date > new Date()],
                    toMonth: new Date(),
                    showOutsideDays: true,
                    modifiers: {
                        disabled: { daysOfWeek: [0, 2, 3, 4, 5, 6] }
                    },
                }}
            />
        );
    }
}

export default DatePicker;