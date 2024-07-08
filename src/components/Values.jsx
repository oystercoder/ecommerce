import Card from "./Card";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { LiaMoneyBillSolid } from "react-icons/lia";

const Values = () => {
  return (
    <section className="self-stretch bg-white flex flex-row flex-wrap items-start justify-center py-12 px-40 gap-[24px] text-left text-xl text-neutral-07-100 font-caption-2-bold mq750:pl-20 mq750:pr-20 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <Card
        shippingAndDeliveryoutlin={<CiDeliveryTruck className="text-15xl" />}
        freeShipping="Free Shipping"
        orderAbove200="Order above $200"
      />
      <Card
      
        shippingAndDeliveryoutlin={<LiaMoneyBillSolid className="text-15xl" />}
        freeShipping="Money-back"
        orderAbove200="30 days guarantee"
      />
      <Card
        shippingAndDeliveryoutlin={<CiLock className="text-15xl" />}
        freeShipping="Secure Payments"
        orderAbove200="Secured by Stripe"
      />
      <Card
        shippingAndDeliveryoutlin={<IoCallOutline className="text-15xl" />}
        freeShipping="24/7 Support"
        orderAbove200="Phone and Email support"
      />
    </section>
  );
};

export default Values;