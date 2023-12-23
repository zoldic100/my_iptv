import "./MostPoupular.css";
import anxiety from "../../assets/images/anxiety.png";
import Big_gym from "../../assets/images/Big_gym_.png";
import people from "../../assets/images/Europe_where_people_sit_together.png";
import death_scenes from "../../assets/images/death_scenes_of_villager.png";
import brutally from "../../assets/images/being_brutally_punished.png";
import jackie_chan from "../../assets/images/jackie_chan.png";
import African from "../../assets/images/pAfrican_child_with_dark_skin.png";

import { Card, SectionHeader, SectionDiv } from "../../components/index";
const MostPoupular = () => {
  return (
    <>
      <SectionDiv>
        <SectionHeader title="Most Poupular" pink="Games" />
        <div className="most-popular-items grid  gap-2 justify-around  lg:grid-cols-4 grid-cols-3 sm:grid-cols-2 p-4">
          <Card src={anxiety} />
          <Card src={Big_gym} />
          <Card src={people} />
          <Card src={death_scenes} />
          <Card src={brutally} />
          <Card src={jackie_chan} />
          <Card src={African} />
          <Card src={people} />
        </div>
      </SectionDiv>
    </>
  );
};

export default MostPoupular;
