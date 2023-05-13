import './Pagination.scss'
const Pagination = (props) => {
  const { data, Previos, Next, currentPage } = props
  const pageCount = Math.ceil(props.tabledata.length / props.rowsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);
  
  return (
    <div className="pagination">

      <button onClick={() => Previos()} className="pagination__prevBtn">Prev</button>
      <div className="pagination__numberData">
      {pageNumbers.map(number => (
        <div className ={currentPage===number?"pagination__numberData__item active":"pagination__numberData__item"}>
        <button key={number}  onClick={() => data(number)} >
           {number}
        </button>
          
       </div>
      ))}
      </div>
      <button onClick={() => Next(pageNumbers)} className="pagination__nextBtn">Next </button>
    </div>
  );
};


export default Pagination;