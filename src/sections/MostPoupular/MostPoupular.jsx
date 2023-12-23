import "./MostPoupular.css";


import { Card, SectionHeader, SectionDiv } from "../../components/index";
import CardData   from "../../data/CardData";
const MostPoupular = () => {

  const cards = CardData.map(card => {
   return  <Card key={card.id} src={card.src} title={card.title} company={card.company} rate={card.rate} download={card.download}  />

  })
  return (
    <>
      <SectionDiv>
        <SectionHeader title="Most Poupular" pink="Games" />
        <div className="most-popular-items grid  gap-2 justify-around  lg:grid-cols-4 grid-cols-3 sm:grid-cols-2 p-4">
          {/*   call an value inside array       
          {MostPoupularItems[0].title} */}
          {cards}
        </div>
      </SectionDiv>
    </>
  );
};

export default MostPoupular;
