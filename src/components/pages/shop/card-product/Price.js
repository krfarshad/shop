function Price({ cost }) {
    // TODO:
    // Please use Intl for formatting currencies
    // you can create formatting function and move it to a utils folder
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
    return <span className="cost px-4 text-green-600 text-lg font-bold">$ {cost}</span>;
  }
  export default  Price;