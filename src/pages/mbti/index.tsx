import { useParams } from "react-router-dom";
import { personalities } from "../../utils/personalities";
import { DetailComponent } from "../../components/details/detail";

export const MBTIPage = () => {
  const { id } = useParams();
  const mbtiType = personalities
    .find((type) => {
      return type.items.find((e) => e.id === Number(id));
    })
    ?.items.find((e) => e.id === Number(id));
  return <DetailComponent detail={mbtiType!} />;
};
