import { useSelector } from "react-redux";
import { createSelector } from "reselect"; // Import createSelector
import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

// Memoize selectors using createSelector
const selectItems = createSelector(
  selectFeaturedCampsite,
  selectFeaturedPromotion,
  selectFeaturedPartner,
  (campsite, promotion, partner) => [campsite, promotion, partner]
);

const DisplayList = () => {
  const items = useSelector((state) => selectItems(state)); // Use memoized selector
  
  console.log('display items:', items);

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
