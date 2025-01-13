import { useOutletContext } from 'react-router';

export default function Photos() {
  const currentVan = useOutletContext();
  return (
    <img src={currentVan.imageUrl} alt="" className="host-van-detail-image" />
  );
}
