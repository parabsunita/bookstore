import Image from "next/image";
export default function Order({ order }) {
  const [orderQty, setOrderQty] = useState(0);

  function DecreseQty() {
    if (orderQty != 0) setOrderQty(orderQty - 1);
  }
  function IncreaseQty() {
    setOrderQty(orderQty + 1);
  }
  return <div>fhkdh</div>;
}
