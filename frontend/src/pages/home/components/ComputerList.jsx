import { useEffect, useState } from "react";
import ReservableList from "./ReservableList";
import computerImage from "../../../assets/computer.png";
import ComputerService from "../../../services/computers";
import { useNotifications } from "../../../contexts/NotificationContext";

const ComputerList = () => {
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useNotifications();

  const listItems = computers.map((computer) => {
    return { ...computer, id: computer._id, image: computerImage };
  });

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const { data } = await ComputerService.getAll();
        if (data) {
          setComputers(data);
        }
      } catch (err) {
        showToast({
          description: "Tietokoneiden lataus epäonnistui",
          status: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchComputers();
  }, [showToast]);

  return (
    <ReservableList
      items={listItems}
      loading={loading}
      reservableType="computer"
    />
  );
};
export default ComputerList;
