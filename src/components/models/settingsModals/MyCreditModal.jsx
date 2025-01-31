import { IoMdClose } from "react-icons/io";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";
import StandardModal from "../StandardModal";

const MyCreditModal = ({ isOpen, onClose }) => {
  const subscriptionData = [
    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 100,
      color: "#13C634",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 100,
      color: "#13C634",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 100,
      color: "#13C634",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 50,
      color: "#13C634",
    },

    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 20,
      color: "#C61323",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Boost",
      Amount: 1,
      color: "#C61323",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 100,
      color: "#C61323",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Boost",
      Amount: 1,
      color: "#C61323",
    },

    {
      Date: "12-12-2024, 12:10",
      Activity: "Ghost Mode",
      Amount: 1,
      color: "#13C634",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Ghost Mode",
      Amount: 1,
      color: "#13C634",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 100,
      color: "#13C634",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Invitation",
      Amount: 30,
      color: "#13C634",
    },

    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 20,
      color: "#C61323",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 60,
      color: "#C61323",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Boost",
      Amount: 10,
      color: "#C61323",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Ghost Mode",
      Amount: 1,
      color: "#C61323",
    },

    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 100,
      color: "#13C634",
    },
    {
      Date: "12-12-2024, 12:10",
      Activity: "Subscription",
      Amount: 100,
      color: "#13C634",
    },
  ];

  console.log(subscriptionData);

  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between mb-4 lg:mb-6">
        <p className="text-xl font-bold">My Credit</p>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      <div>
        <div>
          <table
            className="min-w-full table-auto"
            aria-label="Borderless table"
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-900 tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-semibold text-gray-900 tracking-wider"
                >
                  Position
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-right text-sm font-semibold text-gray-900 tracking-wider"
                >
                  Salary
                </th>
              </tr>
            </thead>
            <tbody>
              {subscriptionData.map((item, index) => (
                <tr key={item.id} className={`text-[${item?.color}]`}>
                  <td className="px-6 py-2 whitespace-nowrap text-sm ">
                    {item.Date}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm  text-center">
                    {item.Activity}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm  text-right">
                    {item.Amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StandardModal>
  );
};

export default MyCreditModal;
