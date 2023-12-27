import Card from "./card";

function createCardItem(cardList, onClick) {
  return cardList.map((card, index) => (
    <Card data={card} onClick={onClick} key={index} />
  ));
}

function CardContainer({ cardList, onClick }) {
  return (
    <div className="card-container">{createCardItem(cardList, onClick)};</div>
  );
}

export default CardContainer;
