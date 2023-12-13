# hbl-calendar

## Install
  ```bash
    npm install hbl-calendar --save
  ```

### Usage
  import calendar from "hbl-calendar";

  1. 根据公历年月日获取日期信息 calendar.getDateBySolar(y, m, d)
    ```js
      calendar.getDateBySolar(2023, 12, 1)
    ```

  2. 根据农历年月日获取日期信息 calendar.getDateBySolar(y, m, d, isLeapMonth)
    ```js 
      calendar.getDateBySolar(2023, 10, 20, false)
    ```

  3. 获取今天的日期信息 calendar.getToday()
    ```js 
      eg: calendar.getToday()
    ```

