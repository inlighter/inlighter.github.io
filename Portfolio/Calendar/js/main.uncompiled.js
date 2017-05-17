	class Calendar extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      date: this.props.today.clone(),
	      get month() {
          return this.date.month();
        },
	      get year() {
          return this.date.year();
        },
	      dayOfWeek: 1
	    };
	    this.handleMonthChange = this.handleMonthChange.bind(this);
	    this.handleYearChange = this.handleYearChange.bind(this);
      this.handleWeekDayChange = (value) => {
        this.setState({ dayOfWeek: parseInt(value, 10) });
      };
	  }

	  handleMonthChange(value) {
	    const currentMonth = this.state.month;
	    const selectedMonth = value;
	    const diff = currentMonth - selectedMonth;

	    const date = this.state.date;
	    date.add(-diff, "M");
	    this.setState({
	      date: date,
	      month: value
	    });      

	  }

	  handleYearChange(value) {
	    const currentYear = this.state.year;
	    const selectedYear = value;
	    const diff = currentYear - selectedYear;
	    const date = this.state.date;
	    date.add(-diff, "Y");
	    this.setState({
	      date: date,
	      year: value
	    });

	  }
    
    getIndexOfLastDay(day) {
      return day === 0 ? 6 : day - 1;
    }

	  renderWeeks() {
	    const weeks = [];
      const selectedDayIndex = this.state.dayOfWeek;
      const date = this.state.date.clone().startOf("month");
      const startOfMonth = date.day();
      const endOfMonth = date.clone().endOf('month').day();      
	    var isDone = false;
      var monthIndex = date.month();      
      var count = 0;
      
      if (date.day() === selectedDayIndex) {
        date.subtract(1, 'w');
      } else {
        date.add(-selectedDayIndex, 'd').day(selectedDayIndex);
      }	    

	    while (!isDone) {        
	      weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.date} />);
	      date.add(1, "w");	
        isDone = Boolean(monthIndex !== date.month()); 
	      monthIndex = date.month();        
	    }
      
      if (endOfMonth ===  this.getIndexOfLastDay(selectedDayIndex)){
        weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.date} />);   
      }
      
	    return weeks;
	  }
    
    render() {	    
	    return (
	      <div>        
						<MonthsList onChange={this.handleMonthChange} monthIndex={this.state.month} />
            <YearsList onChange={this.handleYearChange} year={this.state.year}/>
            <WeekDaysList onChange={this.handleWeekDayChange} dayIndex={this.state.dayOfWeek}/>
            <div className="container">        
						<DayNames dayIndex={this.state.dayOfWeek} />
						{this.renderWeeks()}          
					  </div>
        </div>
	    );
	  }
	}

  class MonthsList extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = (event) => {
        this.props.onChange(event.target.value);
      };
    }
    render() {
      moment.locale('ru');
	    const monthsArr = moment.months();
	    const monthElements = monthsArr.map((month, i) => <option value={i} key={'month_' + i}>{month}</option>);
      return (
        <select value={this.props.monthIndex} onChange={this.handleChange}>
          {monthElements}
        </select>
      );
    }
  }

  class YearsList extends React.Component {
    constructor(props) {
      super(props);
      
      this.handleChange = (event) => {
        this.props.onChange(event.target.value); 
      };
    }
    render() {
      const yearsElements = [];
	    for (let i = 2000; i <= 2020; i++) {
	      yearsElements.push(<option value={i} key={'year_' + i}>{i}</option>);
	    }
      return (
        <select value={this.props.year} onChange={this.handleChange}>
          {yearsElements}
        </select>
      );
    }
  }


  class WeekDaysList extends React.Component {
    constructor(props) {
    super(props);
    
      this.handleChange = (event) => {
        this.props.onChange(event.target.value);        
      };
    }    
    
    render() {
      const weekDaysArr = moment.weekdaysShort();
	    const weekDaysElements = weekDaysArr.map((weekDay, i) => <option value={i} key={'weekDay_' + i}>{weekDay}</option>);
      return (
        <select value={this.props.dayIndex}  onChange={ this.handleChange }>
          {weekDaysElements}
        </select>
      );
    }
  }

	const DayNames = (props) => {	  
    const daysArr = moment.weekdaysShort();
    const dayIndex = props.dayIndex;
    const temp = [...daysArr.slice(dayIndex), ...daysArr.slice(0, dayIndex)];
    const dayNamesElements = temp.map((day, i) => <span className="day" key={'day_' + i}>{day}</span>);
    return (
      <div className="week names">
        {dayNamesElements}
      </div>
    );
  }
	

	const Week = (props) => {	  
    const dayElements = [];
    const month = props.month;
    var date = props.date;	    
    var day;
    
    for (let i = 0; i < 7; i++) {
      day = {	        
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };
      dayElements.push(<span key={date.toString()} className={"day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month")}>{day.number}</span>);
      date = date.clone();
      date.add(1, "d");

    }

    return (
      <div className="week" key={dayElements[0].toString()}>
        {dayElements}
      </div>
    );

  }

	ReactDOM.render(<Calendar today={moment().startOf("day")} />, document.getElementById("calendar"));
