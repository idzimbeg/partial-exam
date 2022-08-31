//Using lodash package check if data is returning undefined and populate DaisyUI Card component with fetched data, otherwise show 'No results found'
import _ from "lodash";
import PropTypes from "prop-types";

export function UserCard({ data }) {
  return (
    <div className="flex justify-center items-center p-6">
      {_.includes([data.avatar_url], undefined) ? (
        <div className="flex justify-center items-center p-6">
          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body items-center">
              <h2 className="card-title">No results found</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="card w-96 bg-base-300 shadow-xl">
          <figure>
            <img src={data.avatar_url} alt={data.login} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>{data.site_admin}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href={`${data.html_url}`}>{`${data.login} Repository`}</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

UserCard.propTypes = {
  data: PropTypes.object,
};
