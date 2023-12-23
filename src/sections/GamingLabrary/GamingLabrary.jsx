import {GamingLabraryCard,  SectionHeader, SectionDiv } from "../../components/index";
import GamingLabraryData   from "../../data/GamingLabraryData";

const GamingLabrary = () => {
  const GamingLabraryCards = GamingLabraryData.map(card => {
    return  <GamingLabraryCard 
    key={card.id} 
    src={card.src} 
    title={card.title} 
    company={card.company}
    currently={card.currently}  
    date_added={card.date_added}      
    hours_played={card.hours_played}  
    />
 
   })
  return (
    <>
    <SectionDiv>
      <SectionHeader title="Gaming" pink="Labrary" />
      <div className="gaming-labrary-cards flex  flex-wrap   
       p-4">

        {GamingLabraryCards}
      </div>
    </SectionDiv>
  </>
  )
}

export default GamingLabrary