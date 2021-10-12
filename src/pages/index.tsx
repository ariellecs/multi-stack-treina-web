import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha o endereço e veja todos os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Arielle"}
        picture={"https://github.com/arielyth.png"}
        rating={3}
        description={"RJ"}
      />
    </div>
  );
};

export default Home;

//todo componente começa com letra maiúscula
