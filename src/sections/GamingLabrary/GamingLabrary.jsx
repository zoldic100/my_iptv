import {GamingLabraryCard,  SectionHeader, SectionDiv } from "../../components/index";
import GamingLabraryData   from "../../data/GamingLabraryData";
const GamingLabrary = () => {
  return (
    <>
    <SectionDiv>
      <SectionHeader title="Gaming" pink="Labrary" />
      <div className="most-popular-items grid  gap-2 justify-around  
      lg:grid-cols-4 grid-cols-3 sm:grid-cols-2 p-4">

        <GamingLabraryCard />
      </div>
    </SectionDiv>
  </>
  )
}

export default GamingLabrary