import { IBookRender } from "../../interfaces/IBookResponse";
import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ id, title, image, author }: IBookRender) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    console.log("Navigate to", id);
    navigate(`/view/${id}`);
  };

  const cardStyle: CSSProperties = {
    cursor: "pointer",
    margin: "20px",
    height: "400px",
    minWidth: "300px",
    maxWidth: "300px",
    borderRadius: "10px",
    boxShadow: "1px 1px 30px #00212d",
    filter: "brightness(0.9) saturate(80%)",
    transition: "transform 0.6s, box-shadow 0.6s, filter 0.4s",
    position: "relative", // Added position relative for overlay
    overflow: "hidden" // Added to contain the overlay
  };

  const overlayStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box"
  };

  const cardBackground: CSSProperties = {
    backgroundImage: `url(${image})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative" 
  };

  return (
    <div style={cardStyle} onClick={onClickHandler}>
      <div style={cardBackground}>
        <div style={overlayStyle}>
          <p className="text-tiny uppercase font-bold">{title}</p>
          <small className="text-default-500">{author}</small>
        </div>
      </div>
    </div>
  );
};

export default Book;
