//Create UserList component that will render a list of users depending on the data fetched from user input from InputForm component
//Map trough the data array and render each user in a UserCard component
import PropTypes from "prop-types";

import { UserCard } from "../UserCard";

export function UserList({ data }) {
  return (
    <>
      {data.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Repository</th>
                <th></th>
              </tr>
            </thead>
            {data.map((user) => (
              <tbody key={user.id}>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.avatar_url} alt={user.login} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.login}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <a
                        href={`${user.html_url}`}
                      >{`${user.login} Repository`}</a>
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Repository</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <UserCard data={data} />
      )}
    </>
  );
}

UserList.propTypes = {
  data: PropTypes.array,
};
