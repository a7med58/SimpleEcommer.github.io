const Cur_Format = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
const FormatCurr = (number) => {
  return Cur_Format.format(number);
};
export default FormatCurr;
