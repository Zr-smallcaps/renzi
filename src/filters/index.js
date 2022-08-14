import dayjs from 'dayjs'
 export const fromatTime = (value)=>{
  return dayjs(value).format('YYYY-MM-DD')
}