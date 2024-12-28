export const LoadMoreBtn = ({ onHandleChangePage }) => {
  return (
    <div>
      <button
        onClick={onHandleChangePage}
        type="submit"
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
