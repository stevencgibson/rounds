'use strict';

import moment from 'moment';

export default function formatOrderDateTime(orderDateTime) {
  const today = new Date();
  const startOfToday = moment({...today}).startOf('day');
  const orderDate = moment(orderDateTime);
  const startOfOrderDate = moment(orderDateTime).startOf('day');
  const isAtLeastAWeekAgo = moment(startOfToday).diff(startOfOrderDate, 'days') >= 7;
  const orderDateFormatted = isAtLeastAWeekAgo ? `${orderDate.format('Do MMMM')} at ${orderDate.format('h:mm A')}` : orderDate.calendar();

  return orderDateFormatted;
}