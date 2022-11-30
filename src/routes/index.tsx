import { Route, Routes as RoutesRTDOM } from "react-router-dom";
import Characteres from "../pages/Characteres";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <RoutesRTDOM>
      <Route path="/" element={<Home />} />
      <Route path="/characteres" element={<Characteres />} />
    </RoutesRTDOM>
  );
}
