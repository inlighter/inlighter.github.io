"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = {
      date: _this.props.today.clone(),
      get month() {
        return this.date.month();
      },
      get year() {
        return this.date.year();
      },
      dayOfWeek: 1
    };
    _this.handleMonthChange = _this.handleMonthChange.bind(_this);
    _this.handleYearChange = _this.handleYearChange.bind(_this);
    _this.handleWeekDayChange = function (value) {
      _this.setState({ dayOfWeek: parseInt(value, 10) });
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "handleMonthChange",
    value: function handleMonthChange(value) {
      var currentMonth = this.state.month;
      var selectedMonth = value;
      var diff = currentMonth - selectedMonth;

      var date = this.state.date;
      date.add(-diff, "M");
      this.setState({
        date: date,
        month: value
      });
    }
  }, {
    key: "handleYearChange",
    value: function handleYearChange(value) {
      var currentYear = this.state.year;
      var selectedYear = value;
      var diff = currentYear - selectedYear;
      var date = this.state.date;
      date.add(-diff, "Y");
      this.setState({
        date: date,
        year: value
      });
    }
  }, {
    key: "getIndexOfLastDay",
    value: function getIndexOfLastDay(day) {
      return day === 0 ? 6 : day - 1;
    }
  }, {
    key: "renderWeeks",
    value: function renderWeeks() {
      var weeks = [];
      var selectedDayIndex = this.state.dayOfWeek;
      var date = this.state.date.clone().startOf("month");
      var startOfMonth = date.day();
      var endOfMonth = date.clone().endOf('month').day();
      var isDone = false;
      var monthIndex = date.month();
      var count = 0;

      if (date.day() === selectedDayIndex) {
        date.subtract(1, 'w');
      } else {
        date.add(-selectedDayIndex, 'd').day(selectedDayIndex);
      }

      while (!isDone) {
        weeks.push(React.createElement(Week, { key: date.toString(), date: date.clone(), month: this.state.date }));
        date.add(1, "w");
        isDone = Boolean(monthIndex !== date.month());
        monthIndex = date.month();
      }

      if (endOfMonth === this.getIndexOfLastDay(selectedDayIndex)) {
        weeks.push(React.createElement(Week, { key: date.toString(), date: date.clone(), month: this.state.date }));
      }

      return weeks;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(MonthsList, { onChange: this.handleMonthChange, monthIndex: this.state.month }),
        React.createElement(YearsList, { onChange: this.handleYearChange, year: this.state.year }),
        React.createElement(WeekDaysList, { onChange: this.handleWeekDayChange, dayIndex: this.state.dayOfWeek }),
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(DayNames, { dayIndex: this.state.dayOfWeek }),
          this.renderWeeks()
        )
      );
    }
  }]);

  return Calendar;
}(React.Component);

var MonthsList = function (_React$Component2) {
  _inherits(MonthsList, _React$Component2);

  function MonthsList(props) {
    _classCallCheck(this, MonthsList);

    var _this2 = _possibleConstructorReturn(this, (MonthsList.__proto__ || Object.getPrototypeOf(MonthsList)).call(this, props));

    _this2.handleChange = function (event) {
      _this2.props.onChange(event.target.value);
    };
    return _this2;
  }

  _createClass(MonthsList, [{
    key: "render",
    value: function render() {
      moment.locale('ru');
      var monthsArr = moment.months();
      var monthElements = monthsArr.map(function (month, i) {
        return React.createElement(
          "option",
          { value: i, key: 'month_' + i },
          month
        );
      });
      return React.createElement(
        "select",
        { value: this.props.monthIndex, onChange: this.handleChange },
        monthElements
      );
    }
  }]);

  return MonthsList;
}(React.Component);

var YearsList = function (_React$Component3) {
  _inherits(YearsList, _React$Component3);

  function YearsList(props) {
    _classCallCheck(this, YearsList);

    var _this3 = _possibleConstructorReturn(this, (YearsList.__proto__ || Object.getPrototypeOf(YearsList)).call(this, props));

    _this3.handleChange = function (event) {
      _this3.props.onChange(event.target.value);
    };
    return _this3;
  }

  _createClass(YearsList, [{
    key: "render",
    value: function render() {
      var yearsElements = [];
      for (var i = 2000; i <= 2020; i++) {
        yearsElements.push(React.createElement(
          "option",
          { value: i, key: 'year_' + i },
          i
        ));
      }
      return React.createElement(
        "select",
        { value: this.props.year, onChange: this.handleChange },
        yearsElements
      );
    }
  }]);

  return YearsList;
}(React.Component);

var WeekDaysList = function (_React$Component4) {
  _inherits(WeekDaysList, _React$Component4);

  function WeekDaysList(props) {
    _classCallCheck(this, WeekDaysList);

    var _this4 = _possibleConstructorReturn(this, (WeekDaysList.__proto__ || Object.getPrototypeOf(WeekDaysList)).call(this, props));

    _this4.handleChange = function (event) {
      _this4.props.onChange(event.target.value);
    };
    return _this4;
  }

  _createClass(WeekDaysList, [{
    key: "render",
    value: function render() {
      var weekDaysArr = moment.weekdaysShort();
      var weekDaysElements = weekDaysArr.map(function (weekDay, i) {
        return React.createElement(
          "option",
          { value: i, key: 'weekDay_' + i },
          weekDay
        );
      });
      return React.createElement(
        "select",
        { value: this.props.dayIndex, onChange: this.handleChange },
        weekDaysElements
      );
    }
  }]);

  return WeekDaysList;
}(React.Component);

var DayNames = function DayNames(props) {
  var daysArr = moment.weekdaysShort();
  var dayIndex = props.dayIndex;
  var temp = [].concat(_toConsumableArray(daysArr.slice(dayIndex)), _toConsumableArray(daysArr.slice(0, dayIndex)));
  var dayNamesElements = temp.map(function (day, i) {
    return React.createElement(
      "span",
      { className: "day", key: 'day_' + i },
      day
    );
  });
  return React.createElement(
    "div",
    { className: "week names" },
    dayNamesElements
  );
};

var Week = function Week(props) {
  var dayElements = [];
  var month = props.month;
  var date = props.date;
  var day;

  for (var i = 0; i < 7; i++) {
    day = {
      number: date.date(),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), "day"),
      date: date
    };
    dayElements.push(React.createElement(
      "span",
      { key: date.toString(), className: "day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") },
      day.number
    ));
    date = date.clone();
    date.add(1, "d");
  }

  return React.createElement(
    "div",
    { className: "week", key: dayElements[0].toString() },
    dayElements
  );
};

ReactDOM.render(React.createElement(Calendar, { today: moment().startOf("day") }), document.getElementById("calendar"));