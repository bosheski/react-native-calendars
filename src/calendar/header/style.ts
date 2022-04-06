import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';
import {Theme} from '../../types';
import constants from '../../commons/constants';

export default function (theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  const flipStyle = constants.isRTL ? {transform: [{scaleX: -1}]} : undefined;
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 6,
      alignItems: 'center'
    },
    headerContainer: {
      flexDirection: 'row'
    },
    monthText: {
      fontSize: 16,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: '400',
      color: '#152F4E',
      margin: 10
    },
    arrow: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#EAECEF',
      borderRadius: 100,
      width: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10
    },
    toggleButton: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#EAECEF',
      borderRadius: 100,
      width: 80,
      height: 38,
      maxHeight: 38,
      marginLeft: 15
    },
    toggleButtonPicker: {
      height: '100%',
      width: '100%'
    },
    arrowImage: {
      ...flipStyle,
      tintColor: appStyle.arrowColor,
      ...Platform.select({
        web: {
          width: appStyle.arrowWidth,
          height: appStyle.arrowHeight
        }
      })
    },
    disabledArrowImage: {
      ...flipStyle,
      tintColor: appStyle.disabledArrowColor
    },
    // @ts-expect-error
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,

      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor
    },
    disabledDayHeader: {
      color: appStyle.textSectionTitleDisabledColor
    },
    ...(theme['stylesheet.calendar.header'] || {})
  });
}
