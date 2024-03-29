import React from "react";

export const Table = () => {
    useEffect(() => {
        Sanityclient.fetch(
          `*[_type == "product"]{}`
        )
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching content:", error);
          });
      }, []);
  return (
    <div>
      <table
        className="border border-black xl:w-full w-[1400px]"
        style={{ tableLayout: "fixed" }}
      >
        <thead className="border-b border-gray-400">
          <tr>
            <th className="border-r border-black text-xs px-3 py-2 text-start">
              Model
            </th>
            <th className="border-r border-gray-400 text-xs px-3 py-2">
              PD228-10W
            </th>
            <th className="border-r border-gray-400 text-xs px-3 py-2">
              PD228-15W
            </th>
            <th className="border-r border-gray-400 text-xs px-3 py-2">
              PD228-20W
            </th>
            <th className="border-r border-gray-400 text-xs px-3 py-2">
              PD228-25W
            </th>
            <th className="border-r border-gray-400 text-xs px-3 py-2">
              PD228-30W
            </th>
            <th className="border-r border-gray-400 text-xs px-3 py-2">
              PD228-40W
            </th>
          </tr>
        </thead>
        <tbody>
          {Specification1.map((item, index) => (
            <tr key={index}>
              <td className="border-r border-b border-black text-xs px-3 py-2 font-semibold">
                {item.name}
              </td>
              <td className="border-b border-gray-400 text-xs px-3 py-2">
                {item.spec1}
              </td>
              <td className="border-b border-gray-400 text-xs px-3 py-2">
                {item.spec2}
              </td>
              <td className="border-b border-gray-400 text-xs px-3 py-2">
                {item.spec3}
              </td>
              <td className="border-b border-gray-400 text-xs px-3 py-2">
                {item.spec4}
              </td>
              <td className="border-b border-gray-400 text-xs px-3 py-2">
                {item.spec5}
              </td>
              <td className="border-b border-gray-400 text-xs px-3 py-2">
                {item.spec6}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
