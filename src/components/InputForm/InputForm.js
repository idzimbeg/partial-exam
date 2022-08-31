//Create input form that will be used to fetch data from Github API depending on the user input event value
import PropTypes from "prop-types";

import { ProgressSpinner } from "../ProgressSpinner";

export function InputForm({ handleSubmit, handleChange, data }) {
  if (!data) {
    return <ProgressSpinner />;
  }
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <p className="normal-case text-xl">GitHub Search</p>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Github username"
                required
                className="input input-bordered"
                onChange={handleChange}
              />
            </form>
          </div>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleSubmit}
          >
            Find user
          </button>
        </div>
      </div>
    </>
  );
}

InputForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  data: PropTypes.array,
};
