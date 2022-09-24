import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  totalPage,
}) => {
  return (
    <div className="mt-6 flex justify-end btn-group ">
      {page === 1 ? (
        <button className="btn w-16" disabled>
          «
        </button>
      ) : (
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="btn w-16"
        >
          «
        </button>
      )}
      <button className="btn w-40">
        Page {page} / {totalPage}
      </button>
      {page === totalPage ? (
        <button className="btn w-16" disabled>
          »
        </button>
      ) : (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="btn w-16"
        >
          »
        </button>
      )}
    </div>
  );
};
