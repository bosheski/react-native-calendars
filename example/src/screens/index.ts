import {Navigation} from 'react-native-navigation';

import MenuScreen from './menuScreen';
import CalendarsScreen from './calendarScreen';
import AgendaScreen from './agendaScreen';
import CalendarsList from './calendarsList';
import HorizontalCalendarList from './horizontalCalendarList';
import ExpandableCalendarScreen from './expandableCalendarScreen';
import TimelineCalendarScreen from './timelineCalendarScreen';
import TimelineWeekViewCalendarScreen from './timelineWeekViewCalendarScreen';

export function registerScreens() {
  Navigation.registerComponent('Menu', () => MenuScreen);
  Navigation.registerComponent('Calendars', () => CalendarsScreen);
  Navigation.registerComponent('Agenda', () => AgendaScreen);
  Navigation.registerComponent('CalendarsList', () => CalendarsList);
  Navigation.registerComponent('HorizontalCalendarList', () => HorizontalCalendarList);
  Navigation.registerComponent('ExpandableCalendar', () => ExpandableCalendarScreen);
  Navigation.registerComponent('TimelineCalendar', () => TimelineCalendarScreen);
  Navigation.registerComponent('TimelineWeekViewCalendar', () => TimelineWeekViewCalendarScreen);
}
