import React, { Component } from "react"; 
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from 'react-day-picker';
import "react-day-picker/lib/style.css";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

class DatePicker extends Component {
  handleDayChange = (date) => {
    const { name, onChange } = this.props;
    var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    onChange(name, d);
  };

  parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  }
  
  formatDate = (date, format, locale) => {
    if (!date) {
      return undefined;
    }
    return dateFnsFormat(date, format, { locale });
  }

  render() {
    const DATE_FORMAT = "dd.MM.yyyy";
    return( 
      <DayPickerInput 
        {...this.props}
        utc={true} 
        inputProps={{className: 'form-control'}}
        onDayChange={this.handleDayChange}
        format={DATE_FORMAT}
        placeholder="dd.MM.yyyy"
        formatDate={this.formatDate}
        parseDate={this.parseDate}
        value={this.props.value 
          ? dateFnsFormat(new Date(this.props.value), DATE_FORMAT) 
          : ""
        }
      />
    )
  }
}

export default DatePicker;