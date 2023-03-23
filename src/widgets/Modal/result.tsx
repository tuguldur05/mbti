import { Modal } from "antd";
import { Dispatch } from "react";
import { personalities } from "../../utils/personalities";
import { useNavigate } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";
export const ResultModel = ({
  isOpen,
  setIsOpen,
  testType,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  testType?: string;
}) => {
  const navigate = useNavigate();
  const mbtiType = personalities
    .find((type) => {
      return type.items.find((e) => e.type === testType);
    })
    ?.items.find((e) => e.type === testType);

  return (
    <Modal
      title="Таны тестийн хариу"
      centered
      open={isOpen}
      onOk={() => {
        navigate(`/mbti/${mbtiType?.id}`);
      }}
      cancelText="Гарах"
      okText={"Дэлгэрэнгүй үзэх"}
      onCancel={() => {
        setIsOpen(false);
      }}
    >
      <ConfettiExplosion
        force={0.8}
        duration={4000}
        particleCount={300}
        width={1600}
      />
      <img src={mbtiType?.image} alt="img" width={150} />
      <p>Таны MBTI төрөл нь {mbtiType?.type}</p>
    </Modal>
  );
};
