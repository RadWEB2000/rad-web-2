import { Card } from "../../../components/Page/Services/Card/Card";
import { Cards } from "../../../components/Page/Services/Cards/Cards";
import { Hero } from "../../../components/Utilities/Fragments/Hero/Hero";

const Page = () => {
  return (
    <>
      <Hero
        content="Beatae qui minima labore vitae quibusdam sed vel illo est. Consequatur est ratione eaque ut. Praesentium laboriosam ad ut et excepturi dolorem officia rerum ut. Quasi repellat quia reprehenderit dolorem neque ex ullam sed minima. Beatae qui minima labore vitae quibusdam sed vel illo est. Consequatur est ratione eaque ut. Praesentium laboriosam ad ut et excepturi dolorem officia rerum ut. Quasi repellat quia reprehenderit dolorem neque ex ullam sed minima. "
        title="Usługi"
        type="page"
      />
      <main className="page">
        <Cards>
          <Card
            button="więcej"
            content="Quia itaque non dolorem sit. Nesciunt ut voluptatem mollitia debitis fuga qui beatae voluptas distinctio. Eum aliquam dolor est numquam laudantium qui dignissimos."
            image="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            path="/uslugi/strony-internetowe/strony-internetowe-dla-parafii"
            title="Strony dla parafii"
          />
          <Card
            button="więcej"
            content="Quia itaque non dolorem sit. Nesciunt ut voluptatem mollitia debitis fuga qui beatae voluptas distinctio. Eum aliquam dolor est numquam laudantium qui dignissimos."
            image="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            path="/uslugi/strony-internetowe/strony-internetowe-dla-parafii"
            title="Strony dla parafii"
          />
          <Card
            button="więcej"
            content="Quia itaque non dolorem sit. Nesciunt ut voluptatem mollitia debitis fuga qui beatae voluptas distinctio. Eum aliquam dolor est numquam laudantium qui dignissimos."
            image="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            path="/uslugi/strony-internetowe/strony-internetowe-dla-parafii"
            title="Strony dla parafii"
          />
          <Card
            button="więcej"
            content="Quia itaque non dolorem sit. Nesciunt ut voluptatem mollitia debitis fuga qui beatae voluptas distinctio. Eum aliquam dolor est numquam laudantium qui dignissimos."
            image="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            path="/uslugi/strony-internetowe/strony-internetowe-dla-parafii"
            title="Strony dla parafii"
          />
        </Cards>
      </main>
    </>
  );
};
export default Page;